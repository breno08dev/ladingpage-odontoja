import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Pronto para Cuidar do Seu Sorriso?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Agende uma avaliação com nossa equipe e receba uma análise completa 
            da sua saúde bucal. Na consulta, você conhecerá nossa estrutura e 
            discutirá as melhores opções de tratamento para seu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              <Calendar className="w-5 h-5" />
              Agendar Avaliação
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#servicos">
                Conhecer Serviços
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
