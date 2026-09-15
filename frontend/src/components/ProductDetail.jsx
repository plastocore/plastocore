import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Package as PackageIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { productsByCategory } from '../data/mockData';

export const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [customFormData, setCustomFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    description: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    let foundProduct = null;
    for (const categoryProducts of Object.values(productsByCategory)) {
      foundProduct = categoryProducts.find((p) => p.id === parseInt(productId, 10));
      if (foundProduct) break;
    }
    setProduct(foundProduct);
  }, [productId]);

  const handleCustomFormChange = (e) => {
    setCustomFormData({ ...customFormData, [e.target.name]: e.target.value });
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customFormData.name || !customFormData.email || !customFormData.mobile || !customFormData.description) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Requirement submitted. We will contact you shortly.');
    setTimeout(() => {
      setCustomFormData({ name: '', email: '', mobile: '', description: '' });
    }, 1500);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <PackageIcon className="mx-auto mb-4 text-brand-grey" size={48} />
          <p className="text-brand-grey">Product not found</p>
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
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-brand-grey hover:text-brand-blue p-0">
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border border-brand-line overflow-hidden">
              <img src={product.image} alt={product.name} loading="lazy" decoding="async" width="800" height="420" className="w-full h-[420px] object-cover" />
            </Card>
            <Card className="mt-6 border-brand-line">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-brand-line last:border-0 gap-4">
                      <span className="text-brand-grey font-medium">{key}</span>
                      <span className="text-brand-blue font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="bg-brand-sky rounded-lg px-4 py-2 inline-block mb-4">
              <p className="text-brand-blue font-medium text-sm">{product.category}</p>
            </div>
            <h1 className="text-4xl font-bold text-brand-blue mb-4">{product.name}</h1>
            <p className="text-lg text-brand-grey mb-6 leading-relaxed">{product.description}</p>

            <div className="space-y-3 mb-8">
              {['ISO 9001:2015 Certified Quality', '100% Tested Products', 'Custom length and connector options', 'Support from sample to production'].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-brand-grey">
                  <Check className="text-brand-blue flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Card className="border border-brand-blue">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-4">Send Your Requirement</h3>
                <form onSubmit={handleCustomSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={customFormData.name} onChange={handleCustomFormChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={customFormData.email} onChange={handleCustomFormChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input id="mobile" name="mobile" type="tel" value={customFormData.mobile} onChange={handleCustomFormChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="description">Requirement Details *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={customFormData.description}
                      onChange={handleCustomFormChange}
                      placeholder="Length, connector type, quantity, drawing or BOM notes"
                      required
                      rows={5}
                      className="mt-1 resize-none"
                    />
                  </div>
                  <p className="text-sm text-brand-grey bg-brand-muted rounded-lg p-4">
                    Our team will review your requirement and get back with a suitable solution.
                  </p>
                  <Button type="submit" size="lg" className="w-full h-12">
                    Request a Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
