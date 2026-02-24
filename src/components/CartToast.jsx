import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';

const CartToast = () => {
  const { t } = useTranslation();
  const { toast, clearToast } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!toast) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const hideTimer = setTimeout(() => setVisible(false), 2200);
    const clearTimer = setTimeout(() => clearToast(), 2600);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(clearTimer);
    };
  }, [toast, clearToast]);

  if (!toast) {
    return null;
  }

  const message = t('cart.toastAdded', {
    count: toast.quantity,
    product: toast.productName,
  });

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-xs rounded-xl bg-primary-green px-4 py-3 text-white shadow-lg transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
      role="status"
      aria-live="polite"
    >
      <p className="text-sm font-semibold">{message}</p>
    </div>
  );
};

export default CartToast;
