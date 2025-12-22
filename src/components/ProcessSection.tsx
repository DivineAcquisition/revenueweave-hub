const steps = [
  {
    number: "1",
    title: "Apply Below",
    description: "Answer a few quick questions so we can see if you're a fit. Takes 60 seconds.",
  },
  {
    number: "2",
    title: "Strategy Call",
    description: "We'll map out exactly where you're losing leads and revenue — and show you how to fix it.",
  },
  {
    number: "3",
    title: "We Build It",
    description: "Your custom backend system goes live in 14 days. You keep running your business.",
  },
  {
    number: "4",
    title: "You Grow",
    description: "More leads become jobs. More jobs become repeat customers. Revenue becomes predictable.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
        </div>
        
        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                
                {/* Step Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-display font-bold text-2xl flex items-center justify-center mb-4 relative z-10">
                    {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
