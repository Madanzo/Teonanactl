import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Leaf, Heart, Calendar } from 'lucide-react';
import heroRealistic from '@/assets/hero-realistic-shrooms.png';
import { products, getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { QuoteOrnament } from '@/components/ui/QuoteOrnament';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroRealistic}
            alt="Teonanácatl - Musgo verde y tonos morados místico"
            className="w-full h-full object-cover scale-105 animate-fade-in"
            style={{ animationDuration: '2s' }}
          />
          {/* Green & Purple Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-green-950/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-ceremonial text-center px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block badge-sage mb-6 animate-fade-up">
              Medicina Tradicional & Micología
            </span>
            <h1 className="text-display text-cream mb-6 animate-fade-up delay-100 drop-shadow-md">
              Conexión Sagrada
              <br />
              <span className="text-gold-light">con la Naturaleza</span>
            </h1>
            <div className="animate-fade-up delay-200 mb-10 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-cream font-medium drop-shadow-sm mb-2">
                Trabajando para ti desde 2019
              </p>
              <p className="text-base md:text-lg text-cream/80 italic font-display">
                (Una alternativa a la industria farmacéutica.)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
              <Link to="/productos" className="btn-gold gap-2">
                Nuestros Productos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/quienes-somos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300 backdrop-blur-sm"
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
      <section className="py-20 bg-card/60 backdrop-blur-sm relative">
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
                title: 'Espíritu y Conexión',
                description: 'Fórmulas y microdosis creadas respetando el conocimiento ancestral para habitar tu centro y reconectar con la sabiduría mística.',
              },
              {
                icon: Leaf,
                title: 'Natural y Orgánico',
                description: 'Ingredientes 100% naturales cultivados de manera sustentable, cuidando cada etapa con el mayor respeto a la tierra.',
              },
              {
                icon: Heart,
                title: 'Bienestar Integral',
                description: 'Enfocados en armonizar cuerpo, mente y espíritu como una alternativa biológica y natural para tu bienestar cotidiano.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-background border border-border/40 transition-all duration-300 hover:shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                  <value.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paul Stamets Quote Ornament */}
      <QuoteOrnament index={0} />

      {/* Featured Products */}
      <section className="py-20 bg-background relative">
        {/* Soft background glows */}
        <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-green-500/5 blur-[90px] pointer-events-none" />
        
        <div className="container-ceremonial">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="badge-sage mb-4">Selección Especial</span>
              <h2 className="text-heading">La Familia Teonanácatl</h2>
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

      {/* Stanislav Grof Quote Ornament */}
      <QuoteOrnament index={2} />

      {/* Events & Calendar Section */}
      <section className="py-20 bg-card/40 backdrop-blur-sm relative border-y border-border/30">
        <div className="absolute right-10 top-10 w-64 h-64 rounded-full bg-purple-500/5 blur-[90px] pointer-events-none" />
        
        <div className="container-ceremonial max-w-5xl text-center">
          <span className="badge-sage mb-4">Eventos Próximos</span>
          <h2 className="text-heading text-3xl md:text-5xl mb-6">Ceremonias y Calendario</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Te invitamos a formar parte de nuestros círculos de medicina presenciales y virtuales. 
            Contamos con sesiones personalizadas de acompañamiento y talleres grupales. Agende en línea de forma sencilla.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link to="/eventos" className="btn-ceremonial gap-2 text-base px-10 py-4.5">
              <Calendar className="w-5 h-5" />
              Ver Próximos Eventos & Reservar en Cal.com
            </Link>
          </div>
        </div>
      </section>

      {/* Ram Dass Quote Ornament */}
      <QuoteOrnament index={1} />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="container-ceremonial text-center relative z-10">
          <h2 className="text-heading text-4xl md:text-5xl mb-4">¿Listo para habitar tu centro?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Explora la alternativa natural que Teonanácatl y la medicina de la tierra tienen para ofrecer en tu camino de bienestar integral.
          </p>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium bg-background text-foreground hover:bg-background/90 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explorar Nuestros Productos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
