import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Booked = () => {
  return (
    <>
      <Helmet>
        <title>You're Booked — Here's What Happens Next | DivineAcquisition</title>
        <meta name="description" content="Your strategy call is confirmed. Here's how to prepare and what we'll cover." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              ✅ You're Booked — Here's What Happens Next
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Your strategy call is confirmed. Check your email for the details.
            </p>
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
