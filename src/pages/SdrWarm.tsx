import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MediaFrame } from "@/components/marketing/primitives";

const SdrWarm = () => {
  const { sdrName } = useParams<{ sdrName: string }>();
  const displayName = sdrName ? sdrName.charAt(0).toUpperCase() + sdrName.slice(1) : "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.divineacquisition.io/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <MarketingShell>
      <PageIntro
        title="You're one call away from scaling your "
        accent="business"
        body="Book your growth audit — we'll map out how to get you more jobs, referrals, and recurring revenue."
      />
      <div className="px-5 pb-16 pt-10 sm:px-6">
        <MediaFrame>
          <iframe
            src="https://link.msgsndr.divineacquisition.io/widget/booking/8HRU6QplAvtDfVINjDbk"
            style={{ width: "100%", minHeight: "700px", height: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="sdr_warm_booking_iframe"
            title="Growth Audit Booking"
          />
        </MediaFrame>
        {displayName ? <p className="mt-6 text-center text-sm text-dim">Scheduled by {displayName}</p> : null}
      </div>
    </MarketingShell>
  );
};

export default SdrWarm;
