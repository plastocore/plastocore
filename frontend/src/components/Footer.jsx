import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { companyInfo, productCategories, certifications } from '../data/mockData';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const go = (href) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 120);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-blue text-white relative border-t border-brand-dark">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white hover:bg-brand-sky text-brand-blue rounded-full shadow-lg flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6 inline-flex rounded-md bg-white p-1">
              <img src="/Plastocore%20name%20logo%20UPDATE.png" alt="Plastocore" loading="lazy" decoding="async" width="220" height="48" className="w-[220px] h-12 object-contain" />
            </div>
            <p className="text-sm leading-relaxed">
              Manufacturer of wire harnesses, cable assemblies, connectors and precision injection moulded components since 2018.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <button onClick={() => navigate(`/products/${cat.slug}`)} className="text-sm hover:text-brand-sky text-left">
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Capabilities', href: '#capabilities' },
                { name: 'Industries', href: '#industries' },
                { name: 'Quality & Testing', href: '#quality' },
                { name: 'Enquire Now', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button onClick={() => go(link.href)} className="text-sm hover:text-brand-sky">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-brand-sky mt-1" size={18} />
                <p className="text-sm">{companyInfo.addressLines.join(', ')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-brand-sky" size={18} />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-sm hover:text-brand-sky">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-brand-sky" size={18} />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-brand-sky">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            {certifications.slice(0, 4).map((cert) => (
              <div key={cert.name} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-sky rounded-full"></div>
                <span>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Plastocore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
