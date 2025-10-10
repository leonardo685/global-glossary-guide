import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-header.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded">
              <img src={logoIcon} alt="MEC HYDRO" className="h-5 w-5 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">MEC HYDRO</span>
              <span className="text-xs text-muted-foreground">Hydraulics</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/equipment-renovation" className="text-sm font-medium hover:text-primary transition-colors">
              Equipment Renovation
            </Link>
            <Link to="/custom-manufacturing" className="text-sm font-medium hover:text-primary transition-colors">
              Custom Manufacturing
            </Link>
            <Link to="/quality-testing" className="text-sm font-medium hover:text-primary transition-colors">
              Quality Testing
            </Link>
            <Link to="/traceability-system" className="text-sm font-medium hover:text-primary transition-colors">
              Traceability System
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <Link to="/#contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
