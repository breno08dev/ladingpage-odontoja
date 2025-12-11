import dentist1 from "@/assets/dentist-1.jpg";
import dentist2 from "@/assets/dentist-2.jpg";
import dentist3 from "@/assets/dentist-3.jpg";

const professionals = [
  {
    name: "Dra. Mariana Costa Oliveira",
    cro: "CRO-SP 123456",
    specialty: "Especialista em Ortodontia",
    description: "Graduada pela USP, com especialização em Ortodontia pela UNICAMP. Mais de 15 anos de experiência em tratamentos ortodônticos, com foco em técnicas modernas e atendimento personalizado.",
    image: dentist1,
  },
  {
    name: "Dr. Lucas Henrique Martins",
    cro: "CRO-SP 789012",
    specialty: "Especialista em Implantodontia",
    description: "Formado pela UNESP, com especialização em Implantodontia pela APCD. Atua há 10 anos na área de reabilitação oral, com formação complementar em cirurgia guiada.",
    image: dentist2,
  },
  {
    name: "Dra. Fernanda Ribeiro Santos",
    cro: "CRO-SP 345678",
    specialty: "Especialista em Dentística",
    description: "Graduada pela UNIFESP, especialista em Dentística Restauradora. Dedica-se há mais de 20 anos à estética dental, com atualizações constantes em técnicas restauradoras.",
    image: dentist3,
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 lg:py-28 bg-gradient-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Profissionais <span className="text-primary">Qualificados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Contamos com uma equipe de cirurgiões-dentistas registrados no CRO, 
            com formação em instituições de ensino reconhecidas e especialização em suas áreas de atuação.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <div
              key={professional.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={professional.image}
                  alt={`Foto de ${professional.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    {professional.cro}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  {professional.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {professional.specialty}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {professional.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
          Todos os profissionais da OdontoJá possuem registro ativo no Conselho Regional de Odontologia 
          e mantêm suas especializações atualizadas conforme exigências do CFO.
        </p>
      </div>
    </section>
  );
};

export default Team;
