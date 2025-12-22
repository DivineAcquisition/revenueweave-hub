const Footer = () => {
  return (
    <footer className="bg-primary py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">D</span>
            </div>
            <span className="text-foreground font-display font-bold text-lg">
              DivineAcquisition
            </span>
          </div>
          
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
