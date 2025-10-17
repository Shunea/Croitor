import { Card } from "@/components/ui/card";
import {
  Smile,
  Award,
  Stethoscope,
  Activity,
  Scissors,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Smile,
      title: "Ortodonție",
      description:
        "Servicii specializate de ortodonție pentru corectarea și alinierea dinților. Oferim aparate dentare moderne, inclusiv bretele invizibile și sisteme de aliniere transparente pentru un zâmbet perfect și sănătos.",
      keywords: "ortodonție Chișinău, bretele dentare, aliniere dinți",
    },
    {
      icon: Award,
      title: "Protezare Dentară",
      description:
        "Protezare dentară de înaltă calitate pentru restabilirea completă a funcționalității și aspectului zâmbetului dumneavoastră. Coroane, punți, proteze mobile și fixe realizate cu materiale premium.",
      keywords: "protezare dentară Moldova, coroane dentare, punți dentare",
    },
    {
      icon: Stethoscope,
      title: "Implantologie",
      description:
        "Implante dentare moderne pentru înlocuirea eficientă și durabilă a dinților lipsă. Utilizăm tehnologie avansată și materiale de top pentru rezultate garantate și un zâmbet impecabil pe termen lung.",
      keywords: "implant dentar Chișinău, implantologie Moldova",
    },
    {
      icon: Activity,
      title: "Tratarea Cariilor",
      description:
        "Tratament profesionist al cariilor dentare cu intervenție promptă pentru restabilirea sănătății dinților și gingiilor. Utilizăm tehnici moderne și materiale de calitate pentru rezultate durabile.",
      keywords: "tratament carii, stomatologie Chișinău, obturații dentare",
    },
    {
      icon: Scissors,
      title: "Chirurgie Dentară",
      description:
        "Servicii complete de chirurgie stomatologică de ambulator cu intervenții specializate și personalizate pentru tratarea afecțiunilor complexe ale cavității orale, inclusiv extracții și chirurgie orală.",
      keywords:
        "chirurgie dentară, extracție dinte, chirurgie orală Chișinău",
    },
    {
      icon: Sparkles,
      title: "Igienizare Profesională",
      description:
        "Igienizare completă și profesionistă a cavității bucale pentru prevenirea problemelor dentare. Curățare profesională, detartraj, polish și fluorurare pentru sănătate orală impecabilă.",
      keywords: "igienizare dentară, detartraj, curățare profesională dinți",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Serviciile Noastre
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Gamă complexă de servicii și tratamente stomatologice
          </h2>
          <p className="text-lg text-muted-foreground">
            În clinica stomatologică Croitor Dental Clinic din Chișinău, ai
            parte de tratamente și servicii stomatologice complexe și
            personalizate, adaptate nevoilor tale specifice și desfășurate
            într-un mediu primitor și profesional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 hover-elevate transition-all duration-300 group"
                data-testid={`card-service-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
