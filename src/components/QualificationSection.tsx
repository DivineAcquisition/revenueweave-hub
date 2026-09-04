import { Check, X } from "lucide-react";

import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { MarketingSection } from "@/components/marketing/primitives";

const forYou = [
  "You run a residential or remote cleaning company",
  "You're doing $15K–$250K/month",
  "You have a team in place — or you're running ops remotely",
  "You're already generating demand and losing jobs after the lead comes in",
];

const notForYou = [
  "You're a solo operator with no plan to hire",
  "You're doing under $15K/month",
  "You want someone to 'do your marketing' instead of install systems",
  "You're not willing to run the stack we put in place",
];

const QualificationSection = () => {
  return (
    <MarketingSection eyebrow="Fit" headline="This is for operators who already have demand.">
      <div className="grid gap-5 lg:grid-cols-2">
        <Panel className="overflow-hidden p-0">
          <MagicCard className="h-full rounded-2xl p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">This is for you if</p>
            <ul className="mt-6 space-y-3">
              {forYou.map((item) => (
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
              {notForYou.map((item) => (
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
