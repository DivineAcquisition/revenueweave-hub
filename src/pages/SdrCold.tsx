import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MediaFrame } from "@/components/marketing/primitives";

const SdrCold = () => {
  const { sdrName } = useParams<{ sdrName: string }>();
  const displayName = sdrName ? sdrName.charAt(0).toUpperCase() + sdrName.slice(1) : "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <MarketingShell>
      <PageIntro
        title="Let's see how we can help you "
        accent="grow"
        body="Pick a time below and let's talk about scaling your business with systems that actually work."
      />
      <div className="px-5 pb-16 pt-10 sm:px-6">
        <MediaFrame>
          <div
            className="iclosed-widget"
            data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice"
            title="Book a Strategy Call"
            style={{ width: "100%", height: "550px" }}
          />
        </MediaFrame>
        {displayName ? <p className="mt-6 text-center text-sm text-dim">Scheduled by {displayName}</p> : null}
      </div>
    </MarketingShell>
  );
};

export default SdrCold;
