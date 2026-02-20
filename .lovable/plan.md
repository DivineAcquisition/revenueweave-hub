
# Swap Main Page Calendar to GHL + Create Retargeting Page

## What's Changing

### 1. Main Landing Page (`/`) - Swap iClosed to GHL Calendar
Replace the iClosed widget in `HeroSection.tsx` with the GoHighLevel (MsgSndr) booking iframe:
- Remove the iClosed script loading from useEffect
- Replace the `<div class="iclosed-widget">` with the GHL iframe embed
- Load the GHL `form_embed.js` script instead of iClosed widget script

### 2. New Retargeting Page (`/retarget`)
Create a new page at `/retarget` that reuses the same layout style as the landing page but with:
- Same top banner, logo, badge
- A retargeting-specific headline (e.g. "Still Thinking? Let's Talk.")
- Brief subtext reinforcing the value
- The iClosed calendar widget (`divineacquisitionn/homeservice`) embedded below
- Footer with Facebook disclaimer

### 3. Add Route in App.tsx
Add `/retarget` route pointing to the new `Retarget.tsx` page.

## Technical Details

### Files Modified
- **`src/components/HeroSection.tsx`** - Replace iClosed widget with GHL iframe, update script loading
- **`src/App.tsx`** - Add `/retarget` route

### Files Created
- **`src/pages/Retarget.tsx`** - New retargeting page with iClosed calendar, same branding, retarget-focused copy
