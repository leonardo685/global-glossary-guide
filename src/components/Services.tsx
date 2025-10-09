import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import serviceRenovation from "@/assets/service-renovation.png";
import serviceManufacturing from "@/assets/service-manufacturing.png";
import serviceTesting from "@/assets/service-testing.png";
import serviceTraceability from "@/assets/service-traceability.png";

const Services = () => {
  const services = [
    {
      title: "Equipment Renovation",
      image: serviceRenovation,
      link: "/equipment-renovation",
    },
    {
      title: "Custom Manufacturing",
      image: serviceManufacturing,
      link: "/custom-manufacturing",
    },
    {
      title: "Quality Testing",
      image: serviceTesting,
      link: "/quality-testing",
    },
    {
      title: "Traceability System",
      image: serviceTraceability,
      link: "/traceability-system",
    },
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We possess the necessary know-how, testing equipment and technology to guarantee 
            the quality and transparency of all our maintenance and manufacturing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <Link to={service.link}>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Request Your Quote Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
