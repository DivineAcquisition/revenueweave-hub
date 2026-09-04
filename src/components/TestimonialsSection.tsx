import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { MarketingSection } from "@/components/marketing/primitives";
import { WistiaSwatchStyle } from "@/components/marketing/WistiaSwatchStyle";
import { useExternalScripts } from "@/lib/scripts";

const testimonials = [
  {
    initials: "NA",
    name: "Nathan",
    role: "Founder, BadgerLuxClean",
    quote:
      "We processed 1,740 bookings and tracked $510K in revenue through Selestial. 32% of our one-time customers converted to recurring service at the booking page — not after weeks of follow-up. That's the number that matters.",
    stats: [
      { value: "1,740", label: "Bookings processed" },
      { value: "$510K", label: "Tracked revenue" },
      { value: "32.3%", label: "Recurring conversion" },
    ],
    videoId: null as string | null,
  },
  {
    initials: "MA",
    name: "Maurisa Alexis Louis",
    role: "Founder, Bay Area Cleaning Pros",
    quote:
      "We added $50K in new annual revenue from bookings that would've been phone tag before Selestial. Customers see the price, pick their time, and the job's on the calendar before I'd even have called them back.",
    stats: [
      { value: "$50K", label: "New annual revenue" },
      { value: "24/7", label: "Booking capture" },
      { value: "Q2 2025", label: "Live since" },
    ],
    videoId: "2a8dvtqmfd",
  },
  {
    initials: "WC",
    name: "Will Cole",
    role: "Owner, Mean Cleaning & Restoration",
    quote:
      "Just want to take the time out to thank Malik for his patience, for just being very resourceful and having a passion for my business as much as I do. And also, with Malik, he's very, very informative and very prompt.",
    stats: [
      { value: "$16K", label: "MRR added in 91 days" },
      { value: "21", label: "New bookings" },
      { value: "41%", label: "Conversion rate" },
    ],
    videoId: "6p65esjllh",
    videoAspect: "9/16",
  },
];

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
      eyebrow="Real results"
      headline="Built on live revenue. Not theory."
      lead={<p>Cleaning company owners running the system right now.</p>}
      align="center"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Panel key={t.name} className="h-full overflow-hidden p-0 panel-hover" as="article">
            <MagicCard className="flex h-full flex-col rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3">
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
                        aspect={t.videoAspect === "9/16" ? "0.5625" : "1.7777777777777777"}
                        style={{ width: "100%", height: "100%", display: "block" }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-ink-900">
                    <p className="px-4 text-center text-sm font-medium text-silver">Live interview coming soon</p>
                  </div>
                )}
              </div>

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-silver">
                “{t.quote}”
              </blockquote>

              <ul className="mt-5 flex flex-wrap gap-2">
                {t.stats.map((s) => (
                  <li
                    key={s.label}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-neutral-300"
                  >
                    <span className="text-brand-300">{s.value}</span> {s.label}
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
