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
    <section className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold">
            Beneficii
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight px-2">
            Da, la noi ai parte de beneficii de nerefuzat!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Tu alegi serviciul, iar noi îți oferim beneficiul!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 md:p-8 hover-elevate transition-all duration-300 relative overflow-hidden group"
                data-testid={`card-benefit-${index}`}
              >
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {benefit.highlight}
                </div>
                <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground pr-16 sm:pr-20">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-card-border">
          <div className="grid md:grid-cols-5 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-3 space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                Cu noi, ai garanția că vei primi servicii de cea mai înaltă
                calitate
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Într-un mediu primitor și relaxant, cu o atitudine responsabilă
                și individualizată pentru fiecare pacient.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-background rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Servicii Complexe
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-background rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Atitudine Personalizată
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-background rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Toată Familia
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-background rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">✓</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
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
