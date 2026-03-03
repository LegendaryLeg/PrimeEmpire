import React, { useMemo, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../hooks/useProducts';

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();
  const { language } = useLanguage();
  const { data: product, loading, error } = useProducts({ language, id });
  const [quantity, setQuantity] = useState(1);
  const galleryImages = useMemo(
    () => (product?.images?.length ? product.images : product?.image ? [product.image] : []),
    [product]
  );

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-secondary text-lg">{t('states.loadingProduct')}</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600 text-lg">{t('states.errorProduct')}</p>
          <Button onClick={() => navigate('/products')}>{t('buttons.backToProducts')}</Button>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">{t('productDetail.notFoundTitle')}</h1>
          <Button onClick={() => navigate('/products')}>{t('buttons.backToProducts')}</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-24 bg-background-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-primary-green hover:text-secondary-brown flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('buttons.back')}
          </button>

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
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary-green mb-6">₸{product.price}</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{t('productDetail.description')}</h2>
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
                <label htmlFor={`quantity-${product.id}`} className="sr-only">
                  Quantity for {product.name}
                </label>
                <input
                  id={`quantity-${product.id}`}
                  type="number"
                  min="1"
                  step="1"
                  value={quantity}
                  onChange={(event) => {
                    const nextValue = Number(event.target.value);
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
              <Link to="/cart" className="flex-1">
                <Button variant="whatsapp" size="lg" className="w-full">
                  {t('buttons.goToCheckout')}
                </Button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
