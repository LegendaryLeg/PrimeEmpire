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
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square mb-4 bg-border-divider rounded-lg overflow-hidden">
                <img
                  src={galleryImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? 'border-primary-green ring-2 ring-background-beige'
                          : 'border-border-divider hover:border-primary-green'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 pr-10">{product.name}</h2>
              <p className="text-3xl font-bold text-primary-green mb-6">₸{product.price}</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{t('productDetail.description')}</h3>
                <p className="text-text-secondary leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {product.form && (
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t('productDetail.form')}
                    </h3>
                    <p className="text-text-secondary">{product.form}</p>
                  </div>
                )}
                {product.origin && (
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t('productDetail.origin')}
                    </h3>
                    <p className="text-text-secondary">{product.origin}</p>
                  </div>
                )}
                {product.tea_type && (
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t('productDetail.teaType')}
                    </h3>
                    <p className="text-text-secondary">{product.tea_type}</p>
                  </div>
                )}
                {product.leaf_type && (
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t('productDetail.leafType')}
                    </h3>
                    <p className="text-text-secondary">{product.leaf_type}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-between gap-2 border border-border-divider rounded-full px-4 py-2 flex-1">
                  <button
                    onClick={handleDecrease}
                    className="w-10 h-10 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
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
                    className="w-20 rounded-md border border-border-divider bg-white px-2 py-1 text-center text-base font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-green"
                  />
                  <button
                    onClick={handleIncrease}
                    className="w-10 h-10 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
                    aria-label={`Increase quantity for ${product.name}`}
                  >
                    +
                  </button>
                </div>
                <Button variant="outline" size="lg" className="flex-1" onClick={handleAddToCart}>
                  {t('buttons.addToCart')}
                </Button>
                <Link to="/cart" className="flex-1" onClick={onClose}>
                  <Button variant="whatsapp" size="lg" className="w-full">
                    {t('buttons.goToCheckout')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
