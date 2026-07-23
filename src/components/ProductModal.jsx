import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../hooks/useProducts';

const ProductModal = ({ productId, fallbackProduct = null, onClose }) => {
  const { t } = useTranslation();
  const { addItem } = useCart();
  const { language } = useLanguage();
  const { data: fetchedProduct, loading, error } = useProducts({ language, id: productId });
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = fetchedProduct || fallbackProduct;

  const galleryImages = useMemo(
    () => (product?.images?.length ? product.images : product?.image ? [product.image] : []),
    [product]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl p-5 md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background-beige text-text-primary hover:bg-border-divider transition-colors"
          aria-label={t('buttons.back')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {loading && !product && (
          <div className="py-16 text-center">
            <p className="text-text-secondary text-lg">{t('states.loadingProduct')}</p>
          </div>
        )}

        {error && !product && (
          <div className="py-16 text-center">
            <p className="text-red-600 text-lg">{t('states.errorProduct')}</p>
          </div>
        )}

        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Image */}
            <div className="h-48 sm:h-60 md:h-full md:max-h-[70vh] bg-border-divider rounded-xl overflow-hidden">
              <img
                src={galleryImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col min-w-0">
              <h2 className="text-xl md:text-2xl font-bold mb-1 pr-10">{product.name}</h2>
              <p className="text-2xl font-bold text-primary-green mb-3">₸{product.price}</p>

              <p className="text-text-secondary text-sm leading-relaxed mb-3 line-clamp-3">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm mb-4">
                {product.form && (
                  <p className="text-text-secondary">
                    <span className="font-semibold text-text-primary">{t('productDetail.form')}: </span>
                    {product.form}
                  </p>
                )}
                {product.origin && (
                  <p className="text-text-secondary">
                    <span className="font-semibold text-text-primary">{t('productDetail.origin')}: </span>
                    {product.origin}
                  </p>
                )}
                {product.tea_type && (
                  <p className="text-text-secondary">
                    <span className="font-semibold text-text-primary">{t('productDetail.teaType')}: </span>
                    {product.tea_type}
                  </p>
                )}
                {product.leaf_type && (
                  <p className="text-text-secondary">
                    <span className="font-semibold text-text-primary">{t('productDetail.leafType')}: </span>
                    {product.leaf_type}
                  </p>
                )}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2 border border-border-divider rounded-full px-3 py-1.5">
                  <button
                    onClick={handleDecrease}
                    className="w-9 h-9 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
                    aria-label={`Decrease quantity for ${product.name}`}
                  >
                    −
                  </button>
                  <label htmlFor={`modal-quantity-${product.id}`} className="sr-only">
                    Quantity for {product.name}
                  </label>
                  <input
                    id={`modal-quantity-${product.id}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={quantity}
                    onChange={(event) => {
                      const nextValue = Number(event.target.value.replace(/[^\d]/g, ''));
                      setQuantity(Number.isNaN(nextValue) ? 1 : Math.max(1, Math.floor(nextValue)));
                    }}
                    className="w-16 rounded-md border border-border-divider bg-white px-2 py-1 text-center text-base font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-green"
                  />
                  <button
                    onClick={handleIncrease}
                    className="w-9 h-9 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
                    aria-label={`Increase quantity for ${product.name}`}
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="md" className="flex-1" onClick={handleAddToCart}>
                    {t('buttons.addToCart')}
                  </Button>
                  <Link to="/cart" className="flex-1" onClick={onClose}>
                    <Button variant="whatsapp" size="md" className="w-full">
                      {t('buttons.goToCheckout')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
