import { useEffect } from "react";
import { CheckCircle2, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logoFull from "@/assets/logo-full.png";

const HeroSection = () => {
  const trustBadges = ["Built for Home Service Companies", "Works With Your Existing Ads", "Implemented in 14 Days"];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <section className="hero-gradient min-h-screen flex flex-col items-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <img src={logoFull} alt="DivineAcquisition" className="h-24 md:h-20 w-auto" />
          </div>
          
          {/* Pre-headline */}
          <p className="text-accent font-medium text-sm md:text-base mb-6 animate-fade-up animate-fade-up-delay-1">For HVAC, Plumbing, Roofing & Contractors Doing $10K-$25K/Month</p>
          
          {/* Main Headline */}
          <h1 className="text-primary-foreground font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up animate-fade-up-delay-2 text-balance">
            Every Missed Call Is a Job Going to Your Competitor
          </h1>
          
          {/* Subheadline */}
          <p className="text-primary-foreground/90 text-lg md:text-xl lg:text-2xl font-medium mb-8 animate-fade-up animate-fade-up-delay-2 text-balance">
            See exactly where you're losing leads — and how to fix it in 20 minutes.
          </p>
          
          {/* Bullet Points */}
          <div className="flex flex-col items-center gap-3 mb-10 animate-fade-up animate-fade-up-delay-3">
            <p className="text-primary-foreground/90 text-base md:text-lg">
              ✅ Find out how many calls you're missing (it's more than you think)
            </p>
            <p className="text-primary-foreground/90 text-base md:text-lg">
              ✅ See why your quotes aren't closing
            </p>
            <p className="text-primary-foreground/90 text-base md:text-lg">
              ✅ Get a simple plan to book more jobs — without more ad spend
            </p>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-up animate-fade-up-delay-4">
            {trustBadges.map((badge, index) => <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm md:text-base font-medium">{badge}</span>
              </div>)}
          </div>
          
          {/* iClosed Calendar Widget */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-4">
            <div 
              className="iclosed-widget rounded-xl overflow-hidden" 
              data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice" 
              title="Backend Conversion System" 
              style={{ width: "100%", height: "620px" }}
            />
          </div>

          {/* Secondary CTA */}
          <div className="mt-8 animate-fade-up animate-fade-up-delay-4">
            <Button variant="cta-outline" size="xl" asChild className="group">
              <Link to="/backend-system/leakage-audit">
                <DollarSign className="h-5 w-5" />
                See How Much Money I'm Losing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;