import { ArrowRight, CheckCircle2, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logoFull from "@/assets/logo-full.png";
const HeroSection = () => {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById("apply");
    if (calendarSection) {
      calendarSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const trustBadges = ["Built for Home Service Companies", "Works With Your Existing Ads", "Implemented in 14 Days"];
  return <section className="hero-gradient min-h-screen flex items-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <img src={logoFull} alt="DivineAcquisition" className="h-14 md:h-20 w-auto" />
          </div>
          
          {/* Pre-headline */}
          <p className="text-accent font-medium text-sm md:text-base mb-6 animate-fade-up animate-fade-up-delay-1">For HVAC, Plumbing, Roofing & Contractors Doing $25K-$250K/Month</p>
          
          {/* Main Headline */}
          <h1 className="text-primary-foreground font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up animate-fade-up-delay-2 text-balance">
            You're Paying For Leads.
            <br />
            <span className="text-accent">We Make Sure They Actually Convert.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-primary-foreground/90 text-lg md:text-xl lg:text-2xl font-medium mb-6 animate-fade-up animate-fade-up-delay-2 text-balance">
            The backend system that turns more ad leads into booked jobs — and more jobs into repeat customers who pay you every month.
          </p>
          
          {/* Supporting Text */}
          <p className="text-primary-foreground/70 text-base md:text-lg max-w-3xl mx-auto mb-10 animate-fade-up animate-fade-up-delay-3">
            Most home service companies lose 60%+ of their ad leads to missed calls, slow follow-up, and zero retention. We fix that with AI-powered capture, automated conversion sequences, and retention systems that work 24/7.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-up animate-fade-up-delay-4">
            {trustBadges.map((badge, index) => <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm md:text-base font-medium">{badge}</span>
              </div>)}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 items-center animate-fade-up animate-fade-up-delay-4">
            <Button variant="cta-hero" size="xl" onClick={scrollToCalendar} className="group">
              See If You Qualify
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
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