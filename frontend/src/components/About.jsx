import React from 'react';
import { Building2, Award, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { companyInfo, customers, certifications } from '../data/mockData';

const CustomerLogo = ({ customer }) => {
  const [hasLogo, setHasLogo] = React.useState(true);
  const initials = customer.name
    .split(/\s+/)
    .filter((word) => /[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return hasLogo ? (
    <img
      src={`https://www.google.com/s2/favicons?domain=${customer.domain}&sz=128`}
      alt={`${customer.name} logo`}
      loading="lazy"
      decoding="async"
      width="40"
      height="40"
      className="w-10 h-10 object-contain rounded-md"
      onError={() => setHasLogo(false)}
    />
  ) : (
    <span className="w-10 h-10 rounded-md bg-brand-sky text-brand-blue font-bold text-sm flex items-center justify-center" aria-hidden="true">
      {initials}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-sky px-4 py-2 rounded-full mb-6">
              <Building2 className="text-brand-blue" size={18} />
              <span className="text-brand-blue font-medium text-sm">About Plastocore</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              Your Trusted Manufacturing Partner
            </h2>
            <div className="space-y-4 text-lg text-brand-grey leading-relaxed mb-8">
              <p>
                Plastocore is a leading manufacturer of USB cables, OTG cables, data cables, power cables, and customized wire harness solutions, established in <strong className="text-brand-blue">2018</strong> in Ahmedabad.
              </p>
              <p>
                With a skilled team and in-house manufacturing facility, we ensure high-quality, precision products with timely delivery. We specialize in customized cable design, assembly, connectorization, and complete wiring solutions tailored to your requirements.
              </p>
              <p>
                We are ISO 9001:2015 certified, along with GST, MSME and IEC registrations. Under the leadership of <strong className="text-brand-blue">Mr. Dharmendra Mewara (Proprietor)</strong>, we build long-term partnerships by delivering the right solution, at the right quality, and at the right time.
              </p>
            </div>

            <div className="bg-brand-muted rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-brand-blue mb-4">Certifications & Compliance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-2">
                    <Award className="text-brand-blue flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-brand-grey">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="relative mb-8 rounded-2xl overflow-hidden border border-brand-line">
              <img src="/images/injection-moulding.jpg" alt="Plastocore manufacturing" loading="lazy" decoding="async" width="640" height="320" className="w-full h-80 object-cover" />
            </div>
            <Card className="border-brand-line bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-brand-blue mb-4">Works & Office</h3>
                <div className="space-y-3 text-sm text-brand-grey">
                  <div className="flex items-start gap-3">
                    <MapPin className="flex-shrink-0 mt-1 text-brand-blue" size={18} />
                    <p>{companyInfo.addressLines.join(', ')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="flex-shrink-0 text-brand-blue" size={18} />
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="hover:text-brand-blue">
                      {companyInfo.phone} · {companyInfo.phoneSecondary}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="flex-shrink-0 text-brand-blue" size={18} />
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-brand-blue">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 overflow-hidden" aria-label="Our valued customers">
          <h3 className="text-2xl font-bold text-brand-blue mb-6 text-center">Our Valued Customers</h3>
          <div className="customer-marquee">
            <div className="customer-marquee-track">
              {[...customers, ...customers].map((customer, index) => (
                <div
                  key={`${customer.name}-${index}`}
                  className="bg-brand-muted border border-brand-line rounded-lg px-4 py-4 flex flex-col items-center justify-center gap-3 text-center text-sm text-brand-grey customer-logo-card"
                  aria-hidden={index >= customers.length}
                >
                  <CustomerLogo customer={customer} />
                  <span>{customer.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
