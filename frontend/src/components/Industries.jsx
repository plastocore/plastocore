import React from 'react';
import { Cpu } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { industries } from '../data/mockData';

export const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-sky px-4 py-2 rounded-full mb-4">
            <Cpu className="text-brand-blue" size={18} />
            <span className="text-brand-blue font-medium text-sm">Industries We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Powering Connections Across Industries
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            We work with OEMs, manufacturers and system integrators to develop application-specific components and assemblies as per their technical requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {industries.map((industry) => (
            <Card key={industry.title} className="h-full border-brand-line shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-brand-blue mb-3">{industry.title}</h3>
                <ul className="space-y-1.5">
                  {industry.items.map((item) => (
                    <li key={item} className="text-sm text-brand-grey">• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-brand-grey mt-12 font-medium">
          One Manufacturing Partner. Multiple Industry Applications.
        </p>
      </div>
    </section>
  );
};
