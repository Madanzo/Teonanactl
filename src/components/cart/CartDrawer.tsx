import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(price);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-foreground/50 z-50 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 transform transition-transform duration-300 ease-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-display text-xl font-semibold">Tu Carrito</h2>
            <span className="badge-sage">{cart.itemCount}</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-lg font-display font-medium mb-2">Tu carrito está vacío</p>
              <p className="text-muted-foreground mb-6">
                Explora nuestra selección de productos ceremoniales
              </p>
              <Link
                to="/productos"
                onClick={() => setIsCartOpen(false)}
                className="btn-ceremonial"
              >
                Ver Productos
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.items.map((item) => (
                <div
                  key={`${item.productId}-${item.variationId}`}
                  className="flex gap-4 animate-fade-in"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden shrink-0">
                    <img
                      src={item.product.featuredImage}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.variation.name}</p>
                    <p className="font-medium mt-1">{formatPrice(item.variation.price)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.productId, item.variationId)}
                      className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-muted rounded-full">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variationId, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-background rounded-full transition-colors"
                        aria-label="Reducir cantidad"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variationId, item.quantity + 1)
                        }
                        className="p-1.5 hover:bg-background rounded-full transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="p-6 border-t border-border bg-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(cart.subtotal)}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Envío</span>
              <span className="text-sm text-muted-foreground">Calculado al finalizar</span>
            </div>
            <div className="flex items-center justify-between mb-6 pt-4 border-t border-border">
              <span className="font-display text-lg font-semibold">Total</span>
              <span className="font-display text-xl font-semibold">{formatPrice(cart.subtotal)}</span>
            </div>
            <Link
              to="/carrito"
              onClick={() => setIsCartOpen(false)}
              className="btn-ceremonial w-full"
            >
              Finalizar Compra
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
