
# Simplify Landing Page to Match Reference Design

## Overview
Strip down the landing page to a clean, focused layout matching the screenshot: top banner, logo, badge, headline, subheadline, new VSL video, calendar booking section, and a simple footer with disclaimer.

## What Changes

### 1. Simplify Index.tsx
Remove all middle sections (ProblemSection, SolutionSection, ROISection, QualificationSection, ProcessSection, FAQSection, FinalCTASection, CalendarSection). The page will only have:
- HeroSection (rebuilt)
- Footer (updated)

### 2. Rebuild HeroSection.tsx
Replace the current hero with this layout from top to bottom:

- **Top Banner**: Purple/accent bar with text: "For Residential Or Remote Cleaning Businesses Ready To Reach The Next Level"
- **Logo**: Existing DivineAcquisition logo, centered
- **Badge**: A small pill/badge saying "FREE GROWTH BLUEPRINT" with a star icon
- **Headline**: "We Will Help You Get More Jobs & Turn Finished Jobs Into More Referrals & Recurring Jobs"
- **Subheadline**: "We install AI-powered booking + follow-up + retention systems for home service businesses, so you stop chasing leads and start building a real operation."
- **New Wistia VSL**: Replace old video (o2tstyl6cj) with new one (media-id: 39m0mb8bqn)
- **Calendar Section**: New heading "Book Your Growth Audit Here" with subtext "WE DON'T DO SPAM HERE. But Be Prepared I Will Be Calling You To Learn More About Your Business. Don't Book A Call If You Aren't Serious About Your Business Growth"
- **New iClosed Widget**: Updated URL to `https://app.iclosed.io/e/vistrial/growth-audit` with title "Growth Audit"

### 3. Update Footer
- Center the logo icon
- Update copyright text
- Add Facebook disclaimer text: "This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. We use cookies, including third-party cookies, on this website to help operate our site and for analytics and advertising purposes."

## Technical Details

### Files Modified
- `src/pages/Index.tsx` -- Remove all sections except HeroSection and Footer
- `src/components/HeroSection.tsx` -- Complete rebuild with new layout, new video embed, new calendar embed, top banner
- `src/components/Footer.tsx` -- Add centered logo + disclaimer text

### Files NOT Modified (but no longer imported in Index.tsx)
- ProblemSection, SolutionSection, ROISection, QualificationSection, ProcessSection, FAQSection, FinalCTASection, CalendarSection -- These files remain but are simply not rendered on the page anymore

### Embed Updates
- **Wistia**: Old `o2tstyl6cj` replaced with `39m0mb8bqn`
- **iClosed**: Old `divineacquisitionn/homeservice` replaced with `vistrial/growth-audit`, title changed to "Growth Audit"
