import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { companyInfo } from '../data/mockData';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Industries', href: '#industries' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const go = () => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(go, 120);
    } else {
      go();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white border-b border-brand-line py-2 px-4 text-sm text-brand-grey" style={{backgroundColor: "rgb(244 245 246 / var(--tw-bg-opacity, 1))"}}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
              <Phone size={14} className="text-brand-blue" />
              <span>{companyInfo.phone}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="hidden md:flex items-center gap-2 hover:text-brand-blue transition-colors">
              <Mail size={14} className="text-brand-blue" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
          <div className="text-xs">GST: {companyInfo.gst}</div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-sm border-b border-brand-line' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a
              href="/"
              className="flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              <img src="/logo.jpg" alt="Plastocore Logo" loading="lazy" decoding="async" width="48" height="48" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-brand-blue">Plastocore</h1>
                <p className="text-xs text-brand-grey">Quality. Precision. Reliability.</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-brand-grey hover:text-brand-blue font-medium transition-colors relative group text-sm"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button onClick={(e) => scrollToSection(e, '#contact')} className="bg-brand-blue hover:bg-brand-dark text-white shadow-sm">
                Enquire Now
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-brand-grey hover:text-brand-blue transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-brand-line">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-brand-grey hover:text-brand-blue font-medium py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button onClick={(e) => scrollToSection(e, '#contact')} className="bg-brand-blue hover:bg-brand-dark text-white w-full">
                Enquire Now
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
