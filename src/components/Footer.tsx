import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MEC HYDRO Hydraulics. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
