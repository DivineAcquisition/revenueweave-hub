import logoFull from "@/assets/logo-full.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <img src={logoFull} alt="DivineAcquisition" className="h-8" />
          
          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} DivineAcquisition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
