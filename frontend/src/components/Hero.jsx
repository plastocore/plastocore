import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/mockData';

export const Hero = () => {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center bg-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner.webp')" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 46%, rgba(255,255,255,0.5) 76%, rgba(255,255,255,0.1) 100%)' }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 py-4 lg:py-16">
        <div className="max-w-3xl">
          {/* <div className="inline-flex items-center gap-2 bg-brand-sky border border-brand-line px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
              <span className="text-brand-blue text-sm font-medium">
                Established {companyInfo.established} • ISO 9001:2015 Certified
              </span>
            </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-6 leading-tight">
            {companyInfo.tagline}
          </h1>
          <p className="text-lg text-black mb-4 leading-relaxed ">
            {companyInfo.subtagline}
          </p>
          <p className="text-base md:text-lg text-black mb-8 leading-relaxed max-w-xl">
            Plastocore delivers reliable engineering and manufacturing solutions for wire harnessing, cable assemblies, connectorization and precision injection moulded components. We support OEMs and industrial customers with dependable solutions built for real-world applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {['Wire Harnesses', 'Cable Assemblies', 'Connectorization', 'Precision Injection Moulding'].map((point) => (
              <div key={point} className="flex items-center gap-3 text-brand-grey">
                <CheckCircle2 className="text-brand-blue flex-shrink-0" size={20} />
                <span className="font-medium text-black">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollTo('#contact')} size="lg" className="w-full sm:w-56 h-14 text-lg">
              Enquire Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={scrollTo('#products')}
              size="lg"
              variant="outline"
              className="w-full sm:w-56 h-14 text-lg"
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
