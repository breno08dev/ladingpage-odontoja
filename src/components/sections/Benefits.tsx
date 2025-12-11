import { Shield, Clock, Heart, Award, CreditCard, Stethoscope } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Biossegurança Rigorosa",
    description: "Seguimos todos os protocolos de esterilização e higienização exigidos pela Anvisa e CFO.",
  },
  {
    icon: Stethoscope,
    title: "Profissionais Qualificados",
    description: "Nossa equipe é composta por dentistas registrados no CRO, com formação em instituições reconhecidas.",
  },
  {
    icon: Clock,
    title: "Pontualidade no Atendimento",
    description: "Respeitamos seu tempo. Nossos atendimentos são agendados com intervalos adequados.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos cada paciente de forma individual, ouvindo suas necessidades e expectativas.",
  },
  {
    icon: Award,
    title: "Tecnologia Atualizada",
    description: "Investimos constantemente em equipamentos modernos para diagnósticos e tratamentos mais precisos.",
  },
  {
    icon: CreditCard,
    title: "Condições Facilitadas",
    description: "Oferecemos diversas formas de pagamento para facilitar o acesso aos tratamentos.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Por que escolher a OdontoJá
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Compromisso com Sua <span className="text-primary">Saúde Bucal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nossa clínica se destaca pelo cuidado integral com cada paciente, 
            sempre seguindo as melhores práticas da odontologia moderna.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
