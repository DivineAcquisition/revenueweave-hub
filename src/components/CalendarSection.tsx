import { useEffect } from "react";

const CalendarSection = () => {
  useEffect(() => {
    // Load the iClosed widget script
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://app.iclosed.io/assets/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="book-call" className="py-20 md:py-28 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Book Your Strategy Call
          </h2>
          <p className="text-muted-foreground text-lg">
            Select a time that works for you and let's discuss how we can help you convert more leads.
          </p>
        </div>
        
        {/* iClosed Widget Container */}
        <div 
          className="max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: '<iclosed-scheduler link="divineacquisitionn/homeservice"></iclosed-scheduler>'
          }}
        />
      </div>
    </section>
  );
};

export default CalendarSection;