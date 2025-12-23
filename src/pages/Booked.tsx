import { Helmet } from "react-helmet-async";

import Footer from "@/components/Footer";
import { useEffect } from "react";

const Booked = () => {
  useEffect(() => {
    // Load Wistia scripts
    const wistiaPlayerScript = document.createElement('script');
    wistiaPlayerScript.src = 'https://fast.wistia.com/player.js';
    wistiaPlayerScript.async = true;
    document.head.appendChild(wistiaPlayerScript);

    const wistiaEmbedScript = document.createElement('script');
    wistiaEmbedScript.src = 'https://fast.wistia.com/embed/pk21l05fbv.js';
    wistiaEmbedScript.async = true;
    wistiaEmbedScript.type = 'module';
    document.head.appendChild(wistiaEmbedScript);

    // Load iClosed widget script
    const iClosedScript = document.createElement('script');
    iClosedScript.src = 'https://app.iclosed.io/assets/widget.js';
    iClosedScript.async = true;
    document.body.appendChild(iClosedScript);

    return () => {
      // Cleanup scripts on unmount
      if (wistiaPlayerScript.parentNode) wistiaPlayerScript.parentNode.removeChild(wistiaPlayerScript);
      if (wistiaEmbedScript.parentNode) wistiaEmbedScript.parentNode.removeChild(wistiaEmbedScript);
      if (iClosedScript.parentNode) iClosedScript.parentNode.removeChild(iClosedScript);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>You're Booked — Here's What Happens Next | DivineAcquisition</title>
        <meta name="description" content="Your strategy call is confirmed. Here's how to prepare and what we'll cover." />
        <style>{`
          wistia-player[media-id='pk21l05fbv']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/pk21l05fbv/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        `}</style>
      </Helmet>
      
      
      
      {/* Important Banner */}
      <div className="bg-destructive text-destructive-foreground py-3 px-4 text-center">
        <p className="font-semibold text-sm md:text-base">
          ⚠️ IMPORTANT: Please Make Sure You've Watched Our Training Assets Or Content Before Attending Your Call
        </p>
      </div>
      
      <main className="min-h-screen bg-background pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              ✅ You're Booked — Here's What Happens Next
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Your strategy call is confirmed. Check your email for the details.
            </p>
          </div>

          {/* Pre-Call Video Section */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-4 text-center">
                📺 Watch This Before Your Call
              </h2>
              <div 
                className="rounded-xl overflow-hidden"
                dangerouslySetInnerHTML={{
                  __html: '<wistia-player media-id="pk21l05fbv" aspect="1.7777777777777777"></wistia-player>'
                }}
              />
            </div>
          </div>

          {/* Bonus Offer Section */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-6 md:p-8 text-center">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-3 flex items-center justify-center gap-2">
                <span>🎁</span> Exclusive Bonus
              </h2>
              <p className="text-foreground text-lg">
                Show up to your call and partner with us — we'll give you <span className="font-bold text-accent">30 days FREE access</span> to our system!
              </p>
            </div>
          </div>

          {/* iClosed Booking Confirmation Widget */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-4 text-center">
                📅 Your Booking Details
              </h2>
              <div 
                className="call-details-widget" 
                data-url="https://app.iclosed.io/embed" 
                style={{ width: '100%', height: '340px' }}
              ></div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {/* Come Prepared Section */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-2">
                Come Prepared With:
              </h2>
              <p className="text-muted-foreground mb-6">
                To make the most of our 45 minutes together, have these ready:
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-xl">📊</span>
                  <span>Your approximate monthly lead volume</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📈</span>
                  <span>Your current close rate (estimate is fine)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">💰</span>
                  <span>What % of customers are recurring vs one-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎯</span>
                  <span>Your biggest bottleneck right now</span>
                </li>
              </ul>
            </div>

            {/* What We'll Cover Section */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-6">
                What We'll Cover:
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Where your leads are leaking (and how much it's costing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>The 3-phase system customized for your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Realistic timeline and projections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Investment options and next steps</span>
                </li>
              </ul>
            </div>

            {/* Important Notice */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-4 flex items-center gap-2">
                <span>⚠️</span> Important:
              </h2>
              <p className="text-muted-foreground">
                Please show up on time. If something comes up, reschedule using the link in your confirmation email at least 24 hours in advance. We keep our calendar tight so we can give you our full attention.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Booked;
