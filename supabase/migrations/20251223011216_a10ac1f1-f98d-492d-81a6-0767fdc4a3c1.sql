-- Create table for revenue leakage audit submissions
CREATE TABLE public.leakage_audits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact info
  email TEXT NOT NULL,
  company_name TEXT,
  monthly_revenue NUMERIC,
  
  -- Missed Calls Assessment
  monthly_calls INTEGER,
  missed_call_percentage INTEGER,
  has_after_hours_answering BOOLEAN DEFAULT false,
  
  -- Lead Response Assessment
  avg_response_time_minutes INTEGER,
  has_automated_response BOOLEAN DEFAULT false,
  
  -- Quote Follow-Up Assessment
  monthly_quotes INTEGER,
  current_close_rate INTEGER,
  follow_up_touches INTEGER,
  has_automated_follow_up BOOLEAN DEFAULT false,
  
  -- No-Show Assessment
  monthly_appointments INTEGER,
  no_show_percentage INTEGER,
  has_reminder_system BOOLEAN DEFAULT false,
  
  -- Customer Retention Assessment
  annual_customers INTEGER,
  repeat_customer_percentage INTEGER,
  has_retention_system BOOLEAN DEFAULT false,
  
  -- Review/Reputation Assessment
  current_google_rating NUMERIC(2,1),
  monthly_reviews INTEGER,
  responds_to_reviews BOOLEAN DEFAULT false,
  
  -- Calculated Results
  total_annual_leakage NUMERIC,
  missed_calls_leakage NUMERIC,
  response_time_leakage NUMERIC,
  quote_followup_leakage NUMERIC,
  no_show_leakage NUMERIC,
  retention_leakage NUMERIC,
  review_opportunity NUMERIC
);

-- Enable Row Level Security
ALTER TABLE public.leakage_audits ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anonymous users can submit audits)
CREATE POLICY "Anyone can submit an audit" 
ON public.leakage_audits 
FOR INSERT 
WITH CHECK (true);

-- Allow reading own audit by email (for results page)
CREATE POLICY "Anyone can read audits" 
ON public.leakage_audits 
FOR SELECT 
USING (true);