import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import InstagramButton from '../common/InstagramButton';
import { BRAND_INFO } from '../../constants';
import { products } from '../../data/products';

export default function InstagramGallery() {
  const galleryImages = products.slice(0, 6).map(p => ({
    url: p.images[0],
    title: p.title,
    category: p.categoryName
  }));

  return (
    <section className="py-16 md:py-24 bg-brand-secondary/30 border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Join Our Community"
          title="Follow Us On Instagram"
          description={`Discover behind-the-scenes knotting rituals, new seasonal drops, and customer altar styling on ${BRAND_INFO.instagramHandle}.`}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.a
              key={idx}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft border border-brand-border/60 block"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <InstagramButton size="large" text="Visit @thehomelystudio Profile" />
        </div>
      </div>
    </section>
  );
}
