import { Card } from "@/components/ui/card";
import {
  Smile,
  Award,
  Stethoscope,
  Activity,
  Scissors,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import orthodonticsImage from "@assets/stock_images/orthodontic_treatmen_903f0990.jpg";
import implantImage from "@assets/stock_images/dental_implant_surge_1dd93ef6.jpg";
import aestheticImage from "@assets/stock_images/teeth_whitening_prof_d0839cde.jpg";

export function ServicesSection() {
  const featuredServices = [
    {
      number: "1",
      title: "Tratament Ortodontic Complet",
      subtitle: "Ortodonție",
      description: "Transformare completă cu bretele dentare",
      image: orthodonticsImage,
    },
    {
      number: "2",
      title: "Implant Dentar și Coroană",
      subtitle: "Implantologie",
      description: "Înlocuire dinți lipsă cu implant",
      image: implantImage,
    },
    {
      number: "3",
      title: "Albire Dentară Profesională",
      subtitle: "Estetică Dentară",
      description: "Rezultate spectaculoase de albire",
      image: aestheticImage,
    },
  ];

  const services = [
    {
      icon: Award,
      title: "Protezare Dentară",
      description:
        "Protezare dentară de înaltă calitate pentru restabilirea completă a funcționalității și aspectului zâmbetului dumneavoastră. Coroane, punți, proteze mobile și fixe realizate cu materiale premium.",
      keywords: "protezare dentară Moldova, coroane dentare, punți dentare",
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
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-card overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold">
            Serviciile Noastre
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight px-2">
            Gamă complexă de servicii și tratamente stomatologice
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Descoperì rezultatele remarcabile obținute în tratamentele dentare pe care le oferim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {featuredServices.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 relative group"
              data-testid={`card-featured-service-${index}`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    {service.subtitle}
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 md:p-8 hover-elevate transition-all duration-300 group"
                data-testid={`card-service-${index}`}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
