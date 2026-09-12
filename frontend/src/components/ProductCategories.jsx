import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Package } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { productCategories } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export const ProductCategories = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = productCategories[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (
      currentIndex === 0 ? productCategories.length - 1 : currentIndex - 1
    ));
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (
      currentIndex === productCategories.length - 1 ? 0 : currentIndex + 1
    ));
  };

  const renderCategoryCard = (category) => (
    <Card
      key={category.id}
      className="group hover:shadow-lg transition-all duration-300 border border-brand-line shadow-sm overflow-hidden cursor-pointer bg-white"
      onClick={() => navigate(`/products/${category.slug}`)}
    >
      <div className="relative h-56 overflow-hidden bg-brand-muted">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-brand-blue mb-2">{category.name}</h3>
        <p className="text-brand-grey mb-4 leading-relaxed text-sm">{category.description}</p>
        <span className="text-brand-blue font-semibold inline-flex items-center">
          View Products
          <span className="ml-2">→</span>
        </span>
      </CardContent>
    </Card>
  );

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-sky px-4 py-2 rounded-full mb-4">
            <Package className="text-brand-blue" size={18} />
            <span className="text-brand-blue font-medium text-sm">Our Products & Connectivity Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Complete Cable Solutions for Every Industry
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Plastocore delivers a wide range of customized cables, wire harnesses, connectors and plastic moulded components for electrical, electronic, industrial, automotive and other specialized applications.
          </p>
        </div>

        <div className="md:hidden">
          <div className="relative px-8">
            {renderCategoryCard(activeCategory)}
            <button
              type="button"
              aria-label="Previous product category"
              onClick={showPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-brand-line text-brand-blue shadow-md flex items-center justify-center hover:bg-brand-sky transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next product category"
              onClick={showNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-brand-line text-brand-blue shadow-md flex items-center justify-center hover:bg-brand-sky transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-5" aria-label="Product categories">
            {productCategories.map((category, index) => (
              <button
                key={category.id}
                type="button"
                aria-label={`Show ${category.name}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-brand-blue' : 'w-2 bg-brand-line'}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map(renderCategoryCard)}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-grey mb-4">Have a drawing, sample or specific requirement?</p>
          <button
            className="bg-brand-blue hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Send Your Requirement
          </button>
        </div>
      </div>
    </section>
  );
};
