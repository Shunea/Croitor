# Croitor Dental Clinic Website

## Project Overview
Modern, SEO-optimized website for Croitor Dental Clinic - a professional dental clinic in Chișinău, Moldova specializing in general dentistry and orthodontics.

## Purpose
Create a high-quality, professional dental clinic website to:
- Showcase comprehensive dental services (orthodontics, implants, prosthetics, cavity treatment, surgery, hygiene)
- Present the experienced medical team (Dr. Croitor Alexei - 10+ years, Dr. Croitor Liliana - 20+ years)
- Build trust through patient testimonials and clinical case portfolio
- Generate leads through contact form and appointment requests
- Improve SEO ranking for dental services in Chișinău, Moldova

## Tech Stack
- **Frontend**: React with TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js with TypeScript, Node.js
- **Storage**: In-memory storage (MemStorage)
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query

## Project Structure

### Pages
- **Home** (`client/src/pages/home.tsx`): Main landing page with all sections

### Components
- **Navigation** (`client/src/components/navigation.tsx`): Sticky navigation with smooth scroll
- **Hero Section** (`client/src/components/hero-section.tsx`): Full-screen hero with CTA
- **About Section** (`client/src/components/about-section.tsx`): Clinic introduction
- **Services Section** (`client/src/components/services-section.tsx`): 6 dental services with SEO content
- **Benefits Section** (`client/src/components/benefits-section.tsx`): Free consultation, payment plans, discounts
- **Team Section** (`client/src/components/team-section.tsx`): 2 doctors with credentials
- **Portfolio Section** (`client/src/components/portfolio-section.tsx`): Clinical cases gallery
- **Testimonials Section** (`client/src/components/testimonials-section.tsx`): Patient reviews
- **Contact Section** (`client/src/components/contact-section.tsx`): Contact form and info
- **Footer** (`client/src/components/footer.tsx`): Site footer with links

### Features Implemented
✅ Responsive design (mobile, tablet, desktop)
✅ SEO-optimized content structure with meta tags
✅ Smooth scroll navigation
✅ Professional medical design (blue/white color scheme)
✅ Contact form with validation
✅ Interactive portfolio gallery
✅ Google Maps integration
✅ Social media links (Facebook, Instagram)
✅ Mobile-friendly navigation menu

## Contact Information
- **Address**: Str. Miorița 14, Chișinău, Republica Moldova
- **Phone**: +373 78 00 57 54, +373 60 51 13 88
- **Email**: croitor.dental.clinic@gmail.com
- **Facebook**: https://www.facebook.com/p/Croitor-Dental-Clinic-100084048187913/
- **Instagram**: https://www.instagram.com/croitordentalclinic

## Services Offered
1. **Ortodonție** - Orthodontics and teeth alignment
2. **Protezare Dentară** - Dental prosthetics (crowns, bridges)
3. **Implantologie** - Dental implants
4. **Tratarea Cariilor** - Cavity treatment
5. **Chirurgie Dentară** - Dental surgery
6. **Igienizare Profesională** - Professional oral hygiene

## Key Benefits
- Free first consultation (100% free diagnostic)
- Flexible payment plans for orthodontic treatment
- Discounts for regular checkups (every 6 months)

## Email Configuration
The contact form sends email notifications to the clinic. Configure email credentials using environment variables:
- `EMAIL_USER` - Gmail address (default: croitor.dental.clinic@gmail.com)
- `EMAIL_PASSWORD` - Gmail app password
- Alternative SMTP configuration:
  - `SMTP_HOST` - SMTP server host
  - `SMTP_PORT` - SMTP server port (default: 587)
  - `SMTP_SECURE` - Use secure connection (true/false)
  - `SMTP_USER` - SMTP username
  - `SMTP_PASS` - SMTP password

Note: For Gmail, you need to use an App Password, not your regular password. Create one at: https://myaccount.google.com/apppasswords

## Recent Changes
- **2025-01-17**: Initial website implementation with all sections
  - Created all React components for home page
  - Implemented contact form with validation and email notifications
  - Added SEO meta tags and Open Graph tags
  - Generated professional dental clinic images
  - Configured medical design system (blues, whites, clean typography)
  - Integrated Nodemailer for contact form email notifications

## Design System
- **Primary Color**: Medical Blue (210 85% 45%) - Professional, trustworthy
- **Font**: Inter - Modern, clean, highly readable
- **Components**: Shadcn UI for consistent design
- **Spacing**: Consistent padding and gaps throughout
- **Interactions**: Smooth hover effects and transitions

## TODO / Future Enhancements
- [ ] Backend API for contact form submission
- [ ] Email notifications for new contact submissions
- [ ] Online appointment booking system
- [ ] Multi-language support (Romanian, Russian, English)
- [ ] Blog section for dental health tips
- [ ] Patient portal for treatment history
- [ ] Live chat integration
