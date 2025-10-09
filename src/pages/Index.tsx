import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientsCarousel from "@/components/ClientsCarousel";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <ClientsCarousel />
        <Services />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
