import { Shield, Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-rich-black via-dark-forest to-rich-black text-pure-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-metallic-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-metallic-gold to-brand-teal flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-pure-white" />
              </div>
              <div>
                <div className="text-xs text-metallic-gold uppercase tracking-wider font-medium">Premium</div>
                <div className="text-2xl font-bold">Polymarbles</div>
              </div>
            </div>
            
            <p className="text-slate-grey mb-8 text-lg leading-relaxed">
              9 Years of Excellence Since 2017. Leading manufacturer of premium
              polymarble sheets, combining innovative technology with timeless
              aesthetics for residential and commercial spaces.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-dark-forest/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20">
              <h6 className="text-metallic-gold font-bold mb-3 text-lg flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Stay Updated
              </h6>
              <p className="text-slate-grey text-sm mb-4">
                Get our 12-page guide on choosing the perfect polymarble finish + exclusive offers
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-rich-black/50 border-metallic-gold/30 text-pure-white placeholder:text-slate-grey flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button className="bg-gradient-to-r from-metallic-gold to-brand-teal text-rich-black hover:shadow-lg hover:shadow-metallic-gold/50 font-bold" data-testid="button-subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h6 className="text-metallic-gold font-bold mb-6 text-lg">Quick Links</h6>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Gallery", href: "/gallery" },
                { label: "Inspiration", href: "/inspiration" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-grey hover:text-metallic-gold transition-colors flex items-center gap-2 group"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h6 className="text-metallic-gold font-bold mb-6 text-lg">Our Services</h6>
            <ul className="space-y-3 text-slate-grey">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold mt-2" />
                <span>Residential Installation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold mt-2" />
                <span>Commercial Projects</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold mt-2" />
                <span>Custom Patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold mt-2" />
                <span>Maintenance Support</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold mt-2" />
                <span>Free Consultation</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h6 className="text-metallic-gold font-bold mb-6 text-lg">Get In Touch</h6>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-metallic-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-metallic-gold/20 transition-colors">
                  <MapPin className="w-5 h-5 text-metallic-gold" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-pure-white mb-1">Madurai Office</div>
                  <div className="text-slate-grey">
                    No:46, Sivagangai Main Road<br />
                    Melamadai, Gomathipuram<br />
                    Madurai - 625020
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-metallic-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-metallic-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-metallic-gold" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-pure-white mb-1">Call Us</div>
                  <a
                    href="tel:+919842106768"
                    className="text-metallic-gold hover:text-brand-teal transition-colors font-medium"
                  >
                    +91 98421 06768
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-metallic-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-metallic-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-metallic-gold" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-pure-white mb-1">Email Us</div>
                  <a
                    href="mailto:polymarblesheet@gmail.com"
                    className="text-metallic-gold hover:text-brand-teal transition-colors"
                  >
                    polymarblesheet@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-metallic-gold/20">
                <div className="text-sm font-medium text-pure-white mb-3">Follow Us</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/polymarblesheet_india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-metallic-gold/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-metallic-gold hover:to-brand-teal transition-all group"
                    aria-label="Instagram"
                    data-testid="link-social-instagram"
                  >
                    <Instagram className="w-5 h-5 text-metallic-gold group-hover:text-rich-black transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-metallic-gold/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-metallic-gold hover:to-brand-teal transition-all group"
                    aria-label="Facebook"
                    data-testid="link-social-facebook"
                  >
                    <Facebook className="w-5 h-5 text-metallic-gold group-hover:text-rich-black transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-metallic-gold/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-metallic-gold hover:to-brand-teal transition-all group"
                    aria-label="Youtube"
                    data-testid="link-social-youtube"
                  >
                    <Youtube className="w-5 h-5 text-metallic-gold group-hover:text-rich-black transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-metallic-gold/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-grey text-center md:text-left">
              © 2025 Polymarble Sheet India. All rights reserved.
            </div>
            <div className="text-sm text-slate-grey text-center md:text-right">
              Chennai Office: Dr. Kannan Tower, Arcot Road, Opp to Naidu Hall, Porur - 116
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="text-xs text-slate-grey">
              Designed & Developed by{" "}
              <a
                href="https://www.godivatech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-metallic-gold font-medium hover:text-brand-teal transition-colors"
              >
                GodivaTech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
