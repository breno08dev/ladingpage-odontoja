import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Ferreira",
    location: "São Paulo, SP",
    text: "Fui muito bem atendida desde o primeiro contato. A equipe explicou todo o procedimento com clareza e me senti segura durante o tratamento. Recomendo pela seriedade e profissionalismo.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    location: "Guarulhos, SP",
    text: "Procurei a OdontoJá para uma avaliação e fiquei impressionado com a estrutura da clínica. O ambiente é limpo e organizado, e os dentistas são atenciosos. Boa experiência.",
    rating: 5,
  },
  {
    name: "Carla Souza Lima",
    location: "São Bernardo, SP",
    text: "Realizei meu tratamento ortodôntico na clínica e estou satisfeita com o acompanhamento. A Dra. Mariana é muito dedicada e sempre tira minhas dúvidas com paciência.",
    rating: 5,
  },
  {
    name: "Marcos Antônio Silva",
    location: "Santo André, SP",
    text: "Atendimento pontual e profissional. Gostei de como explicaram as opções de tratamento sem pressão. Ambiente agradável e equipe competente.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-gradient-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            O que Nossos <span className="text-primary">Pacientes Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A opinião de quem já passou pela nossa clínica é fundamental 
            para entender nosso compromisso com a qualidade do atendimento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
          Os depoimentos acima refletem experiências individuais de pacientes. 
          Resultados podem variar de acordo com cada caso.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
