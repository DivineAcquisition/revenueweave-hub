import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MediaFrame } from "@/components/marketing/primitives";
import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { WistiaSwatchStyle } from "@/components/marketing/WistiaSwatchStyle";
import { trackPixel } from "@/lib/pixel";

const Booked = () => {
  useEffect(() => {
    trackPixel("Schedule", {
        content_name: "Backend System Call",
        content_category: "Appointment",
        value: 500.0,
        currency: "USD",
      });

    const scripts = [
      "https://fast.wistia.com/player.js",
      "https://fast.wistia.com/embed/pk21l05fbv.js",
      "https://app.iclosed.io/assets/widget.js",
    ];
    scripts.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const el = document.createElement("script");
      el.src = src;
      el.async = true;
      if (src.includes("/embed/")) el.type = "module";
      document.body.appendChild(el);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>You're Booked — Here's What Happens Next | Divine Acquisition</title>
        <meta name="description" content="Your strategy call is confirmed. Here's how to prepare and what we'll cover." />
      </Helmet>

      <MarketingShell>
        <div className="border-b border-white/[0.06] bg-brand-500/[0.08] px-4 py-3 text-center">
          <p className="text-sm font-medium text-brand-200">
            Watch the training on this page before you attend the call.
          </p>
        </div>

        <PageIntro
          eyebrow="Confirmed"
          title="You're booked — here's what happens "
          accent="next"
          body="Your strategy call is confirmed. Check your email for the details."
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-6 px-5 pb-16 sm:px-6">
          <Panel className="overflow-hidden p-0">
            <MagicCard className="rounded-2xl p-6 sm:p-8">
              <h2 className="acq-headline mb-4 text-center text-xl font-semibold text-white">Watch this before your call</h2>
              <WistiaSwatchStyle mediaId="pk21l05fbv" />
              <div className="overflow-hidden rounded-xl bg-black">
                <div
                  dangerouslySetInnerHTML={{
                    __html: '<wistia-player media-id="pk21l05fbv" aspect="1.7777777777777777"></wistia-player>',
                  }}
                />
              </div>
            </MagicCard>
          </Panel>

          <Panel className="overflow-hidden border-brand-500/25 p-0">
            <MagicCard className="rounded-2xl p-6 text-center sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">Exclusive bonus</p>
              <p className="mt-3 text-lg text-white">
                Show up and partner with us — we'll give you <em className="acq-headline-accent">30 days free access</em> to the system.
              </p>
            </MagicCard>
          </Panel>

          <MediaFrame>
            <div className="call-details-widget" data-url="https://app.iclosed.io/embed" style={{ width: "100%", height: "340px" }} />
          </MediaFrame>

          <Panel className="overflow-hidden p-0">
            <MagicCard className="rounded-2xl p-6 sm:p-8">
              <h2 className="acq-headline text-xl font-semibold text-white">Come prepared with</h2>
              <ul className="mt-5 space-y-3 text-silver">
                <li>Your approximate monthly lead volume</li>
                <li>Your current close rate (estimate is fine)</li>
                <li>What % of customers are recurring vs one-time</li>
                <li>Your biggest bottleneck right now</li>
              </ul>
            </MagicCard>
          </Panel>
        </div>
      </MarketingShell>
    </>
  );
};

export default Booked;
