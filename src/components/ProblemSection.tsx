import { FeatureCard, MarketingSection } from "@/components/marketing/primitives";

const problems = [
  {
    title: "Missed calls = missed revenue",
    description:
      "A lead calls. You're on a job. They get voicemail. They hang up and call your competitor. Every missed call is a job walking out the door.",
  },
  {
    title: "Slow follow-up kills deals",
    description:
      "Lead fills out your form at 9pm. You call back at 10am. They've already booked someone else. Leads contacted within 5 minutes convert 21x more.",
  },
  {
    title: "Quotes disappear into the void",
    description:
      "You send 10 estimates. 3 respond. The other 7? Gone. No follow-up system means you're leaving five figures a year on the table.",
  },
  {
    title: "One-time jobs stay one-time",
    description:
      "Customer loves the work. Six months later they can't remember your name. Without retention, most of them never come back.",
  },
];

const ProblemSection = () => {
  return (
    <MarketingSection headline="It's not your ads. It's what happens after the lead comes in." eyebrow="Leakage">
      <div className="grid gap-4 md:grid-cols-2">
        {problems.map((problem, index) => (
          <FeatureCard key={problem.title} step={String(index + 1).padStart(2, "0")} title={problem.title}>
            {problem.description}
          </FeatureCard>
        ))}
      </div>
    </MarketingSection>
  );
};

export default ProblemSection;
