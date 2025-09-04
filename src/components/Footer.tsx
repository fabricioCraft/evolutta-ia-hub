import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-section text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Evolutta IA</h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              A inteligência artificial que faz sua empresa evoluir. 
              Desenvolvemos agentes de IA personalizados para transformar 
              processos empresariais e impulsionar o crescimento do seu negócio.
            </p>
            <div className="bg-background/10 rounded-xl p-6">
              <p className="text-lg font-semibold mb-2">Slogan</p>
              <p className="text-primary-foreground/90">
                "Evolutta IA: seu parceiro estratégico para o crescimento inteligente"
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-foreground/70" />
                <a 
                  href="mailto:contato@evoluttaia.com.br" 
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  contato@evoluttaia.com.br
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-foreground/70" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary-foreground/70" />
                <span className="text-primary-foreground/90">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Horário de Atendimento</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary-foreground/70" />
                <div>
                  <p className="text-primary-foreground/90">Segunda à Sexta</p>
                  <p className="text-primary-foreground/70">9h às 18h</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="text-primary-foreground/90">Sábados</p>
                <p className="text-primary-foreground/70">9h às 12h</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 mb-4 md:mb-0">
              © 2024 Evolutta IA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a 
                href="/termos-de-uso" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </a>
              <a 
                href="/politica-de-privacidade" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
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