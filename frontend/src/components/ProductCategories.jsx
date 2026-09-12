import React from 'react';
import { Package } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { productCategories } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export const ProductCategories = () => {
  const navigate = useNavigate();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
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
          ))}
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
