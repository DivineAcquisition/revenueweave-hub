import { FaqAccordion, MarketingSection } from "@/components/marketing/primitives";
import { FAQ } from "@/lib/marketing/copy";

const FAQSection = () => {
  return (
    <MarketingSection id="faq" headline={FAQ.headline} narrow align="center">
      <FaqAccordion items={FAQ.items} />
    </MarketingSection>
  );
};

export default FAQSection;
