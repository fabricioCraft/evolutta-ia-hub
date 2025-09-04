import { Zap, TrendingUp, Lightbulb, Shield } from "lucide-react";

const BenefitsSection = () => {
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Descubra os benefícios da automação inteligente para sua empresa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolucione sua gestão empresarial com tecnologia de ponta que impulsiona 
            crescimento, reduz custos e maximiza a eficiência operacional.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-primary group"
              >
                <div className="bg-gradient-primary rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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