# Falaky Foundation — Educational & Literary Institution Website

A website built for **Falaky Foundation**, established to honour students who demonstrate outstanding academic performance in the Arabic language, in memory of the renowned Kerala educator, astronomer, and Arabic literary figure **Falaky Muhammed Moulavi (1913–1983)**.

Designed with an aesthetic inspired by cultural heritage and academic excellence, incorporating deep emerald green (`#103C32`), dark forest green (`#0B2924`), and muted antique gold (`#C6A45B`).

---

## 1. Quick Start & Local Execution

This project is a React single-page application built with Vite and React Router. It requires no backend services or paid external templates.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or newer recommended)
- npm (included with Node.js)

### Installation & Development Server
```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite development server
npm run dev

# 3. Build for production preview
npm run build
npm run preview
```
Open [http://localhost:5173](http://localhost:5173) in your web browser.

---

## 2. Page Directory & Routes

The website contains four main pages:

1. **Home (`/`)**
   - Hero section with the foundation title, clear purpose, and clean metrics
   - Introduction to Falaky Muhammed Moulavi and his scholarly ancestry
   - Foundation core purpose: Honouring student excellence in the Arabic language
   - Preview of selected classical Arabic poems with bidirectional (RTL) rendering

2. **About (`/about`)**
   - Identity & Scholarly Heritage: Historical portrait and the celestial origin of the title *"Falaky"* (astronomy / *Ilm al-Falak*)
   - Early life, family ancestry (Pokker Musliyar), traditional Dars mentors (Chalilakath Kunhahammed Haji, Pattambi Palli Dars), and collegiate degrees in Madras (*Afzal-ul-Ulama* & *Oriental Title* from the University of Madras)
   - Four-decade teaching journey and verified timeline (Kadirur Govt High School, Malabar's First Muslim School Inspector, Kumaranellur, Chavakkad, Jamalia College, Jamal Mohamed College, and Tirurangadi)
   - Fluency in five languages (Arabic, Malayalam, English, Urdu, Tamil) and leadership in Arabic teachers' movements (KATEF & early educational conferences)
   - The extempore poet (*Nimisha Kavi* / *Shair al-Badihah*)
   - Continuing scholastic legacy across generations through his son **Jabir Falaky (1945–2020)**, author of *Arabic Kavyasasthram*
   - Archival Verification Matrix distinguishing peer-verified historical facts from items under ongoing research
   - Sourced research bibliography with URLs and academic citations

3. **Gallery (`/gallery`)**
   - **Poetry Collection:**
     - Editorial cards with full Arabic vocalization, parallel English translations, and contextual notes
     - Proper right-to-left (RTL) text direction for verified Arabic poems
     - Filterable by themes: *Freedom & History*, *Language & Literature*, *Elegies & Tributes*, *Science & Wisdom*
     - Live search filter across titles and themes
   - **Photographs & Documents:**
     - Authenticated historical photographs of Falaky Muhammed Moulavi
     - Archival landmarks of historic institutions (Jamalia College Madras, Darul Uloom Vazhakkad)
     - Interactive lightbox modal with detailed historical descriptions and archival provenance

4. **Vision (`/vision`)**
   - Core purpose: Conferring academic honours upon top-performing Arabic students in memory of Falaky Moulavi
   - Foundation Vision & Mission statements with supporting strategic pillars
   - Core values: Academic Excellence, Literary Appreciation, Preserving Heritage, Merit & Fairness, and Educational Service
   - Educational rationale on why student achievement in the Arabic language matters
   - Clear calls to action linking to About and Gallery

---

## 3. Official Logo Location

The official Falaky Foundation logo is stored at:
- `public/logo/falaki.jpeg`
- Also available as: `public/logo/falaki-foundation-logo.png`
- Displayed in the Navigation Header and Footer, linking to the Home page.
