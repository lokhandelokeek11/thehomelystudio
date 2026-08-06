import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun, ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import WhyHandmade from '../components/sections/WhyHandmade';
import WhatsAppButton from '../components/common/WhatsAppButton';
import InstagramButton from '../components/common/InstagramButton';
import { BRAND_INFO } from '../constants';
import marigoldImg from '../assets/images/marigold_haar.jpeg';
import asaanImg from '../assets/images/asaan_for_bappa.jpeg';
import flowerPotImg from '../assets/images/mini_flower_pot.jpeg';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Our Story & Craftsmanship | The Homely Studio</title>
        <meta name="description" content="Discover the story behind The Homely Studio—where authentic Indian pipe cleaner craft traditions, sacred deity decor, and cozy home aesthetics come to life." />
      </Helmet>

      <main className="min-h-screen bg-brand-bg py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <SectionTitle
            subtitle="Behind The Studio"
            title="Handcrafted With Love, Designed For Warmth"
            description="The Homely Studio was born out of a profound love for traditional hand-crafting, sacred Indian festival rituals, and minimalist Scandinavian product aesthetics."
          />

          {/* Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-brand-text"
            >
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-brand-text leading-snug">
                A Home-Based Pursuit of Artistic Grace & Sacred Heritage
              </h3>
              
              <p className="text-brand-muted font-light leading-relaxed">
                What began as a quiet household passion for shaping soft plush pipe cleaner stems has blossomed into <strong>The Homely Studio</strong>—a boutique home brand dedicated to creating everlasting deity garlands (haar), sacred altar seating asaans, and cozy home accents.
              </p>

              <p className="text-brand-muted font-light leading-relaxed">
                Natural flowers, though sacred and breathtaking, wither away within hours. We wanted to offer devotees and home decor lovers an everlasting, respectful alternative crafted with high-density pipe cleaner stems that retain their vivid colors and shape across generations of festivals.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-brand-secondary/50 rounded-2xl border border-brand-border/60">
                  <h4 className="font-serif font-semibold text-brand-primary text-base mb-1">Our Mission</h4>
                  <p className="text-xs text-brand-muted font-light">
                    To craft authentic, everlasting handmade pieces that bring spiritual grace and warmth into every home altar and living space.
                  </p>
                </div>
                <div className="p-4 bg-brand-secondary/50 rounded-2xl border border-brand-border/60">
                  <h4 className="font-serif font-semibold text-brand-primary text-base mb-1">Our Vision</h4>
                  <p className="text-xs text-brand-muted font-light">
                    To keep traditional pipe cleaner handicraft alive in modern homes while offering zero-waste, eco-conscious festive solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Photo Collage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-soft border border-brand-border">
                  <img src={marigoldImg} alt="Marigold Haar Craftsmanship" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft border border-brand-border">
                  <img src={asaanImg} alt="Pipe Cleaner Asaan Detail" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft border border-brand-border">
                  <img src={flowerPotImg} alt="Mini Flower Pot Decor" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pillars Section */}
          <WhyHandmade />

          {/* Call to Connect */}
          <div className="mt-20 text-center bg-white p-10 md:p-14 rounded-3xl border border-brand-border shadow-soft max-w-4xl mx-auto space-y-6">
            <h3 className="font-serif text-3xl font-medium text-brand-text">
              Have a Special Request or Custom Gift Idea?
            </h3>
            <p className="text-brand-muted font-light max-w-xl mx-auto text-sm md:text-base">
              Whether you need specific dimensions for your mandir idols or customized wedding return gifts, we would love to bring your vision to life!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <WhatsAppButton size="large" text="Chat on WhatsApp" />
              <InstagramButton size="large" text="Follow on Instagram" />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
