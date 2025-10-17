import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

// Import imagini cazuri clinice
import dentalWhitening from "@assets/stock_images/dental_before_after__bdc6ed61.jpg";
import orthodonticBraces from "@assets/stock_images/orthodontic_treatmen_e59cd02d.jpg";
import smileMakeover from "@assets/stock_images/dental_smile_makeove_faa950fe.jpg";
import dentalVeneers from "@assets/stock_images/dental_veneers_befor_0e01e02d.jpg";
import invisalign from "@assets/stock_images/orthodontic_treatmen_00e685d0.jpg";
import fullRehabilitation from "@assets/stock_images/dental_smile_makeove_ce0b13be.jpg";

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const cases = [
    {
      title: "Tratament Ortodontic Complet",
      description: "Transformare completă cu bretele dentare - rezultate spectaculoase după 18 luni de tratament ortodontic personalizat",
      category: "Ortodonție",
      image: orthodonticBraces,
    },
    {
      title: "Albire Dentară Profesională",
      description: "Rezultate spectaculoase de albire - zâmbet strălucitor obținut prin albire profesională cu laser",
      category: "Estetică Dentară",
      image: dentalWhitening,
    },
    {
      title: "Reconstrucție Estetică Completă",
      description: "Transformare totală cu fațete și coroane ceramice - zâmbet perfect proiectat digital",
      category: "Protezare",
      image: smileMakeover,
    },
    {
      title: "Fațete Ceramice Premium",
      description: "Fațete din porțelan de înaltă calitate pentru un zâmbet natural și strălucitor",
      category: "Estetică Dentară",
      image: dentalVeneers,
    },
    {
      title: "Corectare Invizibilă",
      description: "Aliniere perfectă cu sistem invizibil - tratament discret și eficient fără bretele metalice",
      category: "Ortodonție",
      image: invisalign,
    },
    {
      title: "Reabilitare Orală Completă",
      description: "Zâmbet nou cu proteze fixe și implanturi - soluție durabilă pentru reabilitare totală",
      category: "Protezare",
      image: fullRehabilitation,
    },
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold">
            Portofoliu
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight px-2">
            Cazuri clinice și transformări ce schimbă zâmbete!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Descoperi rezultatele remarcabile obținute în tratamentele dentare
            pe care le oferim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedImage(index)}
              data-testid={`card-portfolio-${index}`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={`${caseItem.title} - Înainte și după transformare ${caseItem.category} - Croitor Dental Clinic Chișinău`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <div className="text-xs sm:text-sm font-semibold text-white bg-primary/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                    {caseItem.category}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 sm:pb-6">
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Vezi detalii
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 space-y-1.5 sm:space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {caseItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                  {caseItem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm px-4">
            * Fotografiile reprezintă cazuri clinice de tratamente dentare profesionale similare cu cele realizate de echipa noastră
          </p>
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden flex flex-col max-h-full">
              <div className="relative flex-shrink-0 max-h-[60vh]">
                <img
                  src={cases[selectedImage].image}
                  alt={`${cases[selectedImage].title} - Înainte și după transformare ${cases[selectedImage].category} - Croitor Dental Clinic Chișinău`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4 flex-shrink-0">
                <div className="text-xs sm:text-sm font-semibold text-primary">
                  {cases[selectedImage].category}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                  {cases[selectedImage].title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {cases[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
