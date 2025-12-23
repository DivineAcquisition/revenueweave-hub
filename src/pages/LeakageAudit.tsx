import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, Phone, Clock, FileText, Calendar, Users, Star, CheckCircle, AlertTriangle } from "lucide-react";

interface AuditData {
  email: string;
  company_name: string;
  monthly_revenue: number;
  // Missed Calls
  monthly_calls: number;
  missed_call_percentage: number;
  has_after_hours_answering: boolean;
  // Lead Response
  avg_response_time_minutes: number;
  has_automated_response: boolean;
  // Quote Follow-Up
  monthly_quotes: number;
  current_close_rate: number;
  follow_up_touches: number;
  has_automated_follow_up: boolean;
  // No-Shows
  monthly_appointments: number;
  no_show_percentage: number;
  has_reminder_system: boolean;
  // Retention
  annual_customers: number;
  repeat_customer_percentage: number;
  has_retention_system: boolean;
  // Reviews
  current_google_rating: number;
  monthly_reviews: number;
  responds_to_reviews: boolean;
}

interface LeakageResults {
  missed_calls_leakage: number;
  response_time_leakage: number;
  quote_followup_leakage: number;
  no_show_leakage: number;
  retention_leakage: number;
  review_opportunity: number;
  total_annual_leakage: number;
}

const initialData: AuditData = {
  email: "",
  company_name: "",
  monthly_revenue: 50000,
  monthly_calls: 200,
  missed_call_percentage: 27,
  has_after_hours_answering: false,
  avg_response_time_minutes: 60,
  has_automated_response: false,
  monthly_quotes: 50,
  current_close_rate: 20,
  follow_up_touches: 1,
  has_automated_follow_up: false,
  monthly_appointments: 80,
  no_show_percentage: 25,
  has_reminder_system: false,
  annual_customers: 500,
  repeat_customer_percentage: 15,
  has_retention_system: false,
  current_google_rating: 4.0,
  monthly_reviews: 2,
  responds_to_reviews: false,
};

