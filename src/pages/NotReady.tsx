import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { trackCustomPixel } from "@/lib/pixel";

const NotReady = () => {
  useEffect(() => {
    trackCustomPixel("NotReady", {
        content_name: "Not Ready",
        content_category: "Nurture",
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Timing Isn't Right — We'll Be Here | Divine Acquisition</title>
        <meta name="description" content="When you're ready to fix your backend, we'll be here. Get our free Lead Leakage Audit guide in the meantime." />
      </Helmet>

      <MarketingShell>
        <PageIntro
          eyebrow="Timing"
          title="No problem — sounds like timing isn't "
          accent="right"
          body="When you're ready to fix your backend, we'll be here."
        />

        <div className="mx-auto max-w-2xl space-y-6 px-5 py-12 sm:px-6">
          <Panel className="overflow-hidden border-brand-500/25 p-0">
            <MagicCard className="rounded-2xl p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">Free tool</p>
              <h2 className="acq-headline mt-2 text-2xl font-semibold text-white">The revenue leakage audit</h2>
              <p className="mt-2 text-silver">Find exactly where you're losing leads and revenue with a 5-minute audit.</p>
              <ul className="mt-6 space-y-3">
                {["5-minute interactive self-assessment", "Calculates your exact revenue leakage", "Actionable fix recommendations"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-silver">
                    <Check className="mt-0.5 size-4 text-brand-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/backend-system/leakage-audit" className="acq-button mt-8 inline-flex">
                Take the free audit
                <ArrowRight className="size-4" />
              </Link>
            </MagicCard>
          </Panel>
        </div>
      </MarketingShell>
    </>
  );
};

export default NotReady;
