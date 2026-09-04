import { BookCta, FinalCta } from "@/components/marketing/primitives";
import { FINAL_CTA } from "@/lib/marketing/copy";
import { marketingLead, marketingPageGutter, marketingSectionY, marketingShell, captionText } from "@/lib/marketing/ui";
import { cn } from "@/lib/utils";

const FinalCTASection = () => {
  return (
    <section className={cn("scroll-mt-24 border-t border-white/[0.07]", marketingPageGutter, marketingSectionY)}>
      <div className={marketingShell}>
        <FinalCta headline={FINAL_CTA.headline}>
          <p className={cn(marketingLead, "mx-auto")}>{FINAL_CTA.body}</p>
          <div className="mt-8 flex justify-center">
            <BookCta href="#calendar-section" />
          </div>
          <p className={cn(captionText, "mt-4")}>{FINAL_CTA.caption}</p>
        </FinalCta>
      </div>
    </section>
  );
};

export default FinalCTASection;
