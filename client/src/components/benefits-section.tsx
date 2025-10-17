import { Card } from "@/components/ui/card";
import { Gift, CreditCard, PercentCircle } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Gift,
      title: "Prima Consultație Gratuită",
      description:
        "Prima consultație în clinica noastră este complet gratuită și include un diagnostic precis realizat de specialiști folosind aparate moderne. Soluția pe care o oferim este reală și eficientă.",
      highlight: "100% Gratuit",
    },
    {
      icon: CreditCard,
      title: "Plată în Rate pentru Ortodonție",
      description:
        "Beneficiază de tratament ortodontic modern și eficient, disponibil în rate avantajoase, la clinica noastră stomatologică de încredere. Fără dobânzi ascunse.",
      highlight: "Rate Flexibile",
    },
    {
      icon: PercentCircle,
      title: "Reduceri pentru Pacienți Fideli",
      description:
        "Reduceri substanțiale pentru pacienții fideli care revin pentru controlul profilactic la fiecare 6 luni. Investește în sănătatea ta și economisește.",
      highlight: "Până la 20%",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Beneficii
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Da, la noi ai parte de beneficii de nerefuzat!
          </h2>
          <p className="text-lg text-muted-foreground">
            Tu alegi serviciul, iar noi îți oferim beneficiul!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300 relative overflow-hidden group"
                data-testid={`card-benefit-${index}`}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {benefit.highlight}
                </div>
                <div className="space-y-4 pt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground pr-12">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 bg-card rounded-2xl p-8 md:p-12 border border-card-border">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Cu noi, ai garanția că vei primi servicii de cea mai înaltă
                calitate
              </h3>
              <p className="text-muted-foreground text-lg">
                Într-un mediu primitor și relaxant, cu o atitudine responsabilă
                și individualizată pentru fiecare pacient.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-sm text-muted-foreground">
                  Servicii Complexe
                </div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-sm text-muted-foreground">
                  Atitudine Personalizată
                </div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-sm text-muted-foreground">
                  Toată Familia
                </div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-sm text-muted-foreground">
                  Siguranță & Eficiență
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
