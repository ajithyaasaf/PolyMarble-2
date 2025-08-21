import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEOHead({
  title = "Polymarble Sheets India | Premium Interior & Exterior Solutions | Tamil Nadu",
  description = "Transform your spaces with premium polymarble sheets. 80% less cost than natural marble. Fire-resistant, water-proof, 15+ year warranty. Serving Tamil Nadu since 2017.",
  keywords = "polymarble sheets, marble sheets, interior design, exterior cladding, fire resistant sheets, water resistant sheets, Tamil Nadu, Madurai, Chennai, affordable marble",
  canonicalUrl = "https://polymarblesheets.com",
  ogImage = "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
  ogType = "website"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Polymarble Sheets India');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    
    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:site_name', 'Polymarble Sheets India', 'property');
    updateMetaTag('og:locale', 'en_IN', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    
    // Business-specific structured data
    updateStructuredData();
    
    // Canonical URL
    updateCanonicalUrl(canonicalUrl);
    
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  };

  const updateStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Polymarble Sheets India",
      "description": "Premium polymarble sheets manufacturer and supplier in Tamil Nadu",
      "url": "https://polymarblesheets.com",
      "telephone": "+91-98421-06768",
      "email": "polymarblesheet@gmail.com",
      "foundingDate": "2017",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No:46, Sivagangai Main Road, Melamadai, Gomathipuram",
        "addressLocality": "Madurai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "625020",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.9252",
        "longitude": "78.1198"
      },
      "openingHours": "Mo-Sa 09:00-19:00",
      "priceRange": "₹40-55 per sq.ft",
      "areaServed": [
        {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        {
          "@type": "Country", 
          "name": "Malaysia"
        },
        {
          "@type": "Country",
          "name": "United States"
        }
      ],
      "serviceType": [
        "Interior Design Materials",
        "Exterior Cladding",
        "Polymarble Sheets",
        "Fire Resistant Materials"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Polymarble Sheet Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "High-Gloss Polymarble Sheets",
              "description": "Premium high-gloss finish polymarble sheets"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Product",
              "name": "Woody Panel Sheets",
              "description": "Natural wood texture polymarble sheets"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "2450",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/share/19aJmaJ7Nc/",
        "https://www.instagram.com/polymarblesheet_india",
        "https://www.youtube.com/@polymarblesheet3386"
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  };

  return null; // This component doesn't render anything
}

export const generatePageSEO = (pageName: string, customDescription?: string) => {
  const baseTitle = "Polymarble Sheets India";
  const pageTitle = `${pageName} | ${baseTitle}`;
  
  const descriptions: Record<string, string> = {
    'Products': 'Explore our complete range of polymarble sheets - High-Gloss, Woody Panels, Solid Colors, Textured Finishes, and Mirror Sheets. Premium quality at affordable prices.',
    'Inspiration': 'Get inspired with our portfolio of stunning polymarble installations across Tamil Nadu. See how we transform spaces with premium design solutions.',
    'Support': 'Expert support for your polymarble projects. DIY guides, professional resources, technical FAQs, and direct access to our engineering team.',
    'Chennai': 'Lightweight stone walling solutions in Chennai. Premium polymarble sheets with same-day installation. Serving Chennai and surrounding areas.',
    'Madurai': 'Marble wall sheet specialists in Madurai. Transform your space with fire-resistant, water-proof polymarble sheets. Local expertise since 2017.'
  };

  return {
    title: pageTitle,
    description: customDescription || descriptions[pageName] || `${pageName} - Premium polymarble sheets and interior solutions in Tamil Nadu. Quality, affordability, and expert installation.`
  };
};