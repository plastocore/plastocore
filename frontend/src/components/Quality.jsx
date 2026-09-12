import React from 'react';
import { ShieldCheck, ClipboardCheck, Factory } from 'lucide-react';

export const Quality = () => {
  const production = [
    'Prototype & Sample Development',
    'Small & Medium Batch Production',
    'High-Volume Production',
    'Repeat & Scheduled Orders',
    'Consistent Batch-to-Batch Quality',
    'Production as per Customer BOM, Drawing & Specifications'
  ];

  const testing = [
    'Electrical Testing',
    'Continuity Testing',
    'Open / Short Circuit Testing',
    'Wiring Verification',
    'Pin-to-Pin Verification',
    'Connector & Terminal Checks',
    'Visual & Dimensional Inspection',
    'Workmanship Inspection'
  ];

  const process = [
    'Incoming Material Inspection',
    'In-Process Inspection',
    'Final Inspection',
    'Batch-wise Quality Verification'
  ];

  const infrastructure = [
    { title: 'Wire Processing', items: ['Automatic / Semi-automatic Wire Cutting & Stripping', 'Wire Preparation & Processing', 'Precision Crimping', 'Terminal Insertion'] },
    { title: 'Connector Assembly', items: ['Various Connector Assembly', 'Multi-pin Connectorization', 'Terminal & Connector Insertion', 'Cable & Wire Harness Assembly'] },
    { title: 'Injection Moulding', items: ['Plastic Injection Moulding Machines', 'Precision Component Manufacturing', 'Engineering Plastic Processing', 'Custom Moulded Components'] },
    { title: 'Testing & Inspection', items: ['Electrical Continuity Testing', 'Open / Short Testing', 'Visual Inspection', 'Dimensional Inspection', 'Pull Tester', 'Final Assembly Verification'] }
  ];

  return (
    <section id="quality" className="py-20 bg-brand-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-line px-4 py-2 rounded-full mb-4">
            <ShieldCheck className="text-brand-blue" size={18} />
            <span className="text-brand-blue font-medium text-sm">Quality, Testing & Infrastructure</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Built for Consistency. Tested for Reliability.
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Plastocore is equipped to handle prototype requirements, small batches and high-volume production, with controlled manufacturing processes and testing at critical stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-brand-line rounded-2xl p-8">
            <ClipboardCheck className="text-brand-blue mb-4" />
            <h3 className="text-xl font-bold text-brand-blue mb-4">Production Quantity</h3>
            <ul className="space-y-2">
              {production.map((item) => (
                <li key={item} className="text-sm text-brand-grey">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-brand-line rounded-2xl p-8">
            <ShieldCheck className="text-brand-blue mb-4" />
            <h3 className="text-xl font-bold text-brand-blue mb-4">Testing & Inspection</h3>
            <ul className="space-y-2">
              {testing.map((item) => (
                <li key={item} className="text-sm text-brand-grey">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-brand-line rounded-2xl p-8">
            <Factory className="text-brand-blue mb-4" />
            <h3 className="text-xl font-bold text-brand-blue mb-4">Process Quality</h3>
            <ul className="space-y-2">
              {process.map((item) => (
                <li key={item} className="text-sm text-brand-grey">• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div id="infrastructure">
          <h3 className="text-3xl font-bold text-brand-blue mb-3 text-center">Built for Precision & Consistent Production</h3>
          <p className="text-center text-brand-grey mb-10 max-w-3xl mx-auto">
            An integrated manufacturing setup for wire processing, connectorization, injection moulding, assembly and testing under controlled production processes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((block) => (
              <div key={block.title} className="bg-white border border-brand-line rounded-2xl p-6">
                <h4 className="font-bold text-brand-blue mb-3">{block.title}</h4>
                <ul className="space-y-1.5">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-brand-grey">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-grey mt-10">
            Right Quantity. Consistent Quality. Reliable Performance.
          </p>
        </div>
      </div>
    </section>
  );
};
