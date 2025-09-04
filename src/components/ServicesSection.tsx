import { Stethoscope, Scale, Home, CreditCard } from "lucide-react";
import { useScrollAnimation, useDrawAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const services = [
    {
      icon: Stethoscope,
      title: "Clínicas Odontológicas",
      subtitle: "Agentes de IA para clínicas: sorrisos otimizados, gestão inteligente",
      description: "Automatize agendamentos, prontuários digitais, lembretes de consultas e análises de tratamentos. Melhore a experiência do paciente e aumente a eficiência da sua clínica.",
      features: ["Agendamento automatizado", "Prontuários inteligentes", "Análise preditiva de tratamentos", "Gestão financeira automatizada"]
    },
    {
      icon: Scale,
      title: "Escritórios de Advocacia",
      subtitle: "IA para advogados: eficiência, estratégia e resultados",
      description: "Acelere pesquisas jurídicas, automatize contratos, gerencie prazos processuais e analise jurisprudências. Foque na estratégia enquanto a IA cuida da operação.",
      features: ["Pesquisa jurídica automatizada", "Gestão de prazos processuais", "Análise de contratos", "Relatórios de produtividade"]
    },
    {
      icon: Home,
      title: "Imobiliárias",
      subtitle: "Inteligência imobiliária: venda mais com agentes de IA",
      description: "Qualifique leads automaticamente, faça avaliações precisas de imóveis, automatize follow-ups e optimize suas vendas com análise de mercado inteligente.",
      features: ["Qualificação automática de leads", "Avaliação inteligente de imóveis", "CRM automatizado", "Análise de mercado preditiva"]
    },
    {
      icon: CreditCard,
      title: "Empréstimo Consignado",
      subtitle: "Crédito inteligente: agentes de IA para impulsionar seu negócio",
      description: "Analise perfis de risco automaticamente, acelere aprovações, automatize documentação e maximize suas conversões com IA especializada em crédito.",
      features: ["Análise de risco automatizada", "Aprovação acelerada", "Documentação inteligente", "Prevenção de fraudes"]
    }
  ];

  return (
    <section className="py-32 bg-gradient-section relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mask pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef as any}
            className="fade-up font-montserrat font-bold text-responsive-h2 text-primary-foreground mb-8"
          >
            Soluções Especializadas por Setor
          </h2>
          <p 
            ref={descriptionRef as any}
            className="fade-up text-xl text-primary-foreground/90 max-w-4xl mx-auto font-poppins leading-relaxed"
          >
            Desenvolvemos agentes de IA personalizados para as necessidades específicas 
            do seu segmento, garantindo máxima eficiência e resultados comprovados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const cardRef = useScrollAnimation();
            const iconRef = useDrawAnimation();
            
            return (
              <div
                key={index}
                ref={cardRef as any}
                className="fade-up card-service bg-background p-10"
              >
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-primary rounded-2xl p-4 mr-6">
                    <IconComponent 
                      ref={iconRef as any}
                      className="w-10 h-10 text-primary-foreground" 
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-responsive-h3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-primary font-semibold font-poppins">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed font-poppins text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-4" />
                      <span className="text-foreground font-poppins">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div ref={ctaRef as any} className="fade-up text-center">
          <button className="btn-primary text-lg px-12 py-4 font-semibold">
            Solicite um orçamento personalizado para sua empresa
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;