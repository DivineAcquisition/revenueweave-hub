import { useEffect } from "react";
import { Star } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const HeroSection = () => {
  useEffect(() => {
    const iClosedScript = document.createElement("script");
    iClosedScript.src = "https://app.iclosed.io/assets/widget.js";
    iClosedScript.async = true;
    document.body.appendChild(iClosedScript);

    return () => {
      if (document.body.contains(iClosedScript)) document.body.removeChild(iClosedScript);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col bg-background">
      {/* Top Banner */}
      <div className="w-full bg-primary py-3 px-4 text-center">
        <p className="text-primary-foreground text-sm md:text-base font-semibold tracking-wide uppercase">
          For Home Service Companies Doing $15K+/Month Ready To Unlock Hidden Revenue
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center pt-12 pb-16 px-4">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <img src={logoFull} alt="DivineAcquisition" className="h-20 md:h-24 w-auto" />
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-up animate-fade-up-delay-1">
            <span className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold">
              <Star className="w-4 h-4 fill-accent text-accent" />
              FREE GROWTH BLUEPRINT
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up animate-fade-up-delay-2 text-balance text-foreground">
            Your Past Customers Are Worth Thousands.{" "}
            <span className="text-accent">We'll Prove It In 21 Days.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-medium mb-6 animate-fade-up animate-fade-up-delay-2 text-balance max-w-3xl mx-auto">
            For home service companies doing $15K+/month — we turn your forgotten customers into booked jobs without spending another dollar on ads.
          </p>

          {/* Proof line */}
          <p className="text-accent/90 text-sm md:text-base font-semibold mb-12 animate-fade-up animate-fade-up-delay-2 max-w-2xl mx-auto">
            Our system identified $667 in average customer lifetime value and recovered 32% of lapsed customers for a recent client.
          </p>

          {/* Calendar Section */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-3">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
              Book Your <span className="text-accent">Growth Audit</span> Here
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-2xl mx-auto">
              WE DON'T DO SPAM HERE. But Be Prepared — I Will Be Calling You To Learn More About Your Business. Don't Book A Call If You Aren't Serious About Your Business Growth.
            </p>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://link.msgsndr.divineacquisition.io/widget/booking/8HRU6QplAvtDfVINjDbk"
                style={{ width: "100%", minHeight: "700px", height: "100%", border: "none", overflow: "hidden" }}
                scrolling="no"
                id="sJewwAfFLhmwqP9psUxK_1771554236845"
                title="Growth Audit Booking"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
