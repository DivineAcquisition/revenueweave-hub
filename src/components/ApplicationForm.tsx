import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    phone: "",
    email: "",
    businessType: "",
    monthlyRevenue: "",
    teamSize: "",
    runningAds: "",
    biggestChallenge: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    setFormData({
      companyName: "",
      yourName: "",
      phone: "",
      email: "",
      businessType: "",
      monthlyRevenue: "",
      teamSize: "",
      runningAds: "",
      biggestChallenge: "",
    });
  };

  return (
    <section id="apply" className="py-20 md:py-28 px-4 section-alt">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            See If You <span className="text-accent">Qualify</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Takes 60 seconds. We only work with companies we can actually help.
          </p>
        </div>
        
        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Your Company LLC"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  required
                />
              </div>
              
              {/* Your Name */}
              <div className="space-y-2">
                <Label htmlFor="yourName">Your Name</Label>
                <Input
                  id="yourName"
                  placeholder="John Smith"
                  value={formData.yourName}
                  onChange={(e) => handleInputChange("yourName", e.target.value)}
                  required
                />
              </div>
              
              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              
              {/* Business Type */}
              <div className="space-y-2">
                <Label>Business Type</Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => handleInputChange("businessType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hvac">HVAC</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Monthly Revenue */}
              <div className="space-y-2">
                <Label>Monthly Revenue</Label>
                <Select
                  value={formData.monthlyRevenue}
                  onValueChange={(value) => handleInputChange("monthlyRevenue", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under15k">{"<$15K"}</SelectItem>
                    <SelectItem value="15-25k">$15K - $25K</SelectItem>
                    <SelectItem value="25-50k">$25K - $50K</SelectItem>
                    <SelectItem value="50-100k">$50K - $100K</SelectItem>
                    <SelectItem value="100-250k">$100K - $250K</SelectItem>
                    <SelectItem value="250k+">$250K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Team Size */}
              <div className="space-y-2">
                <Label>Team Size</Label>
                <Select
                  value={formData.teamSize}
                  onValueChange={(value) => handleInputChange("teamSize", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Just me</SelectItem>
                    <SelectItem value="2-5">2-5</SelectItem>
                    <SelectItem value="6-10">6-10</SelectItem>
                    <SelectItem value="11-20">11-20</SelectItem>
                    <SelectItem value="20+">20+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Running Ads */}
              <div className="space-y-2">
                <Label>Running Ads?</Label>
                <Select
                  value={formData.runningAds}
                  onValueChange={(value) => handleInputChange("runningAds", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes-consistent">Yes - consistently</SelectItem>
                    <SelectItem value="yes-onoff">Yes - on/off</SelectItem>
                    <SelectItem value="no-planning">No - but planning to</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Biggest Challenge */}
              <div className="space-y-2 md:col-span-2">
                <Label>Biggest Challenge</Label>
                <Select
                  value={formData.biggestChallenge}
                  onValueChange={(value) => handleInputChange("biggestChallenge", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your biggest challenge" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="missing-calls">Missing calls & leads</SelectItem>
                    <SelectItem value="converting-quotes">Converting quotes to jobs</SelectItem>
                    <SelectItem value="no-retention">No customer retention</SelectItem>
                    <SelectItem value="reviews">Getting more reviews</SelectItem>
                    <SelectItem value="all">All of the above</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="mt-8">
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Get My Custom Plan
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
