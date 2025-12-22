import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How long does it take to set up?",
    answer: "14 days from kickoff. You keep running your business while we build everything. Most clients see results within the first week once it's live.",
  },
  {
    question: "Do you run our ads?",
    answer: "This system focuses on what happens AFTER the lead comes in. We can help with ad creative and positioning, and offer ad management as a separate service if needed.",
  },
  {
    question: "What if I'm not running ads yet?",
    answer: "If you're planning to start soon, we can build the backend first. In fact, that's the smart way — have the system ready before you turn on ad spend.",
  },
  {
    question: "What's the investment?",
    answer: "Depends on your situation. Setup typically ranges from $2,500-$4,500 with monthly support. We'll give you exact pricing on the strategy call.",
  },
  {
    question: "What if it doesn't work?",
    answer: "We track everything — response times, conversion rates, retention metrics. You'll see the numbers every week. If something isn't working, we fix it.",
  },
  {
    question: "What tech/software do I need?",
    answer: "We build on GoHighLevel and integrate with your existing systems. ServiceTitan, Jobber, Housecall Pro — we work with all of them. No need to switch anything.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent py-5 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
