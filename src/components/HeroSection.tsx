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
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 animate-fade-up animate-fade-up-delay-2 text-balance text-foreground">
            Your Leads Are Calling. Your Ads Are Running. But Between Missed Callbacks, Zero Follow-Up, and No System to Bring Past Customers Back —{" "}
            <span className="text-accent">You're Paying for Jobs You'll Never Book. We Fix That in 14 Days.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-medium mb-6 animate-fade-up animate-fade-up-delay-2 text-balance max-w-3xl mx-auto">
            Done-for-you sales and retention systems built around how YOUR trade actually works — whether you're running crews, dispatching techs, or managing routes. Every lead followed up in under 2 minutes. Every past customer re-engaged before they call someone else.
          </p>

          {/* Proof line */}
          <p className="text-accent/90 text-sm md:text-base font-semibold mb-12 animate-fade-up animate-fade-up-delay-2 max-w-2xl mx-auto">
            I'll dig into how your operation actually runs — your booking flow, your follow-up, your customer retention — and hand you a visual game plan showing exactly what to fix. Free. Yours to keep.
          </p>

          {/* Calendar Section */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-3">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
              Grab Your Free <span className="text-accent">14-Day Game Plan Call</span>
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

            {/* Headline Below Calendar */}
            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mt-10 mb-3 text-balance">
              Pick a Time. Show Up. <span className="text-accent">Walk Away With a Plan.</span>
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              No pitch deck. No fluff. Just a straight breakdown of where leads are leaking in your business — and exactly how to plug them in the next 14 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
