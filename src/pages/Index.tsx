import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DivineAcquisition | Get More Jobs & Recurring Customers for Your Cleaning Business</title>
        <meta 
          name="description" 
          content="We install AI-powered booking, follow-up & retention systems for home service businesses. Stop chasing leads and start building a real operation." 
        />
        <link rel="canonical" href="https://leadconvert.com" />
        <meta property="og:title" content="DivineAcquisition | Get More Jobs & Recurring Customers" />
        <meta property="og:description" content="We help you get more jobs and turn finished jobs into more referrals and recurring jobs." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DivineAcquisition | Get More Jobs & Recurring Customers" />
        <meta name="twitter:description" content="We help you get more jobs and turn finished jobs into more referrals and recurring jobs." />
      </Helmet>
      
      <main className="overflow-hidden">
        <HeroSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
