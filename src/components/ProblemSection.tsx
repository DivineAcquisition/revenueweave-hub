import { FeatureCard, MarketingSection } from "@/components/marketing/primitives";
import { PROBLEMS, PROBLEMS_EYEBROW, PROBLEMS_HEADLINE } from "@/lib/marketing/copy";

const ProblemSection = () => {
  return (
    <MarketingSection headline={PROBLEMS_HEADLINE} eyebrow={PROBLEMS_EYEBROW}>
      <div className="grid gap-4 md:grid-cols-2">
        {PROBLEMS.map((problem, index) => (
          <FeatureCard key={problem.title} step={String(index + 1).padStart(2, "0")} title={problem.title}>
            {problem.description}
          </FeatureCard>
        ))}
      </div>
    </MarketingSection>
  );
};

export default ProblemSection;
