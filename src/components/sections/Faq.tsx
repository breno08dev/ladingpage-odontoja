import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos diversas formas de pagamento, incluindo cartões de crédito e débito, PIX, boleto bancário e dinheiro. Para tratamentos de maior valor, oferecemos parcelamento. Os valores e condições são apresentados após a avaliação, de acordo com o plano de tratamento proposto.",
  },
  {
    question: "Quanto tempo dura cada procedimento?",
    answer: "A duração varia conforme o tipo de procedimento. Uma limpeza simples pode levar de 30 a 45 minutos, enquanto procedimentos mais complexos como implantes podem necessitar de múltiplas sessões. Na avaliação inicial, informamos a estimativa de tempo para cada caso.",
  },
  {
    question: "Qualquer pessoa pode fazer clareamento dental?",
    answer: "O clareamento dental possui indicações específicas e não é recomendado para todos os casos. Pacientes com cáries ativas, doenças gengivais, gestantes ou menores de idade podem ter contraindicações. Uma avaliação prévia é essencial para verificar a indicação adequada.",
  },
  {
    question: "Como funciona a primeira avaliação?",
    answer: "Na primeira consulta, realizamos uma anamnese completa (histórico de saúde), exame clínico detalhado e, quando necessário, solicitamos exames complementares como radiografias. A partir desta avaliação, apresentamos as opções de tratamento mais adequadas para cada caso.",
  },
  {
    question: "É necessário fazer implante se perdi um dente?",
    answer: "Existem diferentes opções para substituição de dentes perdidos, incluindo implantes, próteses fixas e próteses removíveis. A indicação depende de diversos fatores como condição óssea, saúde geral e preferências do paciente. Cada caso é avaliado individualmente.",
  },
  {
    question: "A clínica atende convênios?",
    answer: "Atualmente trabalhamos com atendimento particular, oferecendo condições especiais de pagamento. Recomendamos entrar em contato para conhecer os valores e formas de parcelamento disponíveis para seu tratamento.",
  },
  {
    question: "As lentes de contato dental são permanentes?",
    answer: "As lentes de contato dental são restaurações que possuem durabilidade variável, geralmente entre 10 a 15 anos, dependendo dos cuidados do paciente. É importante ressaltar que o procedimento envolve preparos na estrutura dental e requer manutenção periódica.",
  },
  {
    question: "Qual a idade recomendada para tratamento ortodôntico?",
    answer: "O tratamento ortodôntico pode ser indicado em diferentes idades, desde crianças até adultos. A avaliação ortodôntica inicial é recomendada a partir dos 6 anos, mas o momento ideal para início do tratamento depende do tipo de problema a ser corrigido.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Encontre respostas para as principais dúvidas sobre nossos serviços e atendimento.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
