import { ClipboardCheck, Search, LineChart, Rocket } from "lucide-react";
import { useScrollAnimation, useDrawAnimation } from "@/hooks/useScrollAnimation";

const MethodologySection = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();

  const methodologySteps = [
    {
      icon: Search,
      title: "Avaliação do Estado Atual",
      description: "Realizamos um diagnóstico completo de 3 semanas com seus stakeholders para identificar gargalos e quantificar os ROIs da automação com IA."
    },
    {
      icon: ClipboardCheck,
      title: "Mapeamento de Oportunidades de IA",
      description: "Nossa equipe identifica processos que podem ser otimizados com IA, priorizando aqueles com maior impacto e menor esforço de implementação."
    },
    {
      icon: LineChart,
      title: "Roadmap Focado em ROI",
      description: "Entregamos um roteiro personalizado detalhando as automações recomendadas com estimativas de retorno sobre investimento."
    },
    {
      icon: Rocket,
      title: "Serviços Evolutta IA",
      description: "Nossa equipe cria ferramentas personalizadas que atendem às necessidades do seu negócio, construindo demos funcionais em dias, não meses."
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
            Nossa Metodologia de Implementação
          </h2>
          <p 
            ref={descriptionRef as any}
            className="fade-up text-xl text-muted-foreground max-w-4xl mx-auto font-poppins leading-relaxed"
          >
            Transformamos sua empresa com uma abordagem estruturada e focada em resultados,
            garantindo implementações de IA que geram valor real para o seu negócio.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {methodologySteps.map((step, index) => {
            const IconComponent = step.icon;
            const cardRef = useScrollAnimation();
            const iconRef = useDrawAnimation();
            
            return (
              <div
                key={index}
                ref={cardRef as any}
                className="fade-up card-service bg-card text-center relative reveal-scale hover:scale-105 transition-all duration-300"
              >

                
                <div className="bg-gradient-primary rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 hero-float">
                  <IconComponent 
                    ref={iconRef as any}
                    className="w-10 h-10 text-primary-foreground animate-draw" 
                  />
                </div>
                
                <h3 className="font-montserrat font-bold text-responsive-h3 text-card-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-poppins">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;