import React from 'react';
import { Instagram } from 'lucide-react';
import { BRAND_INFO } from '../../constants';

export default function InstagramButton({ 
  text = 'Follow on Instagram', 
  className = '',
  size = 'medium' 
}) {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-xs gap-1.5',
    medium: 'px-5 py-2.5 text-sm gap-2',
    large: 'px-7 py-3.5 text-base gap-3 font-medium'
  }[size];

  return (
    <a
      href={BRAND_INFO.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F56040] text-white hover:opacity-95 rounded-full font-sans transition-all duration-300 shadow-sm hover:shadow-md transform active:scale-95 ${sizeClasses} ${className}`}
    >
      <Instagram className={size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-5 h-5' : 'w-4 h-4'} />
      <span>{text}</span>
    </a>
  );
}
