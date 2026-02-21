import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../hooks/useProducts';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { data: products, loading, error } = useProducts({ language });

  const categories = [
    { key: 'all', label: t('products.categories.all'), value: 'All' },
    { key: 'blackTea', label: t('products.categories.blackTea'), value: 'Black Tea' },
    { key: 'greenTea', label: t('products.categories.greenTea'), value: 'Green Tea' },
    { key: 'teaBags', label: t('products.categories.teaBags'), value: 'Tea Bags' },
    { key: 'spices', label: t('products.categories.spices'), value: 'spices' },
    { key: 'grains', label: t('products.categories.grains'), value: 'grain' },
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => {
          if (['Black Tea', 'Green Tea', 'Tea Bags'].includes(selectedCategory)) {
            return product.category?.toLowerCase() === 'tea' && product.subcategory === selectedCategory;
          }

          return product.category?.toLowerCase() === selectedCategory;
        });

  return (
    <main className="min-h-screen py-24 bg-background-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('products.title')}
          </h1>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.value
                      ? 'bg-primary-green text-white shadow-md'
                      : 'bg-background-beige text-text-secondary hover:bg-border-divider border border-border-divider'
                  }`}
                  aria-pressed={selectedCategory === category.value}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg">{t('states.loadingProducts')}</p>
            </div>
          )}
          {error && !loading && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">{t('states.errorProducts')}</p>
            </div>
          )}
          {!loading && !error && filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            !loading &&
              !error && (
                <div className="text-center py-12">
                  <p className="text-text-secondary text-lg">{t('products.empty')}</p>
                </div>
              )
          )}
        </div>
      </div>
    </main>
  );
};

export default Products;
