import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const shippingCost = 130;
  const total = cart.subtotal + (cart.items.length > 0 ? shippingCost : 0);

  if (cart.items.length === 0) {
    return (
      <div className="pt-24 pb-20">
        <div className="container-ceremonial">
          <div className="max-w-2xl mx-auto text-center py-20">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-heading mb-4">Tu carrito está vacío</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explora nuestra selección de productos ceremoniales y encuentra lo que necesitas
              para tu práctica de bienestar.
            </p>
            <Link to="/productos" className="btn-ceremonial">
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container-ceremonial">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Seguir comprando
          </Link>
        </div>

        <h1 className="text-heading mb-8">Tu Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {cart.items.map((item) => (
                <div
                  key={`${item.productId}-${item.variationId}`}
                  className="card-sacred p-6 flex flex-col sm:flex-row gap-6"
                >
                  {/* Product Image */}
                  <Link
                    to={`/productos/${item.product.slug}`}
                    className="w-full sm:w-32 aspect-square rounded-lg overflow-hidden bg-muted shrink-0"
                  >
                    <img
                      src={item.product.featuredImage}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <Link
                          to={`/productos/${item.product.slug}`}
                          className="font-display text-lg font-semibold hover:text-primary transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-muted-foreground">{item.variation.name}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.productId, item.variationId)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-end justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-muted rounded-full p-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.variationId, item.quantity - 1)
                          }
                          className="p-2 rounded-full hover:bg-background transition-colors"
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.variationId, item.quantity + 1)
                          }
                          className="p-2 rounded-full hover:bg-background transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-display text-xl font-semibold">
                          {formatPrice(item.variation.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-muted-foreground">
                            {formatPrice(item.variation.price)} c/u
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-sacred p-6 sticky top-28">
              <h2 className="font-display text-xl font-semibold mb-6">Resumen del Pedido</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(cart.subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="font-medium">{formatPrice(shippingCost)}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-semibold">Total</span>
                  <span className="font-display text-2xl font-semibold">{formatPrice(total)}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Incluye impuestos</p>
              </div>

              <Link to="/checkout" className="btn-ceremonial w-full justify-center">
                Proceder al Pago
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Aceptamos pagos con tarjeta, OXXO y transferencia SPEI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
