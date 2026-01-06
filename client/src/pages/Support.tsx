import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import EnhancedContact from "@/components/EnhancedContact";

export default function Contact() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal">
      <Header />
      <main className="pt-20">
        <EnhancedContact />
      </main>
      <Footer />
      <QuickQuote />
    </div>
  );
}
