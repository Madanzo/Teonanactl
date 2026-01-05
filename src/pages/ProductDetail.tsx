import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ProductVariation } from '@/types/product';
import { ArrowLeft, Check, ShoppingBag, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductBySlug(slug || '');

  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | null>(
    product?.variations[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="pt-24 pb-20">
        <div className="container-ceremonial text-center py-20">
          <h1 className="text-heading mb-4">Producto no encontrado</h1>
          <p className="text-muted-foreground mb-8">
            El producto que buscas no existe o ha sido removido.
          </p>
          <Link to="/productos" className="btn-ceremonial">
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedVariation) return;
    setIsAdding(true);
    addToCart(product, selectedVariation, quantity);
    setTimeout(() => setIsAdding(false), 1500);
  };

  const imageSrc = productImages[product.id] || product.featuredImage;

  const hasDiscount = selectedVariation?.compareAtPrice && 
    selectedVariation.compareAtPrice > selectedVariation.price;

  return (
    <div className="pt-24 pb-20">
      <div className="container-ceremonial">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
            <img
              src={imageSrc}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.featured && (
              <span className="absolute top-4 left-4 badge-sage">Destacado</span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                {product.category === 'thc' ? 'Microdosis' : 
                 product.category === 'cacao' ? 'Cacao Ceremonial' : 'Accesorios'}
              </span>
            </div>

            <h1 className="text-display text-3xl md:text-4xl mb-4">{product.name}</h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {product.longDescription || product.description}
            </p>

            {/* Price */}
            {selectedVariation && (
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-3xl font-semibold">
                  {formatPrice(selectedVariation.price)}
                </span>
                {hasDiscount && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(selectedVariation.compareAtPrice!)}
                  </span>
                )}
              </div>
            )}

            {/* Variations */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Selecciona una opción</label>
              <div className="flex flex-wrap gap-3">
                {product.variations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => setSelectedVariation(variation)}
                    className={cn(
                      'relative px-5 py-3 rounded-xl border-2 transition-all duration-200',
                      selectedVariation?.id === variation.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    )}
                  >
                    <span className="font-medium">{variation.name}</span>
                    <span className="block text-sm text-muted-foreground mt-0.5">
                      {formatPrice(variation.price)}
                    </span>
                    {selectedVariation?.id === variation.id && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Cantidad</label>
              <div className="inline-flex items-center gap-4 bg-muted rounded-full p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 rounded-full hover:bg-background transition-colors"
                  aria-label="Reducir cantidad"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 rounded-full hover:bg-background transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedVariation || isAdding}
              className={cn(
                'btn-ceremonial w-full sm:w-auto gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
                isAdding && 'bg-sage pointer-events-none'
              )}
            >
              {isAdding ? (
                <>
                  <Check className="w-5 h-5" />
                  Agregado al carrito
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  Agregar al Carrito
                </>
              )}
            </button>

            {/* Product Tags */}
            {product.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
