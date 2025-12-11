import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-gradient-subtle">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Agende Sua <span className="text-primary">Avaliação</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato conosco para agendar uma consulta de avaliação. 
              Nossa equipe está pronta para atendê-lo e esclarecer suas dúvidas.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1000 - Sala 1201<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">
                    (11) 3456-7890<br />
                    (11) 99999-9999 (WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@odontoja.com.br
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 20h<br />
                    Sábado: 8h às 14h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Pronto para Agendar?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Entre em contato pelo WhatsApp para agendar sua consulta de avaliação. 
                  Atendimento rápido e personalizado.
                </p>
                <div className="space-y-4">
                  <Button variant="cta" size="xl" className="w-full" asChild>
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação na OdontoJá." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Agendar via WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="tel:+551134567890">
                      <Phone className="w-5 h-5" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
