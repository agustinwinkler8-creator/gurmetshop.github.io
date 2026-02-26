import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getProductsByCategory } from '@/data/products';
import type { Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductDetailPanel from '@/components/ProductDetailPanel';
import { Wine, Coffee, Leaf, Gift, Truck } from 'lucide-react';

const categoryConfig = {
  aloe: { icon: Wine, key: 'aloeVera' as const, bulkKey: 'aloeBulk' as const },
  coffee: { icon: Coffee, key: 'coffee' as const, bulkKey: 'coffeeBulk' as const },
  cafeMula: { icon: Coffee, key: 'cafeMula' as const, bulkKey: 'cafeMulaBulk' as const },
  yerbaMate: { icon: Leaf, key: 'yerbaMate' as const, bulkKey: 'yerbaMateBulk' as const },
};

const ProductCatalog = () => {
  const { t } = useLanguage();
  const ref = useScrollAnimation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const openDetail = (product: Product) => {
    setSelectedProduct(product);
    setPanelOpen(true);
  };

  const categories: (Product['category'])[] = ['aloe', 'coffee', 'cafeMula', 'yerbaMate'];

  return (
    <section id="productos" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="animate-on-scroll font-display text-5xl md:text-6xl text-center text-gradient-gold mb-8 tracking-wider">
          {t.products.title}
        </h2>

        {/* Offer banner */}
        <div className="animate-on-scroll relative overflow-hidden rounded-lg bg-gradient-offer p-6 mb-6 text-center shadow-rock">
          <div className="absolute inset-0 animate-shimmer" />
          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-4xl text-offer-foreground flex items-center justify-center gap-2">
              <Gift className="w-8 h-8" />
              {t.products.offer}
            </h3>
            <p className="text-lg text-offer-foreground/90 mt-2 font-medium">
              {t.products.offerText}
            </p>
          </div>
        </div>

        {/* Delivery info */}
        <div className="animate-on-scroll flex items-center justify-center gap-2 p-4 mb-12 rounded-lg bg-wholesale/10 border border-wholesale/30 text-wholesale">
          <Truck className="w-5 h-5" />
          <span className="font-semibold">{t.products.delivery}</span>
        </div>

        {/* Categories */}
        {categories.map((cat) => {
          const config = categoryConfig[cat];
          const Icon = config.icon;
          const prods = getProductsByCategory(cat);

          return (
            <div key={cat} className="mb-16">
              {/* Category header */}
              <div className="animate-on-scroll flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/20 to-transparent border-l-4 border-primary mb-4">
                <Icon className="w-7 h-7 text-primary" />
                <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wide">
                  {t.categories[config.key]}
                </h3>
              </div>

              {/* Bulk info */}
              <div className="animate-on-scroll text-center p-3 mb-6 rounded bg-secondary/50 border border-border text-sm text-muted-foreground">
                {t.categories[config.bulkKey]}
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {prods.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    onClick={openDetail}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ProductDetailPanel
        product={selectedProduct}
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
      />
    </section>
  );
};

export default ProductCatalog;
