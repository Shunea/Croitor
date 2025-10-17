import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import drAlexeiImage from "@assets/alexei croitor_1760712759542.jpeg";
import drLilianaImage from "@assets/Croitor Liliana_1760712759542.jpeg";

export function TeamSection() {
  const team = [
    {
      name: "Dr. Croitor Alexei",
      role: "Medic Stomatolog Profil General",
      image: drAlexeiImage,
      experience: "10+ ani experiență",
      description:
        "Cu un cumul de experiență de peste 10 ani și maximă dedicare în cadrul centrului medical Avemed (2014) și centrul medical al Aviației Civile (2016).",
      specializations: [
        "Stomatologie generală",
        "Tratamente complexe",
        "Implantologie",
      ],
    },
    {
      name: "Dr. Croitor Liliana",
      role: "Medic Ortodont",
      image: drLilianaImage,
      experience: "20+ ani experiență",
      description:
        "Cu stagiul de muncă 2001 – 2022 în Clinica Stomatologică Municipală pentru copii și o vastă experiență de peste 20 de ani în stomatologie.",
      specializations: [
        "Ortodonție",
        "Bretele dentare",
        "Corectare aliniere",
      ],
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Echipa Noastră
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Cunoaște echipa noastră de medici stomatologi
          </h2>
          <p className="text-lg text-muted-foreground">
            În cadrul clinicii noastre, te vei bucura de servicii stomatologice
            oferite de medici profesioniști, dedicați și cu o vastă experiență
            în domeniu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.map((doctor, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 group"
              data-testid={`card-doctor-${index}`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      {doctor.experience}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {doctor.name}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {doctor.role}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {doctor.description}
                </p>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="font-medium">Specializări:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
