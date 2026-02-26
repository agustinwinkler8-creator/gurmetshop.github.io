import { useEffect } from 'react';
import { products } from '@/data/products';

const SEOJsonLd = () => {
  useEffect(() => {
    // Organization
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Gurmet Shop',
      description: 'Productos premium gourmet de Argentina. Café orgánico, jugos de aloe vera orgánicos, yerba mate artesanal.',
      url: window.location.origin,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+54-11-3423-9865',
        contactType: 'sales',
        availableLanguage: ['Spanish', 'English'],
      },
      areaServed: {
        '@type': 'Country',
        name: 'Argentina',
      },
    };

    // Local Business
    const businessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Gurmet Shop',
      description: 'Tienda de productos gourmet premium de Argentina. Café orgánico, aloe vera orgánico, yerba mate artesanal.',
      telephone: '+54-11-3423-9865',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      priceRange: '$$',
    };

    // Products
    const productSchemas = products.map((p) => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name.es,
      description: p.description.es,
      image: p.image,
      offers: {
        '@type': 'Offer',
        price: p.price.replace(/[$.]/g, '').replace(',', ''),
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Gurmet Shop' },
      },
      category: p.category === 'aloe' ? 'Organic Aloe Vera Juice' :
        p.category === 'coffee' ? 'Ready-to-Drink Coffee' :
        p.category === 'cafeMula' ? 'Premium Coffee' : 'Yerba Mate',
    }));

    const schemas = [orgSchema, businessSchema, ...productSchemas];
    const scripts: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return null;
};

export default SEOJsonLd;
