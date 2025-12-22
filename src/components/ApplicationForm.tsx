import { useEffect } from "react";

const ApplicationForm = () => {
  useEffect(() => {
    // Load the iClosed widget script
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://app.iclosed.io/assets/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="apply" className="py-20 md:py-28 px-4 section-alt">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            See If You <span className="text-accent">Qualify</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Book a call with us. We only work with companies we can actually help.
          </p>
        </div>
        
        {/* iClosed Calendar Widget */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="iclosed-widget bg-card border border-border rounded-2xl overflow-hidden shadow-lg" 
            data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice" 
            title="Backend Conversion System" 
            style={{ width: "100%", height: "620px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
