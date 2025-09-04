import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();

  const testimonials = [
    {
      name: "Dr. Maria Silva",
      company: "Clínica Sorriso Perfeito",
      text: "A automação de agendamentos revolucionou nossa clínica! Reduzimos faltas em 80% e nossa equipe pode focar no que realmente importa: o cuidado com os pacientes.",
      rating: 5
    },
    {
      name: "Dr. Carlos Mendes",
      company: "Mendes & Associados Advocacia",
      text: "Com os agentes de IA para pesquisa jurídica, conseguimos acelerar nossos processos em 300%. A precisão das análises é impressionante!",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Costa Imóveis Premium",
      text: "Nossa conversão de leads aumentou 250% com a qualificação automática. O sistema identifica os clientes mais promissores com precisão cirúrgica.",
      rating: 5
    },
    {
      name: "Roberto Santos",
      company: "Crédito Fácil Consignado",
      text: "A análise de risco automatizada nos permitiu aprovar mais empréstimos com total segurança. Nosso volume de negócios cresceu 400% no último ano.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef as any}
            className="fade-up font-montserrat font-bold text-responsive-h2 text-primary mb-8"
          >
            Veja como nossos clientes estão transformando seus negócios com IA
          </h2>
          <p 
            ref={descriptionRef as any}
            className="fade-up text-xl text-muted-foreground max-w-4xl mx-auto font-poppins leading-relaxed"
          >
            Resultados reais de empresas que escolheram evoluir com a Evolutta IA. 
            Descubra como nossos agentes inteligentes estão revolucionando diferentes setores.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-responsive">
          {testimonials.map((testimonial, index) => {
            const cardRef = useScrollAnimation();
            
            return (
              <div 
                key={index}
                ref={cardRef as any}
                className="fade-up card-service bg-card p-10 text-center"
              >
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed font-poppins italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-montserrat font-bold text-lg text-card-foreground mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary font-semibold font-poppins">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;