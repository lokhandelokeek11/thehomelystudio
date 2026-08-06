import React from 'react';
import { CATEGORIES } from '../../constants';

export default function CategoryFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none border-b border-brand-border/40 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`whitespace-nowrap min-h-[44px] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 ${
              isActive
                ? 'bg-brand-primary text-white shadow-sm ring-2 ring-brand-primary/20'
                : 'bg-white text-brand-text hover:bg-brand-secondary border border-brand-border/80'
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
