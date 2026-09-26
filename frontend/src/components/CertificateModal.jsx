import React, { useEffect } from 'react';
import { X, ExternalLink, Download, Award } from 'lucide-react';
import { Button } from './ui/button';

export const CertificateModal = ({ isOpen, certificate, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[92vh] sm:h-[88vh] flex flex-col overflow-hidden relative border border-brand-line animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-brand-line bg-brand-muted flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-sky flex items-center justify-center text-brand-blue flex-shrink-0">
              <Award size={20} />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-base sm:text-lg text-brand-blue truncate">{certificate.name}</h3>
              <p className="text-xs text-brand-grey truncate">{certificate.detail}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-brand-sky text-brand-grey hover:text-brand-blue flex items-center justify-center transition-colors shadow-sm border border-brand-line flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / PDF Viewer */}
        <div className="p-2 sm:p-6 flex-1 overflow-y-auto bg-gray-100 flex flex-col items-center justify-center relative" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="w-full h-full bg-white rounded-xl shadow-inner border border-brand-line overflow-hidden relative flex flex-col">
            <iframe
              src={`${certificate.file}#view=FitH`}
              title={certificate.name}
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-t border-brand-line bg-white gap-3 flex-shrink-0">
          <div className="text-xs text-brand-grey hidden sm:block">
            Official Plastocore Compliance Document
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-brand-blue bg-brand-sky hover:bg-brand-sky/80 rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              Open New Tab
            </a>
            {/* <a
              href={certificate.file}
              download
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg transition-colors shadow-sm"
            >
              <Download size={16} />
              Download PDF
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
