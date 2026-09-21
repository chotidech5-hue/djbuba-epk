# DJ Buba EPK

Create a modern, high-end, dark-mode Electronic Press Kit (EPK) web page for a professional DJ named "DJ BUBA". 

### 1. Visual & Aesthetic Guidelines
- **Theme:** Dark mode, luxury nightlife aesthetic (deep dark background #121212 or #0A0A0A with glowing white, subtle neon, or metallic accents).
- **Typography:** Bold, clean, sans-serif headers (uppercase for titles) with high scannability.
- **Layout:** Fully responsive, mobile-first design, single-page EPK with smooth scroll animations. Use clean cards, grid structures, and modern dividers.

### 2. Header Section
- **Artist Name:** DJ BUBA (Large bold text)
- **Tagline:** HARMONY, GROOVE & SEAMLESS FLOW
- **Genres / Style Badges:** Afro House, Melodic House & Techno, Progressive House, Indie Dance.

### 3. Biography Section
- **Title:** BIOGRAPHY
- **Body Text:**
"DJ Buba brings a uniquely sophisticated approach to the decks, backed by 6 years of professional DJing experience—including 4 years deeply rooted in Koh Samui’s thriving music scene. Having played bass guitar in a band from the age of 15, his comprehensive mastery of music theory and harmonic composition sets him apart in the modern electronic scene. Combining this technical precision with years of active performance, Buba is renowned for crafting flawlessly smooth, harmonically aligned transitions that make multiple tracks feel like one continuous, evolving journey.

For Buba, DJing goes far beyond simply playing tracks—it is about curating emotions, transmitting raw energy, and shaping the energy of the dancefloor with absolute intention."

### 4. Residencies Section (Two-Column Layout / Grid)
- **Current Residencies:**
  * **Ark Bar Beach Club** – Koh Samui’s legendary, world-famous beachfront party landmark.
  * **Love Beach Club** – The island’s premier beachfront venue known for pool parties and luxury vibes.
  * **CU Club & Restaurant** – Chaweng’s ultimate hotspot for authentic underground house and techno.
  * **Lub d Koh Samui** – Award-winning social beachfront destination featuring a world-class infinity pool.
- **Past Residencies:**
  * **Cabanas** – Premium 5-star beachfront hotel and luxury beach club in the heart of Chaweng.
  * **Socialtel** – Vibrant, social-first party hotel catering to a modern, lifestyle-driven global crowd.
  * **The Green Mango Club** – Chaweng’s legendary nightlife epicenter and iconic clubbing institution.

### 5. Media & Demo Section (Embedded Players & Media Cards)
- **Title:** LISTEN / DEMO SETS
- **Embed 1 (Hearthis.at Player):** Embed an iframe for this track:
  `<iframe scrolling="no" style="border-radius: 10px;" id="hearthis_at_track_14520297" width="100%" height="150" src="https://app.hearthis.at/embed/14520297/transparent_black/?hcolor=&color=&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css=" frameborder="0" allowtransparency allow="autoplay"></iframe>`
- **Audio Stream 2 (Direct Audio Player):** Create a stylish custom audio player card labeled "Demo Afro House (Emotional African Afro Sunset)" playing from:
  `https://www.dropbox.com/scl/fi/l5w92t8wh0r2nkjor9eix/Recomend-Afro-house-demo-Emotional-African-afro-sunset.wav?rlkey=k68qr257felbbcues1jkxreq6&st=mjgfo35l&raw=1`
- **More Demos Button:** A sleek CTA button linking to the full Dropbox folder:
  `https://www.dropbox.com/scl/fo/ypk1ftfjqdb2m8o56tg4l/APpEJzhXPxqDs7dK-ptQaoM?rlkey=kkhqlh061isu3pp5s9u5xnx38&st=hrl2jl7z&dl=0` (Label: "Explore Full Demo Folder")

### 6. Booking & Contact Footer
- **Title:** BOOKINGS & CONTACT
- **Tagline:** "From mainstage beach energy to deep underground club nights, DJ Buba continuously delivers unforgettable soundscapes through precision, passion, and pure musicality."
- **Contact Details (Interactive Links):**
  * WhatsApp: +66 970745261 (Link: `https://wa.me/66970745261`)
  * Instagram: @bubaknow.wav (Link: `https://instagram.com/bubaknow.wav`)
  * Email: Chotidech.y@gmail.com (Link: `mailto:Chotidech.y@gmail.com`)

เดียวจะแนบรูป ให้อีกรอบ

## Live site

The EPK page is published with GitHub Pages: **https://chotidech5-hue.github.io/djbuba-epk/**

Its source is the standalone page in `public/epk/` (`index.html` plus `images/`) — no build step involved. `.github/workflows/pages.yml` republishes it on every push to `main`, so editing that folder and pushing is all it takes to update the live page. To check it locally, open `public/epk/index.html` in a browser.

## Development

You need Node.js 22+ and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone https://github.com/chotidech5-hue/djbuba-epk.git
cd djbuba-epk
npm install
npm run dev
```

The dev server runs on http://localhost:8080. `npm run build` produces a self-contained server bundle in `.output/` (Nitro), and `npm run preview` serves the build locally.
