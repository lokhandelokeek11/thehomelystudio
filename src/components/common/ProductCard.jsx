import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PriceTag from './PriceTag';
import WhatsAppButton from './WhatsAppButton';
import ProductPreviewModal from './ProductPreviewModal';

export default function ProductCard({ product, index = 0 }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
        className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border/60 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
      >
        {/* Full Image Display Container (No Cropping!) */}
        <div className="relative aspect-square bg-white p-2.5 sm:p-3 border-b border-brand-border/30 overflow-hidden flex items-center justify-center">
          <img
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Quick View Button for Desktop */}
          <div className="hidden sm:flex absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center p-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPreviewOpen(true);
              }}
              className="px-4 py-2.5 bg-white/95 text-brand-text font-semibold text-xs rounded-full shadow-lg hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 flex items-center gap-2 border border-brand-border min-h-[44px]"
            >
              <Eye className="w-4 h-4 text-brand-primary" />
              <span>Quick Preview</span>
            </button>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 pointer-events-none z-10">
            {product.bestSeller && (
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-brand-primary text-white text-[9px] sm:text-[11px] font-bold tracking-wide uppercase rounded-full shadow-sm">
                Best Seller
              </span>
            )}
            {product.newArrival && (
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-brand-accent text-white text-[9px] sm:text-[11px] font-bold tracking-wide uppercase rounded-full shadow-sm">
                New
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-3.5 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-primary font-bold block mb-1">
              {product.categoryName}
            </span>

            <Link to={`/products/${product.id}`} className="group/title block">
              <h3 className="font-sans text-sm sm:text-base md:text-lg font-bold text-brand-text group-hover/title:text-brand-primary transition-colors leading-snug line-clamp-2">
                {product.title}
              </h3>
            </Link>

            <p className="text-[11px] sm:text-xs text-brand-muted line-clamp-2 mt-1 font-normal leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Price & Action CTA */}
          <div className="pt-2.5 border-t border-brand-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <PriceTag price={product.price} priceDisplay={product.priceDisplay} size="medium" />

            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-between sm:justify-end pt-1 sm:pt-0">
              <WhatsAppButton
                productTitle={product.title}
                price={product.price}
                size="small"
                text="Enquire"
                className="flex-1 sm:flex-initial min-h-[44px]"
              />
              
              <Link
                to={`/products/${product.id}`}
                aria-label={`View ${product.title} details`}
                className="min-h-[44px] min-w-[44px] p-2.5 bg-brand-secondary/80 hover:bg-brand-secondary text-brand-primary rounded-full transition-colors flex items-center justify-center shrink-0 active:scale-95"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Preview Modal */}
      <ProductPreviewModal
        product={product}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
