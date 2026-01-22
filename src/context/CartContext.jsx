import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeItem = (productId) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === productId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((item) => item.product.id !== productId);
      }
      return prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const getQuantity = (productId) => {
    const found = items.find((item) => item.product.id === productId);
    return found ? found.quantity : 0;
  };

  const totals = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const price = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    return { count, price };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      getQuantity,
      totalCount: totals.count,
      totalPrice: totals.price,
    }),
    [items, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
