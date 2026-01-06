import { useEffect, useState } from "react";
import { CheckCircle2, Lock, Play } from "lucide-react";

import { Button } from "./ui/button";
import LeadCaptureModal from "./LeadCaptureModal";
import logoFull from "@/assets/logo-full.png";

const STORAGE_KEY = "divine_acquisition_lead_submitted";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Check localStorage for previous submission
    const submitted = localStorage.getItem(STORAGE_KEY);
    if (submitted === "true") {
      setHasSubmitted(true);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  useEffect(() => {
    // Only load Wistia scripts after form submission
    if (!hasSubmitted) return;

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
      if (document.body.contains(playerScript)) {
        document.body.removeChild(playerScript);
      }
      if (document.body.contains(embedScript)) {
        document.body.removeChild(embedScript);
      }
    };
  }, [hasSubmitted]);

  const handleFormSuccess = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setHasSubmitted(true);
    setIsModalOpen(false);
  };
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
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up animate-fade-up-delay-2 text-balance text-white">
            Every Missed Call Is a Job Going to Your Competitor
          </h1>
          
          {/* Subheadline */}
          <p className="text-primary-foreground/90 text-lg md:text-xl lg:text-2xl font-medium mb-8 animate-fade-up animate-fade-up-delay-2 text-balance">See exactly where you're losing leads and how to fix it in 20 minutes.</p>
          
          {/* Bullet Points */}
          
          
          {/* Trust Badges */}
          
          
          {/* Video Section */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-4 mb-8">
            {hasSubmitted ? (
              <>
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
              </>
            ) : (
              /* Locked Video Placeholder */
              <div 
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                {/* Blurred background thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
                  style={{ backgroundImage: "url('https://fast.wistia.com/embed/medias/o2tstyl6cj/swatch')" }}
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-background/70" />
                
                {/* Lock content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Play className="w-8 h-8 text-accent ml-1" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-foreground font-semibold text-lg mb-1">Unlock This Free Training</p>
                    <p className="text-muted-foreground text-sm">Enter your info to watch the full video</p>
                  </div>
                  <Button variant="cta" size="lg" className="mt-2">
                    Unlock Video
                  </Button>
                </div>
              </div>
            )}
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

        </div>
      </div>

      <LeadCaptureModal 
        open={isModalOpen} 
        onOpenChange={(open) => {
          if (hasSubmitted) {
            setIsModalOpen(open);
          }
        }}
        onSuccess={handleFormSuccess}
      />
    </section>;
};
export default HeroSection;