import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-ai-business.jpg";

const HeroSection = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const [particles, setParticles] = useState<Array<{id: number, size: number, delay: number, left: number}>>([]);

  useEffect(() => {
    // Generate random particles for background animation
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 15,
      left: Math.random() * 100
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Interactive Particles Background */}
      <div className="particles-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle transition-transform duration-500 ease-out"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mask pointer-events-none" />
      
      {/* Floating Circle */}
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-violet-600/20 rounded-full blur-xl animate-pulse hero-float-circle" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      <div className="container-custom relative z-10 text-center text-white">
        <h1 
          ref={titleRef as any}
          className="stagger-fade-up font-montserrat font-bold text-responsive-h1 mb-6 leading-tight text-white text-on-gradient hero-glow"
        >
          Evolua sua empresa com agentes de IA inteligentes
        </h1>
        
        <p 
          ref={descriptionRef as any}
          className="stagger-fade-up text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-poppins leading-relaxed text-white text-on-gradient"
        >
          Revolucione sua gestão empresarial com tecnologia de ponta que impulsiona 
          crescimento, reduz custos e maximiza a eficiência operacional através de 
          agentes de IA personalizados para o seu negócio.
        </p>
        
        <div ref={ctaRef as any} className="stagger-fade-up">
          <button className="btn-primary btn-magnetic text-lg px-12 py-4 font-semibold">
            Agende sua demonstração gratuita e descubra o poder da IA
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;