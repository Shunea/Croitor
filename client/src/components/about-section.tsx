import { CheckCircle2 } from "lucide-react";
import aboutImage from "@assets/croitor_1760710964150.jpg";

export function AboutSection() {
  const highlights = [
    "Medici cu peste 10-20 ani experiență",
    "Echipamente moderne de ultimă generație",
    "Gamă variată de servicii stomatologice",
    "Diplome și certificări internaționale",
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Dr. Croitor Alexei și Dr. Croitor Liliana - Echipa Croitor Dental Clinic"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold">
                Despre Noi
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Ne dedicăm sănătății tale orale și frumuseții zâmbetului tău
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
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

            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
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
