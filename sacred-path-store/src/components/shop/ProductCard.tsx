import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag } from 'lucide-react';

// Import product images
import productThcSagrado from '@/assets/product-thc-sagrado.jpg';
import productCacao from '@/assets/product-cacao.jpg';
import productKit from '@/assets/product-kit.jpg';

const productImages: Record<string, string> = {
  'thc-sagrado-original': productThcSagrado,
  'cacao-ceremonial': productCacao,
  'kit-iniciacion': productKit,
  'thc-luna-llena': productThcSagrado,
  'microdosis-equilibrio': productThcSagrado,
  'incienso-copal': productCacao,
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const lowestVariation = product.variations.reduce((min, v) => 
    v.price < min.price ? v : min
  );
  
  const hasDiscount = lowestVariation.compareAtPrice && lowestVariation.compareAtPrice > lowestVariation.price;
  const discountPercent = hasDiscount
    ? Math.round((1 - lowestVariation.price / lowestVariation.compareAtPrice!) * 100)
    : 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, lowestVariation);
  };

  const imageSrc = productImages[product.id] || product.featuredImage;

  return (
    <Link
      to={`/productos/${product.slug}`}
      className="group block"
    >
      <div className="card-sacred overflow-hidden p-0">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <span className="badge-sage text-xs">Destacado</span>
            )}
            {hasDiscount && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                -{discountPercent}%
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 p-3 rounded-full bg-background/90 backdrop-blur-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            aria-label="Agregar al carrito"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold text-foreground">
              {formatPrice(lowestVariation.price)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(lowestVariation.compareAtPrice!)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
