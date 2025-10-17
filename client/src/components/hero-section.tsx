import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_dental_clinic_hero_background_2e7b3a0c.png";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 pt-32 sm:pt-40">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2">
              Succesul nostru, este
              <br />
              <span className="text-primary-foreground">
                Zâmbetul Fericit al vostru
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-medium px-4">
              Clinică stomatologică modernă cu peste 20 de ani experiență în
              Chișinău
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto group"
              data-testid="button-hero-appointment"
            >
              <span className="truncate">Programează Consultație Gratuită</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              data-testid="button-hero-call"
            >
              <a href="tel:+37378005754" className="truncate">Sună Acum: +373 78 00 57 54</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto pt-8 sm:pt-12 px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-xs sm:text-sm text-white/80">Ani de Experiență</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-xs sm:text-sm text-white/80">Pacienți Mulțumiți</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs sm:text-sm text-white/80">Consultație Gratuită</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
