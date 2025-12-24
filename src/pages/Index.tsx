import { Helmet } from "react-helmet-async";

import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ROISection from "@/components/ROISection";
import QualificationSection from "@/components/QualificationSection";
import ProcessSection from "@/components/ProcessSection";
import ApplicationForm from "@/components/ApplicationForm";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import CalendarSection from "@/components/CalendarSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LeadConvert | Turn More Ad Leads Into Booked Jobs for Home Service Companies</title>
        <meta 
          name="description" 
          content="The backend conversion system for HVAC, plumbing & cleaning companies. AI-powered lead capture, automated follow-up, and retention systems that work 24/7. Implemented in 14 days." 
        />
        <meta name="keywords" content="HVAC leads, plumbing leads, cleaning company leads, lead conversion, home service marketing, missed call text back, quote follow-up automation" />
        <link rel="canonical" href="https://leadconvert.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LeadConvert | Turn More Ad Leads Into Booked Jobs" />
        <meta property="og:description" content="The backend system that turns more ad leads into booked jobs — and more jobs into repeat customers who pay you every month." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LeadConvert | Turn More Ad Leads Into Booked Jobs" />
        <meta name="twitter:description" content="The backend system that turns more ad leads into booked jobs — and more jobs into repeat customers who pay you every month." />
      </Helmet>
      
      <main className="overflow-hidden">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ROISection />
        <QualificationSection />
        <ProcessSection />
        <ApplicationForm />
        <FAQSection />
        <FinalCTASection />
        <CalendarSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
