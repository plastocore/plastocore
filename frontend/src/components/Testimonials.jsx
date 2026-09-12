import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/mockData';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <Star className="text-orange-600" size={18} />
            <span className="text-orange-700 font-medium text-sm">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Businesses Across India
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our valued clients have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={60} className="text-orange-600" />
              </div>

              <CardContent className="p-8 relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Author Info */}
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.company}</p>
                  <p className="text-xs text-slate-500 mt-1">{testimonial.location}</p>
                  <p className="text-xs text-orange-600 mt-2">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.6/5', label: 'Quality Rating' },
              { value: '97%', label: 'Response Rate' },
              { value: '96%', label: 'Delivery Score' },
              { value: '500+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
