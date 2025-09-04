import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-business.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Evolua sua empresa com{" "}
              <span className="text-accent-foreground bg-background/20 px-3 py-1 rounded-lg">
                agentes de IA inteligentes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
              Transforme seus processos empresariais com automação inteligente. 
              Nossa IA personalizada impulsiona o crescimento e otimiza resultados 
              em clínicas, escritórios, imobiliárias e financeiras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto font-semibold rounded-xl"
              >
                Agende sua demonstração gratuita e descubra o poder da IA
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Agentes de IA transformando negócios com automação inteligente"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent-foreground/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-60 h-60 bg-primary-foreground/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;