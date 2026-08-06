import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Eye } from 'lucide-react';
import InstagramButton from '../common/InstagramButton';
import { products } from '../../data/products';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slideshow changing images every 2 seconds (2000ms) with fade-in / fade-out
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentIndex];

  return (
    <section className="relative overflow-hidden bg-brand-bg pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 border-b border-brand-border/40">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-accent/10 rounded-full blur-3xl pointer-events-none animate-soft-glow" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-brand-secondary rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mobile-First: Image Showcase displays FIRST on Mobile (<1024px), Right column on Desktop (>=1024px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:col-span-5 order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white p-3 sm:p-4 flex items-center justify-center group">
              
              {/* Smooth Fade-In & Fade-Out Image Transition (2 Seconds) */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentProduct.id}
                  src={currentProduct.images[0]}
                  alt={currentProduct.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="w-full h-full object-contain object-center"
                />
              </AnimatePresence>

              {/* Touch & Clickable Overlay Link */}
              <Link
                to={`/products/${currentProduct.id}`}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
              >
                <span className="px-5 py-3 bg-white/95 text-brand-text font-bold text-xs sm:text-sm rounded-full shadow-lg flex items-center gap-2 border border-brand-border min-h-[48px]">
                  <Eye className="w-4 h-4 text-brand-primary" />
                  <span>View Product Details</span>
                </span>
              </Link>

              {/* Floating Location Tag */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-semibold text-brand-text shadow-sm border border-brand-border flex items-center gap-1.5 z-20">
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                <span>Ravet, Pune</span>
              </div>

              {/* Slideshow Counter */}
              <div className="absolute bottom-3 right-4 z-20 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] text-white font-mono font-bold tracking-wider">
                {currentIndex + 1} / {products.length}
              </div>
            </div>
          </motion.div>

          {/* Left Hero Content: Second on Mobile, First on Desktop */}
          <div className="w-full lg:col-span-7 order-2 lg:order-1 space-y-5 sm:space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 bg-brand-secondary rounded-full border border-brand-border text-brand-primary text-xs font-semibold tracking-wide shadow-sm max-w-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <span className="truncate">Handcrafted Lifestyle Studio — Ravet, Pune</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-text font-bold tracking-tight leading-[1.18]"
            >
              Timeless Floral Artistry & <span className="italic text-brand-primary font-semibold">Sacred Handcrafted</span> Crafts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-muted text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Exquisite pipe cleaner deity garlands, sacred mandir asaans, boho curtain tiebacks, and personalized gifts. Handcrafted with warmth, devotion, and lasting perfection.
            </motion.p>

            {/* CTAs: Full width on mobile, auto width on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 w-full"
            >
              <Link
                to="/products"
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-brand-primary text-white hover:bg-brand-primary-dark font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 group active:scale-98"
              >
                <span>Browse Full Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <InstagramButton size="large" text="Follow Instagram" className="w-full sm:w-auto min-h-[48px] justify-center" />
            </motion.div>

            {/* Highlights bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 sm:pt-8 grid grid-cols-3 gap-3 border-t border-brand-border/60 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-brand-primary">100%</span>
                <span className="text-[11px] sm:text-xs text-brand-muted font-medium mt-0.5">Handcrafted</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-brand-primary">Everlasting</span>
                <span className="text-[11px] sm:text-xs text-brand-muted font-medium mt-0.5">No Decay</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-brand-primary">Custom</span>
                <span className="text-[11px] sm:text-xs text-brand-muted font-medium mt-0.5">Colors & Sizes</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
