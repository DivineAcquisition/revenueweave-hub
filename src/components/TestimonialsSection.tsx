import { Video } from "lucide-react";

import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { MarketingSection } from "@/components/marketing/primitives";
import { WistiaSwatchStyle } from "@/components/marketing/WistiaSwatchStyle";
import { TESTIMONIALS, TESTIMONIALS_EYEBROW, TESTIMONIALS_HEADLINE, TESTIMONIALS_LEAD } from "@/lib/marketing/copy";
import { useExternalScripts } from "@/lib/scripts";

const TESTIMONIAL_SCRIPTS = [
  "https://fast.wistia.com/player.js",
  "https://fast.wistia.com/embed/2a8dvtqmfd.js",
  "https://fast.wistia.com/embed/6p65esjllh.js",
];

const TestimonialsSection = () => {
  useExternalScripts(TESTIMONIAL_SCRIPTS);

  return (
    <MarketingSection
      id="results"
      eyebrow={TESTIMONIALS_EYEBROW}
      headline={TESTIMONIALS_HEADLINE}
      lead={<p>{TESTIMONIALS_LEAD}</p>}
      align="center"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <Panel key={t.name} className="relative h-full overflow-hidden p-0 panel-hover" as="article">
            <span className="absolute right-5 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-ink-950/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-200">
              <Video className="size-3" aria-hidden />
              {t.videoId ? "Live testimonial" : "Interview coming soon"}
            </span>
            <MagicCard className="flex h-full flex-col rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 pr-24">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/12 text-sm font-bold text-brand-200">
                  {t.initials}
                </div>
                <div>
                  <p className="acq-headline text-[15px] font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-dim">{t.role}</p>
                </div>
              </div>

              <div className="mt-5">
                {t.videoId ? (
                  <>
                    <WistiaSwatchStyle mediaId={t.videoId} />
                    <div className="overflow-hidden rounded-xl bg-black">
                      {/* @ts-expect-error wistia custom element */}
                      <wistia-player
                        media-id={t.videoId}
                        aspect={"videoAspect" in t && t.videoAspect === "9/16" ? "0.5625" : "1.7777777777777777"}
                        style={{ width: "100%", height: "100%", display: "block" }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-ink-900">
                    <p className="px-4 text-center text-sm font-medium text-silver">Nathan's interview is being recorded.</p>
                  </div>
                )}
              </div>

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-silver">
                “{t.quote}”
              </blockquote>

              <ul className="mt-5 grid grid-cols-3 gap-2">
                {t.stats.map((s) => (
                  <li
                    key={s.label}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-2 py-2.5 text-center"
                  >
                    <p className="acq-headline text-sm font-semibold text-brand-300 sm:text-[15px]">{s.value}</p>
                    <p className="mt-1 text-[10px] leading-tight text-dim sm:text-[11px]">{s.label}</p>
                  </li>
                ))}
              </ul>
            </MagicCard>
          </Panel>
        ))}
      </div>
    </MarketingSection>
  );
};

export default TestimonialsSection;
