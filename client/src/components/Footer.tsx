import { Shield, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-warm-cream border-t border-light-silver">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-brown to-brand-peach flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5 text-pure-white" />
              </div>
              <span className="text-lg font-bold text-brand-brown">POLYMARBLE SHEET INDIA</span>
            </div>
            <p className="text-cool-grey mb-6 max-w-md">
              9 Years of Excellence Since 2017. Leading manufacturer of premium polymarble sheets, combining innovative technology with timeless aesthetics.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h6 className="text-brand-brown font-bold mb-3">Stay Polymarble-Informed</h6>
              <div className="flex gap-2 mb-2">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-pure-white border-light-silver text-deep-charcoal flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button className="bg-brand-peach text-deep-charcoal hover:bg-brand-brown hover:text-pure-white font-bold transition-colors" data-testid="button-newsletter-subscribe">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-cool-grey">
                Get our 12-page Guide: How to Choose the Perfect Polymarble Finish.
              </p>
            </div>

            {/* Local Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-cool-grey">
                <MapPin className="w-4 h-4" />
                <span>No:46, Sivagangai Main Road, Melamadai, Gomathipuram, Madurai - 625020</span>
              </div>
              <div className="flex items-center gap-2 text-cool-grey">
                <Phone className="w-4 h-4 text-brand-peach" />
                <a href="tel:+919842106768" className="hover:text-brand-peach transition-colors">
                  +91 98421 06768
                </a>
              </div>
              <div className="flex items-center gap-2 text-cool-grey">
                <Mail className="w-4 h-4 text-brand-brown" />
                <a href="mailto:polymarblesheet@gmail.com" className="hover:text-brand-brown transition-colors">
                  polymarblesheet@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-cool-grey">
                <Instagram className="w-4 h-4 text-brand-teal" />
                <a href="https://www.instagram.com/polymarblesheet_india" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors">
                  @polymarblesheet_india
                </a>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-brand-brown font-bold mb-4">Services</h6>
            <ul className="space-y-2 text-cool-grey">
              <li><a href="#" className="hover:text-brand-peach transition-colors">Residential Installation</a></li>
              <li><a href="#" className="hover:text-brand-brown transition-colors">Commercial Projects</a></li>
              <li><a href="#" className="hover:text-brand-peach transition-colors">Custom Patterns</a></li>
              <li><a href="#" className="hover:text-brand-brown transition-colors">Maintenance Support</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-brand-brown font-bold mb-4">Company</h6>
            <ul className="space-y-2 text-cool-grey">
              <li><a href="#about" className="hover:text-brand-peach transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-brand-brown transition-colors">Case Studies</a></li>
              <li><a href="#gallery" className="hover:text-brand-teal transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-peach transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-light-silver mt-8 pt-8 text-center">
          <div className="text-sm text-cool-grey">
            © 2025 Polymarble Sheet India. All rights reserved. | Chennai Office: Dr. Kannan Tower, Arcot Road, Porur - 116
          </div>
        </div>
      </div>
    </footer>
  );
}
