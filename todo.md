# Narayani Water Park Website - Complete Task Checklist (todo.md)

This document tracks all the requirements discussed and features built from the beginning of the project up to now.

## ✅ Completed Tasks (Ho Gaye Hai)

### 1. UI & Architecture (Design)
- [x] Create a completely responsive and modern layout (Desktop & Mobile).
- [x] Implement a preloader with water drops and the main logo.
- [x] Build an English/Hindi language toggle switch (working dynamically).
- [x] Implement slow and smooth scroll reveal animations (Fade & slide up).
- [x] Fix mobile height constraints (ensure no squished sections).

### 2. Main Sections (Content)
- [x] **Hero Section**: Responsive image slider, modern translucent UI overlays, and Grand Reopening badge.
- [x] **Countdown Timer**: 15th March 2026 Grand Reopening counter layout.
- [x] **About Us**: Contact info (Pipra Road, Bettiah), timings, and key feature icons.
- [x] **Rides Section**: All slides (Wave pool, Giant water slides, lazy river, etc.) with proper image handling.

### 3. Special Features & Media
- [x] **Gallery Section**: Advanced unified slider displaying both Images and auto-mute/autoplay Videos correctly with thumbnails.
- [x] **Special Event**: April 2nd Event (Mahi & Manisha) Promotional Banner, section details, and pricing integration.

### 4. Dynamic Booking & Pricing System
- [x] Custom Booking Modal triggering properly from "Book Now" buttons.
- [x] Date Picker input to dynamically check the day of the week.
- [x] Auto pricing calculation: Weekday (₹400), Weekend (₹500), and Special Event day (₹500).
- [x] Ticket counters (+/- buttons) for Adult, Child, and Senior tickets.
- [x] Integration layout for WhatsApp booking generation.

### 5. Contact & Map Integrations
- [x] Dynamic Google Maps iframe (Modified src point so "Bettiah" text is hidden from the marker).
- [x] WhatsApp Floating Action Button & direct chat links configured for +91 8434057242.
- [x] Contact Form UI designed successfully.

---

## ⏳ Pending / Remaining Tasks (Baki Hai)

### 1. UI & Design Fixes
- [x] **Remove Wix:** Ensure no Wix elements or branding exist in the project.
- [x] **Special Event Stripe Fix:** Fix the issue where the special event stripe hides the home/about/rides sections.
- [x] **Countdown Popup:** Make the "Grand Reopening — March 15, 2026" countdown a front popup that the user can close, and ensure it doesn't appear after the opening date.
- [x] **Text Correction:** Change "Narayani" to "Narayani Waterpark" everywhere.
- [x] **Logo Visibility:** Fix the logo visibility issue where it hides behind the theme. Ensure the original logo file remains untouched.
- [x] **Glimpse of the Park (Gallery):** Highlight the text "Glimpse of the Park". Try to stabilize the shaky videos if possible, and ensure photos/videos autoplay and have a slide option to view the next one.
- [x] **Mobile Experience:** Ensure the website is highly mobile-friendly and provides the best experience on mobile.

### 2. Booking & Pricing Adjustments
- [x] **Pricing Fix:** Remove the ₹200 children ticket. All tickets (adult, child, senior) should follow the same rate: ₹400 for Weekdays and ₹500 for Weekends. Start booking from today.
- [x] **Booking Proof:** Design a mechanism for what proof the user gets when a booking is done (e.g., ticket generation, email/whatsapp confirmation).

### 3. Content Updates
- [x] **Event Details:** Update the April 2nd event. It is not a "Bollywood Night". Mahi & Manisha are Instagram influencers coming for promotion during waterpark timings (dance, etc.).

### 4. Backend & Integrations
- [x] **Contact Form:** Update the "Get In Touch With Us" form to send messages directly to `krishna.sangam11@gmail.com` without the user knowing where it's sent.
- [x] **PayU Setup:** Integrate PayU using the provided credentials (Salt 32-bit, Salt 256-bit, Key: `zsVvWA`, Client ID, and Client Secret). The backend needs to generate the PayU hash using these credentials for actual payment processing.

### 5. Review & Final Polish
- [x] **Developer Perspective:** Ensure the website is optimally responsive, alive, and the ultimate waterpark website based on all provided details and credentials.
- [x] **Customer Perspective:** Ensure the UX is flawless and everything a customer needs is easily accessible without issues.

### 6. Deployment & Domain
- [x] **Wix Domain Connection:** Provide instructions on how to connect the existing Wix domain to the new custom codebase hosting.
