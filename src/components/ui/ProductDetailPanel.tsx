import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Check, X } from 'lucide-react';
import type { Product } from '@/data/products';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface ProductDetailPanelProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductDetailPanel = ({ product, open, onClose }: ProductDetailPanelProps) => {
  const { lang, t } = useLanguage();
  const [priceView, setPriceView] = useState<'retail' | 'wholesale'>('retail');

  if (!product) return null;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg bg-card border-l border-border overflow-y-auto">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-display text-3xl text-gradient-gold tracking-wide">
            {product.name[lang]}
          </SheetTitle>
          <SheetDescription className="text-foreground/70">
            {product.description[lang]}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Image */}
          <div className="rounded-lg overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={product.name[lang]}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Price section */}
          <div className="rounded-lg border border-border p-4 bg-secondary/30">
            {product.wholesalePrice && (
              <div className="flex rounded-full border border-border overflow-hidden mb-4">
                <button
                  onClick={() => setPriceView('retail')}
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                    priceView === 'retail' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t.products.retailPrice}
                </button>
                <button
                  onClick={() => setPriceView('wholesale')}
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                    priceView === 'wholesale' ? 'bg-wholesale text-wholesale-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t.products.wholesalePrice}
                </button>
              </div>
            )}

            <p className="text-4xl font-bold text-primary">
              {priceView === 'wholesale' && product.wholesalePrice
                ? product.wholesalePrice
                : product.price}
            </p>

            {product.boxInfo && (
              <p className="text-sm text-muted-foreground mt-1">{product.boxInfo[lang]}</p>
            )}

            {priceView === 'wholesale' && product.wholesaleText && (
              <div className="mt-3 p-3 rounded bg-wholesale/10 border-l-2 border-wholesale">
                <p className="text-sm text-wholesale">{product.wholesaleText[lang]}</p>
              </div>
            )}
          </div>

          {/* Characteristics */}
          <div className="rounded-lg bg-secondary/30 p-4">
            <h4 className="font-display text-xl text-foreground mb-3 tracking-wide">
              {t.products.characteristics}
            </h4>
            <ul className="space-y-2">
              {product.characteristics[lang].map((char, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-organic mt-0.5 flex-shrink-0" />
                  {char}
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-2 tracking-wide">
              {t.products.ingredients}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.ingredients[lang]}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-4 border-t border-border">
            <Button asChild size="lg" className="rounded-full px-8 shadow-rock w-full">
              <a href="tel:+541134239865">
                <Phone className="w-5 h-5 mr-2" />
                {t.products.callToOrder}
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              {t.products.consultAvailability}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProductDetailPanel;
