import React from 'react';
import ProductCard from './ProductCard';
import { PackageOpen } from 'lucide-react';

export default function ProductGrid({ products = [], columns = 4, className = '' }) {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center bg-brand-secondary/30 rounded-3xl border border-brand-border/60 p-8 my-8">
        <PackageOpen className="w-12 h-12 text-brand-primary/40 mx-auto mb-3" />
        <h3 className="font-serif text-xl font-medium text-brand-text mb-1">
          No Handcrafted Items Found
        </h3>
        <p className="text-sm text-brand-muted max-w-md mx-auto">
          We couldn't find any products matching your search or category filter. Try clearing filters or searching for something else.
        </p>
      </div>
    );
  }

  const gridColsClass = {
    2: 'grid-cols-2 gap-3 sm:gap-4 md:gap-6',
    3: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6',
    4: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6',
  }[columns] || 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6';

  return (
    <div className={`grid ${gridColsClass} ${className}`}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
