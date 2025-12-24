import { useEffect } from "react";

const CalendarSection = () => {
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
    <section id="book-call" className="py-20 md:py-28 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Book Your Strategy Call
          </h2>
          <p className="text-muted-foreground text-lg">
            Pick a time that works for you and let's discuss how we can help capture more of your leads.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div 
            className="iclosed-widget rounded-xl overflow-hidden bg-card shadow-lg" 
            data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice" 
            title="Backend Conversion System" 
            style={{ width: "100%", height: "600px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
