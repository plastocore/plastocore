import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SEO } from './components/SEO';
import { Toaster } from './components/ui/sonner';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';

const ProductListing = lazy(() => import('./components/ProductListing').then(({ ProductListing }) => ({ default: ProductListing })));
const ProductDetail = lazy(() => import('./components/ProductDetail').then(({ ProductDetail }) => ({ default: ProductDetail })));
const ProductCategories = lazy(() => import('./components/ProductCategories').then(({ ProductCategories }) => ({ default: ProductCategories })));
const Capabilities = lazy(() => import('./components/Capabilities').then(({ Capabilities }) => ({ default: Capabilities })));
const About = lazy(() => import('./components/About').then(({ About }) => ({ default: About })));
const Industries = lazy(() => import('./components/Industries').then(({ Industries }) => ({ default: Industries })));
const Quality = lazy(() => import('./components/Quality').then(({ Quality }) => ({ default: Quality })));
const Contact = lazy(() => import('./components/Contact').then(({ Contact }) => ({ default: Contact })));
const Footer = lazy(() => import('./components/Footer').then(({ Footer }) => ({ default: Footer })));

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white text-brand-grey">
    Loading...
  </div>
);

const DeferredSection = ({ component: Component }) => {
  const sectionRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !('IntersectionObserver' in window)) {
      setIsNearViewport(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {isNearViewport ? (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      ) : null}
    </div>
  );
};

const HomePage = () => (
  <>
    <SEO />
    <main>
      <Hero />
      <DeferredSection component={ProductCategories} />
      <DeferredSection component={Capabilities} />
      <DeferredSection component={About} />
      <DeferredSection component={Industries} />
      <DeferredSection component={Quality} />
      <DeferredSection component={Contact} />
    </main>
  </>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="App">
          <Header />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:categorySlug" element={<ProductListing />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <Toaster position="top-right" />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
