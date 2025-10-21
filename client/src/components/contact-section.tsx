import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Instagram, Send } from "lucide-react";
import { SiWhatsapp, SiViber, SiTelegram } from "react-icons/si";

const contactFormSchema = z.object({
  name: z.string().min(2, "Numele trebuie să conțină cel puțin 2 caractere"),
  phone: z.string().min(8, "Numărul de telefon este invalid"),
  email: z.string().email("Adresa de email este invalidă"),
  message: z.string().min(10, "Mesajul trebuie să conțină cel puțin 10 caractere"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Solicitare de contact de la ${data.name}`);
    const body = encodeURIComponent(
      `Nume: ${data.name}\n` +
      `Telefon: ${data.phone}\n` +
      `Email: ${data.email}\n\n` +
      `Mesaj:\n${data.message}`
    );
    
    const mailtoLink = `mailto:croitor.dental.clinic@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    form.reset();
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold">
            Contact
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight px-2">
            Solicită o consultație și scapă rapid de problemele dentare!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Completează formularul de contact și împărtășește-ne nevoile tale.
            Unul dintre specialiștii noștri te va contacta rapid.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-full">
          <Card className="p-4 sm:p-5 md:p-6 w-full min-w-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Trimite-ne un mesaj
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nume complet *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ion Popescu"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+373 XX XXX XXX"
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="ion.popescu@example.com"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mesaj *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descrie problema ta sau serviciul de care ai nevoie..."
                          className="min-h-32 resize-none"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  data-testid="button-submit-contact"
                >
                  Deschide Gmail
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Form>
          </Card>

          <div className="space-y-4 w-full min-w-0">
            <Card className="p-4 sm:p-5 md:p-6 space-y-4 w-full min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Informații de contact
              </h3>

              <div className="space-y-3">
                <a
                  href="https://maps.google.com/?q=Str.+Mioriță+14,+Chișinău"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover-elevate transition-all group"
                  data-testid="link-address"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Adresă
                    </div>
                    <div className="text-muted-foreground break-words">
                      Str. Miorița 14
                      <br />
                      Chișinău, Republica Moldova
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-3 w-full min-w-0">
                    <div className="font-semibold text-foreground">Telefon</div>
                    
                    <div className="space-y-3">
                      <div>
                        <a
                          href="tel:+37360511388"
                          className="block text-muted-foreground hover:text-primary transition-colors break-all mb-2"
                          data-testid="link-phone-1"
                        >
                          +373 60 51 13 88
                        </a>
                        <div className="flex gap-2 flex-wrap">
                          <a
                            href="https://wa.me/37360511388"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-lg text-sm font-semibold transition-colors"
                            data-testid="link-whatsapp-1"
                          >
                            <SiWhatsapp className="w-4 h-4" />
                            WhatsApp
                          </a>
                          <a
                            href="viber://chat?number=%2B37360511388"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#7360F2]/10 hover:bg-[#7360F2]/20 text-[#7360F2] rounded-lg text-sm font-semibold transition-colors"
                            data-testid="link-viber-1"
                          >
                            <SiViber className="w-4 h-4" />
                            Viber
                          </a>
                          <a
                            href="https://t.me/+37360511388"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] rounded-lg text-sm font-semibold transition-colors"
                            data-testid="link-telegram-1"
                          >
                            <SiTelegram className="w-4 h-4" />
                            Telegram
                          </a>
                        </div>
                      </div>
                      
                      <div>
                        <a
                          href="tel:+37378005754"
                          className="block text-muted-foreground hover:text-primary transition-colors break-all mb-2"
                          data-testid="link-phone-2"
                        >
                          +373 78 00 57 54
                        </a>
                        <div className="flex gap-2 flex-wrap">
                          <a
                            href="https://wa.me/37378005754"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-lg text-sm font-semibold transition-colors"
                            data-testid="link-whatsapp-2"
                          >
                            <SiWhatsapp className="w-4 h-4" />
                            WhatsApp
                          </a>
                          <a
                            href="viber://chat?number=%2B37378005754"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#7360F2]/10 hover:bg-[#7360F2]/20 text-[#7360F2] rounded-lg text-sm font-semibold transition-colors"
                            data-testid="link-viber-2"
                          >
                            <SiViber className="w-4 h-4" />
                            Viber
                          </a>
                          <a
                            href="https://t.me/+37378005754"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] rounded-lg text-sm font-semibold transition-colors"
                            data-testid="link-telegram-2"
                          >
                            <SiTelegram className="w-4 h-4" />
                            Telegram
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:croitor.dental.clinic@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover-elevate transition-all group"
                  data-testid="link-email"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Email
                    </div>
                    <div className="text-muted-foreground break-all">
                      croitor.dental.clinic@gmail.com
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground mb-3">
                  Urmărește-ne pe social media
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/p/Croitor-Dental-Clinic-100084048187913/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover-elevate transition-all group"
                    data-testid="link-facebook"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/croitordentalclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover-elevate transition-all group"
                    data-testid="link-instagram"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 md:p-6 bg-primary/5 border-primary/20 w-full min-w-0">
              <h4 className="font-semibold text-foreground mb-2">
                Program de lucru
              </h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Luni - Vineri</span>
                  <span className="text-foreground">
                    09:00 - 18:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sâmbătă</span>
                  <span className="text-foreground">
                    10:00 - 15:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duminică</span>
                  <span className="text-foreground">Închis</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.861825449825!2d28.833889776556747!3d47.01064202671487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ddc5a9f2f95%3A0x2d9c7e6a5c3f1d4b!2sStrada%20Miori%C8%9Ba%2014%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sro!2s!4v1697542800000!5m2!1sro!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația Croitor Dental Clinic pe hartă"
          />
        </div>
      </div>
    </section>
  );
}
