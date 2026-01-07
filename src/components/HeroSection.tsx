import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

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

    // Load iClosed widget script
    const iclosedScript = document.createElement("script");
    iclosedScript.src = "https://app.iclosed.io/assets/widget.js";
    iclosedScript.async = true;
    document.body.appendChild(iclosedScript);

    return () => {
      if (document.body.contains(playerScript)) {
        document.body.removeChild(playerScript);
      }
      if (document.body.contains(embedScript)) {
        document.body.removeChild(embedScript);
      }
      if (document.body.contains(iclosedScript)) {
        document.body.removeChild(iclosedScript);
      }
    };
  }, []);
  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <img src={logoFull} alt="DivineAcquisition" className="h-24 md:h-20 w-auto" />
          </div>
          
          {/* Pre-headline */}
          <p className="text-accent font-medium text-sm md:text-base mb-6 animate-fade-up animate-fade-up-delay-1">
            For HVAC, Plumbing, Roofing & Contractors Doing $10K-$25K/Month
          </p>
          
          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up animate-fade-up-delay-2 text-balance text-white">
            Ads That Bring Leads In. AI That Books Them.<br />
            <span className="text-accent">Automation That Keeps Them Coming Back.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-primary-foreground/90 text-lg md:text-xl lg:text-2xl font-medium mb-8 animate-fade-up animate-fade-up-delay-2 text-balance">
            The complete growth system for home service businesses —<br />
            new jobs, closed quotes, repeat customers, all on autopilot.
          </p>
          
          {/* Video Section */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-4 mb-12">
            <style>{`
              wistia-player[media-id='o2tstyl6cj']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/o2tstyl6cj/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{
              __html: '<wistia-player media-id="o2tstyl6cj" aspect="1.7777777777777777"></wistia-player>'
            }} />
          </div>

          {/* Calendar Section */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-4">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-6 text-center">
              Book Your <span className="text-accent">Free Strategy Call</span>
            </h2>
            <div 
              className="iclosed-widget bg-card border border-border rounded-2xl overflow-hidden shadow-lg" 
              data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice" 
              title="Backend Conversion System" 
              style={{ width: "100%", height: "620px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;