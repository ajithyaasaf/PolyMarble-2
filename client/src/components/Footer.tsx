import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-rich-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-metallic-gold to-yellow-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-rich-black" />
              </div>
              <span className="text-lg font-bold">POLYMARBLES 3D</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming spaces with innovative 3D marble solutions. Where traditional craftsmanship meets cutting-edge technology.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Polymarbles 3D. All rights reserved.
            </div>
          </div>

          <div>
            <h6 className="text-white font-medium mb-4">Services</h6>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-metallic-gold transition-colors">3D Visualization</a></li>
              <li><a href="#" className="hover:text-metallic-gold transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-metallic-gold transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-metallic-gold transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-medium mb-4">Company</h6>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-metallic-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-metallic-gold transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-metallic-gold transition-colors">News</a></li>
              <li><a href="#" className="hover:text-metallic-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
