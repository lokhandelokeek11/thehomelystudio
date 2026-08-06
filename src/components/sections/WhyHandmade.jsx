import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RefreshCw, Palette, ShieldCheck, Sun } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function WhyHandmade() {
  const pillars = [
    {
      icon: Heart,
      title: 'Artisanal Craftsmanship',
      description: 'Every knot and petal is individually handcrafted with patience, devotion, and artistic finesse—never mass produced.'
    },
    {
      icon: RefreshCw,
      title: 'Everlasting & Reusable',
      description: 'Unlike fresh flowers that wither in hours, our pipe cleaner garlands retain their vivid beauty year after year across every festival.'
    },
    {
      icon: Palette,
      title: 'Bespoke Customization',
      description: 'Tailor any design, size, or color palette to match your personal altar, home drapes, or festival theme.'
    },
    {
      icon: Sun,
      title: 'Warm & Eco-Conscious',
      description: 'Made using soft plush pipe cleaners and chenille stems, offering an eco-friendly aesthetic for modern conscious homes.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-secondary/40 border-y border-brand-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Philosophy"
          title="Why Choose Handmade Crafts?"
          description="In a world dominated by mass factory production, handmade items carry soul, warmth, and timeless heritage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-brand-border/60 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-brand-border">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-medium text-brand-text">
                  {pillar.title}
                </h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
