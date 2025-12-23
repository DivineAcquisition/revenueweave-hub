import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Footer from "@/components/Footer";

const NotReady = () => {
  return (
    <>
      <Helmet>
        <title>Timing Isn't Right — We'll Be Here | DivineAcquisition</title>
        <meta name="description" content="When you're ready to fix your backend, we'll be here. Get our free Lead Leakage Audit guide in the meantime." />
      </Helmet>
      
      <main className="min-h-screen bg-background pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              No Problem — Sounds Like Timing Isn't Right
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              When you're ready to fix your backend, we'll be here.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {/* Explanation */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center">
              <p className="text-muted-foreground leading-relaxed">
                Building real systems takes commitment, and it sounds like now might not be the right time for that. Totally get it. In the meantime, here's something that might help:
              </p>
            </div>

            {/* Free Resource Offer */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6 md:p-8">
              <div className="text-center mb-6">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  Free Tool
                </p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  The Revenue Leakage Audit
                </h2>
                <p className="text-muted-foreground">
                  Find exactly where you're losing leads and revenue with our interactive 5-minute audit.
                </p>
              </div>
              
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>5-minute interactive self-assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Calculates your exact revenue leakage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Actionable fix recommendations for each issue</span>
                </li>
              </ul>

              <div className="text-center">
                <Button size="lg" asChild>
                  <a href="/backend-system/leakage-audit">
                    Take The Free Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                No email required. Get instant results and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotReady;
