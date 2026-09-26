import { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, any>;
}

export default function SEOHead({
  title = "Polymarble Sheets India | Premium PVC Marble Wall Panels & Cladding",
  description = "Transform your spaces with premium polymarble sheets. 80% less cost than natural marble, 100% waterproof, fire-resistant, and 15+ years durability. Madurai & Chennai showrooms.",
  keywords = "polymarble sheets, marble wall sheets, PVC marble panels, interior cladding, exterior wall panels, fire resistant sheets, waterproof marble, Tamil Nadu, Madurai, Chennai",
  canonicalUrl = "https://www.polymarblesheet.in",
  ogImage = "https://www.polymarblesheet.in/logo.png",
  ogType = "website",
  noindex = false,
  breadcrumbs,
  schema
}: SEOHeadProps) {

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper to Update or Create Meta Tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 3. Helper to Update or Create Link Tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 4. Update Core Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Polymarble Sheets India');

    // Handle indexability (Crucial for 404s & Indexation in 2026 GSC)
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // 5. Open Graph Meta Tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:site_name', 'Polymarble Sheets India', 'property');
    updateMetaTag('og:locale', 'en_IN', 'property');

    // 6. Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');

    // 7. Canonical Link
    if (!noindex) {
      updateLinkTag('canonical', canonicalUrl);
    } else {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.remove();
      }
    }

    // 8. Dynamic Page Structured Data & BreadcrumbList
    const pageSchemaId = 'dynamic-page-schema';
    let scriptTag = document.getElementById(pageSchemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = pageSchemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemasToInject: any[] = [];

    // Optional custom page schema
    if (schema) {
      schemasToInject.push(schema);
    }

    // BreadcrumbList Schema if breadcrumbs are provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }

    if (schemasToInject.length === 1) {
      scriptTag.textContent = JSON.stringify(schemasToInject[0]);
    } else if (schemasToInject.length > 1) {
      scriptTag.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schemasToInject
      });
    } else {
      scriptTag.textContent = '';
    }

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, noindex, breadcrumbs, schema]);

  return null;
}