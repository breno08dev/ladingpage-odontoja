import { Monitor, Shield, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Raio-X Digital",
    description: "Diagnósticos mais precisos com menor exposição à radiação.",
  },
  {
    icon: Shield,
    title: "Esterilização Completa",
    description: "Autoclaves de última geração e protocolos rigorosos de biossegurança.",
  },
  {
    icon: Sparkles,
    title: "Ambiente Moderno",
    description: "Consultórios equipados com tecnologia atual e conforto para os pacientes.",
  },
  {
    icon: Zap,
    title: "Equipamentos Atualizados",
    description: "Investimento constante em aparelhos para procedimentos mais eficientes.",
  },
];

const Clinic = () => {
  return (
    <section id="clinica" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Nossa Estrutura
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Infraestrutura <span className="text-primary">Completa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A OdontoJá conta com uma estrutura física planejada para oferecer conforto 
              aos pacientes e condições ideais para a realização dos procedimentos. 
              Nossos consultórios são equipados com tecnologia atualizada e seguem 
              rigorosos padrões de higiene e biossegurança.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12">
              <div className="w-full h-full rounded-2xl bg-card shadow-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Biossegurança
                  </h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Todos os protocolos de esterilização seguem as normas 
                    estabelecidas pela Anvisa e Conselho Federal de Odontologia.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
