import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using MEC HYDRO Hydraulics' services, you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p className="text-muted-foreground">
                MEC HYDRO provides hydraulic equipment manufacturing, renovation, quality testing, 
                and traceability system services. We reserve the right to modify, suspend, or discontinue 
                any service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
              <p className="text-muted-foreground">
                You agree to use our services only for lawful purposes and in accordance with these Terms. 
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use our services in any way that violates any applicable law or regulation</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
                <li>Transmit any malicious code or engage in any activity that interferes with our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, trademarks, and data on this website, including but not limited to text, 
                graphics, logos, and images, are the property of MEC HYDRO or its licensors and are 
                protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Warranties and Disclaimers</h2>
              <p className="text-muted-foreground">
                We provide our services on an "as is" and "as available" basis. We make no warranties, 
                expressed or implied, regarding the reliability, accuracy, or availability of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, MEC HYDRO shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of any 
                material changes by posting the new Terms on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions regarding these Terms of Service, please contact us through our contact form.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
