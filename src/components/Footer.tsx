import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <img src={logoIcon} alt="DivineAcquisition" className="h-10 mx-auto mb-4" />
        <p className="text-sm text-muted-foreground mb-4">
          © {new Date().getFullYear()} DivineAcquisition. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70 leading-relaxed">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. We use cookies, including third-party cookies, on this website to help operate our site and for analytics and advertising purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
