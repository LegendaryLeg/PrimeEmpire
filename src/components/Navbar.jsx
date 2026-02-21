import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';

const logoUrl = new URL('../../images/Prime Empire Logo.png', import.meta.url).href;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { totalCount } = useCart();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/products', label: t('nav.products') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/cart', label: t('nav.cart') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-20 h-20 overflow-hidden bg-background-transparent">
              <img
                src={logoUrl}
                alt="Prime Empire LLP logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-text-primary">Prime Empire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary-green bg-background-beige'
                      : 'text-text-secondary hover:text-primary-green hover:bg-background-beige'
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    {link.path === '/cart' && totalCount > 0 && (
                      <span className="absolute -top-2 -right-3 bg-accent-saffron text-white text-xs rounded-full px-1.5 py-0.5">
                        {totalCount}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-text-secondary hover:bg-background-beige focus:outline-none focus:ring-2 focus:ring-primary-green"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary-green bg-background-beige'
                      : 'text-text-secondary hover:text-primary-green hover:bg-background-beige'
                  }`}
                >
                  <span className="relative inline-flex items-center">
                    {link.label}
                    {link.path === '/cart' && totalCount > 0 && (
                      <span className="ml-2 bg-accent-saffron text-white text-xs rounded-full px-2 py-0.5">
                        {totalCount}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
