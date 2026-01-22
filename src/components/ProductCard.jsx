import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem, removeItem, getQuantity } = useCart();
  const quantity = getQuantity(product.id);

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
          <Link to={`/products/${product.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              View Product
            </Button>
          </Link>
          <div className="flex items-center justify-between border border-border-divider rounded-full px-3 py-2">
            <button
              onClick={() => removeItem(product.id)}
              className="w-8 h-8 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
              aria-label={`Remove one ${product.name}`}
            >
              −
            </button>
            <span className="text-sm font-semibold text-text-primary">
              {quantity}
            </span>
            <button
              onClick={() => addItem(product)}
              className="w-8 h-8 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
              aria-label={`Add one ${product.name}`}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
