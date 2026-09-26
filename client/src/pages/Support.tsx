import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnhancedContact from "@/components/EnhancedContact";
import SEOHead from "@/components/SEOHead";

export default function Contact() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal">
      <SEOHead 
        title="Contact & Showroom Locations | Madurai & Chennai | Polymarble Sheets India"
        description="Contact Polymarble Sheets India. Visit our Madurai head office or Chennai showroom. Call +91 98421 06768 for instant quotes, free sample kits, and dealership inquiries."
        canonicalUrl="https://www.polymarblesheet.in/contact"
        breadcrumbs={[
          { name: "Home", url: "https://www.polymarblesheet.in/" },
          { name: "Contact Us", url: "https://www.polymarblesheet.in/contact" }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Polymarble Sheets India",
          "description": "Reach our engineering and sales teams in Madurai and Chennai for quotes, product samples, and dealership inquiries.",
          "url": "https://www.polymarblesheet.in/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Polymarble Sheets India",
            "telephone": "+91-98421-06768",
            "email": "polymarblesheet@gmail.com"
          }
        }}
      />
      <Header />
      <main className="pt-20">
        <EnhancedContact />
      </main>
      <Footer />
    </div>
  );
}
