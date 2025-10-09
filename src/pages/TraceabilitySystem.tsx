import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import serviceTraceability from "@/assets/service-traceability.png";

const TraceabilitySystem = () => {
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
                src={serviceTraceability}
                alt="Traceability System"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-6">Traceability System</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive traceability system ensures complete transparency and accountability 
                throughout the entire lifecycle of your hydraulic equipment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Digital Documentation</h3>
                    <p className="text-muted-foreground">Complete digital records of all work performed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Component Tracking</h3>
                    <p className="text-muted-foreground">Full traceability of all parts and materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Service History</h3>
                    <p className="text-muted-foreground">Detailed maintenance and repair records</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Quality Assurance</h3>
                    <p className="text-muted-foreground">Complete quality control documentation</p>
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

export default TraceabilitySystem;