const LeakageAudit = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<AuditData>(initialData);
  const [results, setResults] = useState<LeakageResults | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const totalSteps = 8;
  const progress = ((step + 1) / totalSteps) * 100;

  const calculateLeakage = (auditData: AuditData): LeakageResults => {
    const avgJobValue = auditData.monthly_revenue / (auditData.monthly_appointments || 80);
    
    // Missed Calls Leakage
    const missedCalls = (auditData.monthly_calls * auditData.missed_call_percentage) / 100;
    const lostOpportunities = missedCalls * 0.85; // 85% won't call back
    const missed_calls_leakage = lostOpportunities * avgJobValue * 12;

    // Response Time Leakage (conversion drops 80% after 5 minutes)
    let responseMultiplier = 1;
    if (auditData.avg_response_time_minutes > 5) responseMultiplier = 0.2;
    if (auditData.avg_response_time_minutes > 30) responseMultiplier = 0.1;
    if (auditData.avg_response_time_minutes > 60) responseMultiplier = 0.05;
    const potentialLeadsLost = auditData.monthly_calls * (1 - responseMultiplier) * 0.3;
    const response_time_leakage = potentialLeadsLost * avgJobValue * 12;

    // Quote Follow-Up Leakage
    const currentCloses = (auditData.monthly_quotes * auditData.current_close_rate) / 100;
    const potentialCloseRate = Math.min(40, auditData.current_close_rate + (7 - auditData.follow_up_touches) * 3);
    const potentialCloses = (auditData.monthly_quotes * potentialCloseRate) / 100;
    const quote_followup_leakage = (potentialCloses - currentCloses) * avgJobValue * 12;

    // No-Show Leakage
    const noShows = (auditData.monthly_appointments * auditData.no_show_percentage) / 100;
    const recoverableNoShows = auditData.has_reminder_system ? noShows * 0.1 : noShows * 0.9;
    const no_show_leakage = recoverableNoShows * avgJobValue * 12;

    // Retention Leakage
    const currentRepeat = (auditData.annual_customers * auditData.repeat_customer_percentage) / 100;
    const potentialRepeat = auditData.annual_customers * 0.45; // 45% with system
    const retention_leakage = (potentialRepeat - currentRepeat) * avgJobValue;

    // Review Opportunity
    const ratingGap = 4.8 - auditData.current_google_rating;
    const review_opportunity = (ratingGap * 0.07 * auditData.monthly_revenue * 12) + 
      (auditData.responds_to_reviews ? 0 : auditData.monthly_revenue * 12 * 0.02);

    const total_annual_leakage = 
      missed_calls_leakage + 
      response_time_leakage + 
      quote_followup_leakage + 
      no_show_leakage + 
      retention_leakage + 
      review_opportunity;

    return {
      missed_calls_leakage: Math.round(missed_calls_leakage),
      response_time_leakage: Math.round(response_time_leakage),
      quote_followup_leakage: Math.round(quote_followup_leakage),
      no_show_leakage: Math.round(no_show_leakage),
      retention_leakage: Math.round(retention_leakage),
      review_opportunity: Math.round(review_opportunity),
      total_annual_leakage: Math.round(total_annual_leakage),
    };
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const leakageResults = calculateLeakage(data);
    
    try {
      const { error } = await supabase.from("leakage_audits").insert({
        email: data.email,
        company_name: data.company_name,
        monthly_revenue: data.monthly_revenue,
        monthly_calls: data.monthly_calls,
        missed_call_percentage: data.missed_call_percentage,
        has_after_hours_answering: data.has_after_hours_answering,
        avg_response_time_minutes: data.avg_response_time_minutes,
        has_automated_response: data.has_automated_response,
        monthly_quotes: data.monthly_quotes,
        current_close_rate: data.current_close_rate,
        follow_up_touches: data.follow_up_touches,
        has_automated_follow_up: data.has_automated_follow_up,
        monthly_appointments: data.monthly_appointments,
        no_show_percentage: data.no_show_percentage,
        has_reminder_system: data.has_reminder_system,
        annual_customers: data.annual_customers,
        repeat_customer_percentage: data.repeat_customer_percentage,
        has_retention_system: data.has_retention_system,
        current_google_rating: data.current_google_rating,
        monthly_reviews: data.monthly_reviews,
        responds_to_reviews: data.responds_to_reviews,
        ...leakageResults,
      });

      if (error) throw error;
      
      setResults(leakageResults);
      setStep(totalSteps - 1);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your audit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateData = (field: keyof AuditData, value: string | number | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Let's Start With Your Business
              </h2>
              <p className="text-muted-foreground">
                We need some basic info to calculate your revenue leakage.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => updateData("email", e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company_name">Company Name</Label>
                <Input
                  id="company_name"
                  value={data.company_name}
                  onChange={(e) => updateData("company_name", e.target.value)}
                  placeholder="Your Company"
                />
              </div>
              <div>
                <Label htmlFor="monthly_revenue">Average Monthly Revenue ($)</Label>
                <Input
                  id="monthly_revenue"
                  type="number"
                  value={data.monthly_revenue}
                  onChange={(e) => updateData("monthly_revenue", parseInt(e.target.value) || 0)}
                  placeholder="50000"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <Phone className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Missed Calls Assessment
              </h2>
              <p className="text-muted-foreground">
                27% of calls go unanswered. 85% of those callers never call back.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="monthly_calls">How many inbound calls do you get per month?</Label>
                <Input
                  id="monthly_calls"
                  type="number"
                  value={data.monthly_calls}
                  onChange={(e) => updateData("monthly_calls", parseInt(e.target.value) || 0)}
                />
              </div>
              <div>
                <Label htmlFor="missed_call_percentage">What % of calls do you estimate you miss?</Label>
                <Input
                  id="missed_call_percentage"
                  type="number"
                  value={data.missed_call_percentage}
                  onChange={(e) => updateData("missed_call_percentage", parseInt(e.target.value) || 0)}
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <Label>Do you have after-hours call answering?</Label>
                <RadioGroup
                  value={data.has_after_hours_answering ? "yes" : "no"}
                  onValueChange={(v) => updateData("has_after_hours_answering", v === "yes")}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="after_hours_yes" />
                    <Label htmlFor="after_hours_yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="after_hours_no" />
                    <Label htmlFor="after_hours_no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Lead Response Time
              </h2>
              <p className="text-muted-foreground">
                Leads contacted within 5 minutes are 21x more likely to convert.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="avg_response_time">Average time to respond to new leads (minutes)?</Label>
                <Input
                  id="avg_response_time"
                  type="number"
                  value={data.avg_response_time_minutes}
                  onChange={(e) => updateData("avg_response_time_minutes", parseInt(e.target.value) || 0)}
                />
              </div>
              <div>
                <Label>Do you have automated instant response for new leads?</Label>
                <RadioGroup
                  value={data.has_automated_response ? "yes" : "no"}
                  onValueChange={(v) => updateData("has_automated_response", v === "yes")}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="auto_response_yes" />
                    <Label htmlFor="auto_response_yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="auto_response_no" />
                    <Label htmlFor="auto_response_no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                <FileText className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Quote Follow-Up
              </h2>
              <p className="text-muted-foreground">
                80% of sales require 5-12 follow-up contacts. 48% of salespeople never follow up.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="monthly_quotes">How many quotes do you send per month?</Label>
                <Input
                  id="monthly_quotes"
                  type="number"
                  value={data.monthly_quotes}
                  onChange={(e) => updateData("monthly_quotes", parseInt(e.target.value) || 0)}
                />
              </div>
              <div>
                <Label htmlFor="current_close_rate">What is your current close rate (%)?</Label>
                <Input
                  id="current_close_rate"
                  type="number"
                  value={data.current_close_rate}
                  onChange={(e) => updateData("current_close_rate", parseInt(e.target.value) || 0)}
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <Label htmlFor="follow_up_touches">How many follow-up touches per quote?</Label>
                <Input
                  id="follow_up_touches"
                  type="number"
                  value={data.follow_up_touches}
                  onChange={(e) => updateData("follow_up_touches", parseInt(e.target.value) || 0)}
                  min="0"
                  max="12"
                />
              </div>
              <div>
                <Label>Do you have automated follow-up sequences?</Label>
                <RadioGroup
                  value={data.has_automated_follow_up ? "yes" : "no"}
                  onValueChange={(v) => updateData("has_automated_follow_up", v === "yes")}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="auto_followup_yes" />
                    <Label htmlFor="auto_followup_yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="auto_followup_no" />
                    <Label htmlFor="auto_followup_no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-purple-500" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Appointment No-Shows
              </h2>
              <p className="text-muted-foreground">
                Average no-show rate is 18-33%. Automated reminders reduce no-shows by up to 90%.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="monthly_appointments">How many appointments do you book per month?</Label>
                <Input
                  id="monthly_appointments"
                  type="number"
                  value={data.monthly_appointments}
                  onChange={(e) => updateData("monthly_appointments", parseInt(e.target.value) || 0)}
                />
              </div>
              <div>
                <Label htmlFor="no_show_percentage">What is your no-show rate (%)?</Label>
                <Input
                  id="no_show_percentage"
                  type="number"
                  value={data.no_show_percentage}
                  onChange={(e) => updateData("no_show_percentage", parseInt(e.target.value) || 0)}
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <Label>Do you have automated reminder systems?</Label>
                <RadioGroup
                  value={data.has_reminder_system ? "yes" : "no"}
                  onValueChange={(v) => updateData("has_reminder_system", v === "yes")}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="reminder_yes" />
                    <Label htmlFor="reminder_yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="reminder_no" />
                    <Label htmlFor="reminder_no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Customer Retention
              </h2>
              <p className="text-muted-foreground">
                It costs 5-7x more to acquire a new customer. 5% retention increase = 25-95% profit increase.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="annual_customers">How many customers do you serve per year?</Label>
                <Input
                  id="annual_customers"
                  type="number"
                  value={data.annual_customers}
                  onChange={(e) => updateData("annual_customers", parseInt(e.target.value) || 0)}
                />
              </div>
              <div>
                <Label htmlFor="repeat_customer_percentage">What % are repeat customers?</Label>
                <Input
                  id="repeat_customer_percentage"
                  type="number"
                  value={data.repeat_customer_percentage}
                  onChange={(e) => updateData("repeat_customer_percentage", parseInt(e.target.value) || 0)}
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <Label>Do you have a customer retention system?</Label>
                <RadioGroup
                  value={data.has_retention_system ? "yes" : "no"}
                  onValueChange={(v) => updateData("has_retention_system", v === "yes")}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="retention_yes" />
                    <Label htmlFor="retention_yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="retention_no" />
                    <Label htmlFor="retention_no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                <Star className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Reviews & Reputation
              </h2>
              <p className="text-muted-foreground">
                1-star rating increase = 5-9% revenue increase. 92% won't consider businesses below 4 stars.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="current_google_rating">Current Google rating (1-5)</Label>
                <Input
                  id="current_google_rating"
                  type="number"
                  step="0.1"
                  value={data.current_google_rating}
                  onChange={(e) => updateData("current_google_rating", parseFloat(e.target.value) || 0)}
                  min="1"
                  max="5"
                />
              </div>
              <div>
                <Label htmlFor="monthly_reviews">How many new reviews do you get per month?</Label>
                <Input
                  id="monthly_reviews"
                  type="number"
                  value={data.monthly_reviews}
                  onChange={(e) => updateData("monthly_reviews", parseInt(e.target.value) || 0)}
                />
              </div>
              <div>
                <Label>Do you respond to all reviews?</Label>
                <RadioGroup
                  value={data.responds_to_reviews ? "yes" : "no"}
                  onValueChange={(v) => updateData("responds_to_reviews", v === "yes")}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="responds_yes" />
                    <Label htmlFor="responds_yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="responds_no" />
                    <Label htmlFor="responds_no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 7:
        const recommendations = [
          {
            label: "Missed Calls",
            value: results?.missed_calls_leakage || 0,
            icon: Phone,
            color: "text-red-500",
            bgColor: "bg-red-500/10",
            fixes: [
              "Implement 24/7 AI-powered call answering to capture every lead",
              "Set up instant SMS/email notifications for missed calls",
              "Create an after-hours voicemail-to-text system with auto-response",
              "Use call tracking to identify peak hours and staff accordingly",
            ],
          },
          {
            label: "Slow Response Time",
            value: results?.response_time_leakage || 0,
            icon: Clock,
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
            fixes: [
              "Deploy instant auto-responder SMS within 60 seconds of inquiry",
              "Set up automated email with next steps and booking link",
              "Implement lead routing to available team members in real-time",
              "Create templated responses for common inquiries to speed up reply time",
            ],
          },
          {
            label: "Quote Follow-Up Failure",
            value: results?.quote_followup_leakage || 0,
            icon: FileText,
            color: "text-yellow-500",
            bgColor: "bg-yellow-500/10",
            fixes: [
              "Build 7-touch automated follow-up sequence (Day 1, 2, 4, 7, 14, 21, 30)",
              "Include value-adds in follow-ups: testimonials, FAQs, case studies",
              "Add urgency triggers: limited-time pricing, seasonal discounts",
              "Implement CRM tagging to track quote status and trigger appropriate sequences",
            ],
          },
          {
            label: "Appointment No-Shows",
            value: results?.no_show_leakage || 0,
            icon: Calendar,
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            fixes: [
              "Send automated reminders: 48hrs, 24hrs, and 2hrs before appointment",
              "Require confirmation reply or one-click reschedule link",
              "Collect deposits or card-on-file for high-value appointments",
              "Implement easy self-service rescheduling to reduce ghosting",
            ],
          },
          {
            label: "Lost Customer Retention",
            value: results?.retention_leakage || 0,
            icon: Users,
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            fixes: [
              "Build automated reactivation campaigns at 30, 60, 90 day marks",
              "Create loyalty/referral program with rewards for repeat business",
              "Send personalized maintenance reminders based on service history",
              "Implement birthday/anniversary offers to stay top-of-mind",
            ],
          },
          {
            label: "Review/Reputation Gap",
            value: results?.review_opportunity || 0,
            icon: Star,
            color: "text-amber-500",
            bgColor: "bg-amber-500/10",
            fixes: [
              "Automate review requests via SMS/email post-service completion",
              "Respond to ALL reviews within 24 hours (positive and negative)",
              "Create a review response template library for consistency",
              "Implement review monitoring alerts for immediate reputation management",
            ],
          },
        ];

        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Your Revenue Leakage Report
              </h2>
              <p className="text-muted-foreground">
                Based on your answers, here's where you're losing money — and how to fix it.
              </p>
            </div>

            {results && (
              <>
                {/* Total Leakage Banner */}
                <div className="bg-destructive/10 border-2 border-destructive rounded-2xl p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">TOTAL ANNUAL REVENUE LEAKAGE</p>
                  <p className="font-display font-bold text-4xl md:text-5xl text-destructive">
                    {formatCurrency(results.total_annual_leakage)}
                  </p>
                  <p className="text-muted-foreground mt-2">per year in recoverable revenue</p>
                </div>

                {/* Detailed Breakdown with Recommendations */}
                <div className="space-y-6">
                  <h3 className="font-display font-semibold text-xl text-foreground">Breakdown & Fix Recommendations:</h3>
                  
                  {recommendations.map((item) => (
                    <div key={item.label} className={`${item.bgColor} border border-border rounded-2xl p-5`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                          <span className="font-semibold text-foreground text-lg">{item.label}</span>
                        </div>
                        <span className="font-bold text-destructive text-lg">{formatCurrency(item.value)}/yr</span>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">How to Fix:</p>
                        <ul className="space-y-2">
                          {item.fixes.map((fix, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{fix}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA with Calendar */}
                <div id="calendar-section" className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                  <AlertTriangle className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    Want Help Implementing These Fixes?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Book a free strategy call and we'll build a custom plan to recover your {formatCurrency(results.total_annual_leakage)}.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => {
                      document.getElementById("booking-calendar")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Book Your Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Embedded Calendar */}
                <div id="booking-calendar" className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-4 text-center">
                    Schedule Your Free Strategy Call
                  </h3>
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://calendly.com/divineacquisition/strategy-call"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      className="rounded-xl min-h-[600px]"
                    ></iframe>
                  </div>
                </div>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    if (step === 0) return data.email.includes("@");
    return true;
  };

  return (
    <>
      <Helmet>
        <title>Free Revenue Leakage Audit | DivineAcquisition</title>
        <meta
          name="description"
          content="Discover exactly where your home service business is losing money with our free 5-minute audit. Get actionable insights to stop revenue leakage."
        />
      </Helmet>

      <main className="min-h-screen bg-background pt-8 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              📊 Free Revenue Leakage Audit
            </h1>
            <p className="text-muted-foreground text-lg">
              Find out exactly how much money your business is losing — and how to fix it.
            </p>
          </div>

          {/* Progress Bar */}
          {step < totalSteps - 1 && (
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Step {step + 1} of {totalSteps - 1}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Form Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              {renderStep()}

              {/* Navigation */}
              {step < totalSteps - 1 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setStep((s) => s - 1)}
                    disabled={step === 0}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>

                  {step < totalSteps - 2 ? (
                    <Button onClick={() => setStep((s) => s + 1)} disabled={!canProceed()}>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} disabled={isSubmitting || !canProceed()}>
                      {isSubmitting ? "Calculating..." : "Get My Results"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LeakageAudit;
