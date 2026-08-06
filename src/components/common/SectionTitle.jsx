import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ 
  subtitle, 
  title, 
  description, 
  align = 'center', 
  className = '' 
}) {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  }[align];

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.25em] text-brand-primary font-medium mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-brand-text tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {/* Decorative Warm Divider */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-16 h-0.5 bg-brand-accent/60 my-4 rounded-full"
      />

      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-brand-muted text-base md:text-lg font-light leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
