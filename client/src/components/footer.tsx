import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Acasă", id: "hero" },
    { label: "Despre Noi", id: "about" },
    { label: "Servicii", id: "services" },
    { label: "Echipa", id: "team" },
  ];

  const services = [
    "Ortodonție",
    "Protezare Dentară",
    "Implantologie",
    "Tratarea Cariilor",
    "Chirurgie Dentară",
    "Igienizare Profesională",
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">
                  C
                </span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground leading-tight">
                  Croitor Dental Clinic
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clinică stomatologică modernă din Chișinău cu peste 20 de ani
              experiență în tratamente dentare de calitate.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/p/Croitor-Dental-Clinic-100084048187913/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/croitordentalclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">
              Link-uri Rapide
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">
              Serviciile Noastre
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Str.+Mioriță+14,+Chișinău"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Str. Miorița 14, Chișinău, Moldova</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+37378005754"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+373 78 00 57 54</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:croitor.dental.clinic@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="break-all">
                    croitor.dental.clinic@gmail.com
                  </span>
                </a>
              </li>
            </ul>
            <div className="pt-2 text-sm">
              <div className="font-medium text-foreground mb-2">
                Program de lucru:
              </div>
              <div className="text-muted-foreground space-y-1 text-xs">
                <div>Luni - Vineri: 09:00 - 18:00</div>
                <div>Sâmbătă: 10:00 - 15:00</div>
                <div>Duminică: Închis</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © {new Date().getFullYear()} Croitor Dental Clinic. Toate
              drepturile rezervate.
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Politica de Confidențialitate
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Termeni și Condiții
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
