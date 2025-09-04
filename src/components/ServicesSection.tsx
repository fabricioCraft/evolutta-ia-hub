import { Stethoscope, Scale, Home, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
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
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Soluções Especializadas por Setor
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Desenvolvemos agentes de IA personalizados para as necessidades específicas 
            do seu segmento, garantindo máxima eficiência e resultados comprovados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-hero hover:shadow-primary transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-primary rounded-xl p-3 mr-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto font-semibold rounded-xl"
          >
            Solicite um orçamento personalizado para sua empresa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;