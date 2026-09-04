import { FeatureCard, MarketingSection } from "@/components/marketing/primitives";
import { PROCESS, PROCESS_EYEBROW, PROCESS_HEADLINE } from "@/lib/marketing/copy";

const ProcessSection = () => {
  return (
    <MarketingSection eyebrow={PROCESS_EYEBROW} headline={PROCESS_HEADLINE}>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-brand-500/0 via-brand-500/45 to-brand-500/0 md:block"
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {PROCESS.map((step, index) => (
            <li key={step.title}>
              <FeatureCard step={String(index + 1).padStart(2, "0")} title={step.title}>
                {step.description}
              </FeatureCard>
            </li>
          ))}
        </ol>
      </div>
    </MarketingSection>
  );
};

export default ProcessSection;
