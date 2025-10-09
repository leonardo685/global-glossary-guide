import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import serviceRenovation from "@/assets/service-renovation.png";

const EquipmentRenovation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={serviceRenovation}
                alt="Equipment Renovation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-6">Equipment Renovation</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive renovation services restore your hydraulic equipment to optimal 
                performance, extending its lifespan and ensuring reliable operation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Complete Disassembly & Inspection</h3>
                    <p className="text-muted-foreground">Thorough examination of all components</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Parts Replacement & Repair</h3>
                    <p className="text-muted-foreground">High-quality replacement parts and expert repairs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Performance Testing</h3>
                    <p className="text-muted-foreground">ISO 10100 compliant testing protocols</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Warranty Coverage</h3>
                    <p className="text-muted-foreground">Extended warranty on all renovation work</p>
                  </div>
                </div>
              </div>

              <Link to="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EquipmentRenovation;
