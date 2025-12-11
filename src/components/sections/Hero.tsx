import { Phone, Calendar, Clock, Shield, Award, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior moderno da clínica OdontoJá"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/95 via-blue-deep/80 to-blue-deep/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-6 animate-fade-up opacity-0">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-background/90">
              Excelência em Odontologia desde 2010
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-6 animate-fade-up opacity-0 stagger-1">
            Seu Sorriso Merece{" "}
            <span className="text-gradient-gold">Cuidado Premium</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl animate-fade-up opacity-0 stagger-2">
            Na OdontoJá, combinamos tecnologia de ponta, profissionais qualificados e
            atendimento humanizado para oferecer o melhor em saúde bucal. Agende sua
            avaliação e descubra o tratamento ideal para você.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up opacity-0 stagger-3">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              <Calendar className="w-5 h-5" />
              Agende Sua Avaliação Agora
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 animate-fade-up opacity-0 stagger-4">
            <div className="flex items-center gap-2 text-background/70">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm">Atendimento Seg-Sáb</span>
            </div>
            <div className="flex items-center gap-2 text-background/70">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">Biossegurança Total</span>
            </div>
            <div className="flex items-center gap-2 text-background/70">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm">+15.000 Pacientes</span>
            </div>
            <div className="flex items-center gap-2 text-background/70">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm">Equipe Especializada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
