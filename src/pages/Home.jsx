import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { data: featuredProducts, loading: featuredLoading, error: featuredError } = useProducts({
    language,
    limit: 6,
  });
  const heroBg = new URL('../../images/assam-head.jpg', import.meta.url).href;
  const whyChooseUsItems = t('home.whyChooseUs.items', { returnObjects: true });
  const testimonialItems = t('home.testimonials.items', { returnObjects: true });

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(t('cart.orderMessage.intro'));
    window.open(`https://wa.me/87789268007?text=${message}`, '_blank');
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-24 md:py-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary-green/70" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <div className="relative max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="secondary" size="lg">
                  {t('cta.shopTea')}
                </Button>
              </Link>
              <Button variant="whatsapp" size="lg" onClick={handleWhatsAppOrder}>
                {t('cta.order')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trus Signals Section */}
      <section className="py-24 bg-background-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
              {t('home.assamTea.title')}
            </h2>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              {t('home.assamTea.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              {t('home.featuredProducts.title')}
            </h2>
            {featuredLoading && (
              <p className="text-center text-text-secondary">{t('states.loadingProducts')}</p>
            )}
            {featuredError && (
              <p className="text-center text-red-600">{t('states.errorProducts')}</p>
            )}
            {!featuredLoading && !featuredError && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            <div className="text-center mt-12">
              <Link to="/products">
                <Button variant="outline" size="lg">
                  {t('cta.viewAllProducts')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Preview */}
      <section className="py-24 bg-background-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
              {t('home.aboutPreview.text')}
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                {t('cta.readOurStory')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              {t('home.whyChooseUs.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {whyChooseUsItems.map((item, index) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    {index === 0 && (
                      <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-background-beige">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              {t('home.testimonials.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonialItems.map((item, index) => (
                <div
                  key={item.author}
                  className={`bg-background-beige p-6 rounded-lg ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent-saffron" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary mb-4 italic">"{item.quote}"</p>
                  <p className="font-semibold text-text-primary">{item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* //Final Call to Action */}
      {/*<section className="py-20 bg-gradient-to-r from-primary-green to-secondary-brown text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Experience authentic Indian tea.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="secondary" size="lg">
                  Shop Now
                </Button>
              </Link>
              <Button variant="whatsapp" size="lg" onClick={handleWhatsAppOrder}>
                {t('cta.order')}
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Home;
