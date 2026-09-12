import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../data/mockData';

export const SEO = ({
  title = "Plastocore | Wire Harnesses, Cable Assemblies & Injection Moulding",
  description = "Plastocore manufactures wire harnesses, cable assemblies, connectors and precision injection moulded components. ISO 9001:2015 certified. Rakanpur, Gandhinagar, Gujarat.",
  keywords = "wire harness manufacturer, cable assemblies, USB cables, circular connectors, injection moulding, Gandhinagar, Gujarat, Plastocore",
  ogImage = "/logo.jpg",
  url = "https://www.plastocore.com"
}) => {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Plastocore",
    description: "Manufacturer of wire harnesses, cable assemblies, connectors and precision injection moulded components",
    url,
    logo: ogImage,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "P/843, Om Industrial Estate, Sola-Santej Road, Rakanpur",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      postalCode: "382721",
      addressCountry: "IN"
    },
    foundingDate: "2018",
    founders: [{ "@type": "Person", name: "Dharmendra Mewara" }]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Plastocore" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="theme-color" content="#2872AF" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Gandhinagar" />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
    </Helmet>
  );
};
