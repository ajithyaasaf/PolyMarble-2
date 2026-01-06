import { useState } from "react";
import { Calculator, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function QuickQuote() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className={`bg-pure-white/95 backdrop-blur-sm border border-brand-teal/20 rounded-l-2xl transition-all duration-300 shadow-lg ${isExpanded ? 'w-80' : 'w-16'
        }`}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-brand-teal text-pure-white p-2 rounded-l-lg hover:bg-brand-teal/90 transition-all"
        >
          {isExpanded ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Collapsed Icon */}
        {!isExpanded && (
          <div className="p-4 flex flex-col items-center">
            <Calculator className="w-6 h-6 text-brand-teal mb-2" />
            Quick Enquiry
          </div>
        )}

        {/* Expanded Form */}
        {isExpanded && (
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5 text-brand-teal" />
              <h4 className="text-lg font-bold text-brand-teal">Quick Enquiry</h4>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="sqft" className="text-deep-charcoal text-sm">
                  Area (sq.ft.)
                </Label>
                <Input
                  id="sqft"
                  type="number"
                  placeholder="Enter square feet"
                  className="bg-pure-white border-light-silver text-deep-charcoal mt-1"
                />
              </div>

              <div>
                <Label htmlFor="contact" className="text-deep-charcoal text-sm">
                  Contact (Email/Phone)
                </Label>
                <Input
                  id="contact"
                  placeholder="your@email.com or phone"
                  className="bg-pure-white border-light-silver text-deep-charcoal mt-1"
                />
              </div>

              <Button className="w-full bg-brand-teal text-pure-white hover:bg-brand-teal/90 font-bold">
                Get Pricing
              </Button>

              <div className="text-xs text-cool-grey text-center">
                Competitive pricing available
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}