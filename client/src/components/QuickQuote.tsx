import { useState } from "react";
import { Calculator, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function QuickQuote() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className={`bg-rich-black/90 backdrop-blur-sm border border-metallic-gold/20 rounded-l-2xl transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-16'
      }`}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-metallic-gold text-rich-black p-2 rounded-l-lg hover:bg-yellow-400 transition-all"
        >
          {isExpanded ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Collapsed Icon */}
        {!isExpanded && (
          <div className="p-4 flex flex-col items-center">
            <Calculator className="w-6 h-6 text-metallic-gold mb-2" />
            <div className="text-xs text-gray-300 text-center writing-mode-vertical">
              Quick Quote
            </div>
          </div>
        )}

        {/* Expanded Form */}
        {isExpanded && (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-metallic-gold" />
              <h4 className="text-lg font-bold text-metallic-gold">Quick Quote</h4>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="sqft" className="text-white text-sm">
                  Area (sq.ft.)
                </Label>
                <Input
                  id="sqft"
                  type="number"
                  placeholder="Enter square feet"
                  className="bg-slate-800 border-slate-600 text-white mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="contact" className="text-white text-sm">
                  Contact (Email/Phone)
                </Label>
                <Input
                  id="contact"
                  placeholder="your@email.com or phone"
                  className="bg-slate-800 border-slate-600 text-white mt-1"
                />
              </div>
              
              <Button className="w-full bg-metallic-gold text-rich-black hover:bg-yellow-400 font-bold">
                Get Instant Quote
              </Button>
              
              <div className="text-xs text-gray-400 text-center">
                ₹45/sq.ft. starting price
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}