import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../data/products';
import { BRAND_INFO } from '../../constants';

export default function WhatsAppButton({ 
  productTitle = null, 
  variantName = null, 
  price = null, 
  text = 'Enquire on WhatsApp', 
  className = '',
  size = 'medium' 
}) {
  const href = productTitle 
    ? buildWhatsAppLink(productTitle, variantName, price)
    : `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to inquire about products from The Homely Studio.')}`;

  const sizeClasses = {
    small: 'px-3 py-1.5 text-xs gap-1.5',
    medium: 'px-5 py-2.5 text-sm gap-2',
    large: 'px-7 py-3.5 text-base gap-3 font-medium'
  }[size];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-[#25D366] text-white hover:bg-[#1EBE5A] rounded-full font-sans transition-all duration-300 shadow-sm hover:shadow-md transform active:scale-95 ${sizeClasses} ${className}`}
    >
      <MessageCircle className={size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-5 h-5' : 'w-4 h-4'} />
      <span>{text}</span>
    </a>
  );
}
