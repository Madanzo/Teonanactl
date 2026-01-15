import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Moon, Leaf } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';

const Sagrado = () => {
    const cbdProducts = getProductsByCategory('cbd');
    const thcProducts = getProductsByCategory('thc-oil');
    const sagradoProducts = [...cbdProducts, ...thcProducts];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-primary/10 via-background to-background">
                <div className="container-ceremonial text-center px-4">
                    <div className="max-w-3xl mx-auto">
                        <span className="inline-block badge-sage mb-4 animate-fade-up">
                            Aceites Esenciales
                        </span>
                        <h1 className="text-display mb-4 animate-fade-up delay-100">
                            SAGRADO
                        </h1>
                        <p className="text-2xl md:text-3xl text-primary font-display mb-6 animate-fade-up delay-150">
                            One Drop Sleep II
                        </p>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-up delay-200">
                            Aceites esenciales 100% puros con CBD y bajo THC.
                            Siguiendo la receta de Rick Simpson para tu bienestar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Types Guide */}
            <section className="py-16 bg-card">
                <div className="container-ceremonial">
                    <div className="text-center mb-12">
                        <span className="badge-sage mb-4">Nuestras Fórmulas</span>
                        <h2 className="text-heading mb-4">Elige Tu Aceite Sagrado</h2>
                        <div className="divider-sacred" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Droplets,
                                name: 'CBD Sagrado Original',
                                subtitle: 'Bienestar diario',
                                description: 'CBD puro con bajo THC. Ideal para uso cotidiano sin efectos psicoactivos.',
                                sizes: 'Baby (90mg) hasta 30ml (900mg)',
                                color: 'bg-green-500/10 text-green-600',
                            },
                            {
                                icon: Leaf,
                                name: 'San Pedro + CBD',
                                subtitle: 'Fusión ceremonial',
                                description: 'Combinación única de medicina ancestral de San Pedro con beneficios del CBD.',
                                sizes: 'Baby (90mg) hasta 30ml (900mg)',
                                color: 'bg-emerald-500/10 text-emerald-600',
                            },
                            {
                                icon: Moon,
                                name: 'THC Sagrado Original',
                                subtitle: 'Descanso profundo',
                                description: 'Fórmula con THC para relajación nocturna y descanso reparador.',
                                sizes: 'Baby (9mg) hasta 30ml (90mg)',
                                color: 'bg-purple-500/10 text-purple-600',
                            },
                        ].map((product) => (
                            <div
                                key={product.name}
                                className="p-8 rounded-2xl bg-background border border-border hover:shadow-soft transition-all duration-300"
                            >
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${product.color} mb-6`}>
                                    <product.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-1">{product.name}</h3>
                                <p className="text-sm text-primary font-medium mb-3">{product.subtitle}</p>
                                <p className="text-muted-foreground mb-4">{product.description}</p>
                                <p className="text-xs text-muted-foreground/70 border-t border-border pt-3">
                                    <strong>Tamaños:</strong> {product.sizes}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="container-ceremonial">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
                        <div>
                            <span className="badge-sage mb-4">Aceites Sagrados</span>
                            <h2 className="text-heading">Precios y Tamaños</h2>
                        </div>
                        <Link
                            to="/productos"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                            Ver todos los productos
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sagradoProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Badge Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container-ceremonial">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 mb-6">
                            <span className="text-sm font-medium text-primary">
                                ACEITE ESENCIAL 100% PURO • CBD • Low THC • Rick Simpson Recipe
                            </span>
                        </div>
                        <h3 className="text-2xl font-display font-semibold mb-4">
                            Calidad Certificada
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Todos nuestros aceites son elaborados siguiendo la receta original de Rick Simpson,
                            utilizando únicamente ingredientes naturales de la más alta calidad.
                            Cada lote es cuidadosamente preparado para garantizar consistencia y pureza.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Precios especiales para distribuidores:</strong> Contáctanos para pedidos de 8+ unidades.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sagrado;
