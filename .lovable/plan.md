

# SDR Booking Pages with Dynamic Slugs

## Overview
Create two new pages for your SDR team — one with the iClosed calendar (cold leads) and one with the GHL calendar (warm leads). Each page URL includes the SDR's name so you can track who set each call.

## URL Structure
- **Cold leads (iClosed):** `/sdr/:sdrName/cold`  
  Example: `/sdr/john/cold`, `/sdr/sarah/cold`
- **Warm leads (GHL):** `/sdr/:sdrName/warm`  
  Example: `/sdr/john/warm`, `/sdr/sarah/warm`

The SDR name from the URL will be displayed on the page so leads see a personalized touch (e.g., "Booked via John").

## Pages Created

### 1. Cold Lead Page (`src/pages/SdrCold.tsx`)
- Clean, focused layout with logo and headline
- Headline: "Let's See How We Can Help You Grow"
- Subtext encouraging them to pick a time
- iClosed calendar widget embedded
- SDR name extracted from URL and shown subtly (e.g., "Scheduled by [SDR Name]")
- Footer included

### 2. Warm Lead Page (`src/pages/SdrWarm.tsx`)
- Same clean layout
- Headline: "You're One Call Away From Scaling Your Business"
- GHL booking iframe embedded (same as main page)
- SDR name extracted from URL and shown
- Footer included

### 3. Route Registration (`src/App.tsx`)
- Add two new routes:
  - `/sdr/:sdrName/cold` → `SdrCold`
  - `/sdr/:sdrName/warm` → `SdrWarm`

## Technical Details

### Files Created
- **`src/pages/SdrCold.tsx`** — Uses `useParams()` to read `:sdrName`, loads iClosed widget script, renders iClosed calendar
- **`src/pages/SdrWarm.tsx`** — Uses `useParams()` to read `:sdrName`, loads GHL form_embed.js script, renders GHL iframe

### Files Modified
- **`src/App.tsx`** — Import both new pages and add the two `/sdr/:sdrName/cold` and `/sdr/:sdrName/warm` routes

### How SDR Identification Works
- The SDR name is part of the URL path, so when a lead books, you can see which link they came from
- The SDR name is also capitalized and displayed on the page for a personal touch
- You simply share the right link with each SDR (e.g., give John the link `/sdr/john/cold`)

