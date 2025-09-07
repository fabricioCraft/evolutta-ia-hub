import { Zap, TrendingUp, Lightbulb, Shield } from "lucide-react";
import { useScrollAnimation, useDrawAnimation } from "@/hooks/useScrollAnimation";

const BenefitsSection = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();

  const benefits = [
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Automatize processos repetitivos e libere sua equipe para focar no que realmente importa: crescimento e inovação."
    },
    {
      icon: TrendingUp,
      title: "Otimização de Resultados",
      description: "Aumente a eficiência operacional em até 300% com análises preditivas e decisões baseadas em dados precisos."
    },
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      description: "Mantenha-se à frente da concorrência com soluções de IA que se adaptam e evoluem com seu negócio."
    },
    {
      icon: Shield,
      title: "Segurança e Confiabilidade",
      description: "Proteja seus dados com criptografia avançada e sistemas de IA confiáveis, desenvolvidos com as melhores práticas de segurança."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef as any}
            className="fade-up font-montserrat font-bold text-responsive-h2 text-primary mb-8 drop-shadow-sm"
          >
            Descubra os benefícios da automação inteligente para sua empresa
          </h2>
          <p 
            ref={descriptionRef as any}
            className="fade-up text-xl text-dark max-w-4xl mx-auto font-poppins leading-relaxed"
          >
            Revolucione sua gestão empresarial com tecnologia de ponta que impulsiona 
            crescimento, reduz custos e maximiza a eficiência operacional.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const cardRef = useScrollAnimation();
            const iconRef = useDrawAnimation();
            
            return (
              <div
                key={index}
                ref={cardRef as any}
                className="fade-up card-service benefits-card bg-card group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 card-interactive w-full max-w-[350px]"
              >
                <div className="bg-gradient-primary rounded-2xl p-6 w-20 h-20 flex items-center justify-center mb-8 hero-float icon-container relative z-10">
                  <IconComponent 
                    ref={iconRef as any}
                    className="w-10 h-10 text-primary-foreground" 
                  />
                </div>
                <h3 className="font-montserrat font-bold text-responsive-h3 text-card-foreground mb-6 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-poppins relative z-10">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;