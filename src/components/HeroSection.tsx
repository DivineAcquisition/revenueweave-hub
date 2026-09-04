import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Maximize2, X } from "lucide-react";

import Logo from "@/components/brand/logo";

import { BookCta, MediaFrame, StatusPill } from "@/components/marketing/primitives";
import { Particles } from "@/components/ui/particles";
import {
  CALENDAR,
  DEMO_LABEL,
  HEADLINE_ACCENT,
  HEADLINE_AFTER,
  HEADLINE_BEFORE,
  PILL_BANNER,
  PRICING_LINE,
  SUBHEADLINE,
  VIDEO_LABEL,
} from "@/lib/marketing/copy";
import { marketingHeroTitle, marketingPageGutter, marketingSubhead } from "@/lib/marketing/ui";
import { WistiaSwatchStyle } from "@/components/marketing/WistiaSwatchStyle";
import { useExternalScripts } from "@/lib/scripts";
import { cn } from "@/lib/utils";

const VSL_ID = "wl1hcmrxj5";
const DEMO_ID = "odrdmxlrvq";
const CALENDAR_SRC = "https://link.msgsndr.divineacquisition.io/widget/booking/OKuMznUQ5mQ643pUcS3q";

const SCRIPTS = [
  "https://link.msgsndr.divineacquisition.io/js/form_embed.js",
  "https://fast.wistia.com/player.js",
  `https://fast.wistia.com/embed/${VSL_ID}.js`,
  `https://fast.wistia.com/embed/${DEMO_ID}.js`,
];

function WistiaPlayer({ mediaId, aspect = "1.7777777777777777", style }: { mediaId: string; aspect?: string; style?: CSSProperties }) {
  return (
    // @ts-expect-error wistia custom element
    <wistia-player media-id={mediaId} aspect={aspect} style={{ width: "100%", height: "100%", display: "block", ...style }} />
  );
}

function VideoLightbox({
  open,
  onClose,
  mediaId,
  label,
  children,
}: {
  open: boolean;
  onClose: () => void;
  mediaId: string;
  label: string;
  children?: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-6 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-white"
      >
        <X className="size-5" />
      </button>
      <div className="flex w-full max-w-5xl flex-col gap-4" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-video overflow-hidden rounded-2xl bg-black">
          <WistiaPlayer mediaId={mediaId} />
        </div>
        {children}
      </div>
    </div>
  );
}

const HeroSection = () => {
  const [vslOpen, setVslOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useExternalScripts(SCRIPTS);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVslOpen(false);
        setDemoOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative overflow-hidden pb-8 pt-10 sm:pb-10 sm:pt-16">
      <Particles className="absolute inset-0 z-0" quantity={48} color="#9A88FC" ease={80} size={0.5} />

      <div className={cn(marketingPageGutter, "relative z-10")}>
        <div className="mx-auto max-w-[900px] text-center">
          <Link to="/" aria-label="Divine Acquisition home" className="mb-8 inline-flex animate-rise">
            <Logo className="h-7 w-auto sm:h-8" />
          </Link>
          <div className="acq-headline animate-rise delay-1">
            <StatusPill>{PILL_BANNER}</StatusPill>
          </div>

          <h1 className={cn(marketingHeroTitle, "animate-rise delay-2 mx-auto mt-6 max-w-[920px]")}>
            {HEADLINE_BEFORE}
            <em className="acq-headline-accent">{HEADLINE_ACCENT}</em>
            {HEADLINE_AFTER}
          </h1>

          <p className={cn(marketingSubhead, "animate-rise delay-3 mx-auto mt-4 max-w-[34rem] sm:mt-5")}>{SUBHEADLINE}</p>
        </div>

        <div className="animate-rise delay-3 mt-10">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">{VIDEO_LABEL}</p>
          <div className="relative mx-auto w-full max-w-4xl">
            <WistiaSwatchStyle mediaId={VSL_ID} />
            <MediaFrame>
              <div className="relative aspect-video bg-black">
                <WistiaPlayer mediaId={VSL_ID} />
                <button
                  type="button"
                  onClick={() => setVslOpen(true)}
                  aria-label="Expand video to fullscreen"
                  className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-ink-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  <Maximize2 className="size-3.5" />
                  Expand
                </button>
              </div>
            </MediaFrame>
          </div>
        </div>

        <div className="animate-rise delay-4 mx-auto mt-9 flex max-w-[900px] flex-col items-center">
          <p className="text-sm font-medium text-brand-300">{PRICING_LINE}</p>
          <p className="mt-3 text-[15px] text-silver">
            See our{" "}
            <button type="button" onClick={() => setDemoOpen(true)} className="font-semibold text-white underline decoration-brand-500/50 underline-offset-4 hover:decoration-brand-300">
              {DEMO_LABEL}
            </button>
            .
          </p>
          <BookCta href="#calendar-section" className="acq-button-full mt-6 max-w-sm" />
        </div>
      </div>

      <div id="calendar-section" className={cn(marketingPageGutter, "relative z-10 mt-16 scroll-mt-24 sm:mt-20")}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="acq-headline text-[11px] font-semibold tracking-tight text-brand-300">{CALENDAR.eyebrow}</p>
          <h2 className="acq-headline mt-3 text-[1.85rem] font-semibold leading-[1.12] sm:text-4xl">
            {CALENDAR.titleBefore}
            <em className="acq-headline-accent">{CALENDAR.titleAccent}</em>
            {CALENDAR.titleAfter}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-silver">{CALENDAR.body}</p>
        </div>
        <div className="mt-10">
          <MediaFrame>
            <iframe
              src={CALENDAR_SRC}
              style={{ width: "100%", border: "none", overflow: "hidden", height: "750px" }}
              scrolling="no"
              id="sJewwAfFLhmwqP9psUxK_1776472943234"
              title="Divine Acquisition strategy session"
              className="min-h-[750px] bg-black"
            />
          </MediaFrame>
        </div>
      </div>

      <VideoLightbox open={vslOpen} onClose={() => setVslOpen(false)} mediaId={VSL_ID} label="Video player" />
      <VideoLightbox open={demoOpen} onClose={() => setDemoOpen(false)} mediaId={DEMO_ID} label="AI Booking Layer Demo">
        <WistiaSwatchStyle mediaId={DEMO_ID} />
        <div className="flex justify-center">
          <BookCta
            href="#calendar-section"
            onClick={() => {
              setDemoOpen(false);
            }}
          />
        </div>
      </VideoLightbox>
    </section>
  );
};

export default HeroSection;
