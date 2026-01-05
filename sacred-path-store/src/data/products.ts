import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'thc-sagrado-original',
    slug: 'thc-sagrado-original',
    name: 'THC Sagrado Original',
    description: 'Microdosis de bienestar ceremonial con formulación tradicional. Conexión profunda con la naturaleza.',
    longDescription: 'Nuestra fórmula original, creada siguiendo los conocimientos ancestrales de las tradiciones mexicanas. Cada unidad está cuidadosamente preparada para ofrecer una experiencia de bienestar equilibrada y armoniosa.',
    basePrice: 450,
    category: 'thc',
    tags: ['bestseller', 'ceremonial'],
    featuredImage: '/placeholder.svg',
    gallery: [],
    variations: [
      {
        id: 'thc-sag-1uni',
        sku: 'THC-SAG-1',
        name: '1 unidad',
        price: 450,
        inventoryQuantity: 50,
        attributes: { quantity: 1, unit: 'uni' }
      },
      {
        id: 'thc-sag-4uni',
        sku: 'THC-SAG-4',
        name: '4 unidades',
        price: 1200,
        compareAtPrice: 1800,
        inventoryQuantity: 25,
        attributes: { quantity: 4, unit: 'uni' }
      },
      {
        id: 'thc-sag-8uni',
        sku: 'THC-SAG-8',
        name: '8 unidades',
        price: 2000,
        compareAtPrice: 3600,
        inventoryQuantity: 15,
        attributes: { quantity: 8, unit: 'uni' }
      }
    ],
    trackInventory: true,
    status: 'active',
    featured: true
  },
  {
    id: 'cacao-ceremonial',
    slug: 'cacao-ceremonial',
    name: 'Cacao Ceremonial Puro',
    description: 'Cacao 100% puro de origen mexicano. Ideal para ceremonias y meditación profunda.',
    longDescription: 'Cacao ceremonial de grado ritual, cosechado en las montañas de Chiapas. Este cacao ha sido utilizado durante milenios por los pueblos originarios de México en sus ceremonias sagradas.',
    basePrice: 350,
    category: 'cacao',
    tags: ['orgánico', 'ceremonial'],
    featuredImage: '/placeholder.svg',
    gallery: [],
    variations: [
      {
        id: 'cacao-100g',
        sku: 'CAC-100',
        name: '100g',
        price: 350,
        inventoryQuantity: 40,
        attributes: { quantity: 100, unit: 'g' }
      },
      {
        id: 'cacao-250g',
        sku: 'CAC-250',
        name: '250g',
        price: 750,
        compareAtPrice: 875,
        inventoryQuantity: 30,
        attributes: { quantity: 250, unit: 'g' }
      },
      {
        id: 'cacao-500g',
        sku: 'CAC-500',
        name: '500g',
        price: 1300,
        compareAtPrice: 1750,
        inventoryQuantity: 20,
        attributes: { quantity: 500, unit: 'g' }
      }
    ],
    trackInventory: true,
    status: 'active',
    featured: true
  },
  {
    id: 'thc-luna-llena',
    slug: 'thc-luna-llena',
    name: 'THC Luna Llena',
    description: 'Fórmula especial para rituales nocturnos. Mayor concentración para experiencias profundas.',
    longDescription: 'Diseñada específicamente para ceremonias nocturnas y trabajo lunar. Esta fórmula ofrece una experiencia más intensa, ideal para practicantes experimentados.',
    basePrice: 550,
    category: 'thc',
    tags: ['premium', 'nocturno'],
    featuredImage: '/placeholder.svg',
    gallery: [],
    variations: [
      {
        id: 'luna-1uni',
        sku: 'LUN-1',
        name: '1 unidad',
        price: 550,
        inventoryQuantity: 30,
        attributes: { quantity: 1, unit: 'uni' }
      },
      {
        id: 'luna-4uni',
        sku: 'LUN-4',
        name: '4 unidades',
        price: 1800,
        compareAtPrice: 2200,
        inventoryQuantity: 15,
        attributes: { quantity: 4, unit: 'uni' }
      }
    ],
    trackInventory: true,
    status: 'active',
    featured: false
  },
  {
    id: 'kit-iniciacion',
    slug: 'kit-iniciacion',
    name: 'Kit de Iniciación',
    description: 'Todo lo necesario para comenzar tu camino ceremonial. Incluye guía práctica.',
    longDescription: 'El kit perfecto para quienes desean iniciar su práctica ceremonial. Incluye productos seleccionados y una guía digital con instrucciones detalladas.',
    basePrice: 1500,
    category: 'accessories',
    tags: ['kit', 'principiantes'],
    featuredImage: '/placeholder.svg',
    gallery: [],
    variations: [
      {
        id: 'kit-basico',
        sku: 'KIT-BAS',
        name: 'Kit Básico',
        price: 1500,
        inventoryQuantity: 20,
        attributes: { quantity: 1, unit: 'kit' }
      },
      {
        id: 'kit-completo',
        sku: 'KIT-COM',
        name: 'Kit Completo',
        price: 2500,
        compareAtPrice: 3000,
        inventoryQuantity: 10,
        attributes: { quantity: 1, unit: 'kit' }
      }
    ],
    trackInventory: true,
    status: 'active',
    featured: true
  },
  {
    id: 'microdosis-equilibrio',
    slug: 'microdosis-equilibrio',
    name: 'Microdosis Equilibrio',
    description: 'Fórmula balanceada para uso diario. Bienestar sostenido y claridad mental.',
    longDescription: 'Nuestra fórmula más suave, diseñada para integrar la práctica de microdosis en tu vida cotidiana sin interrumpir tus actividades diarias.',
    basePrice: 400,
    category: 'thc',
    tags: ['diario', 'suave'],
    featuredImage: '/placeholder.svg',
    gallery: [],
    variations: [
      {
        id: 'eq-7dias',
        sku: 'EQ-7',
        name: '7 días',
        price: 400,
        inventoryQuantity: 35,
        attributes: { quantity: 7, unit: 'días' }
      },
      {
        id: 'eq-30dias',
        sku: 'EQ-30',
        name: '30 días',
        price: 1400,
        compareAtPrice: 1714,
        inventoryQuantity: 20,
        attributes: { quantity: 30, unit: 'días' }
      }
    ],
    trackInventory: true,
    status: 'active',
    featured: false
  },
  {
    id: 'incienso-copal',
    slug: 'incienso-copal',
    name: 'Incienso de Copal',
    description: 'Resina de copal natural para purificación y preparación del espacio ceremonial.',
    longDescription: 'Copal 100% natural recolectado de manera sustentable. Utilizado ancestralmente para limpiar y preparar espacios sagrados.',
    basePrice: 180,
    category: 'accessories',
    tags: ['purificación', 'tradicional'],
    featuredImage: '/placeholder.svg',
    gallery: [],
    variations: [
      {
        id: 'copal-50g',
        sku: 'COP-50',
        name: '50g',
        price: 180,
        inventoryQuantity: 60,
        attributes: { quantity: 50, unit: 'g' }
      },
      {
        id: 'copal-100g',
        sku: 'COP-100',
        name: '100g',
        price: 300,
        compareAtPrice: 360,
        inventoryQuantity: 40,
        attributes: { quantity: 100, unit: 'g' }
      }
    ],
    trackInventory: true,
    status: 'active',
    featured: false
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured && p.status === 'active');
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category && p.status === 'active');
};
