

# Refocus Funnel on Lead Conversion Systems

## What changes

Update all copy across the landing page to shift the messaging from "past customer reactivation" to "converting more of the leads you're already getting into booked, paying jobs."

## Hero Section (`src/components/HeroSection.tsx`)

1. **Top banner**: "For Home Service Companies Tired Of Losing Leads They Already Paid For"
2. **Badge**: "FREE LEAD CONVERSION AUDIT" (replaces "FREE GROWTH BLUEPRINT")
3. **Headline**: "You're Paying For Leads. We Make Sure They Actually Convert." + accent span: "More Booked Jobs In 21 Days — Guaranteed."
4. **Subheadline**: "For home service companies doing $15K+/month — we install AI-powered systems that answer every call, follow up on every quote, and turn more leads into paying jobs."
5. **Proof line**: "Our clients see 2-3x more leads convert to booked appointments within the first 30 days — without spending more on ads."
6. **Calendar heading**: "Book Your Free Lead Conversion Audit" (replaces "Growth Audit")

## Meta / SEO (`src/pages/Index.tsx`)

Update `<title>` and meta descriptions to reflect lead conversion positioning instead of "recurring customers."

## Other sections (already in codebase but not currently rendered on Index)

No changes needed to ProblemSection, SolutionSection, etc. — they already align with lead conversion. These can be added back to the page later if desired.

## Technical details

- Only two files modified: `HeroSection.tsx` and `Index.tsx`
- No structural, layout, or component changes — copy-only updates
- Calendar embed and all integrations remain unchanged

