import { Shield, Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
              <div className="bg-white rounded-xl p-3 inline-block">
                <img
                  src="/logo.png"
                  alt="Polymarble"
                  className="h-24 w-auto"
                  data-testid="img-footer-logo"
                />
              </div>
            </div>

            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              10 Years of Excellence Since 2017. Leading manufacturer of premium
              polymarble sheets, combining innovative technology with timeless
              aesthetics for residential and commercial spaces.
            </p>

            {/* Social Media - Repositioned here to fill space */}
            <div className="pt-6 border-t border-white/10 mt-2">
              <h6 className="text-brand-peach font-bold text-xs uppercase tracking-[0.2em] mb-4">Follow Our Journey</h6>
              <div className="flex items-center gap-3">
                {[
                  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/polymarblesheet_india?igsh=MXZoczNwcWxleWl6bw==" },
                  { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/polymarblesheets" },
                  { icon: <Youtube className="w-5 h-5" />, label: "Youtube", href: "https://youtube.com/@polymarblesheet3386?si=XSU8vu8ighly_sca" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-peach hover:text-white transition-all duration-300 group shadow-lg border border-white/5 hover:border-brand-peach/50"
                    aria-label={social.label}
                  >
                    <span className="text-white/70 group-hover:text-white group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
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
