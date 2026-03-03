import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-border-divider">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-primary-green transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-primary-green font-bold text-xl mb-4">
          ₸{product.price}
        </p>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2 border border-border-divider rounded-full px-3 py-2">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
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
              className="w-16 rounded-md border border-border-divider bg-white px-2 py-1 text-center text-sm font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-green"
            />
            <button
              onClick={handleIncrease}
              className="w-8 h-8 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
              aria-label={`Increase quantity for ${product.name}`}
            >
              +
            </button>
          </div>
          <Button variant="outline" size="sm" className="w-full" onClick={handleAddToCart}>
            {t('buttons.addToCart')}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
