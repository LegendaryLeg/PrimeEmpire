import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductPurchaseControls from './ProductPurchaseControls';
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
            <div className="h-48 sm:h-60 md:h-full md:max-h-[70vh] bg-border-divider rounded-xl overflow-hidden">
              <img
                src={galleryImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="text-xl md:text-2xl font-bold mb-3 pr-10">{product.name}</h2>

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

              <div className="mt-auto">
                <ProductPurchaseControls
                  productId={`modal-${product.id}`}
                  productName={product.name}
                  price={product.price}
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
