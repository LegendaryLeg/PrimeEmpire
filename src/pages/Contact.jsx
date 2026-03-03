import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `${t('contact.whatsappMessage.intro')}\n\n${t('contact.whatsappMessage.nameLabel')}: ${
        formData.name
      }\n${t('contact.whatsappMessage.emailLabel')}: ${formData.email}\n${t(
        'contact.whatsappMessage.phoneLabel'
      )}: ${formData.phone}\n${t('contact.whatsappMessage.messageLabel')}: ${formData.message}`
    );
    window.open(`https://wa.me/77789268007?text=${message}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="min-h-screen py-24 bg-background-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {t('contact.title')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border-divider rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border-divider rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border-divider rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border-divider rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green bg-white"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {t('buttons.sendMessage')}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.infoTitle')}</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <a
                    href="tel:+77789268007"
                    className="w-12 h-12 bg-background-beige rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-border-divider transition-colors"
                    aria-label="Call Prime Empire"
                  >
                    <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg mb-1">{t('contact.info.phone')}</h3>
                    <a href="tel:+77789268007" className="text-primary-green hover:text-secondary-brown">
                      +7 778 926 8007
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <a
                    href="mailto:primeempire@mail.ru"
                    className="w-12 h-12 bg-background-beige rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-border-divider transition-colors"
                    aria-label="Email Prime Empire"
                  >
                    <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg mb-1">{t('contact.info.email')}</h3>
                    <a href="mailto:primeempire@mail.ru" className="text-primary-green hover:text-secondary-brown">
                      primeempire@mail.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <a
                    href="https://go.2gis.com/BB15I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background-beige rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-border-divider transition-colors"
                    aria-label="Open location in 2GIS"
                  >
                    <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </a>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg mb-1">{t('contact.info.address')}</h3>
                    <p className="text-text-secondary">
                      {t('contact.address.line1')}
                      <br />
                      {t('contact.address.line2')}
                      <br />
                      {t('contact.address.line3')}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
