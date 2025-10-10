import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name.trim(),
            surname: formData.surname.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim() || null,
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }
        ]);

      if (error) throw error;

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Experts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your hydraulic equipment needs? Our experienced team is here to 
            help you find the perfect solution for your business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="text-sm font-medium mb-2 block">Surname</label>
                    <Input
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">Phone (optional)</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Quick Response</h3>
                <p className="text-sm mb-4 opacity-90">Get instant quotes via WhatsApp</p>
                <a 
                  href="https://wa.me/5519996449359" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+5519996449359" className="text-sm text-muted-foreground hover:text-primary">
                      (19) 99644-9359
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:contact@mechydro.com" className="text-sm text-muted-foreground hover:text-primary">
                      contact@mechydro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <a 
                      href="https://goo.gl/maps/bMrLh1wRaiTeZkjS8" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Waco, TX, United States
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t">
                  <Award className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2">Quality Certifications</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>ISO 9001:2015 Quality Management</li>
                      <li>ISO 10100 Hydraulic Testing Standard</li>
                      <li>25+ Years Industry Experience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
