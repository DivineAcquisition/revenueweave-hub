import { FeatureCard, MarketingSection } from "@/components/marketing/primitives";
import { NumberTicker } from "@/components/ui/number-ticker";

const ROISection = () => {
  return (
    <MarketingSection
      eyebrow="The math"
      headline="Same leads. Different results."
      lead={<p>Here's what happens when you fix the backend instead of buying more traffic.</p>}
    >
      <ul className="grid gap-4 sm:grid-cols-3">
        <li>
          <FeatureCard title="Leads that book">
            <p>
              <NumberTicker value={30} className="text-silver" /> →{" "}
              <NumberTicker value={70} className="text-brand-300" />
            </p>
            <p className="mt-2">Out of 100 monthly ad leads.</p>
          </FeatureCard>
        </li>
        <li>
          <FeatureCard title="Jobs completed">
            <p>
              <NumberTicker value={20} className="text-silver" /> →{" "}
              <NumberTicker value={55} className="text-brand-300" />
            </p>
            <p className="mt-2">Appointments that actually turn into work.</p>
          </FeatureCard>
        </li>
        <li>
          <FeatureCard title="12-month impact">
            <p>
              <span className="text-silver">$14k</span> → <span className="text-brand-300">$96k</span>
            </p>
            <p className="mt-2">From the same ad spend. The system pays for itself in week one.</p>
          </FeatureCard>
        </li>
      </ul>
    </MarketingSection>
  );
};

export default ROISection;
