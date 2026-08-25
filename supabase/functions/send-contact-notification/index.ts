import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_mail/gmail/v1'
const NOTIFY_TO = 'support@mechydro.com'

function encodeRaw(message: string): string {
  const bytes = new TextEncoder().encode(message)
  let binary = ''
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function clean(value: unknown, max = 5000): string {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').slice(0, max).trim()
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    const GOOGLE_MAIL_API_KEY = Deno.env.get('GOOGLE_MAIL_API_KEY')
    if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
      throw new Error('Gmail connection is not configured')
    }

    const body = await req.json()
    const name = clean(body.name, 200)
    const surname = clean(body.surname, 200)
    const email = clean(body.email, 320)
    const phone = clean(body.phone, 60)
    const subject = clean(body.subject, 200)
    const message = String(body.message ?? '').slice(0, 10000).trim()

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const text = [
      'New contact form submission',
      '',
      `Name: ${name} ${surname}`.trim(),
      `Email: ${email}`,
      `Phone: ${phone || '-'}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message,
      '',
      `Received at: ${new Date().toISOString()}`,
    ].join('\n')

    const raw = encodeRaw(
      [
        `To: ${NOTIFY_TO}`,
        `Reply-To: ${email}`,
        `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(`New contact: ${subject}`)))}?=`,
        'Content-Type: text/plain; charset="UTF-8"',
        'MIME-Version: 1.0',
        '',
        text,
      ].join('\r\n'),
    )

    const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': GOOGLE_MAIL_API_KEY,
      },
      body: JSON.stringify({ raw }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error(`Gmail send failed [${response.status}]: ${errorBody}`)
      return new Response(
        JSON.stringify({ error: 'Gmail request failed', status: response.status, details: errorBody }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const data = await response.json()
    return new Response(JSON.stringify({ ok: true, id: data.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('send-contact-notification error:', error)
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
