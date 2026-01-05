import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Cart, CartItem, Product, ProductVariation } from '@/types/product';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, variation: ProductVariation, quantity?: number) => void;
  removeFromCart: (productId: string, variationId: string) => void;
  updateQuantity: (productId: string, variationId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'teonanacatl-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [], subtotal: 0, itemCount: 0 });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart from storage');
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const calculateTotals = useCallback((items: CartItem[]): Cart => {
    const subtotal = items.reduce((sum, item) => sum + item.variation.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { items, subtotal, itemCount };
  }, []);

  const addToCart = useCallback((product: Product, variation: ProductVariation, quantity = 1) => {
    setCart(currentCart => {
      const existingItemIndex = currentCart.items.findIndex(
        item => item.productId === product.id && item.variationId === variation.id
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        newItems = currentCart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          productId: product.id,
          variationId: variation.id,
          product,
          variation,
          quantity
        };
        newItems = [...currentCart.items, newItem];
      }

      return calculateTotals(newItems);
    });
    setIsCartOpen(true);
  }, [calculateTotals]);

  const removeFromCart = useCallback((productId: string, variationId: string) => {
    setCart(currentCart => {
      const newItems = currentCart.items.filter(
        item => !(item.productId === productId && item.variationId === variationId)
      );
      return calculateTotals(newItems);
    });
  }, [calculateTotals]);

  const updateQuantity = useCallback((productId: string, variationId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, variationId);
      return;
    }

    setCart(currentCart => {
      const newItems = currentCart.items.map(item =>
        item.productId === productId && item.variationId === variationId
          ? { ...item, quantity }
          : item
      );
      return calculateTotals(newItems);
    });
  }, [calculateTotals, removeFromCart]);

  const clearCart = useCallback(() => {
    setCart({ items: [], subtotal: 0, itemCount: 0 });
  }, []);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
