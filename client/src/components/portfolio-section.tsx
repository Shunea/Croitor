import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const cases = [
    {
      title: "Tratament Ortodontic Complet",
      description: "Transformare completă cu bretele dentare",
      category: "Ortodonție",
    },
    {
      title: "Implant Dentar și Coroană",
      description: "Înlocuire dinte lipsă cu implant",
      category: "Implantologie",
    },
    {
      title: "Albire Dentară Profesională",
      description: "Rezultate spectaculoase de albire",
      category: "Estetică Dentară",
    },
    {
      title: "Reconstrucție Estetică",
      description: "Coroane și fațete ceramice",
      category: "Protezare",
    },
    {
      title: "Corectare Aliniere Dinți",
      description: "Sistem invizibil de aliniere",
      category: "Ortodonție",
    },
    {
      title: "Reabilitare Completă",
      description: "Zâmbet nou cu proteze fixe",
      category: "Protezare",
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Portofoliu
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Cazuri clinice și transformări ce schimbă zâmbete!
          </h2>
          <p className="text-lg text-muted-foreground">
            Descoperi rezultatele remarcabile obținute în tratamentele dentare
            pe care le oferim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedImage(index)}
              data-testid={`card-portfolio-${index}`}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-6 space-y-2 relative z-10">
                  <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {index + 1}
                  </div>
                  <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {caseItem.category}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="text-sm font-medium text-foreground">
                    Vezi detalii
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {caseItem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            * Fotografiile reprezintă cazuri clinice reale realizate de echipa
            noastră de specialiști
          </p>
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl w-full bg-card rounded-2xl p-8 space-y-4">
            <div className="text-sm font-semibold text-primary">
              {cases[selectedImage].category}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {cases[selectedImage].title}
            </h3>
            <p className="text-muted-foreground">
              {cases[selectedImage].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
