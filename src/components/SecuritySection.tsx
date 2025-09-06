import { Shield, Lock, Server, Clock } from "lucide-react";
import { useScrollAnimation, useDrawAnimation } from "@/hooks/useScrollAnimation";

const SecuritySection = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();

  const securityFeatures = [
    {
      icon: Shield,
      title: "Segurança Robusta",
      description: "Seus dados são protegidos com medidas de segurança avançadas, garantindo privacidade e confiabilidade em cada etapa."
    },
    {
      icon: Server,
      title: "Implantação Segura",
      description: "Implantamos e gerenciamos todos os agentes de IA exclusivamente em suas instalações para garantir máxima segurança de dados e conformidade."
    },
    {
      icon: Lock,
      title: "Proteção de Dados",
      description: "Nossa solução funciona sempre on-premises, mantendo seus dados críticos dentro do seu ambiente seguro e controlado."
    },
    {
      icon: Clock,
      title: "Operação 24/7",
      description: "Nossa equipe gerencia a configuração completa, fornecendo atualizações de desenvolvimento contínuas e suporte técnico para manter seus sistemas funcionando perfeitamente."
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
            Segurança e Robustez para Sua Empresa
          </h2>
          <p 
            ref={descriptionRef as any}
            className="fade-up text-xl text-primary-foreground/90 max-w-4xl mx-auto font-poppins leading-relaxed"
          >
            Capacidades avançadas de IA que entregam resultados superiores enquanto mantêm seus dados seguros 
            e suas operações funcionando perfeitamente 24 horas por dia.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const cardRef = useScrollAnimation();
            const iconRef = useDrawAnimation();
            
            return (
              <div
                key={index}
                ref={cardRef as any}
                className="fade-up bg-background/10 backdrop-blur-sm p-8 rounded-2xl text-center"
              >
                <div className="bg-primary-foreground/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-primary-foreground/20">
                  <IconComponent 
                    ref={iconRef as any}
                    className="w-10 h-10 text-primary-foreground animate-draw" 
                  />
                </div>
                
                <h3 className="font-montserrat font-bold text-responsive-h3 text-primary-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-primary-foreground/80 leading-relaxed font-poppins">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg px-12 py-4 font-semibold">
            Conheça nossa solução de segurança
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;