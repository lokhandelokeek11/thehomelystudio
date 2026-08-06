import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PriceTag from './PriceTag';
import WhatsAppButton from './WhatsAppButton';

export default function ProductPreviewModal({ product, isOpen, onClose }) {
  if (!product || !isOpen) return null;

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-brand-bg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border border-brand-border/60 z-10 max-h-[85vh] sm:max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Close Button (Min 48px touch target) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 min-h-[48px] min-w-[48px] p-3 bg-white/90 hover:bg-white text-brand-muted hover:text-brand-text rounded-full shadow-sm transition-colors border border-brand-border flex items-center justify-center active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Full Product Image (No Cropping!) */}
            <div className="w-full md:w-1/2 bg-white p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-brand-border/40 shrink-0">
              <div className="relative w-full aspect-square max-h-[280px] sm:max-h-[380px] rounded-2xl overflow-hidden bg-white p-2 flex items-center justify-center border border-brand-border/30">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-contain object-center"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                  {product.bestSeller && (
                    <span className="px-3 py-1 bg-brand-primary text-white text-[10px] sm:text-xs font-semibold rounded-full shadow-sm">
                      Best Seller
                    </span>
                  )}
                  {product.newArrival && (
                    <span className="px-3 py-1 bg-brand-accent text-white text-[10px] sm:text-xs font-semibold rounded-full shadow-sm">
                      New Arrival
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Details & Action */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-brand-primary font-bold">
                    {product.categoryName}
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl md:text-3xl text-brand-text font-bold mt-1 leading-snug">
                    {product.title}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="flex items-center gap-3 py-2.5 sm:py-3 border-y border-brand-border/40">
                  <PriceTag 
                    price={currentPrice} 
                    priceDisplay={selectedVariant ? `₹${selectedVariant.price}` : product.priceDisplay} 
                    size="large" 
                  />
                  {selectedVariant && (
                    <span className="text-xs bg-brand-secondary text-brand-primary px-3 py-1 rounded-full font-semibold border border-brand-border">
                      {selectedVariant.name}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                  {product.shortDescription}
                </p>

                {/* Variants Selection */}
                {product.variants && product.variants.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-text uppercase tracking-wider block">
                      CHOOSE SIZE / OPTIONS:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedVariant(v)}
                          className={`min-h-[44px] px-3.5 py-2 text-xs rounded-xl border transition-all text-left flex items-center gap-2 active:scale-95 ${
                            selectedVariant?.name === v.name
                              ? 'border-brand-primary bg-brand-primary text-white font-bold shadow-sm'
                              : 'border-brand-border bg-white text-brand-text hover:border-brand-accent'
                          }`}
                        >
                          <span>{v.name}</span>
                          <span className="font-bold text-sm">₹{v.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features highlight */}
                <div className="space-y-1.5 pt-1">
                  {product.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-muted font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-brand-border/40 space-y-3">
                <WhatsAppButton
                  productTitle={product.title}
                  variantName={selectedVariant?.name}
                  price={currentPrice}
                  size="large"
                  className="w-full shadow-md min-h-[48px] justify-center text-sm sm:text-base"
                />

                <div className="flex items-center justify-between text-xs text-brand-muted pt-1">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-brand-primary hover:underline font-bold py-1"
                  >
                    <span>View full details & specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="italic text-[11px] font-medium hidden sm:inline">100% Handcrafted</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
