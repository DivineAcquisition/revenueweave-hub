import { useEffect } from "react";
import { Video } from "lucide-react";

const testimonials = [
  {
    initials: "NA",
    name: "Nathan",
    role: "Founder, BadgerLuxClean",
    quote:
      "We processed 1,740 bookings and tracked $510K in revenue through Selestial. 32% of our one-time customers converted to recurring service at the booking page — not after weeks of follow-up. That's the number that matters.",
    stats: [
      { value: "1,740", label: "Bookings Processed" },
      { value: "$510K", label: "Tracked Revenue" },
      { value: "32.3%", label: "Recurring Conversion Rate" },
    ],
    videoId: null as string | null,
    videoAspect: "16/9",
  },
  {
    initials: "MA",
    name: "Maurisa Alexis Louis",
    role: "Founder, Bay Area Cleaning Pros | Bay Area, CA",
    quote:
      "We added $50K in new annual revenue from bookings that would've been phone tag before Selestial. Customers see the price, pick their time, and the job's on the calendar before I'd even have called them back.",
    stats: [
      { value: "$50K", label: "New Annual Revenue" },
      { value: "24/7", label: "Booking Capture" },
      { value: "Q2 2025", label: "Live Since" },
    ],
    videoId: "2a8dvtqmfd",
    videoAspect: "16/9",
  },
  {
    initials: "WC",
    name: "Will Cole",
    role: "Owner, Mean Cleaning & Restoration",
    quote:
      "Just want to take the time out to thank Malik for his patience, for just being very resourceful and having a passion for my business as much as I do. And also, with Malik, he's very, very informative and very prompt, and there's nothing that Malik doesn't know when it comes to growing your business.",
    stats: [
      { value: "$16K", label: "MRR Added in 91 Days" },
      { value: "21", label: "New Bookings" },
      { value: "41%", label: "Conversion Rate" },
    ],
    videoId: "6p65esjllh",
    videoAspect: "9/16",
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    const scripts = [
      "https://fast.wistia.com/player.js",
      "https://fast.wistia.com/embed/2a8dvtqmfd.js",
      "https://fast.wistia.com/embed/6p65esjllh.js",
    ];
    scripts.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      if (src.endsWith(".js") && src.includes("/embed/")) s.type = "module";
      document.body.appendChild(s);
    });
  }, []);

  return (
    <section className="bg-background py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-5 uppercase tracking-wide">
            Real Results
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Built on <span className="text-accent">Live Revenue.</span> Not Theory.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-balance">
            Real cleaning company owners running Selestial right now. Here's what it's doing for them.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg flex flex-col"
            >
              {/* Badge */}
              {t.videoId ? (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold shadow-md">
                  <Video className="w-3.5 h-3.5" />
                  Live Testimonial
                </div>
              ) : (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold shadow-md">
                  <Video className="w-3.5 h-3.5" />
                  Live Interview Coming Soon
                </div>
              )}

              {/* Video */}
              {t.videoId && (
                <div className="mb-6">
                  <style>{`wistia-player[media-id='${t.videoId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${t.videoId}/swatch'); display: block; filter: blur(5px); width: 100%; height: 100%; }`}</style>
                  <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-accent/60 via-primary/40 to-accent/60 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)]">
                    <div className="rounded-2xl overflow-hidden bg-black w-full aspect-video flex items-center justify-center">
                      {/* @ts-expect-error wistia custom element */}
                      <wistia-player
                        media-id={t.videoId}
                        aspect={t.videoAspect === "9/16" ? "0.5625" : "1.7777777777777777"}
                        style={{ width: "100%", height: "100%", display: "block" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-base shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-base">
                    {t.name}
                  </div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {t.stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-muted/40 border border-border rounded-xl px-2 py-3 text-center"
                  >
                    <div className="font-display font-extrabold text-accent text-lg md:text-xl leading-tight">
                      {s.value}
                    </div>
                    <div className="text-muted-foreground text-[10px] md:text-xs mt-1 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
