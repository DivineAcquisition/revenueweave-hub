import { Helmet } from "react-helmet-async";

import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import HeroSection from "@/components/HeroSection";
import { IncludedCards, MarketingSection } from "@/components/marketing/primitives";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { Marquee } from "@/components/ui/marquee";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import QualificationSection from "@/components/QualificationSection";
import ROISection from "@/components/ROISection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { FOUNDING_OFFER, INCLUDED, INCLUDED_FOOTNOTE, INCLUDED_HEADLINE, INCLUDED_TITLE } from "@/lib/marketing/copy";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Divine Acquisition | Grow Your Residential & Remote Cleaning Business On Autopilot</title>
        <meta
          name="description"
          content="Missed-call booking, quote follow-up, and recurring conversion for remote residential cleaning companies. $397/month. Live in 14 days."
        />
        <link rel="canonical" href="https://go.divineacquisition.io" />
        <meta property="og:title" content="Divine Acquisition | More recurring cleans from the leads you already buy" />
        <meta
          property="og:description"
          content="We install the booking and follow-up backend so Facebook and Google leads stop dying in voicemail. Keep Jobber or Housecall Pro."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Divine Acquisition | More recurring cleans from the leads you already buy" />
        <meta
          name="twitter:description"
          content="We install the booking and follow-up backend so Facebook and Google leads stop dying in voicemail. Keep Jobber or Housecall Pro."
        />
      </Helmet>

      <MarketingShell>
        <HeroSection />
        <TestimonialsSection />

        <div className="relative overflow-hidden border-y border-white/[0.07]">
          <Marquee pauseOnHover className="[--duration:36s]">
            {INCLUDED.map((item) => (
              <span key={item.title} className="mx-4 text-[13px] font-medium tracking-wide text-silver">
                {item.title}
              </span>
            ))}
          </Marquee>
        </div>

        <MarketingSection id="product" eyebrow={INCLUDED_HEADLINE} headline={INCLUDED_TITLE}>
          <IncludedCards items={INCLUDED} />
          <p className="mt-6 text-sm leading-relaxed text-silver">{INCLUDED_FOOTNOTE}</p>
        </MarketingSection>

        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <ROISection />
        <QualificationSection />

        <MarketingSection eyebrow={FOUNDING_OFFER.eyebrow} headline={FOUNDING_OFFER.lead}>
          <p className="max-w-xl text-sm leading-relaxed text-silver sm:text-[15px]">{FOUNDING_OFFER.body}</p>
        </MarketingSection>

        <FAQSection />
        <FinalCTASection />
      </MarketingShell>
    </>
  );
};

export default Index;
