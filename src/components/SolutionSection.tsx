import { CalendarClock, Phone, RefreshCw } from "lucide-react";

import { MarketingSection } from "@/components/marketing/primitives";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const systems = [
  {
    icon: Phone,
    title: "Capture",
    description: "AI answers the phone 24/7, texts missed callers in 60 seconds, and books the job before a competitor picks up.",
    className: "lg:col-span-2",
  },
  {
    icon: CalendarClock,
    title: "Convert",
    description: "Seven-touch quote follow-up, show-rate reminders, and no-show recovery so estimates become paying jobs.",
    className: "lg:col-span-1",
  },
  {
    icon: RefreshCw,
    title: "Retain",
    description: "Post-job check-ins, review requests, and membership offers so one-time cleans become recurring revenue.",
    className: "lg:col-span-1",
  },
];

const SolutionSection = () => {
  return (
    <MarketingSection
      id="product"
      eyebrow="Systems"
      headline="Three systems. One goal: more revenue from the same leads."
      lead={<p>Capture, convert, and retain — installed in the stack you already run.</p>}
    >
      <BentoGrid className="auto-rows-[16rem]">
        {systems.map((system) => (
          <BentoCard
            key={system.title}
            name={system.title}
            description={system.description}
            href="#calendar-section"
            cta="Book a session"
            Icon={system.icon}
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
