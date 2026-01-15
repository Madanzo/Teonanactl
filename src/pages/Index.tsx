import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Leaf, Heart } from 'lucide-react';
import heroCeremonial from '@/assets/hero-ceremonial-shrooms.png';
import { products, getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroCeremonial}
            alt="Ceremonial wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-ceremonial text-center px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block badge-sage mb-6 animate-fade-up">
              Medicina Tradicional Mexicana
            </span>
            <h1 className="text-display text-cream mb-6 animate-fade-up delay-100">
              Conexión Sagrada
              <br />
              <span className="text-gold-light">con la Naturaleza</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
              Productos ceremoniales de bienestar creados con respeto a las tradiciones
              ancestrales y la más alta calidad para tu camino espiritual.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
              <Link to="/productos" className="btn-gold gap-2">
                Explorar Productos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/quienes-somos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300"
              >
                Conoce Nuestra Historia
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cream/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container-ceremonial">
          <div className="text-center mb-16">
            <span className="badge-sage mb-4">Nuestros Valores</span>
            <h2 className="text-heading mb-4">Tradición y Bienestar</h2>
            <div className="divider-sacred" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Ceremonial',
                description: 'Productos creados siguiendo los conocimientos ancestrales de las tradiciones mexicanas para uso espiritual.',
              },
              {
                icon: Leaf,
                title: 'Natural',
                description: 'Ingredientes 100% naturales, cosechados de manera sustentable y con el mayor respeto a la tierra.',
              },
              {
                icon: Heart,
                title: 'Bienestar',
                description: 'Enfocados en tu bienestar integral: cuerpo, mente y espíritu en armonía con la naturaleza.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-background transition-all duration-300 hover:shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                  <value.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container-ceremonial">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="badge-sage mb-4">Selección Especial</span>
              <h2 className="text-heading">Productos Destacados</h2>
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
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-ceremonial text-center">
          <h2 className="text-heading mb-4">¿Listo para tu Camino?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Únete a nuestra comunidad y recibe guías, consejos y ofertas exclusivas
            para tu práctica ceremonial.
          </p>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium bg-background text-foreground hover:bg-background/90 transition-all duration-300"
          >
            Comenzar Ahora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
