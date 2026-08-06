import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';
import Loader from './components/common/Loader';

// Dynamic lazy imports for optimal performance and route splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent/20 selection:text-brand-primary antialiased">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<Loader fullPage />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}
