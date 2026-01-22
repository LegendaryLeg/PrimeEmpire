import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, addItem, removeItem, totalPrice } = useCart();

  return (
    <main className="min-h-screen py-24 bg-background-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary">
            Your Cart
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg mb-6">
                Your cart is empty.
              </p>
              <Link to="/products">
                <Button variant="outline" size="lg">
                  Browse Products
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row md:items-center gap-6 border-b border-border-divider pb-6"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-border-divider flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-text-primary">
                      {product.name}
                    </h2>
                    <p className="text-text-secondary">
                      ₸{product.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeItem(product.id)}
                      className="w-10 h-10 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
                      aria-label={`Remove one ${product.name}`}
                    >
                      −
                    </button>
                    <span className="min-w-[2rem] text-center font-semibold text-text-primary">
                      {quantity}
                    </span>
                    <button
                      onClick={() => addItem(product)}
                      className="w-10 h-10 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
                      aria-label={`Add one ${product.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6">
                <p className="text-xl font-semibold text-text-primary">
                  Total: ₸{totalPrice}
                </p>
                <Button variant="primary" size="lg">
                  Order through whatsapp
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cart;
