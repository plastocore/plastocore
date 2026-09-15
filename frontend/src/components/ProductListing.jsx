import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { productCategories, productsByCategory } from '../data/mockData';

export const ProductListing = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundCategory = productCategories.find((cat) => cat.slug === categorySlug);
    setCategory(foundCategory);
    setProducts(productsByCategory[categorySlug] || []);
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Package className="mx-auto mb-4 text-brand-grey" size={48} />
          <p className="text-brand-grey">Category not found</p>
          <Button onClick={() => navigate('/')} className="mt-4">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate('/')} className="text-brand-grey hover:text-brand-blue p-0">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue">{category.name}</h1>
          <p className="text-brand-grey mt-2 max-w-3xl">{category.description}</p>
          <div className="bg-brand-sky rounded-lg px-4 py-3 inline-block mt-4">
            <p className="text-brand-blue font-medium">
              {products.length} {products.length === 1 ? 'Product' : 'Products'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 border border-brand-line overflow-hidden cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative h-52 overflow-hidden bg-brand-muted">
                <img src={product.image} alt={product.name} loading="lazy" decoding="async" width="640" height="416" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-3">{product.name}</h3>
                <p className="text-brand-grey text-sm mb-4">{product.description}</p>
                <span className="text-brand-blue font-semibold text-sm">View details →</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
