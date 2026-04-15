import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DivineAcquisition | Convert More Leads Into Booked Jobs for Your Home Service Business</title>
        <meta 
          name="description" 
          content="We install AI-powered systems that answer every call, follow up on every quote, and turn more leads into paying jobs — without spending more on ads." 
        />
        <link rel="canonical" href="https://leadconvert.com" />
        <meta property="og:title" content="DivineAcquisition | Convert More Leads Into Booked Jobs" />
        <meta property="og:description" content="Stop losing the leads you already paid for. We install AI systems that convert more leads into booked, paying jobs." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DivineAcquisition | Convert More Leads Into Booked Jobs" />
        <meta name="twitter:description" content="Stop losing the leads you already paid for. We install AI systems that convert more leads into booked, paying jobs." />
      </Helmet>
      
      <main className="overflow-hidden">
        <HeroSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
