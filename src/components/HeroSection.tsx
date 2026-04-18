import { useEffect } from "react";
import { Star } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const HeroSection = () => {
  useEffect(() => {
    const src = "https://link.msgsndr.divineacquisition.io/js/form_embed.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className="min-h-screen flex flex-col bg-background">
      {/* Top Banner */}
      <div className="w-full bg-primary py-3 px-4 text-center">
        <p className="text-primary-foreground text-sm md:text-base font-semibold tracking-wide uppercase">
          For Home Service Companies Tired Of Losing Leads They Already Paid For
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
              FREE LEAD CONVERSION AUDIT
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up animate-fade-up-delay-2 text-balance text-foreground">
            You're Paying for 80 Leads a Month. Your Guys Are Booking 30.{" "}
            <span className="text-accent">We Build the System That Books 60 — In 14 Days, Done For You.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-medium mb-6 animate-fade-up animate-fade-up-delay-2 text-balance max-w-3xl mx-auto">
            Custom sales and follow-up systems for cleaning, HVAC, landscaping, plumbing, and pest control companies. Every lead gets a callback in under 2 minutes. Every past customer gets a rebooking offer at the right time. Every job tracked on one screen.
          </p>

          {/* Proof line */}
          <p className="text-accent/90 text-sm md:text-base font-semibold mb-12 animate-fade-up animate-fade-up-delay-2 max-w-2xl mx-auto">
            Our clients see 2-3x more leads convert to booked appointments within the first 30 days without spending more on ads.
          </p>

          {/* Calendar Section */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-3">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
              Book Your Free <span className="text-accent">Lead Conversion Audit</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-2xl mx-auto">
              WE DON'T DO SPAM HERE. But Be Prepared, I Will Be Calling You To Learn More About Your Business. Don't Book A Call If You Aren't Serious About Your Business Growth.
            </p>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://link.msgsndr.divineacquisition.io/widget/booking/OKuMznUQ5mQ643pUcS3q"
                style={{ width: "100%", border: "none", overflow: "hidden" }}
                scrolling="no"
                id="sJewwAfFLhmwqP9psUxK_1776472943234"
                title="DivineACQ™ Strategy Session"
                className="min-h-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
