import { useEffect } from "react";
import { Star } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const HeroSection = () => {
  useEffect(() => {
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.body.appendChild(playerScript);

    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/39m0mb8bqn.js";
    embedScript.async = true;
    embedScript.type = "module";
    document.body.appendChild(embedScript);

    const ghlScript = document.createElement("script");
    ghlScript.src = "https://link.msgsndr.divineacquisition.io/js/form_embed.js";
    ghlScript.type = "text/javascript";
    document.body.appendChild(ghlScript);

    return () => {
      [playerScript, embedScript, ghlScript].forEach((s) => {
        if (document.body.contains(s)) document.body.removeChild(s);
      });
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col bg-background">
      {/* Top Banner */}
      <div className="w-full bg-primary py-3 px-4 text-center">
        <p className="text-primary-foreground text-sm md:text-base font-semibold tracking-wide uppercase">
          For Residential Or Remote Cleaning Businesses Ready To Reach The Next Level
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
            We Will Help You Get More Jobs & Turn Finished Jobs Into More{" "}
            <span className="text-accent">Referrals & Recurring Jobs</span>
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-medium mb-10 animate-fade-up animate-fade-up-delay-2 text-balance max-w-3xl mx-auto">
            We install AI-powered booking + follow-up + retention systems for home service businesses, so you stop chasing leads and start building a real operation.
          </p>

          {/* VSL */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-3 mb-16">
            <style>{`
              wistia-player[media-id='39m0mb8bqn']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/39m0mb8bqn/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
              }
            `}</style>
            <div
              className="rounded-2xl overflow-hidden border border-border shadow-lg"
              dangerouslySetInnerHTML={{
                __html: '<wistia-player media-id="39m0mb8bqn" aspect="1.7777777777777777"></wistia-player>',
              }}
            />
          </div>

          {/* Calendar Section */}
          <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-4">
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
