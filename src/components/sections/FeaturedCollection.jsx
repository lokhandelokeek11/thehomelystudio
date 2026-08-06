import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ProductGrid from '../common/ProductGrid';
import { products } from '../../data/products';

export default function FeaturedCollection() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Curated Handcrafted Showcase"
          title="Featured Collection"
          description="Explore our most loved handcrafted deity garlands, sacred mandir accessories, and decorative home embellishments."
        />

        <ProductGrid products={featuredProducts} columns={4} />

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-secondary hover:bg-brand-secondary-dark text-brand-primary font-medium text-sm rounded-full transition-all duration-300 border border-brand-border group shadow-sm hover:shadow"
          >
            <span>Explore All 16 Handcrafted Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
