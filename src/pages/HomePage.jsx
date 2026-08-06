import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import FeaturedCollection from '../components/sections/FeaturedCollection';
import WhyHandmade from '../components/sections/WhyHandmade';
import Testimonials from '../components/sections/Testimonials';
import InstagramGallery from '../components/sections/InstagramGallery';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>The Homely Studio | Premium Handcrafted Crochet & Festive Decor</title>
        <meta 
          name="description" 
          content="Handmade luxury crochet deity garlands, mandir asaans, curtain tiebacks, hair ornaments & custom keychains. Browse our handcrafted catalog and contact on WhatsApp or Instagram." 
        />
        <meta property="og:title" content="The Homely Studio | Premium Handcrafted Showcase" />
        <meta property="og:description" content="Discover handmade crochet deity garlands, festive decor, hair accessories & bespoke gifts." />
      </Helmet>

      <main className="min-h-screen bg-brand-bg">
        <Hero />
        <FeaturedCollection />
        <WhyHandmade />
        <Testimonials />
        <InstagramGallery />
      </main>
    </>
  );
}
