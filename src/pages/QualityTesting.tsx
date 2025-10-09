import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import serviceTesting from "@/assets/service-testing.png";

const QualityTesting = () => {
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
                src={serviceTesting}
                alt="Quality Testing"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-6">Quality Testing</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our advanced testing facilities ensure that every piece of equipment meets the 
                highest industry standards, providing you with reliable and certified results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">ISO 10100 Compliance</h3>
                    <p className="text-muted-foreground">Industry-standard testing protocols</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Performance Analysis</h3>
                    <p className="text-muted-foreground">Comprehensive testing and reporting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Leak Detection</h3>
                    <p className="text-muted-foreground">Advanced leak testing procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Certification</h3>
                    <p className="text-muted-foreground">Official test certificates and documentation</p>
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

export default QualityTesting;
