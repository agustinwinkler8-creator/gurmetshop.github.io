export interface Product {
  id: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
  price: string;
  wholesalePrice?: string;
  wholesaleMinQty?: number;
  wholesaleText?: { es: string; en: string };
  presentation: string;
  boxInfo?: { es: string; en: string };
  category: 'aloe' | 'coffee' | 'cafeMula' | 'yerbaMate';
  badge: { es: string; en: string };
  badgeColor: 'organic' | 'primary' | 'accent' | 'gold';
  characteristics: { es: string[]; en: string[] };
  ingredients: { es: string; en: string };
  shelfLife?: string;
}

export const products: Product[] = [
  // OKF Aloe Vera
  {
    id: 'aloe-sandia',
    name: { es: 'Aloe Vera King Sandía', en: 'Aloe Vera King Watermelon' },
    description: {
      es: 'Bebida dulce y refrescante de aloe vera orgánico con sabor a sandía',
      en: 'Sweet and refreshing organic aloe vera drink with watermelon flavor',
    },
    image: '/placeholder.svg',
    price: '$5.100',
    wholesalePrice: '$4.000',
    wholesaleMinQty: 10,
    wholesaleText: {
      es: 'Precio mayorista: $4.000 por unidad (mínimo 10 unidades)',
      en: 'Wholesale price: $4,000 per unit (minimum 10 units)',
    },
    presentation: '500ml',
    boxInfo: { es: 'Caja x 12 unidades', en: 'Box x 12 units' },
    category: 'aloe',
    badge: { es: 'ORGÁNICO', en: 'ORGANIC' },
    badgeColor: 'organic',
    characteristics: {
      es: ['SIN CONSERVANTES AÑADIDOS', 'Aloe orgánico', 'Sin ingeniería genética', 'SIN COLORANTES ARTIFICIALES', 'SIN GLUTEN / SIN GRASA'],
      en: ['NO ADDED PRESERVATIVES', 'Organic aloe', 'Non-GMO', 'NO ARTIFICIAL COLORS', 'GLUTEN FREE / FAT FREE'],
    },
    ingredients: {
      es: 'Aloe vera orgánico, agua purificada, azúcar de caña orgánico, jugo concentrado de sandía, acidulante (ácido cítrico), estabilizante (goma xantana).',
      en: 'Organic aloe vera, purified water, organic cane sugar, watermelon juice concentrate, acidifier (citric acid), stabilizer (xanthan gum).',
    },
  },
  {
    id: 'aloe-mango',
    name: { es: 'Aloe Vera King Mango', en: 'Aloe Vera King Mango' },
    description: {
      es: 'Bebida dulce y refrescante de aloe vera orgánico con sabor a mango',
      en: 'Sweet and refreshing organic aloe vera drink with mango flavor',
    },
    image: '/placeholder.svg',
    price: '$5.100',
    wholesalePrice: '$4.000',
    wholesaleMinQty: 10,
    wholesaleText: {
      es: 'Precio mayorista: $4.000 por unidad (mínimo 10 unidades)',
      en: 'Wholesale price: $4,000 per unit (minimum 10 units)',
    },
    presentation: '500ml',
    boxInfo: { es: 'Caja x 12 unidades', en: 'Box x 12 units' },
    category: 'aloe',
    badge: { es: 'ORGÁNICO', en: 'ORGANIC' },
    badgeColor: 'organic',
    characteristics: {
      es: ['SIN CONSERVANTES AÑADIDOS', 'Aloe orgánico', 'Sin ingeniería genética', 'SIN COLORANTES ARTIFICIALES', 'SIN GLUTEN / SIN GRASA'],
      en: ['NO ADDED PRESERVATIVES', 'Organic aloe', 'Non-GMO', 'NO ARTIFICIAL COLORS', 'GLUTEN FREE / FAT FREE'],
    },
    ingredients: {
      es: 'Aloe vera orgánico, agua purificada, azúcar de caña orgánico, jugo concentrado de mango, acidulante (ácido cítrico), estabilizante (goma xantana).',
      en: 'Organic aloe vera, purified water, organic cane sugar, mango juice concentrate, acidifier (citric acid), stabilizer (xanthan gum).',
    },
  },
  {
    id: 'aloe-kiwi',
    name: { es: 'Aloe Vera King Gold Kiwi', en: 'Aloe Vera King Gold Kiwi' },
    description: {
      es: 'Bebida dulce y refrescante de aloe vera orgánico con sabor a kiwi dorado',
      en: 'Sweet and refreshing organic aloe vera drink with golden kiwi flavor',
    },
    image: '/placeholder.svg',
    price: '$5.100',
    wholesalePrice: '$4.000',
    wholesaleMinQty: 10,
    wholesaleText: {
      es: 'Precio mayorista: $4.000 por unidad (mínimo 10 unidades)',
      en: 'Wholesale price: $4,000 per unit (minimum 10 units)',
    },
    presentation: '500ml',
    boxInfo: { es: 'Caja x 12 unidades', en: 'Box x 12 units' },
    category: 'aloe',
    badge: { es: 'ORGÁNICO', en: 'ORGANIC' },
    badgeColor: 'organic',
    characteristics: {
      es: ['SIN CONSERVANTES AÑADIDOS', 'Aloe orgánico', 'Sin ingeniería genética', 'SIN COLORANTES ARTIFICIALES', 'SIN GLUTEN / SIN GRASA'],
      en: ['NO ADDED PRESERVATIVES', 'Organic aloe', 'Non-GMO', 'NO ARTIFICIAL COLORS', 'GLUTEN FREE / FAT FREE'],
    },
    ingredients: {
      es: 'Aloe vera orgánico, agua purificada, azúcar de caña orgánico, jugo concentrado de kiwi, acidulante (ácido cítrico), estabilizante (goma xantana).',
      en: 'Organic aloe vera, purified water, organic cane sugar, kiwi juice concentrate, acidifier (citric acid), stabilizer (xanthan gum).',
    },
  },
  {
    id: 'aloe-frutilla',
    name: { es: 'Aloe Vera King Frutilla', en: 'Aloe Vera King Strawberry' },
    description: {
      es: 'Bebida dulce y refrescante de aloe vera orgánico con sabor a frutilla',
      en: 'Sweet and refreshing organic aloe vera drink with strawberry flavor',
    },
    image: '/placeholder.svg',
    price: '$5.100',
    wholesalePrice: '$4.000',
    wholesaleMinQty: 10,
    wholesaleText: {
      es: 'Precio mayorista: $4.000 por unidad (mínimo 10 unidades)',
      en: 'Wholesale price: $4,000 per unit (minimum 10 units)',
    },
    presentation: '500ml',
    boxInfo: { es: 'Caja x 12 unidades', en: 'Box x 12 units' },
    category: 'aloe',
    badge: { es: 'ORGÁNICO', en: 'ORGANIC' },
    badgeColor: 'organic',
    characteristics: {
      es: ['SIN CONSERVANTES AÑADIDOS', 'Aloe orgánico', 'Sin ingeniería genética', 'SIN COLORANTES ARTIFICIALES', 'SIN GLUTEN / SIN GRASA'],
      en: ['NO ADDED PRESERVATIVES', 'Organic aloe', 'Non-GMO', 'NO ARTIFICIAL COLORS', 'GLUTEN FREE / FAT FREE'],
    },
    ingredients: {
      es: 'Aloe vera orgánico, agua purificada, azúcar de caña orgánico, jugo concentrado de frutilla, acidulante (ácido cítrico), estabilizante (goma xantana).',
      en: 'Organic aloe vera, purified water, organic cane sugar, strawberry juice concentrate, acidifier (citric acid), stabilizer (xanthan gum).',
    },
  },
  {
    id: 'aloe-arandanos',
    name: { es: 'Aloe Vera King Arándanos', en: 'Aloe Vera King Blueberry' },
    description: {
      es: 'Bebida dulce y refrescante de aloe vera orgánico con sabor a arándanos',
      en: 'Sweet and refreshing organic aloe vera drink with blueberry flavor',
    },
    image: '/placeholder.svg',
    price: '$5.100',
    wholesalePrice: '$4.000',
    wholesaleMinQty: 10,
    wholesaleText: {
      es: 'Precio mayorista: $4.000 por unidad (mínimo 10 unidades)',
      en: 'Wholesale price: $4,000 per unit (minimum 10 units)',
    },
    presentation: '500ml',
    boxInfo: { es: 'Caja x 12 unidades', en: 'Box x 12 units' },
    category: 'aloe',
    badge: { es: 'ORGÁNICO', en: 'ORGANIC' },
    badgeColor: 'organic',
    characteristics: {
      es: ['SIN CONSERVANTES AÑADIDOS', 'Aloe orgánico', 'Sin ingeniería genética', 'SIN COLORANTES ARTIFICIALES', 'SIN GLUTEN / SIN GRASA'],
      en: ['NO ADDED PRESERVATIVES', 'Organic aloe', 'Non-GMO', 'NO ARTIFICIAL COLORS', 'GLUTEN FREE / FAT FREE'],
    },
    ingredients: {
      es: 'Aloe vera orgánico, agua purificada, azúcar de caña orgánico, jugo concentrado de arándanos, acidulante (ácido cítrico), estabilizante (goma xantana).',
      en: 'Organic aloe vera, purified water, organic cane sugar, blueberry juice concentrate, acidifier (citric acid), stabilizer (xanthan gum).',
    },
  },
  {
    id: 'aloe-original',
    name: { es: 'Aloe Vera King Original', en: 'Aloe Vera King Original' },
    description: {
      es: 'Bebida dulce y refrescante de aloe vera orgánico sabor original',
      en: 'Sweet and refreshing original flavor organic aloe vera drink',
    },
    image: '/placeholder.svg',
    price: '$5.100',
    wholesalePrice: '$4.000',
    wholesaleMinQty: 10,
    wholesaleText: {
      es: 'Precio mayorista: $4.000 por unidad (mínimo 10 unidades)',
      en: 'Wholesale price: $4,000 per unit (minimum 10 units)',
    },
    presentation: '500ml',
    boxInfo: { es: 'Caja x 12 unidades', en: 'Box x 12 units' },
    category: 'aloe',
    badge: { es: 'ORGÁNICO', en: 'ORGANIC' },
    badgeColor: 'organic',
    characteristics: {
      es: ['SIN CONSERVANTES AÑADIDOS', 'Aloe orgánico', 'Sin ingeniería genética', 'SIN COLORANTES ARTIFICIALES', 'SIN GLUTEN / SIN GRASA'],
      en: ['NO ADDED PRESERVATIVES', 'Organic aloe', 'Non-GMO', 'NO ARTIFICIAL COLORS', 'GLUTEN FREE / FAT FREE'],
    },
    ingredients: {
      es: 'Aloe vera orgánico, agua purificada, azúcar de caña orgánico, acidulante (ácido cítrico), estabilizante (goma xantana).',
      en: 'Organic aloe vera, purified water, organic cane sugar, acidifier (citric acid), stabilizer (xanthan gum).',
    },
  },
  // OKF Coffee RTD
  {
    id: 'cafe-latte',
    name: { es: 'OKF Café Latte', en: 'OKF Café Latte' },
    description: {
      es: 'Café frío listo para tomar. Suave y cremoso, perfecto para cualquier momento.',
      en: 'Ready-to-drink cold coffee. Smooth and creamy, perfect for any moment.',
    },
    image: '/placeholder.svg',
    price: '$3.500',
    presentation: '240ml',
    boxInfo: { es: 'Lata 240ml | Caja x 30 unidades', en: 'Can 240ml | Box x 30 units' },
    category: 'coffee',
    badge: { es: 'RTD', en: 'RTD' },
    badgeColor: 'primary',
    shelfLife: '24',
    characteristics: {
      es: ['Ready to Drink (RTD)', 'Granos 100% Arábicos de Brasil', 'Premium Quality Coffee', 'Vida útil: 24 meses', 'Origen: Korea'],
      en: ['Ready to Drink (RTD)', '100% Arabica Beans from Brazil', 'Premium Quality Coffee', 'Shelf life: 24 months', 'Origin: Korea'],
    },
    ingredients: {
      es: 'Café 100% arábica de Brasil, leche, azúcar, agua purificada, estabilizantes.',
      en: '100% Arabica coffee from Brazil, milk, sugar, purified water, stabilizers.',
    },
  },
  {
    id: 'caramel-macchiato',
    name: { es: 'OKF Caramel Macchiato', en: 'OKF Caramel Macchiato' },
    description: {
      es: 'Delicioso café con sabor a caramelo. Un toque dulce y sofisticado.',
      en: 'Delicious caramel-flavored coffee. A sweet and sophisticated touch.',
    },
    image: '/placeholder.svg',
    price: '$3.500',
    presentation: '240ml',
    boxInfo: { es: 'Lata 240ml | Caja x 30 unidades', en: 'Can 240ml | Box x 30 units' },
    category: 'coffee',
    badge: { es: 'RTD', en: 'RTD' },
    badgeColor: 'primary',
    shelfLife: '24',
    characteristics: {
      es: ['Ready to Drink (RTD)', 'Granos 100% Arábicos de Brasil', 'Premium Quality Coffee', 'Vida útil: 24 meses', 'Con sabor a caramelo'],
      en: ['Ready to Drink (RTD)', '100% Arabica Beans from Brazil', 'Premium Quality Coffee', 'Shelf life: 24 months', 'Caramel flavored'],
    },
    ingredients: {
      es: 'Café 100% arábica de Brasil, leche, azúcar, sabor a caramelo, agua purificada, estabilizantes.',
      en: '100% Arabica coffee from Brazil, milk, sugar, caramel flavor, purified water, stabilizers.',
    },
  },
  {
    id: 'cappuccino',
    name: { es: 'OKF Cappuccino', en: 'OKF Cappuccino' },
    description: {
      es: 'Clásico cappuccino frío. Equilibrado y refrescante, ideal para coffee lovers.',
      en: 'Classic cold cappuccino. Balanced and refreshing, ideal for coffee lovers.',
    },
    image: '/placeholder.svg',
    price: '$3.500',
    presentation: '240ml',
    boxInfo: { es: 'Lata 240ml | Caja x 30 unidades', en: 'Can 240ml | Box x 30 units' },
    category: 'coffee',
    badge: { es: 'RTD', en: 'RTD' },
    badgeColor: 'primary',
    shelfLife: '24',
    characteristics: {
      es: ['Ready to Drink (RTD)', 'Granos 100% Arábicos de Brasil', 'Premium Quality Coffee', 'Vida útil: 24 meses', 'For coffee lovers'],
      en: ['Ready to Drink (RTD)', '100% Arabica Beans from Brazil', 'Premium Quality Coffee', 'Shelf life: 24 months', 'For coffee lovers'],
    },
    ingredients: {
      es: 'Café 100% arábica de Brasil, leche, azúcar, agua purificada, estabilizantes.',
      en: '100% Arabica coffee from Brazil, milk, sugar, purified water, stabilizers.',
    },
  },
  {
    id: 'cafe-mocha',
    name: { es: 'OKF Café Mocha', en: 'OKF Café Mocha' },
    description: {
      es: 'Café con chocolate. Una combinación irresistible y energizante.',
      en: 'Coffee with chocolate. An irresistible and energizing combination.',
    },
    image: '/placeholder.svg',
    price: '$3.500',
    presentation: '240ml',
    boxInfo: { es: 'Lata 240ml | Caja x 30 unidades', en: 'Can 240ml | Box x 30 units' },
    category: 'coffee',
    badge: { es: 'RTD', en: 'RTD' },
    badgeColor: 'primary',
    shelfLife: '24',
    characteristics: {
      es: ['Ready to Drink (RTD)', 'Granos 100% Arábicos de Brasil', 'Premium Quality Coffee', 'Vida útil: 24 meses', 'For an energy boost'],
      en: ['Ready to Drink (RTD)', '100% Arabica Beans from Brazil', 'Premium Quality Coffee', 'Shelf life: 24 months', 'For an energy boost'],
    },
    ingredients: {
      es: 'Café 100% arábica de Brasil, leche, chocolate, azúcar, agua purificada, estabilizantes.',
      en: '100% Arabica coffee from Brazil, milk, chocolate, sugar, purified water, stabilizers.',
    },
  },
  // Café Mula
  {
    id: 'cafe-intenso',
    name: { es: 'Café Mula Intenso', en: 'Café Mula Intense' },
    description: {
      es: 'Café premium de alta calidad, aroma intenso y sabor único',
      en: 'Premium high-quality coffee, intense aroma and unique flavor',
    },
    image: '/placeholder.svg',
    price: '$13.000',
    wholesalePrice: '$8.500',
    wholesaleMinQty: 5,
    wholesaleText: {
      es: 'Precio mayorista: $8.500 por unidad (mínimo 5 unidades)',
      en: 'Wholesale price: $8,500 per unit (minimum 5 units)',
    },
    presentation: '500g',
    category: 'cafeMula',
    badge: { es: 'PREMIUM', en: 'PREMIUM' },
    badgeColor: 'gold',
    characteristics: {
      es: ['100% Arábica', 'Tueste Oscuro', 'Aroma Intenso', 'Sabor Robusto', 'El que no pide permiso'],
      en: ['100% Arabica', 'Dark Roast', 'Intense Aroma', 'Robust Flavor', 'The one that asks no permission'],
    },
    ingredients: {
      es: '100% granos de café arábica seleccionados y tostados en grado oscuro.',
      en: '100% selected Arabica coffee beans, dark roasted.',
    },
  },
  {
    id: 'cafe-equilibrado',
    name: { es: 'Café Mula Equilibrado', en: 'Café Mula Balanced' },
    description: {
      es: 'Café premium de equilibrio perfecto, aroma suave y cuerpo medio',
      en: 'Premium coffee with perfect balance, smooth aroma and medium body',
    },
    image: '/placeholder.svg',
    price: '$13.000',
    wholesalePrice: '$8.500',
    wholesaleMinQty: 5,
    wholesaleText: {
      es: 'Precio mayorista: $8.500 por unidad (mínimo 5 unidades)',
      en: 'Wholesale price: $8,500 per unit (minimum 5 units)',
    },
    presentation: '500g',
    category: 'cafeMula',
    badge: { es: 'EQUILIBRADO', en: 'BALANCED' },
    badgeColor: 'primary',
    characteristics: {
      es: ['100% Arábica', 'Tueste Medio', 'Aroma Suave', 'Cuerpo Medio', 'El conciliador que lo resuelve todo'],
      en: ['100% Arabica', 'Medium Roast', 'Smooth Aroma', 'Medium Body', 'The peacemaker'],
    },
    ingredients: {
      es: '100% granos de café arábica seleccionados y tostados en grado medio.',
      en: '100% selected Arabica coffee beans, medium roasted.',
    },
  },
  {
    id: 'cafe-suave',
    name: { es: 'Café Mula Suave', en: 'Café Mula Smooth' },
    description: {
      es: 'Café premium de sabor suave y delicado, aroma fresco',
      en: 'Premium coffee with smooth and delicate flavor, fresh aroma',
    },
    image: '/placeholder.svg',
    price: '$13.000',
    wholesalePrice: '$8.500',
    wholesaleMinQty: 5,
    wholesaleText: {
      es: 'Precio mayorista: $8.500 por unidad (mínimo 5 unidades)',
      en: 'Wholesale price: $8,500 per unit (minimum 5 units)',
    },
    presentation: '500g',
    category: 'cafeMula',
    badge: { es: 'SUAVE', en: 'SMOOTH' },
    badgeColor: 'accent',
    characteristics: {
      es: ['100% Arábica', 'Tueste Claro', 'Aroma Fresco', 'Sabor Suave', 'El que no pide disculpas'],
      en: ['100% Arabica', 'Light Roast', 'Fresh Aroma', 'Smooth Flavor', 'The unapologetic one'],
    },
    ingredients: {
      es: '100% granos de café arábica seleccionados y tostados en grado claro.',
      en: '100% selected Arabica coffee beans, light roasted.',
    },
  },
  // Yerba Mate
  {
    id: 'yerba-mate',
    name: { es: 'Yerba Mate Akaguapy', en: 'Yerba Mate Akaguapy' },
    description: {
      es: 'Yerba mate artesanal con sabor suave y energizante',
      en: 'Artisanal yerba mate with smooth flavor and energizing properties',
    },
    image: '/placeholder.svg',
    price: '$5.000',
    wholesalePrice: '$4.000',
    wholesaleMinQty: 10,
    wholesaleText: {
      es: 'Precio mayorista: $4.000 por unidad (mínimo 10 unidades)',
      en: 'Wholesale price: $4,000 per unit (minimum 10 units)',
    },
    presentation: '500g',
    category: 'yerbaMate',
    badge: { es: 'ARTESANAL', en: 'ARTISANAL' },
    badgeColor: 'organic',
    characteristics: {
      es: ['ARTESANAL', 'ENERGIZANTE', 'SIN POLVO', 'SABOR SUAVE'],
      en: ['ARTISANAL', 'ENERGIZING', 'DUST FREE', 'SMOOTH FLAVOR'],
    },
    ingredients: {
      es: 'Yerba mate 100% natural, seleccionada y procesada artesanalmente.',
      en: '100% natural yerba mate, hand-selected and artisanally processed.',
    },
  },
];

export const getProductsByCategory = (category: Product['category']) =>
  products.filter((p) => p.category === category);
