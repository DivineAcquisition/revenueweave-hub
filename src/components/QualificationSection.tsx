import { Check, X } from "lucide-react";

import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { MarketingSection } from "@/components/marketing/primitives";
import { FIT_EYEBROW, FIT_HEADLINE, FIT_NO, FIT_YES } from "@/lib/marketing/copy";

const QualificationSection = () => {
  return (
    <MarketingSection eyebrow={FIT_EYEBROW} headline={FIT_HEADLINE}>
      <div className="grid gap-5 lg:grid-cols-2">
        <Panel className="overflow-hidden p-0">
          <MagicCard className="h-full rounded-2xl p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">This is for you if</p>
            <ul className="mt-6 space-y-3">
              {FIT_YES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-brand-500/15 text-brand-300">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="text-[15px] font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </MagicCard>
        </Panel>
        <Panel className="overflow-hidden p-0">
          <MagicCard className="h-full rounded-2xl p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">This is not for you if</p>
            <ul className="mt-6 space-y-3">
              {FIT_NO.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-white/[0.04] text-silver">
                    <X className="size-3.5" aria-hidden />
                  </span>
                  <span className="text-[15px] text-silver">{item}</span>
                </li>
              ))}
            </ul>
          </MagicCard>
        </Panel>
      </div>
    </MarketingSection>
  );
};

export default QualificationSection;
