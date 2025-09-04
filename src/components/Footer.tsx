import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const titleRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const hoursRef = useScrollAnimation();

  return (
    <footer className="bg-gradient-section text-primary-foreground py-20 relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mask pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 
              ref={titleRef as any}
              className="fade-up font-montserrat font-bold text-responsive-h3 mb-8"
            >
              Evolutta IA
            </h3>
            <div className="fade-up">
              <p className="text-primary-foreground/90 mb-8 leading-relaxed font-poppins text-lg">
                A inteligência artificial que faz sua empresa evoluir. 
                Desenvolvemos agentes de IA personalizados para transformar 
                processos empresariais e impulsionar o crescimento do seu negócio.
              </p>
              <div className="bg-background/10 rounded-2xl p-8">
                <p className="font-montserrat font-semibold text-xl mb-3">Slogan</p>
                <p className="text-primary-foreground/90 font-poppins text-lg">
                  "Evolutta IA: seu parceiro estratégico para o crescimento inteligente"
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div ref={contactRef as any}>
            <h4 className="fade-up font-montserrat font-semibold text-xl mb-8">Contato</h4>
            <div className="fade-up space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-primary-foreground/70" />
                <a 
                  href="mailto:contato@evoluttaia.com.br" 
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-poppins"
                >
                  contato@evoluttaia.com.br
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-primary-foreground/70" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-poppins"
                >
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 mt-1 text-primary-foreground/70" />
                <span className="text-primary-foreground/90 font-poppins">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div ref={hoursRef as any}>
            <h4 className="fade-up font-montserrat font-semibold text-xl mb-8">Horário de Atendimento</h4>
            <div className="fade-up space-y-4">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4 text-primary-foreground/70" />
                <div>
                  <p className="text-primary-foreground/90 font-poppins font-medium">Segunda à Sexta</p>
                  <p className="text-primary-foreground/70 font-poppins">9h às 18h</p>
                </div>
              </div>
              <div className="ml-10">
                <p className="text-primary-foreground/90 font-poppins font-medium">Sábados</p>
                <p className="text-primary-foreground/70 font-poppins">9h às 12h</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 mb-6 md:mb-0 font-poppins">
              © 2024 Evolutta IA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-8">
              <a 
                href="/termos-de-uso" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-poppins"
              >
                Termos de Uso
              </a>
              <a 
                href="/politica-de-privacidade" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-poppins"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;