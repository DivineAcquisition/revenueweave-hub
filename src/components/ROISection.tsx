import { FeatureCard, MarketingSection } from "@/components/marketing/primitives";
import { NumberTicker } from "@/components/ui/number-ticker";
import { MATH, MATH_EYEBROW, MATH_HEADLINE, MATH_LEAD } from "@/lib/marketing/copy";

const ROISection = () => {
  return (
    <MarketingSection eyebrow={MATH_EYEBROW} headline={MATH_HEADLINE} lead={<p>{MATH_LEAD}</p>}>
      <ul className="grid gap-4 sm:grid-cols-3">
        {MATH.map((item) => (
          <li key={item.title}>
            <FeatureCard title={item.title}>
              {"from" in item && "to" in item ? (
                <p>
                  <NumberTicker value={item.from} className="text-silver" /> →{" "}
                  <NumberTicker value={item.to} className="text-brand-300" />
                </p>
              ) : (
                <p>
                  <span className="text-silver">{item.fromLabel}</span> → <span className="text-brand-300">{item.toLabel}</span>
                </p>
              )}
              <p className="mt-2">{item.caption}</p>
            </FeatureCard>
          </li>
        ))}
      </ul>
    </MarketingSection>
  );
};

export default ROISection;
