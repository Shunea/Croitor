import { CheckCircle2 } from "lucide-react";
import aboutImage from "@assets/stock_images/dental_clinic_modern_9cc30d67.jpg";

export function AboutSection() {
  const highlights = [
    "Medici cu peste 10-20 ani experiență",
    "Echipamente moderne de ultimă generație",
    "Gamă variată de servicii stomatologice",
    "Diplome și certificări internaționale",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Clinică Stomatologică Modernă Croitor Dental Clinic"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-3">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Despre Noi
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Ne dedicăm sănătății tale orale și frumuseții zâmbetului tău
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">
                  Clinica Stomatologică CDC – Croitor Dental Clinic
                </strong>{" "}
                și-a deschis ușile în 2022 și este alcătuită dintr-o echipă de
                medici profesioniști dedicați, cu o experiență vastă în
                stomatologie.
              </p>
              <p>
                Medicii noștri aduc cu ei peste 10 și chiar peste 20 de ani de
                experiență, garantând astfel servicii de înaltă calitate și
                tratamente specifice.
              </p>
              <p>
                Ne mândrim că suntem o clinică modernă, echipată cu tehnologie
                de ultimă generație, și oferim o gamă variată de servicii și
                tratamente stomatologice pentru a satisface nevoile diverse ale
                pacienților noștri.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
