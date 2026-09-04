import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check } from "lucide-react";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { trackCustomPixel } from "@/lib/pixel";

const NotAFit = () => {
  useEffect(() => {
    trackCustomPixel("Disqualified", {
        content_name: "Not a Fit",
        content_category: "Disqualified",
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>This Might Not Be The Right Fit (Yet) | Divine Acquisition</title>
        <meta
          name="description"
          content="The Backend Conversion System might not be the right fit for your business at this stage, but we have an alternative that could work."
        />
      </Helmet>

      <MarketingShell>
        <PageIntro
          eyebrow="Fit"
          title="This might not be the right fit "
          accent="yet"
          body="We've got something that might work better for where you are right now."
        />

        <div className="mx-auto max-w-2xl space-y-6 px-5 py-12 sm:px-6">
          <Panel className="overflow-hidden p-0">
            <MagicCard className="rounded-2xl p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-silver">
                Based on your answers, the done-with-you install isn't the best fit at this stage. It works best for companies doing $25K+/month with a team in place.
              </p>
              <p className="mt-4 font-semibold text-white">That doesn't mean we can't help.</p>
            </MagicCard>
          </Panel>

          <Panel className="overflow-hidden border-brand-500/25 p-0">
            <MagicCard className="rounded-2xl p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">Alternative</p>
              <h2 className="acq-headline mt-2 text-2xl font-semibold text-white">Selestial</h2>
              <p className="mt-2 text-silver">The same capture and follow-up systems, built for growing home service companies.</p>
              <ul className="mt-6 space-y-3">
                {["AI-powered lead capture", "Automated follow-up sequences", "Appointment reminders", "Review request automation", "Self-serve platform"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3 text-silver">
                      <Check className="mt-0.5 size-4 text-brand-300" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-6 text-lg font-semibold text-white">$197/month — no big setup fee.</p>
              <a href="https://selestial.io" target="_blank" rel="noopener noreferrer" className="acq-button mt-6 inline-flex">
                Learn more about Selestial
                <ArrowRight className="size-4" />
              </a>
            </MagicCard>
          </Panel>
        </div>
      </MarketingShell>
    </>
  );
};

export default NotAFit;
