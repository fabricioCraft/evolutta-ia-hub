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
      description: "Automatize agendamentos, otimize prontuários e personalize a experiência do paciente com IA.",
      features: [
        "Agendamento 100% automatizado com qualificação prévia",
        "Prontuários digitais com análise preditiva de tratamentos",
        "Gestão financeira em tempo real com pagamentos automatizados",
        "Redução de faltas com lembretes de consultas inteligentes",
        "Avaliação da satisfação do paciente com pesquisas automatizadas",
        "Análise de dados para otimizar a gestão da clínica"
      ]
    },
    {
      icon: Scale,
      title: "Escritórios de Advocacia",
      subtitle: "IA para advogados: eficiência, estratégia e resultados",
      description: "Acelere pesquisas, automatize tarefas repetitivas e aumente a produtividade com IA.",
      features: [
        "Pesquisa jurídica automatizada em múltiplas fontes",
        "Monitoramento de prazos processuais em tempo real",
        "Análise de contratos com extração de cláusulas-chave",
        "Geração automática de petições e relatórios personalizados",
        "Previsão de resultados de processos com base em dados",
        "Automação da comunicação com clientes e partes interessadas"
      ]
    },
    {
      icon: Home,
      title: "Imobiliárias",
      subtitle: "Inteligência imobiliária: venda mais com agentes de IA",
      description: "Qualifique leads, avalie imóveis e automatize processos com IA para impulsionar suas vendas.",
      features: [
        "Qualificação automática de leads com filtros inteligentes",
        "Avaliação precisa de imóveis via geolocalização e dados de mercado",
        "CRM automatizado com follow-up personalizado e segmentado",
        "Análise preditiva de tendências de mercado imobiliário",
        "Busca dinâmica de imóveis com base em preferências específicas",
        "Recomendação personalizada de imóveis para cada cliente"
      ]
    },
    {
      icon: CreditCard,
      title: "Empréstimo Consignado",
      subtitle: "Crédito inteligente: agentes de IA para impulsionar seu negócio",
      description: "Analise perfis de risco, automatize a documentação e impulsione suas conversões com IA.",
      features: [
        "Análise de risco automatizada com múltiplas APIs",
        "Aprovação de crédito em tempo real e sem burocracia",
        "Documentação inteligente com validação de dados",
        "Prevenção de fraudes com verificação multicanal e biometria",
        "Qualificação de leads via WhatsApp para agilizar o contato",
        "Follow-up automatizado com mensagens personalizadas"
      ]
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
            className="reveal-up font-montserrat font-bold text-responsive-h2 text-primary-foreground mb-8 drop-shadow-md hero-glow"
          >
            Soluções Especializadas por Setor
          </h2>
          <p 
            ref={descriptionRef as any}
            className="reveal-up text-xl text-primary-foreground/90 max-w-4xl mx-auto font-poppins leading-relaxed"
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
                className="reveal-scale card-service hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-primary rounded-2xl p-4 mr-6 hero-float">
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