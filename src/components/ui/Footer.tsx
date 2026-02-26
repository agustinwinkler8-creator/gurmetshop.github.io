import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: '#inicio' },
    { label: t.nav.products, href: '#productos' },
    { label: t.nav.about, href: '#nosotros' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  return (
    <footer className="bg-gradient-rock border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl text-gradient-gold tracking-wider">GURMET SHOP</span>
            <p className="text-sm text-muted-foreground mt-3">{t.footer.description}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-foreground tracking-wide mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground tracking-wide mb-4">{t.footer.directContact}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Verónica - 11 3423-9865
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {t.contact.hours}
              </p>
              <div className="mt-4">
                <p className="text-foreground/70 font-medium mb-2">{t.footer.deliveryZones}</p>
                <ul className="space-y-1 text-xs">
                  <li className="text-organic">✓ {t.footer.caba}</li>
                  <li className="text-organic">✓ {t.footer.gba}</li>
                  <li className="text-organic">✓ {t.footer.interior}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          <p>{t.footer.rights}</p>
          <p className="mt-1">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
