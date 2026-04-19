import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DivineAcquisition | Grow Your Residential & Remote Cleaning Business On Autopilot</title>
        <meta 
          name="description" 
          content="AI-powered booking, follow-up & retention systems for residential and remote cleaning businesses. More jobs, more referrals, more recurring revenue." 
        />
        <link rel="canonical" href="https://go.divineacquisition.io" />
        <meta property="og:title" content="DivineAcquisition | Grow Your Cleaning Business On Autopilot" />
        <meta property="og:description" content="AI-powered booking, follow-up & retention systems built for residential and remote cleaning businesses ready to scale." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DivineAcquisition | Grow Your Cleaning Business On Autopilot" />
        <meta name="twitter:description" content="AI-powered booking, follow-up & retention systems built for residential and remote cleaning businesses ready to scale." />
      </Helmet>
      
      <main className="overflow-hidden">
        <HeroSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
