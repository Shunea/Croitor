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
import orthodonticsImage from "@assets/stock_images/orthodontic_treatmen_1b8e7584.jpg";
import implantImage from "@assets/stock_images/dental_implant_surge_57321743.jpg";
import aestheticImage from "@assets/stock_images/teeth_whitening_prof_67c405ae.jpg";

export function ServicesSection() {
  const featuredServices = [
    {
      image: orthodonticsImage,
      title: "Tratament Ortodontic Complet",
      subtitle: "Ortodonție",
      description:
        "Transformare completă cu bretele dentare moderne pentru un zâmbet perfect aliniat.",
      process: [
        "Consultație și scanare 3D a dinților",
        "Plan de tratament personalizat",
        "Aplicarea bretelelor dentare",
        "Control periodic și ajustări",
        "Menținerea rezultatelor obținute",
      ],
      duration: "12-24 luni",
    },
    {
      image: implantImage,
      title: "Implant Dentar și Coroană",
      subtitle: "Implantologie",
      description:
        "Înlocuire dinți lipsă cu implanturi dentare durabile și coroană estetică.",
      process: [
        "Evaluare și radiografie CT 3D",
        "Inserarea implantului dentar",
        "Perioada de vindecare (3-6 luni)",
        "Montarea pilierului și amprentă",
        "Fixarea coroanei definitive",
      ],
      duration: "3-6 luni",
    },
    {
      image: aestheticImage,
      title: "Albire Dentară Profesională",
      subtitle: "Estetică Dentară",
      description:
        "Rezultate spectaculoase de albire pentru un zâmbet strălucitor și încrezător.",
      process: [
        "Consultație și evaluare culoare",
        "Curățare profesională pregătitoare",
        "Aplicarea gelului de albire",
        "Activare cu lampă LED specializată",
        "Instrucțiuni pentru menținere",
      ],
      duration: "1-2 ședințe",
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
            Descoperì rezultatele remarcabile obținute în tratamentele dentare pe care le oferim.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
          {featuredServices.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-featured-service-${index}`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {service.subtitle}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      Procesul de tratament
                    </h4>
                    <div className="space-y-3">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 flex items-center gap-2 text-sm">
                      <span className="font-semibold text-foreground">
                        Durată:
                      </span>
                      <span className="text-primary font-medium">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
