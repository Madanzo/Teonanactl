import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Leaf, Heart } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import teoHeroImage from '@/assets/hero-ceremonial-shrooms.png';

const Teonanacatl = () => {
    const teoProducts = getProductsByCategory('microdosis');

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={teoHeroImage}
                        alt="Teonanácatl - Medicina Sagrada"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
                </div>

                <div className="relative z-10 container-ceremonial text-center px-4 py-20">
                    <div className="max-w-3xl mx-auto">
                        <span className="inline-block badge-sage mb-4 animate-fade-up">
                            Medicina Tradicional
                        </span>
                        <h1 className="text-display text-cream mb-4 animate-fade-up delay-100">
                            TEONANÁCATL
                        </h1>
                        <p className="text-2xl md:text-3xl text-gold-light font-display mb-6 animate-fade-up delay-150">
                            Habitando Tu Centro
                        </p>
                        <p className="text-lg text-cream/80 max-w-xl mx-auto animate-fade-up delay-200">
                            Microdosis ceremoniales elaboradas con respeto a las tradiciones ancestrales
                            para tu bienestar integral.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dosage Guide */}
            <section className="py-16 bg-card">
                <div className="container-ceremonial">
                    <div className="text-center mb-12">
                        <span className="badge-sage mb-4">Guía de Dosis</span>
                        <h2 className="text-heading mb-4">Encuentra Tu Tratamiento Ideal</h2>
                        <div className="divider-sacred" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Sparkles,
                                name: 'DOSIS TEO (.10)',
                                subtitle: 'El más recomendado para iniciar',
                                description: 'Con Melena de León y cacao. Microdosis suave para principiantes.',
                                color: 'bg-green-500/10 text-green-600',
                            },
                            {
                                icon: Shield,
                                name: 'DOSIS NANA (.20)',
                                subtitle: 'En caso de resistencia',
                                description: 'Con Melena de León y niacina. Para mayor tolerancia.',
                                color: 'bg-amber-500/10 text-amber-600',
                            },
                            {
                                icon: Heart,
                                name: 'DOSIS SABIN (.50)',
                                subtitle: 'Solo casos particulares',
                                description: 'Con Melena de León y niacina. Dosis alta supervisada.',
                                color: 'bg-red-500/10 text-red-600',
                            },
                            {
                                icon: Leaf,
                                name: 'DOSIS NANA SH (.30)',
                                subtitle: 'Solo hongo',
                                description: 'Fórmula pura. Sin aditivos adicionales.',
                                color: 'bg-emerald-500/10 text-emerald-600',
                            },
                        ].map((dose) => (
                            <div
                                key={dose.name}
                                className="p-6 rounded-2xl bg-background border border-border hover:shadow-soft transition-all duration-300"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${dose.color} mb-4`}>
                                    <dose.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-display text-lg font-semibold mb-1">{dose.name}</h3>
                                <p className="text-sm text-primary font-medium mb-2">{dose.subtitle}</p>
                                <p className="text-sm text-muted-foreground">{dose.description}</p>
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
                            <span className="badge-sage mb-4">Tratamientos</span>
                            <h2 className="text-heading">Precios y Opciones</h2>
                        </div>
                        <Link
                            to="/productos"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                            Ver todos los productos
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teoProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container-ceremonial">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-display font-semibold mb-4">
                            ¿Cómo elegir tu dosis?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Si eres nuevo en el camino de Teonanácatl, recomendamos iniciar con la
                            <strong className="text-foreground"> Dosis TEO (.10)</strong>.
                            Esta es la dosis más suave y te permitirá conocer cómo responde tu cuerpo.
                            Las dosis más altas están reservadas para quienes tienen experiencia previa
                            o presentan resistencia natural.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Para consultas personalizadas sobre tu tratamiento, contáctanos directamente.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teonanacatl;
