

# Demo Breakdown Page for DivineAcquisition

## Overview
Create a new "Demo Breakdown" page at `/demo` that shows a video walkthrough and a CTA to book a call via an iClosed calendar modal. Adapted from the Selestial template to match DivineAcquisition's existing dark theme and branding.

## What Gets Built

### 1. New Page: `src/pages/PrepareCall.tsx`
- DivineAcquisition logo at the top
- Headline: "Demo Breakdown"
- Subheadline about the AI-powered booking/retention system demo
- Video player section (using an HTML5 `<video>` tag pointing to `public/videos/prepare-call.mp4` — you'll need to provide this file)
- CTA section with a "Book Your Demo Call" button that opens the calendar modal
- Note about receiving a text to customize setup before the call
- Footer included

### 2. New Component: `src/components/demo/BookCallModal.tsx`
- Dialog/modal using the existing shadcn Dialog component
- Loads iClosed calendar widget (`divineacquisitionn/homeservice`)
- Three value prop cards:
  - Optimized for Ad Traffic
  - Proven Partner Results
  - Built-in Retention Systems
- Uses a ref to prevent duplicate script loading (fixes the duplicate calendar bug mentioned)
- Styled with DivineAcquisition's existing card/border theme

### 3. CSS Addition: `glass-purple` class in `src/index.css`
- Glassmorphism effect with purple tint matching the brand accent color
- Used on value prop cards in the modal

### 4. Route: `/demo` added to `src/App.tsx`

## Files Created
- `src/pages/PrepareCall.tsx`
- `src/components/demo/BookCallModal.tsx`

## Files Modified
- `src/index.css` — add `.glass-purple` utility class
- `src/App.tsx` — import PrepareCall and add `/demo` route

## Note
You will need to place your demo video file at `public/videos/prepare-call.mp4`. The video player will show a fallback message if the file is missing.

