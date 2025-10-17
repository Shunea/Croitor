import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import clinicLogo from "@assets/croitor - logo_1760712042030.jpg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Acasă", id: "hero" },
    { label: "Despre", id: "about" },
    { label: "Servicii", id: "services" },
    { label: "Echipa", id: "team" },
    { label: "Portofoliu", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover-elevate rounded-lg px-3 py-2 -ml-3"
            data-testid="button-logo"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <img
                src={clinicLogo}
                alt="CDC Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div
                className={`font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Croitor Dental Clinic
              </div>
              <div
                className={`text-xs transition-colors ${
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                Zâmbetul Tău Fericit
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled
                    ? "text-foreground/80 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
                data-testid={`link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+37378005754"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>+373 78 00 57 54</span>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className={
                !isScrolled
                  ? "bg-white text-primary hover:bg-white/90 border-white"
                  : ""
              }
              data-testid="button-appointment"
            >
              Programează-te
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden hover-elevate active-elevate-2 p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover-elevate rounded-lg"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:+37378005754"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover-elevate rounded-lg"
                data-testid="link-mobile-phone"
              >
                <Phone className="w-4 h-4" />
                <span>+373 78 00 57 54</span>
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
                data-testid="button-mobile-appointment"
              >
                Programează-te
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
