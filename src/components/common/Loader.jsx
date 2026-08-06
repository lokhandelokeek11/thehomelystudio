import React from 'react';
import { motion } from 'framer-motion';

export default function Loader({ fullPage = false }) {
  const content = (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-2 border-brand-accent/20 border-t-brand-primary rounded-full"
        />
        <span className="font-serif italic text-brand-primary text-xl font-medium">H</span>
      </div>
      <p className="text-sm tracking-widest text-brand-muted uppercase font-sans font-light animate-pulse">
        The Homely Studio
      </p>
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}
