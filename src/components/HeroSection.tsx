import { useEffect } from "react";
import { CheckCircle2, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logoFull from "@/assets/logo-full.png";

const HeroSection = () => {
  useEffect(() => {
    // Load Wistia player script
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.body.appendChild(playerScript);

    // Load Wistia embed script
    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/o2tstyl6cj.js";
    embedScript.async = true;
    embedScript.type = "module";
    document.body.appendChild(embedScript);

    return () => {
      document.body.removeChild(playerScript);
      document.body.removeChild(embedScript);
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
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up animate-fade-up-delay-2 text-balance text-primary">
            Every Missed Call Is a Job Going to Your Competitor
          </h1>
          
          {/* Subheadline */}
          <p className="text-primary-foreground/90 text-lg md:text-xl lg:text-2xl font-medium mb-8 animate-fade-up animate-fade-up-delay-2 text-balance">See exactly where you're losing leads and how to fix it in 20 minutes.</p>
          
          {/* Bullet Points */}
          
          
          {/* Trust Badges */}
          
          
          {/* Wistia VSL Video */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-4 mb-8">
            <style>{`
              wistia-player[media-id='o2tstyl6cj']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/o2tstyl6cj/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: '<wistia-player media-id="o2tstyl6cj" aspect="1.7777777777777777"></wistia-player>' }} />
          </div>

          {/* Primary CTA */}
          <div className="animate-fade-up animate-fade-up-delay-4">
            <Button variant="cta" size="xl" asChild className="group">
              <a href="https://divineacquisition.fillout.com/t/h3CnJQbcGCus" target="_blank" rel="noopener noreferrer">
                <CheckCircle2 className="h-5 w-5" />
                See If You Qualify
              </a>
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mt-4 animate-fade-up animate-fade-up-delay-4">
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