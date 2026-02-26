import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCatalog from '@/components/ProductCatalog';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOJsonLd from '@/components/SEOJsonLd';

const Index = () => {
  return (
    <LanguageProvider>
      <SEOJsonLd />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProductCatalog />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
