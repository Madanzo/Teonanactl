"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = exports.getFeaturedProducts = exports.getProductBySlug = exports.products = void 0;
exports.products = [
    // TEONANÁCATL Products
    {
        id: 'teo-dosis-10',
        slug: 'teonanacatl-dosis-teo',
        name: 'TEONANÁCATL - Dosis TEO (.10)',
        description: 'El más recomendado para iniciar. Con Melena de León y cacao. Microdosis suave para habitar tu centro.',
        longDescription: 'Nuestra dosis de entrada, perfecta para quienes inician su camino con Teonanácatl. Con 0.10g por cápsula, enriquecida con Melena de León y cacao para potenciar los beneficios cognitivos. Ofrece una experiencia suave y equilibrada, ideal para principiantes que buscan conectar con la medicina sagrada de manera gradual.',
        basePrice: 1099,
        category: 'microdosis',
        tags: ['principiantes', 'recomendado', 'microdosis'],
        featuredImage: 'https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Products%2FTeonanactl%20product.png?alt=media&token=550aec38-bacb-4d06-8bbb-c0ca6ae1c88a',
        gallery: [],
        variations: [
            {
                id: 'teo-10-33',
                sku: 'TEO-10-33',
                name: '33 cápsulas',
                price: 1099,
                inventoryQuantity: 50,
                attributes: { quantity: 33, unit: 'cápsulas' }
            },
            {
                id: 'teo-10-55',
                sku: 'TEO-10-55',
                name: '55 cápsulas',
                price: 1800,
                inventoryQuantity: 40,
                attributes: { quantity: 55, unit: 'cápsulas' }
            },
            {
                id: 'teo-10-77',
                sku: 'TEO-10-77',
                name: '77 cápsulas',
                price: 2450,
                inventoryQuantity: 30,
                attributes: { quantity: 77, unit: 'cápsulas' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: true
    },
    {
        id: 'teo-dosis-20',
        slug: 'teonanacatl-dosis-nana',
        name: 'TEONANÁCATL - Dosis NANA (.20)',
        description: 'Dosis más alta en caso de resistencia. Con Melena de León y niacina. Para practicantes con experiencia.',
        longDescription: 'Nuestra dosis intermedia con 0.20g por cápsula, enriquecida con Melena de León y niacina para potenciar los beneficios cognitivos y la absorción. Recomendada para quienes ya tienen experiencia con microdosis o presentan mayor tolerancia. Ofrece una conexión más profunda manteniendo la funcionalidad.',
        basePrice: 1400,
        category: 'microdosis',
        tags: ['experiencia', 'resistencia', 'microdosis'],
        featuredImage: 'https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Products%2FTeonanactl%20product.png?alt=media&token=550aec38-bacb-4d06-8bbb-c0ca6ae1c88a',
        gallery: [],
        variations: [
            {
                id: 'teo-20-33',
                sku: 'TEO-20-33',
                name: '33 cápsulas',
                price: 1400,
                inventoryQuantity: 40,
                attributes: { quantity: 33, unit: 'cápsulas' }
            },
            {
                id: 'teo-20-55',
                sku: 'TEO-20-55',
                name: '55 cápsulas',
                price: 2290,
                inventoryQuantity: 30,
                attributes: { quantity: 55, unit: 'cápsulas' }
            },
            {
                id: 'teo-20-77',
                sku: 'TEO-20-77',
                name: '77 cápsulas',
                price: 3290,
                inventoryQuantity: 25,
                attributes: { quantity: 77, unit: 'cápsulas' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: false
    },
    {
        id: 'teo-dosis-50',
        slug: 'teonanacatl-dosis-sabin',
        name: 'TEONANÁCATL - Dosis SABIN (.50)',
        description: 'Solo casos particulares. Con Melena de León y niacina. Dosis alta para experiencias profundas.',
        longDescription: 'Nuestra dosis más concentrada con 0.50g por cápsula, enriquecida con Melena de León y niacina. Reservada para casos particulares y practicantes avanzados bajo supervisión adecuada. No recomendada para principiantes.',
        basePrice: 2750,
        category: 'microdosis',
        tags: ['avanzado', 'alto', 'ceremonial'],
        featuredImage: 'https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Products%2FTeonanactl%20product.png?alt=media&token=550aec38-bacb-4d06-8bbb-c0ca6ae1c88a',
        gallery: [],
        variations: [
            {
                id: 'teo-50-33',
                sku: 'TEO-50-33',
                name: '33 cápsulas',
                price: 2750,
                inventoryQuantity: 20,
                attributes: { quantity: 33, unit: 'cápsulas' }
            },
            {
                id: 'teo-50-55',
                sku: 'TEO-50-55',
                name: '55 cápsulas',
                price: 4850,
                inventoryQuantity: 15,
                attributes: { quantity: 55, unit: 'cápsulas' }
            },
            {
                id: 'teo-50-77',
                sku: 'TEO-50-77',
                name: '77 cápsulas',
                price: 6650,
                inventoryQuantity: 10,
                attributes: { quantity: 77, unit: 'cápsulas' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: false
    },
    {
        id: 'teo-dosis-33-sh',
        slug: 'teonanacatl-dosis-nana-sh',
        name: 'NANÁ SH* (SOLO HONGO .33)',
        description: 'Fórmula pura de solo hongo. Sin aditivos adicionales.',
        longDescription: 'Nuestra fórmula de solo hongo con 0.33g por cápsula. Sin mezclas adicionales, ofrece la experiencia pura del Teonanácatl para quienes buscan la medicina en su forma más natural.',
        basePrice: 1650,
        category: 'microdosis',
        tags: ['puro', 'solo-hongo', 'natural'],
        featuredImage: 'https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Products%2FTeonanactl%20product.png?alt=media&token=550aec38-bacb-4d06-8bbb-c0ca6ae1c88a',
        gallery: [],
        variations: [
            {
                id: 'teo-33-sh-33',
                sku: 'TEO-33-SH-33',
                name: '33 cápsulas',
                price: 1650,
                inventoryQuantity: 35,
                attributes: { quantity: 33, unit: 'cápsulas' }
            },
            {
                id: 'teo-33-sh-55',
                sku: 'TEO-33-SH-55',
                name: '55 cápsulas',
                price: 2850,
                inventoryQuantity: 25,
                attributes: { quantity: 55, unit: 'cápsulas' }
            },
            {
                id: 'teo-33-sh-77',
                sku: 'TEO-33-SH-77',
                name: '77 cápsulas',
                price: 3950,
                inventoryQuantity: 20,
                attributes: { quantity: 77, unit: 'cápsulas' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: false
    },
    // SAGRADO CBD/THC Oil Products
    {
        id: 'sagrado-cbd-original',
        slug: 'sagrado-cbd-original',
        name: 'CBD Sagrado Original',
        description: 'Aceite esencial 100% puro. CBD de alta calidad para bienestar diario.',
        longDescription: 'Nuestro aceite CBD Sagrado Original, elaborado siguiendo la receta de Rick Simpson. Aceite esencial 100% puro con bajo THC, ideal para uso diario y bienestar general. Diseñado para quienes buscan los beneficios del CBD sin efectos psicoactivos.',
        basePrice: 300,
        category: 'cbd',
        tags: ['cbd', 'bienestar', 'diario'],
        featuredImage: 'https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Products%2FCBD.png?alt=media&token=30ceaedd-ea70-4b42-ad28-c06f003fadc3',
        gallery: [],
        variations: [
            {
                id: 'cbd-orig-baby',
                sku: 'CBD-ORIG-BABY',
                name: 'Baby – 90mg CBD',
                price: 300,
                inventoryQuantity: 50,
                attributes: { quantity: 90, unit: 'mg CBD' }
            },
            {
                id: 'cbd-orig-5ml',
                sku: 'CBD-ORIG-5ML',
                name: '5ml – 150mg CBD',
                price: 400,
                inventoryQuantity: 40,
                attributes: { quantity: 5, unit: 'ml' }
            },
            {
                id: 'cbd-orig-10ml',
                sku: 'CBD-ORIG-10ML',
                name: '10ml – 300mg CBD',
                price: 650,
                inventoryQuantity: 35,
                attributes: { quantity: 10, unit: 'ml' }
            },
            {
                id: 'cbd-orig-20ml',
                sku: 'CBD-ORIG-20ML',
                name: '20ml – 600mg CBD',
                price: 1050,
                inventoryQuantity: 25,
                attributes: { quantity: 20, unit: 'ml' }
            },
            {
                id: 'cbd-orig-30ml',
                sku: 'CBD-ORIG-30ML',
                name: '30ml – 900mg CBD',
                price: 1400,
                inventoryQuantity: 20,
                attributes: { quantity: 30, unit: 'ml' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: true
    },
    {
        id: 'sagrado-san-pedro-cbd',
        slug: 'sagrado-san-pedro-cbd',
        name: 'San Pedro + CBD Sagrado',
        description: 'Fusión ceremonial única. San Pedro combinado con CBD para experiencia equilibrada.',
        longDescription: 'Una fusión única que combina la medicina ancestral de San Pedro con los beneficios del CBD. Esta fórmula especial ofrece una experiencia equilibrada, conectando la sabiduría tradicional con el bienestar moderno.',
        basePrice: 350,
        category: 'cbd',
        tags: ['san-pedro', 'cbd', 'ceremonial'],
        featuredImage: 'https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Products%2FCBD.png?alt=media&token=30ceaedd-ea70-4b42-ad28-c06f003fadc3',
        gallery: [],
        variations: [
            {
                id: 'sp-cbd-baby',
                sku: 'SP-CBD-BABY',
                name: 'Baby – 90mg CBD',
                price: 350,
                inventoryQuantity: 40,
                attributes: { quantity: 90, unit: 'mg CBD' }
            },
            {
                id: 'sp-cbd-5ml',
                sku: 'SP-CBD-5ML',
                name: '5ml – 150mg CBD',
                price: 450,
                inventoryQuantity: 35,
                attributes: { quantity: 5, unit: 'ml' }
            },
            {
                id: 'sp-cbd-10ml',
                sku: 'SP-CBD-10ML',
                name: '10ml – 300mg CBD',
                price: 700,
                inventoryQuantity: 30,
                attributes: { quantity: 10, unit: 'ml' }
            },
            {
                id: 'sp-cbd-20ml',
                sku: 'SP-CBD-20ML',
                name: '20ml – 600mg CBD',
                price: 1100,
                inventoryQuantity: 20,
                attributes: { quantity: 20, unit: 'ml' }
            },
            {
                id: 'sp-cbd-30ml',
                sku: 'SP-CBD-30ML',
                name: '30ml – 900mg CBD',
                price: 1400,
                inventoryQuantity: 15,
                attributes: { quantity: 30, unit: 'ml' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: false
    },
    {
        id: 'sagrado-thc-original',
        slug: 'sagrado-thc-original',
        name: 'THC Sagrado Original',
        description: 'One Drop Sleep II. Aceite con THC para descanso profundo y relajación.',
        longDescription: 'Nuestro aceite THC Sagrado Original, diseñado para quienes buscan descanso profundo y relajación. Fórmula concentrada siguiendo la receta de Rick Simpson. Recomendado para uso nocturno o en momentos de necesidad.',
        basePrice: 450,
        category: 'thc-oil',
        tags: ['thc', 'descanso', 'nocturno'],
        featuredImage: 'https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Products%2FTHC.png?alt=media&token=3abfa27e-389b-4cbe-af3c-8d945b79b939',
        gallery: [],
        variations: [
            {
                id: 'thc-orig-baby',
                sku: 'THC-ORIG-BABY',
                name: 'Baby – 9mg THC',
                price: 450,
                inventoryQuantity: 35,
                attributes: { quantity: 9, unit: 'mg THC' }
            },
            {
                id: 'thc-orig-5ml',
                sku: 'THC-ORIG-5ML',
                name: '5ml – 15mg THC',
                price: 600,
                inventoryQuantity: 30,
                attributes: { quantity: 5, unit: 'ml' }
            },
            {
                id: 'thc-orig-10ml',
                sku: 'THC-ORIG-10ML',
                name: '10ml – 30mg THC',
                price: 900,
                inventoryQuantity: 25,
                attributes: { quantity: 10, unit: 'ml' }
            },
            {
                id: 'thc-orig-20ml',
                sku: 'THC-ORIG-20ML',
                name: '20ml – 60mg THC',
                price: 1350,
                inventoryQuantity: 20,
                attributes: { quantity: 20, unit: 'ml' }
            },
            {
                id: 'thc-orig-30ml',
                sku: 'THC-ORIG-30ML',
                name: '30ml – 90mg THC',
                price: 1700,
                inventoryQuantity: 15,
                attributes: { quantity: 30, unit: 'ml' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: false
    },
    {
        id: 'gomitas-teonanacatl',
        slug: 'gomitas-teonanacatl-microdosis',
        name: 'Gomitas Teonanácatl (Microdosis)',
        description: 'Gomitas artesanales orgánicas infundidas con microdosis puras de Teonanácatl para tu bienestar diario.',
        longDescription: 'Nuestras gomitas premium artesanales están elaboradas con ingredientes orgánicos y enriquecidas con una microdosis controlada de Teonanácatl (0.10g). Son una opción deliciosa, práctica y respetuosa para integrar la medicina de la tierra en tu rutina diaria, ayudando a promover el equilibrio emocional y la claridad mental.',
        basePrice: 450,
        category: 'gomitas',
        tags: ['gomitas', 'microdosis', 'artesanal', 'bienestar'],
        featuredImage: '/src/assets/gomitas-teonanacatl.png',
        gallery: [],
        variations: [
            {
                id: 'gomitas-teo-10',
                sku: 'GOM-TEO-10',
                name: 'Frasco 10 piezas (Microdosis .10g c/u)',
                price: 450,
                inventoryQuantity: 50,
                attributes: { quantity: 10, unit: 'piezas' }
            },
            {
                id: 'gomitas-teo-20',
                sku: 'GOM-TEO-20',
                name: 'Frasco 20 piezas (Microdosis .10g c/u)',
                price: 800,
                inventoryQuantity: 40,
                attributes: { quantity: 20, unit: 'piezas' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: true
    },
    {
        id: 'chocolates-teonanacatl',
        slug: 'chocolates-teonanacatl-microdosis',
        name: 'Chocolates Teonanácatl (Microdosis)',
        description: 'Chocolate oscuro artesanal e infundido con microdosis puras de Teonanácatl.',
        longDescription: 'Disfruta de la sinergia mística entre el cacao fino de origen y la medicina sagrada. Cada porción contiene una microdosis controlada de 0.10g de Teonanácatl para habitar tu centro de la forma más deliciosa. Creado de manera artesanal y respetuosa para tu práctica diaria.',
        basePrice: 650,
        category: 'chocolates',
        tags: ['chocolates', 'microdosis', 'cacao', 'artesanal'],
        featuredImage: '/src/assets/chocolates-teonanacatl.png',
        gallery: [],
        variations: [
            {
                id: 'choc-teo-3p',
                sku: 'CHOC-TEO-3P',
                name: 'Barra 3 piezas (Microdosis .10g c/u)',
                price: 650,
                inventoryQuantity: 40,
                attributes: { quantity: 3, unit: 'piezas' }
            },
            {
                id: 'choc-teo-6p',
                sku: 'CHOC-TEO-6P',
                name: 'Barra 6 piezas (Microdosis .10g c/u)',
                price: 1100,
                inventoryQuantity: 30,
                attributes: { quantity: 6, unit: 'piezas' }
            }
        ],
        trackInventory: true,
        status: 'active',
        featured: true
    }
];
const getProductBySlug = (slug) => {
    return exports.products.find(p => p.slug === slug);
};
exports.getProductBySlug = getProductBySlug;
const getFeaturedProducts = () => {
    return exports.products.filter(p => p.featured && p.status === 'active');
};
exports.getFeaturedProducts = getFeaturedProducts;
const getProductsByCategory = (category) => {
    return exports.products.filter(p => p.category === category && p.status === 'active');
};
exports.getProductsByCategory = getProductsByCategory;
//# sourceMappingURL=data.js.map