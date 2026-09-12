import React, { useState } from 'react';
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { companyInfo } from '../data/mockData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const API_URL = process.env.REACT_APP_BACKEND_URL || (
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? 'http://localhost:8000'
          : ''
      );
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Failed to submit form');
      const data = await response.json();
      setIsSubmitted(true);
      toast.success(data.message || 'Enquiry sent successfully. We will contact you soon.');
      setTimeout(() => {
        setFormData({ name: '', company: '', email: '', phone: '', productInterest: '', quantity: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error('Failed to send request. Please try again or call us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-sky px-4 py-2 rounded-full mb-4">
            <Send className="text-brand-blue" size={18} />
            <span className="text-brand-blue font-medium text-sm">Contact Us / Enquire Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Let's Discuss Your Requirement</h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Looking for a reliable manufacturing partner for wire harnesses, cable assemblies, connectorization, injection moulding or customized assemblies? Share your drawing, BOM, specifications or project requirements with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-brand-line p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-brand-sky rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-brand-blue" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Thank You</h3>
                  <p className="text-brand-grey">Your enquiry has been received. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-grey mb-2">Name *</label>
                      <Input name="name" value={formData.name} onChange={handleChange} required className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-grey mb-2">Company Name</label>
                      <Input name="company" value={formData.company} onChange={handleChange} className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-grey mb-2">Email *</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleChange} required className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-grey mb-2">Phone Number *</label>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-grey mb-2">Product / Requirement</label>
                      <Input name="productInterest" value={formData.productInterest} onChange={handleChange} className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-grey mb-2">Quantity</label>
                      <Input name="quantity" value={formData.quantity} onChange={handleChange} className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-grey mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                      placeholder="Share drawing details, BOM, specifications or application notes."
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-blue hover:bg-brand-dark text-white h-12 text-lg">
                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-muted border border-brand-line rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-brand-blue mb-1">Location</p>
                    <p className="text-sm text-brand-grey">{companyInfo.addressLines.join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-brand-blue mb-1">Sales Enquiries</p>
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-sm text-brand-grey hover:text-brand-blue block">{companyInfo.phone}</a>
                    <a href={`tel:${companyInfo.phoneSecondary.replace(/\s/g, '')}`} className="text-sm text-brand-grey hover:text-brand-blue block">{companyInfo.phoneSecondary}</a>
                    <p className="text-xs text-brand-grey mt-2">Technical / proprietor: {companyInfo.proprietorPhone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-brand-blue mb-1">Email</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-sm text-brand-grey hover:text-brand-blue break-all">{companyInfo.email}</a>
                    <a href={`mailto:${companyInfo.salesEmail}`} className="text-sm text-brand-grey hover:text-brand-blue break-all block">{companyInfo.salesEmail}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-brand-blue mb-1">Business Hours</p>
                    <p className="text-sm text-brand-grey">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
