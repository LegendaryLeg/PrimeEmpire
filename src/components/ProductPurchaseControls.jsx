import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductPurchaseControls = ({
  productId,
  productName,
  price,
  quantity,
  onQuantityChange,
  onAddToCart,
  showPrice = true,
  className = '',
}) => {
  const { t } = useTranslation();

  const handleDecrease = () => {
    onQuantityChange(Math.max(1, quantity - 1));
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleInputChange = (event) => {
    const nextValue = Number(event.target.value.replace(/[^\d]/g, ''));
    onQuantityChange(Number.isNaN(nextValue) ? 1 : Math.max(1, Math.floor(nextValue)));
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {showPrice && (
        <>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-secondary mb-1">
              {t('labels.price')}
            </p>
            <p className="text-2xl font-semibold text-text-primary">₸{price}</p>
          </div>
          <div className="border-t border-dashed border-border-divider" />
        </>
      )}

      <div className="flex items-center justify-between gap-3">
        <label
          htmlFor={`quantity-${productId}`}
          className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-secondary shrink-0"
        >
          {t('labels.quantity')}
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDecrease}
            className="w-8 h-8 flex items-center justify-center text-lg text-text-primary hover:text-primary-green transition-colors"
            aria-label={`Decrease quantity for ${productName}`}
          >
            −
          </button>
          <input
            id={`quantity-${productId}`}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={quantity}
            onChange={handleInputChange}
            className="w-12 h-9 rounded bg-background-beige text-center text-sm font-medium text-text-primary focus:outline-none focus:ring-1 focus:ring-primary-green"
          />
          <button
            type="button"
            onClick={handleIncrease}
            className="w-8 h-8 flex items-center justify-center text-lg text-text-primary hover:text-primary-green transition-colors"
            aria-label={`Increase quantity for ${productName}`}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onAddToCart}
        className="w-full bg-primary-green text-white uppercase tracking-[0.12em] text-sm font-semibold py-3.5 hover:bg-secondary-brown transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
      >
        {t('buttons.addToCart')}
      </button>
    </div>
  );
};

export default ProductPurchaseControls;
