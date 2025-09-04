import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Marina Santos",
      role: "Diretora Clínica Odontológica",
      company: "Clínica Sorriso Perfeito",
      content: "A Evolutta IA transformou completamente nossa gestão. Reduzimos em 70% o tempo gasto com agendamentos e aumentamos nossa eficiência operacional. Os pacientes adoram a experiência automatizada!",
      rating: 5,
      results: "70% menos tempo em agendamentos"
    },
    {
      name: "Dr. Roberto Oliveira",
      role: "Sócio-Fundador",
      company: "Oliveira & Associados Advocacia",
      content: "Com os agentes de IA da Evolutta, nossa pesquisa jurídica ficou 300% mais rápida. Conseguimos focar mais na estratégia dos casos e menos na parte operacional. Resultado: mais clientes satisfeitos.",
      rating: 5,
      results: "300% mais velocidade em pesquisas"
    },
    {
      name: "Ana Paula Costa",
      role: "CEO",
      company: "Costa Imóveis Premium",
      content: "Implementamos a IA para qualificação de leads e nossas vendas dispararam 250%. A análise preditiva de mercado nos deu uma vantagem competitiva incrível. Recomendo para toda imobiliária séria.",
      rating: 5,
      results: "250% aumento nas vendas"
    },
    {
      name: "Carlos Mendes",
      role: "Diretor Comercial",
      company: "FinanceMax Consignado",
      content: "A automação de análise de risco revolucionou nosso processo. Aprovamos créditos 5x mais rápido com 90% menos erros. Nossa conversão aumentou drasticamente e os clientes ficam impressionados com a agilidade.",
      rating: 5,
      results: "5x mais velocidade nas aprovações"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Veja como nossos clientes estão transformando seus negócios com IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de empresas que escolheram evoluir com a Evolutta IA. 
            Descubra como nossa tecnologia pode transformar seu negócio também.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-primary relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
              
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Results Badge */}
              <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                {testimonial.results}
              </div>
              
              {/* Author Info */}
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-primary font-medium">
                  {testimonial.role}
                </p>
                <p className="text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Pronto para transformar sua empresa?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Junte-se a centenas de empresas que já evoluíram com nossa IA
            </p>
            <button className="bg-background text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-background/90 transition-colors shadow-hero">
              Transforme sua empresa hoje mesmo com agentes de IA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;