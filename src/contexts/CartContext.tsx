import React, { createContext, useContext, useState, useCallback } from 'react';
import { Plant, CartItem, DeliveryArea } from '@/types';
import { deliveryAreas } from '@/data/plants';

interface CartContextType {
  items: CartItem[];
  addToCart: (plant: Plant, quantity?: number) => void;
  removeFromCart: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
  updateGiftMessage: (plantId: string, message: string) => void;
  clearCart: () => void;
  selectedArea: DeliveryArea | null;
  setSelectedArea: (area: DeliveryArea | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [selectedArea, setSelectedArea] = useState<DeliveryArea | null>(deliveryAreas[0]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((plant: Plant, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.plant.id === plant.id);
      if (existing) {
        return prev.map(item =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { plant, quantity }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((plantId: string) => {
    setItems(prev => prev.filter(item => item.plant.id !== plantId));
  }, []);

  const updateQuantity = useCallback((plantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.plant.id === plantId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const updateGiftMessage = useCallback((plantId: string, message: string) => {
    setItems(prev =>
      prev.map(item =>
        item.plant.id === plantId ? { ...item, giftMessage: message } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.plant.price * item.quantity, 0);
  const deliveryFee = selectedArea?.fee || 0;
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateGiftMessage,
        clearCart,
        selectedArea,
        setSelectedArea,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        deliveryFee,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
