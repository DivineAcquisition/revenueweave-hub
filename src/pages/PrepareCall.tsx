import { useState } from "react";
import { Helmet } from "react-helmet-async";

import BookCallModal from "@/components/demo/BookCallModal";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MediaFrame } from "@/components/marketing/primitives";

export default function PrepareCall() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <Helmet>
        <title>Demo Breakdown | Divine Acquisition</title>
        <meta name="description" content="Watch the Divine Acquisition demo breakdown and book your strategy call." />
      </Helmet>

      <MarketingShell>
        <PageIntro
          eyebrow="Demo"
          title="Get more cleaning jobs with AI-powered booking & "
          accent="follow-up"
          body="Watch how the system turns missed calls into booked jobs, no-shows into loyal clients, and one-time cleans into recurring revenue."
        />

        <div className="px-5 pb-16 pt-10 sm:px-6">
          <MediaFrame>
            <video controls className="aspect-video w-full bg-black" preload="metadata">
              <source src="/videos/prepare-call.mp4" type="video/mp4" />
            </video>
          </MediaFrame>

          <div className="mt-10 text-center">
            <h2 className="acq-headline text-2xl font-semibold text-white">Ready to get started?</h2>
            <p className="mx-auto mt-3 max-w-xl text-silver">
              Book your demo call and see how Divine Acquisition can transform booking and retention.
            </p>
            <button type="button" className="acq-button mx-auto mt-6" onClick={() => setShowCalendar(true)}>
              Book your demo call
            </button>
          </div>
        </div>
      </MarketingShell>

      <BookCallModal open={showCalendar} onOpenChange={setShowCalendar} />
    </>
  );
}
