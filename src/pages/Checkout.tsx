import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { toast } from 'sonner';

interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  colonia: string;
  city: string;
  state: string;
  zipCode: string;
  references: string;
}

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    colonia: '',
    city: '',
    state: '',
    zipCode: '',
    references: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Constants
  const shippingCost = 130;
  const total = cart.subtotal + (cart.items.length > 0 ? shippingCost : 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => {
      const updated = { ...prev, [name]: value };
      
      // Basic validation check - just ensuring fields aren't empty for now
      const isValid = Object.values(updated).every(val => val.trim().length > 0);
      setIsFormValid(isValid);
      
      return updated;
    });
  };

  // Environment variable logic
  const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test';

  const getBackendUrl = (functionName: string) => {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocal) {
      return `http://127.0.0.1:5001/teonanactl-e8527/us-central1/${functionName}`;
    }
    return `/api/${functionName}`;
  };

  if (cart.items.length === 0) {
    return (
      <div className="pt-24 pb-20 container-ceremonial text-center">
        <h1 className="text-heading mb-4">Tu carrito está vacío</h1>
        <button onClick={() => navigate('/productos')} className="btn-ceremonial">
          Explorar Productos
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container-ceremonial max-w-6xl">
        <h1 className="text-heading mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form & Payment */}
          <div className="lg:col-span-7 space-y-8">
            <div className="card-sacred p-8">
              <h2 className="font-display text-2xl font-semibold mb-6">Detalles de Envío</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nombre</label>
                    <input type="text" name="firstName" value={shippingDetails.firstName} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Apellidos</label>
                    <input type="text" name="lastName" value={shippingDetails.lastName} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" name="email" value={shippingDetails.email} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Teléfono o WhatsApp</label>
                    <input type="tel" name="phone" value={shippingDetails.phone} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Dirección (Calle y Número)</label>
                  <input type="text" name="street" value={shippingDetails.street} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Colonia</label>
                    <input type="text" name="colonia" value={shippingDetails.colonia} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Código Postal</label>
                    <input type="text" name="zipCode" value={shippingDetails.zipCode} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Ciudad</label>
                    <input type="text" name="city" value={shippingDetails.city} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Estado</label>
                    <input type="text" name="state" value={shippingDetails.state} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Referencias de Entrega (Entre calles, color de casa, etc.)</label>
                  <input type="text" name="references" value={shippingDetails.references} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary outline-none" required />
                </div>
              </form>
            </div>

            {/* Payment Section */}
            <div className={`card-sacred p-8 transition-opacity duration-300 ${!isFormValid ? 'opacity-50 pointer-events-none' : ''}`}>
              <h2 className="font-display text-2xl font-semibold mb-6">Pago Seguro</h2>
              
              {!isFormValid && (
                <p className="text-sm text-yellow-600 mb-4 bg-yellow-100 p-3 rounded-md">
                  Por favor, completa todos los datos de envío arriba para habilitar el pago.
                </p>
              )}

              <PayPalScriptProvider options={{ "clientId": PAYPAL_CLIENT_ID, currency: "MXN", intent: "capture" }}>
                <PayPalButtons
                  style={{ layout: "vertical", shape: "pill", label: "pay" }}
                  createOrder={async () => {
                    // Call our Firebase Cloud Function to create an order securely
                    try {
                      const response = await fetch(getBackendUrl("createPayPalOrder"), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          cart: cart.items.map(item => ({
                            id: item.productId,
                            variationId: item.variationId,
                            quantity: item.quantity
                          }))
                        }),
                      });
                      
                      const order = await response.json();
                      if (order.id) {
                        return order.id;
                      } else {
                         const errorDetail = order?.details?.[0];
                         const errorMessage = errorDetail? `${errorDetail.issue} ${errorDetail.description} (${order.debug_id})` : JSON.stringify(order);
                         throw new Error(errorMessage);
                      }
                    } catch (error) {
                      console.error("Error creating order:", error);
                      toast.error("Ocurrió un error al procesar la orden.");
                      throw error;
                    }
                  }}
                  onApprove={async (data) => {
                     // Capture the order using Firebase Cloud Function
                     try {
                        const response = await fetch(getBackendUrl("capturePayPalOrder"), {
                           method: "POST",
                           headers: { "Content-Type": "application/json" },
                           body: JSON.stringify({ orderID: data.orderID })
                        });

                        const orderData = await response.json();
                        const errorDetail = orderData?.details?.[0];

                        if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                           toast.error("El pago fue rechazado. Por favor intenta con otro método.");
                           return; // User can try again
                        } else if (errorDetail) {
                           throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
                        } else {
                           // Payment Successful!
                           toast.success("¡Pago procesado con éxito! Gracias por tu compra.");
                           clearCart();
                           // Redirect to a thank you page or home
                           navigate('/');
                        }
                     } catch (error) {
                       console.error("Capture Error", error);
                       toast.error("Lo sentimos, no pudimos completar el pago.");
                     }
                  }}
                  onError={(err) => {
                     console.error("PayPal Error:", err);
                     toast.error("Hubo un problema de conexión con PayPal.");
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="card-sacred p-8 sticky top-28">
              <h2 className="font-display text-xl font-semibold mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {cart.items.map((item) => (
                  <div key={`${item.productId}-${item.variationId}`} className="flex items-center gap-4">
                    <img src={item.product.featuredImage} alt={item.product.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">{item.variation.name} x {item.quantity}</p>
                    </div>
                    <p className="font-medium text-sm">{formatPrice(item.variation.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Envío</span>
                  <span>{formatPrice(shippingCost)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                <span className="font-display text-lg font-semibold">Total</span>
                <span className="font-display text-2xl font-semibold text-primary">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
