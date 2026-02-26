import { useLanguage } from '@/contexts/LanguageContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: (product: Product) => void;
}

const badgeColorMap = {
  organic: 'bg-organic text-organic-foreground',
  primary: 'bg-primary text-primary-foreground',
  accent: 'bg-accent text-accent-foreground',
  gold: 'bg-gold text-gold-foreground',
};

const ProductCard = ({ product, index, onClick }: ProductCardProps) => {
  const { lang, t } = useLanguage();

  return (
    <article
      className={`animate-on-scroll delay-${(index % 4) + 1} group cursor-pointer`}
      onClick={() => onClick(product)}
    >
      <div className="relative bg-card rounded-lg overflow-hidden border-glow shadow-card transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-rock h-full flex flex-col">
        {/* Badge */}
        <span className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold ${badgeColorMap[product.badgeColor]}`}>
          {product.badge[lang]}
        </span>

        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name[lang]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display text-xl text-foreground mb-1 tracking-wide">
            {product.name[lang]}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 flex-1">
            {product.description[lang]}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="px-2 py-0.5 text-xs rounded bg-organic/20 text-organic font-medium">
              {product.presentation}
            </span>
          </div>

          {/* Prices */}
          <div className="mt-auto">
            <p className="text-2xl font-bold text-primary">
              {product.price}
              <span className="text-sm text-muted-foreground ml-2 font-normal">
                {t.products.perUnit}
              </span>
            </p>
            {product.wholesalePrice && (
              <div className="mt-2 pt-2 border-t border-border">
                <p className="text-lg font-bold text-wholesale">
                  {product.wholesalePrice}
                  <span className="text-xs text-muted-foreground ml-1 font-normal">
                    {t.products.wholesaleMin} {product.wholesaleMinQty} {t.products.units}
                  </span>
                </p>
                <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-semibold bg-wholesale/20 text-wholesale">
                  {t.products.wholesale}
                </span>
              </div>
            )}
            {product.boxInfo && (
              <p className="text-xs text-muted-foreground mt-2">{product.boxInfo[lang]}</p>
            )}
            {product.shelfLife && (
              <p className="text-xs text-muted-foreground">
                {t.products.shelfLife}: {product.shelfLife} {t.products.months}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
