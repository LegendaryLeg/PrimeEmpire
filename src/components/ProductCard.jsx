import React, { useState } from 'react';
import ProductModal from './ProductModal';
import ProductPurchaseControls from './ProductPurchaseControls';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="block w-full text-left"
        aria-label={product.name}
      >
        <div className="aspect-square overflow-hidden bg-border-divider">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </button>
      <div className="p-4 flex flex-col flex-1">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-left mb-4"
        >
          <h3 className="text-lg font-semibold hover:text-primary-green transition-colors">
            {product.name}
          </h3>
        </button>
        <div className="mt-auto">
          <ProductPurchaseControls
            productId={product.id}
            productName={product.name}
            price={product.price}
            quantity={quantity}
            onQuantityChange={setQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
      {isModalOpen && (
        <ProductModal
          productId={product.id}
          fallbackProduct={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </article>
  );
};

export default ProductCard;
