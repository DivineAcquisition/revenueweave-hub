import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Maximize2, X } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "@/components/brand/logo";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { MediaFrame, StatusPill } from "@/components/marketing/primitives";
import TestimonialsSection from "@/components/TestimonialsSection";
import { HEADLINE_ACCENT, HEADLINE_BEFORE, PILL_BANNER, SUBHEADLINE } from "@/lib/marketing/copy";
import { marketingHeroTitle, marketingPageGutter, marketingSubhead } from "@/lib/marketing/ui";
import { WistiaSwatchStyle } from "@/components/marketing/WistiaSwatchStyle";
import { useExternalScripts } from "@/lib/scripts";
import { cn } from "@/lib/utils";

const VSL_ID = "wl1hcmrxj5";
const RETARGET_SCRIPTS = [
  "https://link.msgsndr.divineacquisition.io/js/form_embed.js",
  "https://fast.wistia.com/player.js",
  `https://fast.wistia.com/embed/${VSL_ID}.js`,
];

const Retarget = () => {
  const [vslOpen, setVslOpen] = useState(false);
  const iclosedScriptLoaded = useRef(false);

  useExternalScripts(RETARGET_SCRIPTS);

  useEffect(() => {
    if (vslOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
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
    if (iclosedScriptLoaded.current) return;
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
    iclosedScriptLoaded.current = true;
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Your Strategy Session | Divine Acquisition</title>
        <meta name="description" content="Still thinking? Let's talk about growing your cleaning business with AI-powered systems." />
      </Helmet>

      <MarketingShell>
        <section className={cn(marketingPageGutter, "pb-16 pt-12 text-center sm:pt-16")}>
          <Link to="/" aria-label="Divine Acquisition home" className="mb-8 inline-flex">
            <Logo className="h-7 w-auto sm:h-8" />
          </Link>
          <StatusPill>{PILL_BANNER}</StatusPill>
          <h1 className={cn(marketingHeroTitle, "mx-auto mt-6 max-w-[920px]")}>
            {HEADLINE_BEFORE}
            <em className="acq-headline-accent">{HEADLINE_ACCENT}</em>
          </h1>
          <p className={cn(marketingSubhead, "mx-auto mt-5 max-w-[34rem]")}>{SUBHEADLINE}</p>

          <div className="relative mx-auto mt-10 w-full max-w-4xl">
            <WistiaSwatchStyle mediaId={VSL_ID} />
            <MediaFrame>
              <div className="relative aspect-video bg-black">
                {/* @ts-expect-error wistia custom element */}
                <wistia-player media-id={VSL_ID} aspect="1.7777777777777777" style={{ width: "100%", height: "100%", display: "block" }} />
                <button
                  type="button"
                  onClick={() => setVslOpen(true)}
                  aria-label="Expand video"
                  className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-ink-950/80 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  <Maximize2 className="size-3.5" />
                  Expand
                </button>
              </div>
            </MediaFrame>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <h2 className="acq-headline text-[1.85rem] font-semibold leading-[1.12] sm:text-4xl">
              Book your <em className="acq-headline-accent">strategy session</em>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-silver">
              Pick a time. We'll dive into your business and show you exactly where you're leaving money on the table.
            </p>
          </div>
          <div className="mt-10">
            <MediaFrame>
              <div
                className="iclosed-widget"
                data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice"
                title="Divine Acquisition Cleaning Company Audit"
                style={{ width: "100%", height: "620px" }}
              />
            </MediaFrame>
          </div>
        </section>

        <TestimonialsSection />
      </MarketingShell>

      {vslOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setVslOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setVslOpen(false)}
            aria-label="Close video"
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-white"
          >
            <X className="size-5" />
          </button>
          <div className="aspect-video w-full max-w-6xl overflow-hidden rounded-2xl bg-black" onClick={(e) => e.stopPropagation()}>
            {/* @ts-expect-error wistia custom element */}
            <wistia-player media-id={VSL_ID} aspect="1.7777777777777777" style={{ width: "100%", height: "100%", display: "block" }} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Retarget;
