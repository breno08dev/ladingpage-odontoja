import { Sparkles, Smile, Crown, ArrowRight, Shield, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Limpeza e Prevenção",
    description: "Profilaxia dental completa para manter seus dentes saudáveis e prevenir problemas futuros. Inclui orientação de higiene bucal personalizada.",
    highlight: "Fundamental para saúde",
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    description: "Técnicas seguras de clareamento supervisionadas por profissionais, respeitando a saúde do esmalte e a sensibilidade de cada paciente.",
    highlight: "Resultados naturais",
  },
  {
    icon: Crown,
    title: "Lentes de Contato Dental",
    description: "Facetas ultrafinas em porcelana para correção estética de forma, cor e alinhamento. Avaliação criteriosa de indicação para cada caso.",
    highlight: "Avaliação personalizada",
  },
  {
    icon: Smile,
    title: "Ortodontia",
    description: "Aparelhos fixos e alinhadores para correção de posicionamento dental. Tratamentos planejados de acordo com as necessidades individuais.",
    highlight: "Tratamento individualizado",
  },
  {
    icon: Heart,
    title: "Implantes Dentários",
    description: "Reabilitação oral com implantes de titânio para substituição de dentes perdidos. Planejamento detalhado com exames de imagem.",
    highlight: "Planejamento criterioso",
  },
  {
    icon: Star,
    title: "Restaurações Estéticas",
    description: "Restaurações em resina composta com técnicas de estratificação para resultados funcionais e esteticamente harmônicos.",
    highlight: "Material de qualidade",
  },
  {
    icon: Sparkles,
    title: "Harmonização Orofacial",
    description: "Procedimentos estéticos permitidos pelo CFO, realizados por profissionais habilitados. Avaliação prévia obrigatória para indicação adequada.",
    highlight: "Dentro das normas do CFO",
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Tratamentos com <span className="text-primary">Qualidade e Ética</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços odontológicos, sempre seguindo 
            as diretrizes éticas do Conselho Federal de Odontologia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Highlight Badge */}
              <span className="absolute top-4 right-4 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                {service.highlight}
              </span>

              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="lg" onClick={scrollToContact}>
            Agendar Avaliação
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
