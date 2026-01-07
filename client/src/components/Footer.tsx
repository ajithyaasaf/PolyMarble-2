import { Shield, Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative bg-deep-charcoal text-pure-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-peach rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Polymarble"
                className="h-24 w-auto"
                data-testid="img-footer-logo"
              />
            </div>

            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              10 Years of Excellence Since 2017. Leading manufacturer of premium
              polymarble sheets, combining innovative technology with timeless
              aesthetics for residential and commercial spaces.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h6 className="text-brand-peach font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Newsletter
              </h6>
              <p className="text-white/70 text-sm">
                Get exclusive offers and design tips
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 flex-1 h-11"
                  data-testid="input-newsletter-email"
                />
                <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold" data-testid="button-subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h6 className="text-brand-peach font-bold mb-6 text-lg">Quick Links</h6>
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
                    className="text-white/90 hover:text-brand-peach transition-colors flex items-center gap-2 group"
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
            <h6 className="text-brand-peach font-bold mb-6 text-lg">Our Services</h6>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-peach mt-2" />
                <span>Residential Installation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-peach mt-2" />
                <span>Commercial Projects</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-peach mt-2" />
                <span>Custom Patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-peach mt-2" />
                <span>Maintenance Support</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-peach mt-2" />
                <span>Free Consultation</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h6 className="text-brand-peach font-bold mb-6 text-lg">Get In Touch</h6>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-brand-peach/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-peach/20 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-peach" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-pure-white mb-1">Madurai Office</div>
                  <div className="text-white/90">
                    No:46, Sivagangai Main Road<br />
                    Melamadai, Gomathipuram<br />
                    Madurai - 625020
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-brand-peach/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-peach/20 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-peach" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-pure-white mb-1">Chennai Office</div>
                  <div className="text-white/90">
                    Dr. Kannan Tower, Arcot Road<br />
                    Opp to Naidu Hall<br />
                    Porur - 116
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-brand-peach/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-peach/20 transition-colors">
                  <Phone className="w-5 h-5 text-brand-peach" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-pure-white mb-1">Call Us</div>
                  <a
                    href="tel:+919842106768"
                    className="text-brand-peach hover:text-brand-teal transition-colors font-medium block"
                    data-testid="link-phone"
                  >
                    +91 98421 06768
                  </a>
                  <a
                    href="https://wa.me/919842126565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-brand-peach transition-colors text-sm block mt-1"
                    data-testid="link-whatsapp"
                  >
                    WhatsApp: +91 98421 26565
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-brand-peach/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-peach/20 transition-colors">
                  <Mail className="w-5 h-5 text-brand-peach" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-pure-white mb-1">Email Us</div>
                  <a
                    href="mailto:polymarblesheet@gmail.com"
                    className="text-brand-peach hover:text-brand-teal transition-colors"
                    data-testid="link-email"
                  >
                    polymarblesheet@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-brand-peach/20">
                <div className="text-sm font-medium text-pure-white mb-3">Follow Us</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/polymarblesheet_india?igsh=MXZoczNwcWxleWl6bw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-brand-peach/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-brand-peach hover:to-brand-teal transition-all group"
                    aria-label="Instagram"
                    data-testid="link-social-instagram"
                  >
                    <Instagram className="w-5 h-5 text-brand-peach group-hover:text-pure-white transition-colors" />
                  </a>
                  <a
                    href="https://www.facebook.com/polymarblesheets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-brand-peach/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-brand-peach hover:to-brand-teal transition-all group"
                    aria-label="Facebook"
                    data-testid="link-social-facebook"
                  >
                    <Facebook className="w-5 h-5 text-brand-peach group-hover:text-pure-white transition-colors" />
                  </a>
                  <a
                    href="https://youtube.com/@polymarblesheet3386?si=XSU8vu8ighly_sca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-brand-peach/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-brand-peach hover:to-brand-teal transition-all group"
                    aria-label="Youtube"
                    data-testid="link-social-youtube"
                  >
                    <Youtube className="w-5 h-5 text-brand-peach group-hover:text-pure-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-center space-y-2">
            <div className="text-sm text-white/70">
              © 2025 Polymarble Sheet India. All rights reserved.
            </div>
            <div className="text-xs text-white/40">
              Designed & Developed by{" "}
              <a
                href="https://www.godivatech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-peach hover:text-brand-teal transition-colors font-medium"
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
