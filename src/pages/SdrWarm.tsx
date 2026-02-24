import { useEffect } from "react";
import { useParams } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";
import Footer from "@/components/Footer";

const SdrWarm = () => {
  const { sdrName } = useParams<{ sdrName: string }>();
  const displayName = sdrName ? sdrName.charAt(0).toUpperCase() + sdrName.slice(1) : "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.divineacquisition.io/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      const existing = document.querySelector('script[src="https://link.msgsndr.divineacquisition.io/js/form_embed.js"]');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex flex-col items-center pt-12 pb-16 px-4">
        <div className="max-w-3xl mx-auto w-full text-center">
          <img src={logoFull} alt="DivineAcquisition" className="h-16 md:h-20 mx-auto mb-8" />

          <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            You're One Call Away From <span className="text-accent">Scaling Your Business</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Book your growth audit below — we'll map out exactly how to get you more jobs, referrals, and recurring revenue.
          </p>

          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg mb-6">
            <iframe
              src="https://link.msgsndr.divineacquisition.io/widget/booking/8HRU6QplAvtDfVINjDbk"
              style={{ width: "100%", minHeight: "700px", height: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="sdr_warm_booking_iframe"
              title="Growth Audit Booking"
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

export default SdrWarm;
