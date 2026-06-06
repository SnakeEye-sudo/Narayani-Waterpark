# Narayani Waterpark — Bettiah

Official website for **Narayani Waterpark**, Bettiah — Bihar's first and largest water park.
A fast, mobile-friendly single-page website with rides showcase, photo & video gallery,
Google reviews, bilingual (English / Hindi) support, and contact form.

🌐 **Live site:** https://narayaniwaterpark.com

## Highlights

- 🎢 15+ rides & attractions section (Wave Pool, Water Slides, Rain Dance, Kids Zone, Lazy River, Family Pool)
- 🖼️ Combined photo + video gallery slider with thumbnails
- ⭐ Google reviews section
- 🌐 One-click English ⇄ Hindi language toggle
- 🌓 Light / dark theme
- 📱 Fully responsive with mobile bottom navigation
- 📞 WhatsApp & call shortcuts

## Tickets

**Entry: ₹400 per person — all days (Mon–Sun).**
Tickets are available at the **park counter only** (online booking is disabled).

- ⏰ Open daily: 10:00 AM – 6:00 PM
- 📍 Opp. R.L. International School, Pipra Road, Bettiah, West Champaran, Bihar – 845438
- 📞 +91 8434057242

## Project structure

```
website/
  index.html        # Main single-page site
  gallery.html      # Standalone gallery page
  success.html      # Booking/result pages
  failure.html
  verify.html       # Ticket verification page
  css/              # Stylesheets
  js/main.js        # Site behaviour (language, theme, gallery, modals)
  public_assets/    # Images, videos, logo & offer posters
  robots.txt
  sitemap.xml
netlify/functions/  # Serverless functions
supabase/           # Database config
```

## Local development

The site is static HTML/CSS/JS. To preview locally, serve the `website/` folder
with any static server, for example:

```bash
cd website
python3 -m http.server 8080
# then open http://localhost:8080
```

## License

© 2026 Narayani Waterpark, Bettiah. All rights reserved.
