import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, SlidersHorizontal, Sparkles } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import CategoryFilter from '../components/common/CategoryFilter';
import SearchBar from '../components/common/SearchBar';
import ProductGrid from '../components/common/ProductGrid';
import { products } from '../data/products';
import { BRAND_INFO, SORT_OPTIONS } from '../constants';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Keep category in sync with URL query param
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category Filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        (p.material && p.material.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    } else if (sortBy === 'featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <>
      <Helmet>
        <title>Handcrafted Collection Catalog | The Homely Studio</title>
        <meta name="description" content="Browse our complete showcase of 100% handcrafted deity garlands, festive decor, curtain tiebacks, hair pins, and bespoke keychains." />
      </Helmet>

      <main className="min-h-screen bg-brand-bg py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Artisanal Catalog"
            title="Explore Our Handcrafted Collection"
            description="Every piece is individually handcrafted with premium plush materials, devotion, and warm aesthetic perfection."
          />

          {/* Controls Bar: Search & Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs text-brand-muted font-light whitespace-nowrap">
                Showing <strong className="font-semibold text-brand-text">{filteredProducts.length}</strong> items
              </span>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-full border border-brand-border shadow-sm text-xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-brand-primary" />
                <span className="text-brand-muted font-medium">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent font-medium text-brand-text focus:outline-none cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} columns={4} />

          {/* Custom Order Banner */}
          <div className="mt-16 bg-brand-secondary/70 rounded-3xl p-8 border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-serif text-2xl font-medium text-brand-text mb-1 flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-brand-accent" />
                Need a Custom Size or Color Theme?
              </h3>
              <p className="text-sm text-brand-muted font-light">
                We accept personalized orders for specific mandir dimensions, backdrop themes, and gift bulk orders.
              </p>
            </div>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to request a customized order from The Homely Studio.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3.5 bg-brand-primary hover:bg-brand-primary-dark active:scale-[0.98] text-white font-semibold text-sm rounded-full shadow transition-all shrink-0 flex items-center justify-center"
            >
              Request Customization
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
