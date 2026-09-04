import { CalendarClock, Phone, RefreshCw } from "lucide-react";

import { MarketingSection } from "@/components/marketing/primitives";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { SYSTEMS, SYSTEMS_EYEBROW, SYSTEMS_HEADLINE, SYSTEMS_LEAD } from "@/lib/marketing/copy";

const ICONS = {
  book: Phone,
  close: CalendarClock,
  keep: RefreshCw,
} as const;

const SolutionSection = () => {
  return (
    <MarketingSection id="systems" eyebrow={SYSTEMS_EYEBROW} headline={SYSTEMS_HEADLINE} lead={<p>{SYSTEMS_LEAD}</p>}>
      <BentoGrid className="auto-rows-[18rem]">
        {SYSTEMS.map((system) => (
          <BentoCard
            key={system.key}
            name={system.title}
            description={system.description}
            href="#calendar-section"
            cta="Book a session"
            Icon={ICONS[system.key]}
            className={system.className}
            background={
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(154,136,252,0.18),transparent_55%)]"
              />
            }
          />
        ))}
      </BentoGrid>
    </MarketingSection>
  );
};

export default SolutionSection;
