import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AuditReportRequest {
  email: string;
  company_name: string;
  results: {
    missed_calls_leakage: number;
    response_time_leakage: number;
    quote_followup_leakage: number;
    no_show_leakage: number;
    retention_leakage: number;
    review_opportunity: number;
    total_annual_leakage: number;
  };
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

const getPriorityLabel = (priority: number) => {
  if (priority === 1) return "🔴 CRITICAL - Fix First";
  if (priority === 2) return "🟠 HIGH - Fix Second";
  if (priority === 3) return "🟡 MEDIUM - Fix Third";
  return "🟢 LOW - Optimize Later";
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-audit-report function");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, company_name, results }: AuditReportRequest = await req.json();
    console.log(`Sending audit report to ${email} for ${company_name}`);

    // Sort by leakage amount to determine priority
    const leakageItems = [
      { label: "Missed Calls", value: results.missed_calls_leakage, color: "#ef4444" },
      { label: "Slow Response Time", value: results.response_time_leakage, color: "#f97316" },
      { label: "Quote Follow-Up Failure", value: results.quote_followup_leakage, color: "#eab308" },
      { label: "Appointment No-Shows", value: results.no_show_leakage, color: "#a855f7" },
      { label: "Lost Customer Retention", value: results.retention_leakage, color: "#22c55e" },
      { label: "Review/Reputation Gap", value: results.review_opportunity, color: "#f59e0b" },
    ].sort((a, b) => b.value - a.value);

    const leakageRows = leakageItems.map((item, idx) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e5e5;">
          <span style="font-weight: 600;">${getPriorityLabel(idx + 1)}</span>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; color: ${item.color}; font-weight: 600;">
          ${item.label}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; text-align: right; font-weight: 700; color: #dc2626;">
          ${formatCurrency(item.value)}/yr
        </td>
      </tr>
    `).join("");

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Your Revenue Leakage Audit Report</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px;">📊 Revenue Leakage Report</h1>
          <p style="color: #94a3b8; margin-top: 10px; font-size: 14px;">for ${company_name || "Your Business"}</p>
        </div>

        <!-- Total Leakage -->
        <div style="background: #fef2f2; border: 2px solid #dc2626; margin: 20px; padding: 30px; border-radius: 12px; text-align: center;">
          <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">Total Annual Revenue Leakage</p>
          <p style="color: #dc2626; font-size: 48px; font-weight: 800; margin: 10px 0;">${formatCurrency(results.total_annual_leakage)}</p>
          <p style="color: #6b7280; font-size: 14px; margin: 0;">per year in recoverable revenue</p>
        </div>

        <!-- Priority Breakdown -->
        <div style="padding: 20px 30px;">
          <h2 style="color: #1a1a2e; font-size: 20px; margin-bottom: 15px;">Priority Breakdown (Fix in This Order):</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f8fafc;">
                <th style="padding: 10px; text-align: left; font-size: 12px; color: #6b7280;">PRIORITY</th>
                <th style="padding: 10px; text-align: left; font-size: 12px; color: #6b7280;">LEAK TYPE</th>
                <th style="padding: 10px; text-align: right; font-size: 12px; color: #6b7280;">LOSS</th>
              </tr>
            </thead>
            <tbody>
              ${leakageRows}
            </tbody>
          </table>
        </div>

        <!-- CTA -->
        <div style="padding: 30px; background: #f0f9ff; text-align: center;">
          <h3 style="color: #1a1a2e; margin: 0 0 10px;">Ready to Stop the Bleeding?</h3>
          <p style="color: #6b7280; margin: 0 0 20px; font-size: 14px;">Book a free strategy call and we'll build a custom plan to recover your ${formatCurrency(results.total_annual_leakage)}.</p>
          <a href="https://link.msgsndr.divineacquisition.io/widget/booking/8HRU6QplAvtDfVINjDbk" style="display: inline-block; background: #6366f1; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600;">Book Your Strategy Call →</a>
        </div>

        <!-- Footer -->
        <div style="padding: 20px 30px; background: #1a1a2e; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">© 2024 DivineAcquisition. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "DivineAcquisition <onboarding@resend.dev>",
      to: [email],
      subject: `Your Revenue Leakage Report: ${formatCurrency(results.total_annual_leakage)} in Annual Losses Found`,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-audit-report function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
