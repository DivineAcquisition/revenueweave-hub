import logoFull from "@/assets/logo-full.png";
const Footer = () => {
  return <footer className="py-8 px-4 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <img alt="DivineAcquisition" className="h-8" src="/lovable-uploads/c5eac3d6-c202-4742-aef9-585f5407badd.png" />
          
          {/* Copyright */}
          <p className="text-sm text-white">
            © {new Date().getFullYear()} DivineAcquisition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;