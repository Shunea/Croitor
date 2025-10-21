import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import imagini cazuri clinice cu copii
import kidsImage1 from "@assets/photo_1_2025-10-21_19-13-57_1761063397194.jpg";
import kidsImage2 from "@assets/photo_3_2025-10-21_19-13-57_1761063397194.jpg";
import kidsImage3 from "@assets/photo_4_2025-10-21_19-13-57_1761063397195.jpg";
import kidsImage4 from "@assets/photo_5_2025-10-21_19-13-57_1761063397195.jpg";
import kidsImage5 from "@assets/photo_6_2025-10-21_19-13-57_1761063397195.jpg";

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({ 
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const cases = [
    {
      title: "Tratament Dentar Prietenos pentru Copii",
      description: "Oferim tratamente stomatologice specializate pentru copii într-un mediu prietenos și confortabil. Echipa noastră este pregătită să lucreze cu cei mici cu grijă și răbdare.",
      category: "Stomatologie Pediatrică",
      image: kidsImage1,
    },
    {
      title: "Îngrijire Dentară Profesională pentru Cei Mici",
      description: "Cabinet modern echipat pentru tratarea copiilor cu tehnologie adaptată vârstei lor. Creăm o experiență pozitivă pentru fiecare pacient mic.",
      category: "Tratamente Copii",
      image: kidsImage2,
    },
    {
      title: "Experiență Plăcută la Dentist pentru Copii",
      description: "Medicii noștri sunt specializați în tratarea copiilor, transformând vizita la dentist într-o experiență fără stres și chiar plăcută.",
      category: "Stomatologie Pediatrică",
      image: kidsImage3,
    },
    {
      title: "Prevenție și Tratament Dentar pentru Copii",
      description: "De la controale regulate până la tratamente complexe, oferim îngrijire completă pentru sănătatea orală a copiilor dumneavoastră.",
      category: "Tratamente Copii",
      image: kidsImage4,
    },
    {
      title: "Medici Specializați în Stomatologie Pediatrică",
      description: "Echipa noastră înțelege nevoile speciale ale copiilor și oferă tratamente personalizate într-un cadru prietenos și sigur.",
      category: "Stomatologie Pediatrică",
      image: kidsImage5,
    },
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold">
            Portofoliu
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight px-2">
            Cazuri clinice și transformări ce schimbă zâmbete!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Descoperi rezultatele remarcabile obținute în tratamentele dentare
            pe care le oferim atât adulților cât și copiilor.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2 sm:px-3 md:px-4"
                >
                  <div
                    className="overflow-hidden rounded-lg sm:rounded-xl hover-elevate transition-all duration-300 group cursor-pointer bg-card shadow-lg"
                    onClick={() => setSelectedImage(index)}
                    data-testid={`card-portfolio-${index}`}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={`${caseItem.title} - ${caseItem.category} - Croitor Dental Clinic Chișinău`}
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all hover-elevate z-10"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all hover-elevate z-10"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm px-4">
            * Fotografiile reprezintă tratamente reale realizate în clinica noastră
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
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-card rounded-xl sm:rounded-2xl overflow-y-auto flex flex-col max-h-full">
              <div className="relative flex-shrink-0 max-h-[60vh] bg-black/50">
                <img
                  src={cases[selectedImage].image}
                  alt={`${cases[selectedImage].title} - ${cases[selectedImage].category} - Croitor Dental Clinic Chișinău`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4 flex-shrink-0 bg-card">
                <div className="text-xs sm:text-sm font-semibold text-primary">
                  {cases[selectedImage].category}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
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
