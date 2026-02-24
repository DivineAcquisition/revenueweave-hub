import { useEffect } from "react";
import { useParams } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";
import Footer from "@/components/Footer";

const SdrCold = () => {
  const { sdrName } = useParams<{ sdrName: string }>();
  const displayName = sdrName ? sdrName.charAt(0).toUpperCase() + sdrName.slice(1) : "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.querySelector('script[src="https://app.iclosed.io/assets/widget.js"]');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex flex-col items-center pt-12 pb-16 px-4">
        <div className="max-w-3xl mx-auto w-full text-center">
          <img src={logoFull} alt="DivineAcquisition" className="h-16 md:h-20 mx-auto mb-8" />

          <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Let's See How We Can Help You <span className="text-accent">Grow</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Pick a time below and let's talk about scaling your business with systems that actually work.
          </p>

          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg mb-6">
            <div
              className="iclosed-widget"
              data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice"
              title="Book a Strategy Call"
              style={{ width: "100%", height: "550px" }}
            />
          </div>

          {displayName && (
            <p className="text-sm text-muted-foreground/60">Scheduled by {displayName}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SdrCold;
