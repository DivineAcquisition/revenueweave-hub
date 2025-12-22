const ROISection = () => {
  const metrics = [
    { label: "Monthly Ad Leads", without: "100", with: "100" },
    { label: "Leads That Book", without: "30", with: "70", highlight: true },
    { label: "Appointments That Show", without: "25", with: "60", highlight: true },
    { label: "Jobs Completed", without: "20", with: "55", highlight: true },
    { label: "Become Recurring", without: "3", with: "20", highlight: true },
    { label: "Monthly Recurring Revenue", without: "$1,200", with: "$8,000", money: true },
    { label: "12-Month Revenue Impact", without: "$14,400", with: "$96,000", money: true, final: true },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Same Leads. <span className="text-accent">Different Results.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Here's what happens when you fix your backend:
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-4 md:p-6 font-display font-bold text-sm md:text-base">
                Metric
              </div>
              <div className="p-4 md:p-6 font-display font-bold text-sm md:text-base text-center border-l border-primary-foreground/20">
                Without System
              </div>
              <div className="p-4 md:p-6 font-display font-bold text-sm md:text-base text-center border-l border-primary-foreground/20 bg-accent text-accent-foreground">
                With System
              </div>
            </div>
            
            {/* Table Body */}
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 border-t border-border ${metric.final ? 'bg-accent/5' : ''}`}
              >
                <div className={`p-4 md:p-5 text-sm md:text-base ${metric.final ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
                  {metric.label}
                </div>
                <div className={`p-4 md:p-5 text-center border-l border-border text-sm md:text-base ${metric.final ? 'font-bold text-muted-foreground' : 'text-muted-foreground'}`}>
                  {metric.without}
                </div>
                <div className={`p-4 md:p-5 text-center border-l border-border text-sm md:text-base font-semibold ${metric.final ? 'text-accent font-bold text-lg md:text-xl' : metric.highlight ? 'text-success' : 'text-foreground'}`}>
                  {metric.with}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Callout */}
          <div className="mt-8 bg-accent/10 border border-accent/20 rounded-xl p-6 md:p-8 text-center">
            <p className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
              That's an extra <span className="text-accent">$81,600 per year</span> from the same ad spend.
            </p>
            <p className="text-muted-foreground text-lg">
              The system pays for itself in week one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
