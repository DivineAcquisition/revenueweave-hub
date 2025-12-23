import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Footer from "@/components/Footer";

const ThankYou = () => {
  useEffect(() => {
    // Load the iClosed widget script
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://app.iclosed.io/assets/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>You're In — Book Your Strategy Call | DivineAcquisition</title>
        <meta name="description" content="We got your application. Next step: pick a time to talk about your lead conversion system." />
      </Helmet>
      
      
      
      <main className="min-h-screen bg-background pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              🎉 You're In — Now Book Your Strategy Call
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              We got your application. Next step: pick a time to talk.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-6">
                On this call, we'll:
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Look at your current lead flow and where you're losing revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Map out the 3-phase system for your specific business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Show you realistic projections for the next 90 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Answer any questions you have</span>
                </li>
              </ul>
              <p className="mt-6 text-foreground font-medium">
                This isn't a generic sales pitch. We'll get into the specifics of YOUR business.
              </p>
            </div>
          </div>

          {/* Calendar Embed */}
          <div className="max-w-3xl mx-auto mb-8">
            <div 
              className="iclosed-widget bg-card border border-border rounded-2xl overflow-hidden shadow-lg" 
              data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice" 
              title="Backend Conversion System" 
              style={{ width: "100%", height: "620px" }}
            />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Can't find a time that works? Email us at{" "}
              <a href="mailto:hello@divineacquisition.com" className="text-accent hover:underline">
                hello@divineacquisition.com
              </a>{" "}
              and we'll figure it out.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ThankYou;
