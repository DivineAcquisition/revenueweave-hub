import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookCallModal from "@/components/demo/BookCallModal";
import { Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";
import logoFull from "@/assets/logo-full.png";
import Footer from "@/components/Footer";

export default function PrepareCall() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <Helmet>
        <title>Demo Breakdown | DivineAcquisition</title>
        <meta name="description" content="Watch the DivineAcquisition demo breakdown and book your strategy call." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="py-6 px-4">
          <div className="container mx-auto max-w-4xl flex justify-center">
            <img src={logoFull} alt="DivineAcquisition" className="h-10" />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 pb-16">
          <div className="container mx-auto max-w-4xl">
            {/* Headline */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Booking For Cleaning Companies</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how DivineAcquisition's AI-powered booking &amp; retention system works — and how it can transform your business.
              </p>
            </div>

            {/* Video Player */}
            <div className="rounded-xl overflow-hidden border border-border bg-card mb-12">
              <video
                controls
                className="w-full aspect-video bg-black"
                poster=""
                preload="metadata"
              >
                <source src="/videos/prepare-call.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Book your demo call now and see how DivineAcquisition can transform your booking and retention system.
              </p>
              <p className="text-sm text-accent">
                📱 Please use a valid phone number — you'll receive a text with a form to customize your setup before the call!
              </p>
              <Button
                variant="cta"
                size="xl"
                onClick={() => setShowCalendar(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Demo Call
              </Button>
              <p className="text-xs text-muted-foreground">
                No credit card required • Get set up in minutes • Full support included
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <BookCallModal open={showCalendar} onOpenChange={setShowCalendar} />
    </>
  );
}
