import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const { lang, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#inicio' },
    { label: t.nav.products, href: '#productos' },
    { label: t.nav.about, href: '#nosotros' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-rock'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <span className="font-display text-2xl md:text-3xl text-gradient-gold tracking-wider">
            GURMET SHOP
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
              </button>
            ))}

            <a
              href="tel:+541134239865"
              className="flex items-center gap-1 px-3 py-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>11 3423-9865</span>
            </a>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border hover:border-primary/50 text-sm transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-border text-xs"
            >
              <Globe className="w-3 h-3" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+541134239865"
              className="flex items-center gap-2 px-4 py-3 text-primary"
            >
              <Phone className="w-4 h-4" />
              11 3423-9865
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
