import { FeatureCard, MarketingSection } from "@/components/marketing/primitives";

const steps = [
  {
    title: "Book a session",
    description: "Pick a time. We'll map where jobs are leaking and whether the install is a fit.",
  },
  {
    title: "We build it",
    description: "Your booking, follow-up, and retention stack goes live in 14 days. You keep running the business.",
  },
  {
    title: "You grow",
    description: "More leads become jobs. More jobs become recurring. Revenue stops depending on who picked up the phone.",
  },
];

const ProcessSection = () => {
  return (
    <MarketingSection eyebrow="How it works" headline="Fourteen days. Then the system runs.">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-brand-500/0 via-brand-500/45 to-brand-500/0 md:block"
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
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
