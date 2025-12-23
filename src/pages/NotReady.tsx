import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import Footer from "@/components/Footer";

const NotReady = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Guide sent!",
      description: "Check your inbox for the Lead Leakage Audit guide.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Timing Isn't Right — We'll Be Here | DivineAcquisition</title>
        <meta name="description" content="When you're ready to fix your backend, we'll be here. Get our free Lead Leakage Audit guide in the meantime." />
      </Helmet>
      
      
      
      <main className="min-h-screen bg-background pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              No Problem — Sounds Like Timing Isn't Right
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              When you're ready to fix your backend, we'll be here.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {/* Explanation */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center">
              <p className="text-muted-foreground leading-relaxed">
                Building real systems takes commitment, and it sounds like now might not be the right time for that. Totally get it. In the meantime, here's something that might help:
              </p>
            </div>

            {/* Free Resource Offer */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6 md:p-8">
              <div className="text-center mb-6">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  Free Resource
                </p>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  The Lead Leakage Audit
                </h2>
                <p className="text-muted-foreground">
                  A simple checklist to find exactly where you're losing leads and revenue.
                </p>
              </div>
              
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>15-minute self-assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Identifies your biggest bottlenecks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Includes quick fixes you can implement today</span>
                </li>
              </ul>

              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-foreground font-medium text-center">
                  Enter your email and we'll send it over:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    disabled={isSubmitting}
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Me The Guide"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Footer Note */}
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                No spam. Just the guide and occasional tips on converting more leads. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotReady;
