import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem, removeItem, getQuantity } = useCart();
  const quantity = product ? getQuantity(product.id) : 0;

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello! I would like to order: ${product.name} - $${product.price}`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  if (!product) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
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
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square mb-4 bg-border-divider rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
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
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-text-secondary leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">Origin</h3>
                  <p className="text-text-secondary">{product.origin}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">Aroma</h3>
                  <p className="text-text-secondary">{product.aroma}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">Brewing Instructions</h3>
                  <p className="text-text-secondary">{product.brewing}</p>
                </div>
              </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-between border border-border-divider rounded-full px-4 py-2 flex-1">
                <button
                  onClick={() => removeItem(product.id)}
                  className="w-10 h-10 rounded-full border border-border-divider text-text-primary hover:bg-background-beige transition-colors"
                  aria-label={`Remove one ${product.name}`}
                >
                  −
                </button>
                <span className="text-base font-semibold text-text-primary">
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
              <Link to="/cart" className="flex-1">
                <Button variant="whatsapp" size="lg" className="w-full">
                  Go to Checkout
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
