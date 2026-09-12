import React from 'react';
import {
  Factory,
  Cable,
  Plug,
  Box,
  Layers,
  FileText,
  ClipboardCheck,
  FlaskConical,
  BadgeCheck,
  PackageCheck,
  ShieldCheck,
  Truck,
  Headset
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { capabilities, manufacturingProcess } from '../data/mockData';

const icons = [Cable, Plug, Box, Layers];
const processIcons = [
  FileText,
  ClipboardCheck,
  FlaskConical,
  BadgeCheck,
  Factory,
  ShieldCheck,
  Factory,
  ClipboardCheck,
  PackageCheck,
  Headset
];

export const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 bg-brand-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-line px-4 py-2 rounded-full mb-4">
            <Factory className="text-brand-blue" size={18} />
            <span className="text-brand-blue font-medium text-sm">Capabilities / Manufacturing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Integrated Manufacturing Capabilities
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Precision manufacturing and assembly solutions tailored to your application requirements. Our processes are designed to deliver consistent quality, reliable performance and repeatable production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = icons[index] || Factory;
            return (
              <Card key={capability.title} className="bg-white border-brand-line shadow-sm">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-brand-sky rounded-xl flex items-center justify-center mb-5">
                    <Icon className="text-brand-blue" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-4">{capability.title}</h3>
                  <ul className="space-y-2">
                    {capability.items.map((item) => (
                      <li key={item} className="text-brand-grey text-sm flex gap-2">
                        <span className="text-brand-blue">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-white border border-brand-line rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-brand-blue mb-3 text-center">
            Plastocore's End-to-End Manufacturing Process
          </h3>
          <p className="text-center text-brand-grey mb-8">
            From technical discussions and sample development to production, testing, packaging and dispatch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {manufacturingProcess.map((step, index) => (
              <div key={step} className="relative group">
                <div className="h-full bg-brand-sky border border-transparent group-hover:border-brand-blue group-hover:bg-white rounded-xl p-4 transition-colors duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200">
                      {React.createElement(processIcons[index], { size: 20, strokeWidth: 1.8 })}
                    </div>
                    <span className="text-xs font-bold tracking-wider text-brand-blue/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm font-semibold leading-snug text-brand-blue">{step}</p>
                </div>
                {index < manufacturingProcess.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-3 w-2 h-px bg-brand-line z-10" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
