import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowRight, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMouseTracking } from "@/hooks/useMouseTracking";

const Footer = () => {
  const companyRef = useScrollAnimation();
  const { mousePosition, elementRef } = useMouseTracking();

  return (
    <footer ref={elementRef as React.RefObject<HTMLElement>} className="bg-gradient-hero text-white relative overflow-hidden">
      {/* AI Circuit Board Background */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20 20h60v60h-60z' fill='none' stroke='%23F5A9FF' stroke-width='0.5' opacity='0.3'/%3E%3Ccircle cx='20' cy='20' r='3' fill='%23F5A9FF' opacity='0.4'/%3E%3Ccircle cx='80' cy='20' r='3' fill='%23F5A9FF' opacity='0.4'/%3E%3Ccircle cx='20' cy='80' r='3' fill='%23F5A9FF' opacity='0.4'/%3E%3Ccircle cx='80' cy='80' r='3' fill='%23F5A9FF' opacity='0.4'/%3E%3Cpath d='M20 20L50 50M80 20L50 50M20 80L50 50M80 80L50 50' stroke='%23F5A9FF' stroke-width='0.3' opacity='0.2'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%23F5A9FF' opacity='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23circuit)'/%3E%3C/svg%3E")`,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }} 
        />
      </div>
      
      {/* Interactive AI Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) scale(1.1)`,
          }}
        >
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <defs>
              <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5A9FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
              </radialGradient>
            </defs>
            {/* Neural Network Nodes */}
            <circle cx="100" cy="150" r="8" fill="url(#aiGlow)" />
            <circle cx="200" cy="100" r="6" fill="url(#aiGlow)" />
            <circle cx="300" cy="200" r="10" fill="url(#aiGlow)" />
            <circle cx="400" cy="120" r="7" fill="url(#aiGlow)" />
            <circle cx="500" cy="180" r="9" fill="url(#aiGlow)" />
            <circle cx="600" cy="140" r="5" fill="url(#aiGlow)" />
            <circle cx="700" cy="160" r="8" fill="url(#aiGlow)" />
            {/* Connections */}
            <line x1="100" y1="150" x2="200" y2="100" stroke="#F5A9FF" strokeWidth="2" opacity="0.6" />
            <line x1="200" y1="100" x2="300" y2="200" stroke="#F5A9FF" strokeWidth="2" opacity="0.6" />
            <line x1="300" y1="200" x2="400" y2="120" stroke="#F5A9FF" strokeWidth="2" opacity="0.6" />
            <line x1="400" y1="120" x2="500" y2="180" stroke="#F5A9FF" strokeWidth="2" opacity="0.6" />
            <line x1="500" y1="180" x2="600" y2="140" stroke="#F5A9FF" strokeWidth="2" opacity="0.6" />
            <line x1="600" y1="140" x2="700" y2="160" stroke="#F5A9FF" strokeWidth="2" opacity="0.6" />
            {/* Brain-like structure */}
            <path d="M150 300 Q250 250 350 300 Q450 350 550 300 Q650 250 750 300" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.7" />
            <path d="M150 350 Q250 300 350 350 Q450 400 550 350 Q650 300 750 350" stroke="#8B5CF6" strokeWidth="3" fill="none" opacity="0.7" />
            {/* Data flow particles */}
            <circle cx="120" cy="320" r="3" fill="#F5A9FF" opacity="0.8">
              <animateMotion dur="4s" repeatCount="indefinite">
                <path d="M0,0 Q200,-50 400,0 Q600,50 800,0" />
              </animateMotion>
            </circle>
            <circle cx="180" cy="340" r="2" fill="#8B5CF6" opacity="0.6">
              <animateMotion dur="6s" repeatCount="indefinite">
                <path d="M0,0 Q200,50 400,0 Q600,-50 800,0" />
              </animateMotion>
            </circle>
          </svg>
        </div>
      </div>
      
      <div className="container-custom relative z-10 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Company Info */}
          <div ref={companyRef as any} className="space-y-8">
            <h3 className="font-montserrat font-bold text-4xl hero-glow animate-pulse">
              <span className="bg-gradient-to-r from-[#F5A9FF] to-white bg-clip-text text-transparent">
                Evolutta IA Hub
              </span>
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed font-poppins">
              Transformamos negócios através da inteligência artificial, oferecendo soluções inovadoras e personalizadas para impulsionar o crescimento da sua empresa.
            </p>
            <div className="bg-gradient-to-r from-[#F5A9FF]/20 to-purple-600/20 p-6 rounded-xl border border-[#F5A9FF]/30">
              <p className="text-lg text-[#F5A9FF] font-medium mb-4">Pronto para revolucionar seu negócio?</p>
              <button className="btn-magnetic bg-gradient-to-r from-[#F5A9FF] to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#F5A9FF]/25 transition-all duration-300 text-lg">
                Fale Conosco
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-[#F5A9FF] border-b border-[#F5A9FF]/30 pb-3">
              Entre em Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-slate-300 text-lg">
                <Mail className="w-6 h-6 text-[#F5A9FF] animate-pulse" />
                <span>contato@evolutta.com.br</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-300 text-lg">
                <Phone className="w-6 h-6 text-[#F5A9FF] animate-pulse" />
                <span>(21) 97344-0236</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-300 text-lg">
                <MapPin className="w-6 h-6 text-[#F5A9FF] animate-pulse" />
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-[#F5A9FF]/20 pt-8 relative">
          {/* Animated border line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A9FF] to-transparent animate-pulse"></div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-slate-400 font-poppins text-center sm:text-left">
                © 2024 Evolutta IA. Todos os direitos reservados.
              </p>
              <div className="flex gap-6">
                <a 
                  href="/termos-de-uso" 
                  className="text-slate-400 hover:text-[#F5A9FF] transition-colors font-poppins text-sm"
                >
                  Termos de Uso
                </a>
                <a 
                  href="/politica-de-privacidade" 
                  className="text-slate-400 hover:text-[#F5A9FF] transition-colors font-poppins text-sm"
                >
                  Política de Privacidade
                </a>
                <a 
                  href="/cookies" 
                  className="text-slate-400 hover:text-[#F5A9FF] transition-colors font-poppins text-sm"
                >
                  Cookies
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-400 font-poppins text-sm">Feito com</span>
              <span className="text-[#F5A9FF] animate-bounce">❤️</span>
              <span className="text-slate-400 font-poppins text-sm">no Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;