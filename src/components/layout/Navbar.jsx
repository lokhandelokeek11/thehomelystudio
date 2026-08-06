import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, MessageCircle, Instagram, ChevronRight } from 'lucide-react';
import { BRAND_INFO } from '../../constants';
import WhatsAppButton from '../common/WhatsAppButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products Catalog', path: '/products' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact & Order', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-bg/90 backdrop-blur-md py-3 shadow-soft border-b border-brand-border/60' 
            : 'bg-brand-bg/95 py-4 sm:py-5 border-b border-brand-border/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-3 active:scale-98 transition-transform">
            <img 
              src={BRAND_INFO.logo} 
              alt="The Homely Studio Logo" 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-brand-border/80 group-hover:scale-105 transition-transform duration-300 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-brand-text group-hover:text-brand-primary transition-colors">
                The Homely Studio
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-brand-muted font-sans font-light">
                Handcrafted With Love
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-200 relative py-1.5 ${
                    isActive
                      ? 'text-brand-primary font-semibold'
                      : 'text-brand-text/80 hover:text-brand-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-brand-muted hover:text-[#E1306C] transition-colors rounded-full hover:bg-brand-secondary min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Instagram profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <WhatsAppButton size="small" text="Enquire Now" />
          </div>

          {/* Mobile Menu Toggle Button (Min 48px target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-h-[48px] min-w-[48px] p-3 text-brand-text rounded-full hover:bg-brand-secondary active:scale-95 transition-all flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Tint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-brand-bg border-l border-brand-border/80 shadow-2xl z-50 md:hidden flex flex-col justify-between overflow-y-auto rounded-l-3xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-brand-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={BRAND_INFO.logo} 
                    alt="The Homely Studio Logo" 
                    className="w-9 h-9 rounded-full object-cover border border-brand-border shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-semibold text-brand-text">The Homely Studio</span>
                    <span className="text-[9px] text-brand-muted uppercase tracking-wider">Navigation</span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] min-w-[48px] p-2.5 text-brand-muted hover:text-brand-text rounded-full hover:bg-brand-secondary active:scale-95 transition-all flex items-center justify-center border border-brand-border/60"
                  aria-label="Close Navigation Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="px-6 py-6 space-y-2 flex-grow">
                <p className="text-[10px] uppercase font-bold text-brand-primary tracking-widest mb-3 px-2">
                  Browse Catalog & Pages
                </p>

                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`min-h-[48px] flex items-center justify-between text-base font-medium px-4 py-3 rounded-2xl transition-all active:scale-[0.98] ${
                          isActive
                            ? 'bg-brand-primary text-white font-semibold shadow-sm'
                            : 'text-brand-text bg-white/60 border border-brand-border/40 hover:bg-brand-secondary'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-muted'}`} />
                      </Link>
                    );
                  })}
                </nav>

                {/* Craftsmanship Note */}
                <div className="mt-8 p-4 bg-brand-secondary/60 rounded-2xl border border-brand-border/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-primary text-xs font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>Direct Artisan Ordering</span>
                  </div>
                  <p className="text-xs text-brand-muted font-normal leading-relaxed">
                    Custom sizes, deity garland colors, and personalized gifts are crafted on demand in Ravet, Pune.
                  </p>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-6 border-t border-brand-border/60 bg-white/50 space-y-3">
                <WhatsAppButton size="large" text="Direct WhatsApp Inquiry" className="w-full shadow-md text-sm min-h-[48px]" />
                
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-brand-text border border-brand-border rounded-2xl hover:bg-brand-secondary transition-all active:scale-[0.98]"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Follow {BRAND_INFO.instagramHandle}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

