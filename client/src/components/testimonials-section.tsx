import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria P.",
      treatment: "Ortodonție",
      rating: 5,
      text: "Sunt extrem de mulțumită de serviciile primite! Doctorul Croitor Liliana a fost foarte profesionistă și atentă. Zâmbetul meu arată fantastic acum. Recomand cu încredere!",
    },
    {
      name: "Andrei M.",
      treatment: "Implant Dentar",
      rating: 5,
      text: "Experiență excelentă din primul până în ultimul moment. Echipa este foarte prietenoasă, iar rezultatul implantului depășește așteptările. Clinică modernă cu echipamente de top!",
    },
    {
      name: "Elena S.",
      treatment: "Protezare",
      rating: 5,
      text: "Mulțumesc echipei Croitor Dental Clinic pentru profesionalism și atenție! M-am simțit în siguranță pe tot parcursul tratamentului. Proteza arată și se simte perfect natural.",
    },
    {
      name: "Victor D.",
      treatment: "Tratament Carii",
      rating: 5,
      text: "Atmosfera plăcută și relaxantă, medici cu experiență și echipamente moderne. Tratamentul a fost nedureros și rapid. Prima consultație gratuită m-a convins să aleg această clinică.",
    },
    {
      name: "Daniela C.",
      treatment: "Igienizare Profesională",
      rating: 5,
      text: "Servicii de calitate superioară la prețuri corecte. Igienizarea profesională a fost foarte atentă și completă. Recomand cu mare plăcere acestă clinică tuturor!",
    },
    {
      name: "Ion T.",
      treatment: "Ortodonție",
      rating: 5,
      text: "Clinică excepțională! Doctorul Croitor Alexei este foarte profesionist și explică fiecare pas al tratamentului. Sunt foarte mulțumit de rezultate și de atmosfera prietenoasă.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Testimoniale
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Doar pacienți mulțumiți – experiențe care vorbesc!
          </h2>
          <p className="text-lg text-muted-foreground">
            Descoperă ce spun pacienții noștri despre experiența lor la Croitor
            Dental Clinic
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover-elevate transition-all duration-300 relative"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="space-y-4 relative">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center bg-background rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  4.9
                </div>
                <div className="flex gap-1 mb-2 justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  Rating mediu
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Pacienți mulțumiți
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">
                  Recomandări
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
