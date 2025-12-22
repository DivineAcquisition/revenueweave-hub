import { PhoneMissed, Clock, FileQuestion, UserMinus } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed Calls = Missed Revenue",
    description: "A lead calls. You're on a job. They get voicemail. They hang up and call your competitor. 80% of callers won't leave a voicemail. Every missed call is $300-$1,500 walking out the door.",
  },
  {
    icon: Clock,
    title: "Slow Follow-Up Kills Deals",
    description: "Lead fills out your form at 9pm. You call back at 10am the next day. They've already booked someone else. Leads contacted within 5 minutes are 21x more likely to convert. Most companies take hours.",
  },
  {
    icon: FileQuestion,
    title: "Quotes Disappear Into The Void",
    description: "You send 10 estimates. 3 respond. The other 7? Gone. No follow-up system means you're leaving $50K+ per year on the table in quotes that never closed.",
  },
  {
    icon: UserMinus,
    title: "One-Time Jobs Stay One-Time",
    description: "Customer loves your work. But 6 months later, they can't remember your name. They Google and find someone else. Without a retention system, 80%+ of your customers never come back.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Here's What's Really <span className="text-destructive">Killing Your Revenue</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            It's not your ads. It's what happens after the lead comes in.
          </p>
        </div>
        
        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-3">
                    ❌ {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
