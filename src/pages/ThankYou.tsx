import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Check } from "lucide-react";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MediaFrame } from "@/components/marketing/primitives";
import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { trackPixel } from "@/lib/pixel";

const ThankYou = () => {
  useEffect(() => {
    trackPixel("Lead", {
        content_name: "Backend System Audit",
        content_category: "Lead",
      });

    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Helmet>
        <title>You're In — Book Your Strategy Call | Divine Acquisition</title>
        <meta name="description" content="We got your application. Next step: pick a time to talk about your lead conversion system." />
      </Helmet>

      <MarketingShell>
        <PageIntro
          eyebrow="Next step"
          title="You're in — now book your "
          accent="strategy call"
          body="We got your application. Next step: pick a time to talk."
        />

        <div className="mx-auto mt-10 max-w-2xl px-5 sm:px-6">
          <Panel className="overflow-hidden p-0">
            <MagicCard className="rounded-2xl p-6 sm:p-8">
              <h2 className="acq-headline text-xl font-semibold text-white">On this call, we'll:</h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Look at your current lead flow and where you're losing revenue",
                  "Map out the 3-phase system for your specific business",
                  "Show you realistic projections for the next 90 days",
                  "Answer any questions you have",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-brand-500/15 text-brand-300">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="text-[15px] text-silver">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-white">This isn't a generic sales pitch. We'll get into the specifics of YOUR business.</p>
            </MagicCard>
          </Panel>
        </div>

        <div className="px-5 pb-16 pt-10 sm:px-6">
          <MediaFrame>
            <div
              className="iclosed-widget"
              data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice"
              title="Backend Conversion System"
              style={{ width: "100%", height: "620px" }}
            />
          </MediaFrame>
          <p className="mt-8 text-center text-sm text-silver">
            Can't find a time that works? Email{" "}
            <a href="mailto:hello@divineacquisition.com" className="text-brand-300 hover:text-white">
              hello@divineacquisition.com
            </a>
            .
          </p>
        </div>
      </MarketingShell>
    </>
  );
};

export default ThankYou;
