import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Footer from "@/components/Footer";

const NotAFit = () => {
  useEffect(() => {
    // Track Disqualified event for Facebook Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', 'Disqualified', {
        content_name: 'Not a Fit',
        content_category: 'Disqualified'
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>This Might Not Be The Right Fit (Yet) | DivineAcquisition</title>
        <meta name="description" content="The Backend Conversion System might not be the right fit for your business at this stage, but we have an alternative that could work." />
      </Helmet>
      
      
      
      <main className="min-h-screen bg-background pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Hmm — This Might Not Be The Right Fit (Yet)
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              But we've got something that might work better for where you are right now.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {/* Explanation */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed">
                Based on your answers, the Backend Conversion System isn't the best fit for your business at this stage. The done-with-you implementation works best for companies doing $25K+/month with a team in place. The investment and complexity just doesn't make sense below that level.
              </p>
              <p className="text-foreground font-semibold mt-4">
                BUT — that doesn't mean we can't help.
              </p>
            </div>

            {/* Alternative Offer */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Introducing Selestial
              </h2>
              <p className="text-muted-foreground mb-6">
                The same lead capture and follow-up systems, built for growing home service companies.
              </p>
              
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>AI-powered lead capture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Automated follow-up sequences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Appointment reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Review request automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Self-serve platform (we give you the tools)</span>
                </li>
              </ul>

              <p className="text-foreground font-bold text-xl mb-6">
                Just $197/month — no big setup fee.
              </p>

              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://selestial.io" target="_blank" rel="noopener noreferrer">
                  Learn More About Selestial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Footer Note */}
            <div className="text-center">
              <p className="text-muted-foreground">
                Once you scale past $30K/month, reach back out — we'd love to build the full system for you then.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotAFit;
