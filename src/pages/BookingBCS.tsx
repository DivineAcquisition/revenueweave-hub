import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const BookingBCS = () => {
  useEffect(() => {
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
        <title>Book Your Strategy Call | Divine Acquisition</title>
        <meta
          name="description"
          content="Schedule your Backend Conversion System strategy call with Divine Acquisition. Transform your home service business with our proven system."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Book Your Strategy Call
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Schedule a time to discuss how the Backend Conversion System can help you recover lost revenue and scale your home service business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="iclosed-widget rounded-2xl overflow-hidden shadow-xl"
              data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice"
              title="Backend Conversion System"
              style={{ width: "100%", height: "650px" }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BookingBCS;
