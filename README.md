# HUED — Multidisciplinary Design & Architecture Studio

A high-premium, international-caliber digital platform for **HUED** (Indore, India), founded in 2022 by **Ar. Kritika Khandelwal**. Built utilizing Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, GSAP, Framer Motion, and Lenis.

---

## 🏛️ ARCHITECTURE & ISLANDS ROUTING

The platform is designed following Next.js 16 App Router best practices, featuring a static-first, highly search-engine-optimized Server Component directory structure with client-side interactivity isolated into performance islands:

```text
├── app/
│   ├── layout.tsx         # Pure Server Component - Injecting Org/LocalBusiness JSON-LD
│   ├── page.tsx           # Pure Server Component - Home page
│   ├── sitemap.ts         # Prerenders both static routes and all dynamic monographs
│   ├── robots.ts          # Indexing robots configuration
│   ├── template.tsx       # Lightweight Slide-Fade route page transitions
│   ├── projects/
│   │   ├── page.tsx       # Pure Server Component - Grid compilation
│   │   └── [slug]/
│   │       └── page.tsx   # Pure Server Component - SSG Monographs via generateStaticParams()
│   ├── studio/
│   │   └── page.tsx       # Pure Server Component - Studio story
│   ├── journal/
│   │   └── page.tsx       # Pure Server Component - Asymmetric design articles
│   ├── contact/
│   │   └── page.tsx       # Pure Server Component - Address details & Old Palasia Map
├── components/
│   ├── contact/
│   │   └── ContactForm.tsx   # "use client" Island - Inquiry workflow & direct mail backup
│   ├── cursor/
│   │   └── CustomCursor.tsx  # "use client" Island - Contextual fine mouse indicator bailing on Touch
│   ├── home/
│   │   ├── HeroVideo.tsx     # "use client" Island - Connection-based lazy cinematic hero player
│   │   └── ProcessSection.tsx# "use client" Island - GSAP horizontal methodology section
│   ├── journal/
│   │   └── SubscribeForm.tsx # "use client" Island - Newsletter submit form
│   ├── motion/
│   │   ├── RevealText.tsx    # "use client" Island - Scroll-triggered lines-masking text animator
│   │   ├── ClipReveal.tsx    # "use client" Island - CSS clip-path inset scroll-triggered image revealer
│   │   └── MagneticButton.tsx# "use client" Island - spring-interpolated magnetic CTA button wrapper
│   └── scroll/
│       └── SmoothScroll.tsx  # "use client" Island - Lenis scroll engine hooked to GSAP ticker
```

---

## 🎨 PREMIUM ARCHITECTURAL DESIGN SYSTEM

Styles are defined in `app/globals.css` utilizing warm travertine tones and geometric, restrained proportions inspired by Snøhetta and Olson Kundig:

```css
--bone:        #F4EFE6;  /* Ultra-warm Travertine background */
--linen:       #FAF7F1;  /* Pristine elevated card surface */
--travertine:  #E6DCCB;  /* Architectural section divisor */
--sand:        #D9CBB3;  /* Smooth visual hover indications */
--stone:       #B4A89A;  /* Muted captions and labels */
--terracotta:  #B5654A;  /* Brand primary accent highlight */
--clay:        #8C4A33;  /* Deep terracotta hover state */
--ink:         #1A1714;  /* Rich, warm off-black primary typography */
--graphite:    #403A33;  /* Muted secondary body text */
```

### Typography Configuration
* **UI/Body**: Mapped to **Hanken Grotesk** (Next.js optimized geometric sans-serif) loaded with `display: 'optional'` to eliminate Cumulative Layout Shift (CLS).
* **Display/Headlines**: Mapped to **Fraunces** display serif loaded with `display: 'swap'`, with weight ranges limited strictly to `["300", "400", "500"]` to minimize bundle load sizes.

---

## ⚡ AWWWARDS-GRADE MOTION & TRANSITIONS

Animations are synchronized and guarded meticulously at system level to support modern web standards:

1. **Lenis & GSAP synchronization**: Both scroll engines are bound directly through GSAP's central ticker inside `SmoothScroll.tsx` to prevent inertia battles or scrolling jitters.
2. **System-level reduced motion guards**: Both `SmoothScroll` and `CustomCursor` completely bail out if `prefers-reduced-motion: reduce` or touch events are detected.
3. **Pinning guards**: GSAP ScrollTrigger horizontal methodology pinning on the Home page automatically bails out on mobile viewports to prevent layout breakages.
4. **Reveal Islands**:
   * **`RevealText`**: Generates line-masks animating display text `yPercent: 110% -> 0%` using custom cubic-beziers.
   * **`ClipReveal`**: Generates high-performance ScrollTrigger batch clip-path inset transformations (`clip-path: inset(0 0 100% 0)` -> `inset(0 0 0 0)`) for premium image entry animations.
   * **`MagneticButton`**: Adds spring physics to CTA selectors following the cursor's coordinate vector.

---

## 🔍 SEO & METADATA INFRASTRUCTURE

* **JSON-LD Schema**:
  * Root layout embeds Organization, LocalBusiness, and Founder (`Ar. Kritika Khandelwal`) details.
  * Dynamic monograph routes inject standard CreativeWork schema structures.
* **Dynamic Meta Tags**: Page metadata are automatically generated. Dynamically resolves `title`, trimmed `description` (exactly first 155 chars of project story), and open-graph cover images.
* **Robots & Sitemap**: Pre-rendered sitemaps and search crawler instructions mapped securely via `sitemap.ts` and `robots.ts`.

---

## 🧹 FACTUAL INTEGRITY & PERFORMANCE CORRECTIONS

* **Built-up corrections**: Rectified the built-up area of `veda-hotel` to `"—"` since it is not defined in the source PDF materials.
* **Sanitized team grid**: Ankush and Shakti no longer share duplicate portraits. They are rendered as clean, high-premium minimalist travertine initial monograms, keeping real photo portraits exclusively for Ar. Kritika.
* **Testimonials & Socials**: Removed all invented metric counters (likes/comments) from the showroom grid. Testimonials are reframed into clean, elegant, professional stubs.
* **Video LCP Optimization**: Removed the heavy video pre-load tag from layout. Added a standard fallback poster attribute and connection speed triggers so the hero video is loaded dynamically only on fine viewports.
* **Next.js optimized Image tags**: Replaced all direct `<img>` nodes with optimized `<Image>` tags with precise aspect sizes to ensure perfect Lighthouse scores.

---

## 🚀 DEVELOPMENT & DEPLOYMENT

### Local Development

First, install standard dependencies:
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

Build the optimized Next.js production bundle:
```bash
npm run build
```

Start the production server locally:
```bash
npm run start
```

### Vercel Deployment

This project is optimized for standard **Vercel** deployment:
1. Push your latest code changes to your GitHub repository.
2. Go to Vercel and import your repository.
3. Vercel will automatically auto-detect **Next.js** as the framework.
4. Set the build command to `next build`.
5. Set `NEXT_PUBLIC_SITE_URL` in the Vercel Environment Variables.
6. Click **Deploy**! Output and caching are managed automatically.
