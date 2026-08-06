import React from 'react';

export default function PriceTag({ price, priceDisplay, size = 'medium', className = '' }) {
  const sizeClasses = {
    small: 'text-base font-bold',
    medium: 'text-xl md:text-2xl font-extrabold',
    large: 'text-3xl md:text-4xl font-extrabold'
  }[size];

  return (
    <div className={`flex items-baseline gap-1 text-brand-primary tracking-tight ${className}`}>
      <span className={`font-sans ${sizeClasses}`}>
        {priceDisplay || `₹${price}`}
      </span>
    </div>
  );
}
