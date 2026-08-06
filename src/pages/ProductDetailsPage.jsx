import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Share2, 
  Sparkles, 
  MessageCircle, 
  Instagram
} from 'lucide-react';
import { products } from '../data/products';
import PriceTag from '../components/common/PriceTag';
import WhatsAppButton from '../components/common/WhatsAppButton';
import InstagramButton from '../components/common/InstagramButton';
import ProductGrid from '../components/common/ProductGrid';
import SectionTitle from '../components/common/SectionTitle';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-[70vh] bg-brand-bg flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-4">
          <h2 className="font-sans text-3xl font-bold text-brand-text">Product Not Found</h2>
          <p className="text-brand-muted text-sm font-normal">
            The handcrafted item you are looking for might have been moved or renamed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white text-sm font-semibold rounded-full shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  // Variant State
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  // Active Image State
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  // Related products from same category
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out ${product.title} on The Homely Studio!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${product.title} | The Homely Studio`}</title>
        <meta name="description" content={product.shortDescription} />
        <meta property="og:title" content={`${product.title} | The Homely Studio`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:image" content={product.images[0]} />
      </Helmet>

      <main className="min-h-screen bg-brand-bg py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-muted hover:text-brand-primary transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Catalog</span>
            </button>
          </div>

          {/* Main Product Specs Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl p-6 md:p-10 border border-brand-border/60 shadow-soft mb-16">
            
            {/* Left Image Gallery - Swipeable Carousel on Mobile & Grid on Desktop */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-white p-3 sm:p-4 border border-brand-border/60 shadow-sm flex items-center justify-center group">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage}
                  alt={product.title}
                  loading="eager"
                  className="w-full h-full object-contain object-center"
                />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none z-10">
                  {product.bestSeller && (
                    <span className="px-3.5 py-1 bg-brand-primary text-white text-xs font-bold rounded-full shadow-sm">
                      Best Seller
                    </span>
                  )}
                  {product.newArrival && (
                    <span className="px-3.5 py-1 bg-brand-accent text-white text-xs font-bold rounded-full shadow-sm">
                      New Arrival
                    </span>
                  )}
                </div>

                {/* Mobile Active Dot Indicators Overlay */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full z-10">
                    {product.images.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(imgUrl)}
                        aria-label={`Show image ${idx + 1}`}
                        className={`transition-all rounded-full ${
                          selectedImage === imgUrl ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnails list */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {product.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgUrl)}
                      className={`min-h-[56px] min-w-[56px] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white p-1 border-2 transition-all shrink-0 active:scale-95 ${
                        selectedImage === imgUrl ? 'border-brand-primary ring-2 ring-brand-primary/20 scale-95 shadow-sm' : 'border-brand-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`${product.title} thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Specifications & Direct Contact CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">
                    {product.categoryName}
                  </span>
                  <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl text-brand-text font-bold mt-1 leading-snug">
                    {product.title}
                  </h1>
                </div>

                {/* Price Display - Large & Touch Visible */}
                <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 py-3.5 border-y border-brand-border/60 bg-brand-secondary/20 px-4 rounded-2xl">
                  <PriceTag
                    price={currentPrice}
                    priceDisplay={selectedVariant ? `₹${selectedVariant.price}` : product.priceDisplay}
                    size="large"
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary"
                  />
                  {selectedVariant && (
                    <span className="text-xs bg-white text-brand-primary px-3.5 py-1.5 rounded-full font-bold border border-brand-border shadow-sm">
                      Selected: {selectedVariant.name}
                    </span>
                  )}
                </div>

                {/* Long Description */}
                <p className="text-sm sm:text-base text-brand-muted font-normal leading-relaxed">
                  {product.description}
                </p>

                {/* Variant Options Selector */}
                {product.variants && product.variants.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold text-brand-text uppercase tracking-wider block">
                      CHOOSE SIZE / OPTIONS:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.variants.map((v, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedVariant(v)}
                          className={`min-h-[48px] p-4 rounded-2xl text-sm font-semibold border text-left flex items-center justify-between transition-all active:scale-[0.98] ${
                            selectedVariant?.name === v.name
                              ? 'border-brand-primary bg-brand-primary/10 text-brand-primary ring-2 ring-brand-primary/30 shadow-sm'
                              : 'border-brand-border bg-white text-brand-text hover:border-brand-accent'
                          }`}
                        >
                          <span className="font-medium text-brand-text">{v.name}</span>
                          <span className="font-extrabold text-lg text-brand-primary ml-2">₹{v.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-2 pt-3">
                  <h4 className="text-xs font-bold text-brand-text uppercase tracking-wider">HIGHLIGHTS:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-muted font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Table */}
                <div className="mt-6 bg-brand-secondary/40 rounded-2xl p-4 sm:p-5 border border-brand-border/60 text-xs sm:text-sm space-y-2.5 text-brand-muted">
                  <div className="flex justify-between border-b border-brand-border/40 pb-2">
                    <span className="font-bold text-brand-text">Material:</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-border/40 pb-2">
                    <span className="font-bold text-brand-text">Care Instructions:</span>
                    <span className="font-medium">{product.careInstructions}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-border/40 pb-2">
                    <span className="font-bold text-brand-text">Dimensions:</span>
                    <span className="font-medium">{product.dimensions}</span>
                  </div>
                  <div className="flex justify-between flex-wrap gap-1">
                    <span className="font-bold text-brand-text">Customization:</span>
                    <span className="text-brand-primary font-bold">Contact for custom colors & sizes</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Bar - 48px Min Height Stacked */}
              <div className="space-y-3 pt-6 border-t border-brand-border">
                <WhatsAppButton
                  productTitle={product.title}
                  variantName={selectedVariant?.name}
                  price={currentPrice}
                  size="large"
                  text="Enquire on WhatsApp to Order"
                  className="w-full shadow-md py-4 text-sm sm:text-base min-h-[48px] justify-center"
                />

                <div className="flex items-center justify-between gap-3">
                  <InstagramButton size="medium" text="Inquire via Instagram" className="flex-1 min-h-[48px] justify-center" />
                  
                  <button
                    onClick={handleShare}
                    className="min-h-[48px] min-w-[48px] p-3 bg-brand-secondary text-brand-muted hover:text-brand-text rounded-2xl border border-brand-border transition-colors flex items-center justify-center shrink-0 active:scale-95"
                    aria-label="Share product"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Related Products Showcase */}
          {relatedProducts.length > 0 && (
            <div className="pt-8">
              <SectionTitle
                subtitle="Similar Creations"
                title="You Might Also Love"
                align="left"
              />
              <ProductGrid products={relatedProducts} columns={4} />
            </div>
          )}

        </div>
      </main>
    </>
  );
}
