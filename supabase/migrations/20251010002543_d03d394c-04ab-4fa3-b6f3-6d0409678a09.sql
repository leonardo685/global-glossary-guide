-- Create contacts table to store form submissions
CREATE TABLE public.contacts (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  surname text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contacts (public form)
CREATE POLICY "Anyone can submit contact form"
ON public.contacts
FOR INSERT
WITH CHECK (true);

-- Only allow reading for authenticated users (if you add admin panel later)
CREATE POLICY "Only authenticated users can view contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (true);