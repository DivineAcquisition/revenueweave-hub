import { BookCta, FinalCta } from "@/components/marketing/primitives";
import { marketingLead, marketingPageGutter, marketingSectionY, marketingShell, captionText } from "@/lib/marketing/ui";
import { cn } from "@/lib/utils";

const FinalCTASection = () => {
  return (
    <section className={cn("scroll-mt-24 border-t border-white/[0.07]", marketingPageGutter, marketingSectionY)}>
      <div className={marketingShell}>
        <FinalCta headline="Ready to stop losing jobs?">
          <p className={cn(marketingLead, "mx-auto")}>
            Book a session and we'll show you exactly where demand is leaking — and how to capture it.
          </p>
          <div className="mt-8 flex justify-center">
            <BookCta href="#calendar-section" />
          </div>
          <p className={cn(captionText, "mt-4")}>We take on a handful of new installs at a time. Seats fill.</p>
        </FinalCta>
      </div>
    </section>
  );
};

export default FinalCTASection;
