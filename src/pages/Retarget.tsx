import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Star, Maximize2, X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import Footer from "@/components/Footer";

const Retarget = () => {
  const [vslOpen, setVslOpen] = useState(false);

  useEffect(() => {
    if (vslOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [vslOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVslOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const scripts = [
      "https://link.msgsndr.divineacquisition.io/js/form_embed.js",
      "https://fast.wistia.com/player.js",
      "https://fast.wistia.com/embed/wl1hcmrxj5.js",
    ];
    scripts.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (src.includes("wl1hcmrxj5.js")) script.type = "module";
      document.body.appendChild(script);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Your Strategy Session | DivineAcquisition</title>
        <meta name="description" content="Still thinking? Let's talk about growing your cleaning business with AI-powered systems." />
      </Helmet>

      <main className="overflow-hidden">
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
                More Jobs. More Referrals.{" "}
                <span className="text-accent">More Recurring Revenue.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-medium mb-10 animate-fade-up animate-fade-up-delay-2 text-balance max-w-3xl mx-auto">
                We'll install AI-powered booking, follow-up & retention systems so you stop chasing leads and start building a business that grows on autopilot. Book your free strategy session now.
              </p>

              {/* VSL */}
              <div className="w-full max-w-3xl mx-auto mb-12 animate-fade-up animate-fade-up-delay-3">
                <style>{`wistia-player[media-id='wl1hcmrxj5']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wl1hcmrxj5/swatch'); display: block; filter: blur(5px); aspect-ratio: 16/9; width: 100%; }`}</style>
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg aspect-video">
                  {/* @ts-expect-error wistia custom element */}
                  <wistia-player media-id="wl1hcmrxj5" aspect="1.7777777777777777" style={{ width: "100%", height: "100%", display: "block" }}></wistia-player>
                  <button
                    type="button"
                    onClick={() => setVslOpen(true)}
                    aria-label="Expand video to fullscreen"
                    className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 bg-background/80 hover:bg-background text-foreground border border-border backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold shadow-md transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Expand
                  </button>
                </div>
              </div>

              {/* VSL Lightbox */}
              {vslOpen && (
                <div
                  className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-up"
                  onClick={() => setVslOpen(false)}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Video player"
                >
                  <button
                    type="button"
                    onClick={() => setVslOpen(false)}
                    aria-label="Close video"
                    className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/90 hover:bg-background text-foreground border border-border shadow-lg transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div
                    className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* @ts-expect-error wistia custom element */}
                    <wistia-player media-id="wl1hcmrxj5" aspect="1.7777777777777777" style={{ width: "100%", height: "100%", display: "block" }}></wistia-player>
                  </div>
                </div>
              )}

              {/* Calendar Section */}
              <div className="w-full max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-3">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Book Your <span className="text-accent">Strategy Session</span> Here
                </h2>
                <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  Pick a time that works for you. We'll dive into your business and show you exactly where you're leaving money on the table.
                </p>
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative w-full" style={{ height: "700px" }}>
                    <div data-fillout-id="5AxHKhv5Jjus" data-fillout-embed-type="fullscreen" style={{ width: "100%", height: "100%" }} data-fillout-inherit-parameters></div>
                    <script src="https://server.fillout.com/embed/v1/"></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Retarget;
