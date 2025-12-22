import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoIcon} alt="DivineAcquisition" className="h-10 w-auto" />
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="tel:+1234567890" 
            className="hidden md:flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">(123) 456-7890</span>
          </a>
          <Button variant="cta" size="sm" asChild>
            <a href="#apply">Get Started</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
