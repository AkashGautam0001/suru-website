# Suru Design — React + Tailwind CSS

A fully converted React.js + Tailwind CSS version of the Suru Design portfolio/landing page.

---

## 📁 Project Structure

```
suru-design/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed top nav with mobile hamburger menu
│   │   ├── Hero.jsx            # Hero section with avatar, headline, CTA, stats
│   │   ├── TrustedBy.jsx       # Animated marquee of client logos
│   │   ├── UXProblems.jsx      # Tabbed problem cards (Startup / Running Product)
│   │   ├── WhatIOffer.jsx      # Process cards (01–05) with colored shadows
│   │   ├── About.jsx           # Green about section with tools bar
│   │   ├── Portfolio.jsx       # Portfolio grid with tall card layout
│   │   ├── CTABanner.jsx       # Pink CTA banner
│   │   ├── Testimonials.jsx    # Testimonial cards grid
│   │   ├── HowItWorks.jsx      # 4-step process with icon cards
│   │   ├── Services.jsx        # 6 service cards (4+2 layout)
│   │   ├── DevPartner.jsx      # JPR Technology partner banner
│   │   ├── FAQ.jsx             # Accordion FAQ with left/right layout
│   │   ├── Contact.jsx         # Dark contact form with validation
│   │   └── Footer.jsx          # Footer with links and S-U-R-U tagline
│   ├── pages/
│   │   ├── HomePage.jsx        # Assembles all sections
│   │   └── PortfolioPage.jsx   # Dedicated /portfolio route
│   ├── hooks/
│   │   └── useScrollAnimation.js  # IntersectionObserver fade-in hook
│   ├── data/
│   │   └── siteData.js         # All content data (nav, problems, services, FAQs, etc.)
│   ├── App.jsx                 # Router with routes
│   ├── index.js                # React entry point
│   └── index.css               # Tailwind directives + global styles
├── tailwind.config.js          # Custom colors, fonts, animations
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
```

---

## 🎨 Design Tokens (tailwind.config.js)

| Token | Value | Usage |
|-------|-------|-------|
| `sky` | `#e5f4fa` | Page background |
| `green` | `#00c57e` | Primary CTA, labels |
| `green.light` | `#44d557` | Process card accent |
| `pink` | `#ec74e8` | Accent, hero highlight |
| `yellow` | `#ffc858` | Stars, process card 4 |
| `blue` | `#6198ff` | Testimonial roles, process card 2 |
| `dark` | `#2b2b2b` | Contact bg, dark buttons |
| `lightBlue` | `#f1fbff` | Process card backgrounds |
| `textDark` | `#353638` | Body text |

---

## 📦 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage` | Full landing page |
| `/portfolio` | `PortfolioPage` | All case studies |

---

## ✏️ Customisation

- **Content**: Edit `src/data/siteData.js` to update all text, cards, FAQs, testimonials
- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Fonts**: Replace `Poppins` in `public/index.html` and `tailwind.config.js`
- **Avatar / Images**: Replace the emoji placeholders in `Hero.jsx` and `About.jsx` with `<img>` tags pointing to your assets

---

## 📌 Notes

- All scroll-triggered animations use the `useScrollAnimation` hook (IntersectionObserver)
- The marquee animation is pure CSS via Tailwind's `animate-marquee` utility
- Contact form has client-side validation and a success state
- Fully responsive — mobile menu opens at `md` breakpoint (768px)
