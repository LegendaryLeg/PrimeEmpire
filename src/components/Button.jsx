import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-green text-white hover:bg-secondary-brown focus:ring-primary-green',
    secondary: 'bg-accent-saffron text-white hover:bg-secondary-brown focus:ring-accent-saffron',
    outline: 'border-2 border-primary-green text-primary-green hover:bg-background-beige focus:ring-primary-green',
    whatsapp: 'bg-accent-saffron text-white hover:bg-secondary-brown focus:ring-accent-saffron',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
