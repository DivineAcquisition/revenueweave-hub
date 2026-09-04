import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MediaFrame } from "@/components/marketing/primitives";

const BookingBCS = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
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

      <MarketingShell>
        <PageIntro
          eyebrow="Strategy call"
          title="Book your "
          accent="strategy call"
          body="Schedule a time to discuss how the conversion system can recover lost jobs and scale your cleaning business."
        />
        <div className="px-5 pb-16 pt-10 sm:px-6">
          <MediaFrame>
            <div
              className="iclosed-widget"
              data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice"
              title="Backend Conversion System"
              style={{ width: "100%", height: "650px" }}
            />
          </MediaFrame>
        </div>
      </MarketingShell>
    </>
  );
};

export default BookingBCS;
