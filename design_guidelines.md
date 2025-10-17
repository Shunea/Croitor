# Design Guidelines: Croitor Dental Clinic Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern healthcare and dental clinic websites that balance professionalism with approachability. Primary references include clean, trust-building medical platforms with emphasis on patient comfort and clinical excellence. The design should convey medical expertise while maintaining warmth and accessibility.

**Key Design Principles**:
- Medical professionalism with human warmth
- Trust-building through visual clarity and testimonials
- Seamless patient journey from awareness to appointment
- SEO-optimized content hierarchy

---

## Color Palette

### Primary Colors
- **Medical Blue (Primary)**: 210 85% 45% - Professional, trustworthy, medical authority
- **Clean White**: 0 0% 100% - Clinical cleanliness, spaciousness
- **Soft Background**: 210 30% 98% - Gentle, calming sections

### Accent & Supporting
- **Success Green**: 150 60% 45% - Positive outcomes, health
- **Warm Gray**: 210 10% 40% - Text, subtle elements
- **Light Gray**: 210 15% 95% - Borders, subtle backgrounds

### Dark Mode
- **Dark Background**: 210 20% 12%
- **Card Background**: 210 15% 18%
- **Primary (adjusted)**: 210 75% 55%

**NO yellow/gold accents** - maintaining medical credibility.

---

## Typography

**Font Families** (via Google Fonts):
- **Headings**: Inter (600, 700) - Modern, professional, highly readable
- **Body**: Inter (400, 500) - Same family for consistency
- **Accent/Buttons**: Inter (600) - Clean, authoritative

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl font-bold
- Section Titles: text-3xl md:text-4xl font-semibold
- Subsections: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small Text: text-sm

---

## Layout System

**Spacing Primitives**: Tailwind units of **4, 6, 8, 12, 16, 20, 24** (e.g., p-4, m-8, py-20, gap-6)

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl

**Vertical Rhythm**:
- Section padding: py-16 md:py-24
- Component spacing: space-y-8 md:space-y-12
- Card grid gaps: gap-6 md:gap-8

---

## Page Structure & Sections

### 1. Hero Section (80vh minimum)
**Layout**: Full-width background image with centered content overlay
- Large hero image showing modern dental clinic interior or happy patient
- Headline: "Succesul nostru, este Zâmbetul Fericit al vostru"
- Subheadline highlighting expertise (10-20 years experience)
- Primary CTA: "Programează o Consultație Gratuită"
- Secondary CTA: Call clinic directly
- Trust indicator: "Peste 10 ani de experiență"

### 2. About/Trust Section
**Layout**: 2-column (image left, content right)
- Professional clinic photo or team photo
- Brief story since 2022
- Key differentiators: modern equipment, experienced doctors, comprehensive services
- Stats: 10+ years experience, 20+ years orthodontics

### 3. Services Section
**Layout**: 3-column grid (2-column on tablet, 1-column mobile)
**Six service cards** with icons (use Heroicons medical-themed):
1. Ortodonție - orthodontics alignment
2. Protezare - dental prosthetics
3. Implantologie - dental implants
4. Tratarea Cariilor - cavity treatment
5. Chirurgie De Ambulator - ambulatory surgery
6. Igienizare - oral hygiene

Each card: Icon, title, 2-3 sentence SEO-rich description, subtle hover lift

### 4. Benefits Section
**Layout**: 3-column feature cards
- Free First Consultation (icon: gift/star)
- Payment Plans for Orthodontics (icon: credit card/calendar)
- 6-Month Checkup Discounts (icon: percentage/clock)

Each with icon, bold title, description - on colored subtle backgrounds (light blue tints)

### 5. Team Section
**Layout**: 2-column cards with photos
- **Dr. Croitor Alexei**: Photo, name, "Medic Stomatolog Profil General", 10+ years, credentials
- **Dr. Croitor Liliana**: Photo, name, "Medic Ortodont", 20+ years, extensive experience
Large professional headshot photos, warm but professional presentation

### 6. Clinical Cases Portfolio
**Layout**: Masonry grid or 3-column before/after gallery
- 6-8 before/after transformations
- Lightbox functionality for full-view
- Caption: brief case description
- Builds credibility through visual proof

### 7. Patient Testimonials
**Layout**: 3-column testimonial cards (carousel on mobile)
- Patient name (first name + initial)
- Star rating (5 stars)
- Quote text
- Optional small avatar placeholder
- Subtle card backgrounds with shadows

### 8. CTA Section
**Layout**: Centered, full-width with background
- Compelling headline: "Solicită o consultație și scapă rapid de problemele dentare!"
- Form preview or direct CTA button
- Background: subtle gradient or image overlay

### 9. Contact Section
**Layout**: 2-column (form left, info + map right)
- Contact form: Name, Phone, Email, Message
- Contact details box: Phone numbers, Address (Str. Miorița 14, Chișinău), Email
- Embedded Google Maps
- Social media links (Facebook, Instagram)

### 10. Footer
**Layout**: 3-4 column
- Clinic info & logo
- Quick links (Services, About, Contact)
- Business hours
- Social links
- Copyright & legal

---

## Component Library

**Buttons**:
- Primary: bg-[primary-blue] text-white px-8 py-4 rounded-lg font-semibold hover:brightness-110
- Secondary/Outline: border-2 border-[primary-blue] text-[primary-blue] backdrop-blur-sm (on images)

**Cards**:
- Service cards: white background, rounded-xl, p-6, shadow-lg hover:shadow-xl transition
- Benefit cards: light blue background tint, rounded-lg, p-8
- Team cards: white background, rounded-xl, overflow-hidden (photo full-width top)
- Testimonial cards: white background, rounded-lg, p-6, subtle shadow

**Navigation**:
- Sticky header: white background, shadow on scroll
- Logo left, nav center/right, CTA button right
- Mobile: hamburger menu

**Forms**:
- Input fields: border-2 border-gray-200 rounded-lg p-4 focus:border-[primary-blue]
- Textarea: same styling, min-h-32
- Labels: font-medium mb-2
- Submit button: primary button style

**Icons**: Heroicons (via CDN) - medical/health themed where appropriate

---

## Images

**Required Images**:
1. **Hero Image**: Modern dental clinic interior or warm dentist-patient interaction (professional, inviting, high-quality)
2. **About Section**: Clinic exterior/interior or team photo
3. **Team Photos**: Professional headshots of Dr. Alexei and Dr. Liliana
4. **Clinical Cases**: 6-8 before/after dental transformation photos
5. **Contact Map**: Google Maps embed for Str. Miorița 14, Chișinău

**Image Treatment**:
- Hero: Full-bleed with overlay gradient (dark at bottom for text readability)
- Team: Portrait ratio, professional lighting, consistent backgrounds
- Portfolio: Square or 4:3 ratio, high resolution
- All images: optimized WebP format, lazy loading

---

## Animations

**Minimal, purposeful motion**:
- Scroll-triggered fade-in for sections (once, subtle)
- Card hover: slight lift (translateY -4px) + shadow increase
- Button hover: subtle brightness increase
- NO complex scroll animations or distracting effects
- Focus on performance and accessibility

---

## SEO Optimization

**Content Structure**:
- Semantic HTML: proper h1-h6 hierarchy
- Service descriptions: 50-100 words each, keyword-rich (e.g., "stomatologie Chișinău", "ortodonție Moldova")
- Image alt text: descriptive, relevant
- Meta descriptions for all sections
- Schema markup for LocalBusiness, DentistClinic

**Romanian Language**: All content in Romanian as primary audience is Moldova-based