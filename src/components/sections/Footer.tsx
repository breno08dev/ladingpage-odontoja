import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-deep text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">
              Odonto<span className="text-accent">Já</span>
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Clínica odontológica comprometida com a saúde bucal e o bem-estar 
              dos nossos pacientes. Atendimento ético, profissional e humanizado.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/odontoja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram da OdontoJá"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/odontoja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook da OdontoJá"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#clinica" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  A Clínica
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Av. Paulista, 1000 - Sala 1201<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  (11) 3456-7890
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  contato@odontoja.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} OdontoJá Odontologia Ltda. CNPJ: 12.345.678/0001-90
              </p>
              <p className="text-primary-foreground/60 text-sm">
                Responsável Técnica: Dra. Fernanda Ribeiro Santos - CRO-SP 345678
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-primary-foreground/50 text-xs max-w-md">
                Este site segue as diretrizes éticas do Conselho Federal de Odontologia. 
                As imagens são meramente ilustrativas. Os resultados podem variar de acordo com cada caso.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="bg-blue-deep/80 border-t border-primary-foreground/5">
        <div className="container py-4">
          <p className="text-primary-foreground/40 text-xs text-center">
            Clínica regularmente inscrita no CRO-SP. É proibida a divulgação de preços de serviços 
            e a garantia de resultados específicos, conforme Resolução CFO-198/2019. 
            Consulte sempre um profissional qualificado.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
