import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-ai-business.jpg";

const HeroSection = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mask pointer-events-none" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container-custom relative z-10 text-center text-white">
        <h1 
          ref={titleRef as any}
          className="fade-up font-montserrat font-bold text-responsive-h1 mb-6 leading-tight"
        >
          Evolua sua empresa com agentes de IA inteligentes
        </h1>
        
        <p 
          ref={descriptionRef as any}
          className="fade-up text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 font-poppins leading-relaxed"
        >
          Revolucione sua gestão empresarial com tecnologia de ponta que impulsiona 
          crescimento, reduz custos e maximiza a eficiência operacional através de 
          agentes de IA personalizados para o seu negócio.
        </p>
        
        <div ref={ctaRef as any} className="fade-up">
          <button className="btn-primary text-lg px-12 py-4 font-semibold">
            Agende sua demonstração gratuita e descubra o poder da IA
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;