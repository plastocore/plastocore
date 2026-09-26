import React, { createContext, useContext, useState } from 'react';
import { CertificateModal } from '../components/CertificateModal';

const CertificateContext = createContext(null);

export const CertificateProvider = ({ children }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCertificate = (cert) => {
    setSelectedCert(cert);
    setIsOpen(true);
  };

  const closeCertificate = () => {
    setIsOpen(false);
    setSelectedCert(null);
  };

  return (
    <CertificateContext.Provider value={{ openCertificate }}>
      {children}
      <CertificateModal
        isOpen={isOpen}
        certificate={selectedCert}
        onClose={closeCertificate}
      />
    </CertificateContext.Provider>
  );
};

export const useCertificate = () => useContext(CertificateContext);
