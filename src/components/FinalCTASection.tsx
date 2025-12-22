import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 px-4 hero-gradient">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Ready to Stop <span className="text-accent">Losing Leads?</span>
          </h2>
          
          {/* Subhead */}
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Apply now and we'll show you exactly how many customers you're losing — and how to capture them.
          </p>
          
          {/* CTA Button */}
          <Button variant="cta-hero" size="xl" asChild>
            <a href="#apply" className="group">
              See If You Qualify
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          {/* Urgency */}
          <p className="text-primary-foreground/60 text-sm mt-6">
            We take on 3-5 new clients per month. Spots fill up fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
