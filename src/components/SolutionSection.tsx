import { Phone, TrendingUp, RefreshCw, CheckCircle2 } from "lucide-react";

const systems = [
  {
    icon: Phone,
    number: "1",
    title: "CAPTURE",
    subtitle: "Never Miss Another Lead",
    features: [
      "AI answers your phone 24/7 — qualifies and books automatically",
      "Missed call? Text goes out in 60 seconds",
      "Web leads get instant response (not hours later)",
      "Emergency calls route to your on-call tech immediately",
    ],
    result: "2-3x more leads convert to booked appointments",
    color: "accent",
  },
  {
    icon: TrendingUp,
    number: "2",
    title: "CONVERT",
    subtitle: "Turn More Estimates Into Jobs",
    features: [
      "Automated quote follow-up (7 touches over 21 days)",
      "Appointment reminders that actually get confirmations",
      "No-show? Automatic recovery sequence kicks in",
      "AI calls leads who haven't responded",
    ],
    result: "40%+ more estimates become paying jobs",
    color: "success",
  },
  {
    icon: RefreshCw,
    number: "3",
    title: "RETAIN",
    subtitle: "One-Time Becomes Lifetime",
    features: [
      "Post-job satisfaction check (catch issues before bad reviews)",
      "Automatic review requests that build your Google profile",
      "Membership/service agreement offers to happy customers",
      "At-risk detection catches cancellations before they happen",
      "Reactivation campaigns bring back past customers",
    ],
    result: "3x customer lifetime value",
    color: "primary",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 section-alt">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The Backend <span className="text-accent">Conversion System</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            3 Systems. 1 Goal: More Revenue From The Same Leads.
          </p>
        </div>
        
        {/* System Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {systems.map((system, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 card-hover flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <system.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-accent font-bold text-sm">SYSTEM {system.number}</p>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {system.title}
                  </h3>
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="text-foreground font-semibold text-lg mb-4">
                📞 {system.subtitle}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {system.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Result */}
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                <p className="text-sm font-medium">
                  <span className="text-accent font-bold">RESULT:</span>{" "}
                  <span className="text-foreground">{system.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
