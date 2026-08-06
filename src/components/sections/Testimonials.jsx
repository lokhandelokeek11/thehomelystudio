import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Priyanka R.',
      location: 'Mumbai',
      product: 'Festive Marigold & Hibiscus Haar',
      text: 'The Hibiscus garland for our Ganesh Mandir was beyond beautiful! The colors are so vibrant and everyone who visited during Ganesh Chaturthi asked where we got it from. Wonderful craftsmanship!',
      rating: 5
    },
    {
      name: 'Ananya S.',
      location: 'Pune',
      product: 'Pipe Cleaner Asaan & Sonchafa Garland',
      text: 'Ordered the divine pipe cleaner asaan for Bappa along with the Sonchafa garland. The quality of the pipe cleaner material is so soft and premium. It feels so sacred and dignified on our puja altar.',
      rating: 5
    },
    {
      name: 'Meera K.',
      location: 'Thane',
      product: 'Floral Curtain Tiebacks (Set of 2)',
      text: 'These curtain tiebacks completely elevated our living room! Adds such a soft boho warmth to our sheer drapes. Highly recommend The Homely Studio for handmade decor.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Customer Love & Words"
          title="Warm Words From Devotees & Home Lovers"
          description="Read how our handcrafted creations have brought joy and sacred warmth to homes across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-3xl border border-brand-border/60 shadow-soft relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                
                <p className="text-sm text-brand-muted font-light italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/40 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-medium text-brand-text text-base">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-brand-muted font-light">
                    {rev.location} • {rev.product}
                  </span>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center text-brand-primary">
                  <Heart className="w-4 h-4 fill-brand-primary/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
