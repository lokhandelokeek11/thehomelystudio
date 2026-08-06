import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, MessageCircle, Mail, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO, CATEGORIES } from '../../constants';
import WhatsAppButton from '../common/WhatsAppButton';
import InstagramButton from '../common/InstagramButton';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary/60 border-t border-brand-border/80 pt-12 sm:pt-16 pb-[calc(2rem+env(safe-area-inset-bottom))] text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={BRAND_INFO.logo} 
                alt="The Homely Studio Logo" 
                className="w-10 h-10 rounded-full object-cover shadow-sm border border-brand-border"
              />
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-brand-text">
                The Homely Studio
              </h3>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed font-light">
              {BRAND_INFO.shortBio}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <WhatsAppButton size="small" text="WhatsApp" />
              <InstagramButton size="small" text="Instagram" />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-brand-text mb-4 border-b border-brand-border/60 pb-2">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-brand-primary transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/products" className="inline-block py-1.5 hover:text-brand-primary transition-colors">
                  Complete Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block py-1.5 hover:text-brand-primary transition-colors">
                  Our Story & Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-1.5 hover:text-brand-primary transition-colors">
                  Contact & Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg font-medium text-brand-text mb-4 border-b border-brand-border/60 pb-2">
              Handcrafted Categories
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.id}`}
                    className="inline-block py-1.5 hover:text-brand-primary transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Customization Info */}
          <div>
            <h4 className="font-serif text-lg font-medium text-brand-text mb-4 border-b border-brand-border/60 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-brand-muted font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-1" />
                <span>{BRAND_INFO.location} — {BRAND_INFO.shippingNote}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={`https://wa.me/${BRAND_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="py-1 hover:text-brand-primary transition-colors">
                  {BRAND_INFO.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
                <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="py-1 hover:text-brand-primary transition-colors">
                  {BRAND_INFO.instagramHandle}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white/80 rounded-2xl border border-brand-border/60 text-xs text-brand-muted">
              <p className="font-medium text-brand-text mb-0.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                <span>Customization Available</span>
              </p>
              <span>Have a specific color scheme or size in mind? Contact us directly for personalized orders!</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col md:flex-row items-center justify-between text-xs text-brand-muted gap-4">
          <p className="flex flex-wrap items-center justify-center md:justify-start gap-1">
            <span>© {new Date().getFullYear()} {BRAND_INFO.name}. Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>in Ravet, Pune.</span>
          </p>

          <p className="text-center md:text-right text-[11px] text-brand-muted/80">
            Showcase Catalog only. Orders placed directly via WhatsApp & Instagram.
          </p>
        </div>
      </div>
    </footer>
  );
}
