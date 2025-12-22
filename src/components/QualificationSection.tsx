import { Check, X } from "lucide-react";

const forYou = [
  "You run an HVAC, Plumbing, or Cleaning company",
  "You're doing $25K - $250K/month",
  "You have 3-20 technicians or cleaners",
  "You're already running ads (or about to)",
  "You know leads are slipping through",
  "You're tired of the revenue rollercoaster",
  "You want systems that work while you sleep",
];

const notForYou = [
  "You're a solo operator with no team",
  "You're doing under $15K/month",
  "You're not running ads with no plans to",
  "You want someone to \"do your marketing\"",
  "You want a quick fix, not a real system",
  "You're not willing to invest in infrastructure",
];

const QualificationSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 section-alt">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For You Column */}
            <div className="bg-card border border-success/30 rounded-2xl p-6 md:p-8">
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-success" />
                </div>
                This Is For You If...
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Not For You Column */}
            <div className="bg-card border border-destructive/30 rounded-2xl p-6 md:p-8">
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
                This Is Not For You If...
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
