import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Palette, Layers, Sparkles } from "lucide-react";

export default function Products() {
  useScrollReveal();

  const [selectedPattern, setSelectedPattern] = useState("calacatta");
  const [selectedThickness, setSelectedThickness] = useState("12");
  const [selectedFinish, setSelectedFinish] = useState("matt");

  const patterns = [
    { id: "calacatta", name: "Calacatta Gold", image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" },
    { id: "noir", name: "Noir Elegance", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" },
    { id: "verde", name: "Verde Luxe", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" },
    { id: "emperador", name: "Emperador Brown", image: "https://images.unsplash.com/photo-1615529162924-f8c8b4c7b623?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" },
  ];

  const materials = [
    {
      name: "Premium Calacatta",
      size: "10×5 ft",
      price: "₹45/sq.ft.⁺",
      features: ["Fire-retardant", "Moisture-proof", "UV resistant", "Anti-bacterial"],
      thickness: "10-15mm"
    },
    {
      name: "Noir Collection", 
      size: "10×5 ft",
      price: "₹52/sq.ft.⁺",
      features: ["Fire-retardant", "Moisture-proof", "Scratch resistant", "Easy clean"],
      thickness: "12-15mm"
    },
    {
      name: "Verde Series",
      size: "10×5 ft", 
      price: "₹48/sq.ft.⁺",
      features: ["Fire-retardant", "Moisture-proof", "Weather resistant", "Fade proof"],
      thickness: "10-15mm"
    },
    {
      name: "Emperador Elite",
      size: "10×5 ft",
      price: "₹55/sq.ft.⁺", 
      features: ["Fire-retardant", "Moisture-proof", "Impact resistant", "Thermal stable"],
      thickness: "12-15mm"
    }
  ];

  const currentPattern = patterns.find(p => p.id === selectedPattern);

  const playClinkSound = () => {
    console.log("Clink sound on configurator");
  };

  return (
    <div className="relative min-h-screen bg-rich-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-rich-black to-dark-forest">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 reveal-up">
                Products & <span className="text-metallic-gold text-shimmer">Configurator</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto reveal-fade">
                Design your perfect polymarble solution with our interactive configurator. 
                Visualize, customize, and order your premium polymer stone sheets.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Configurator */}
        <section className="py-20 bg-dark-forest">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Live Preview */}
              <div className="reveal-left">
                <h3 className="text-3xl font-bold text-metallic-gold mb-6">Live Preview</h3>
                <div className="relative bg-rich-black/50 backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20">
                  <div className="aspect-square rounded-xl overflow-hidden mb-6">
                    <img
                      src={currentPattern?.image}
                      alt={currentPattern?.name}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      style={{
                        filter: selectedFinish === 'gloss' ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.95)'
                      }}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Pattern:</span>
                      <span className="text-white font-medium">{currentPattern?.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Thickness:</span>
                      <span className="text-white font-medium">{selectedThickness}mm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Finish:</span>
                      <span className="text-white font-medium capitalize">{selectedFinish}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Configuration Controls */}
              <div className="reveal-right">
                <h3 className="text-3xl font-bold text-metallic-gold mb-6">Customize Your Sheet</h3>
                
                <div className="space-y-8">
                  {/* Pattern Selection */}
                  <div>
                    <label className="block text-lg font-medium text-white mb-4">
                      <Palette className="w-5 h-5 inline mr-2" />
                      Pattern
                    </label>
                    <Select value={selectedPattern} onValueChange={setSelectedPattern}>
                      <SelectTrigger className="w-full bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Select a pattern" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {patterns.map((pattern) => (
                          <SelectItem key={pattern.id} value={pattern.id} className="text-white">
                            {pattern.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Thickness Selection */}
                  <div>
                    <label className="block text-lg font-medium text-white mb-4">
                      <Layers className="w-5 h-5 inline mr-2" />
                      Thickness
                    </label>
                    <Select value={selectedThickness} onValueChange={setSelectedThickness}>
                      <SelectTrigger className="w-full bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Select thickness" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="10" className="text-white">10mm</SelectItem>
                        <SelectItem value="12" className="text-white">12mm</SelectItem>
                        <SelectItem value="15" className="text-white">15mm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Finish Selection */}
                  <div>
                    <label className="block text-lg font-medium text-white mb-4">
                      <Sparkles className="w-5 h-5 inline mr-2" />
                      Finish
                    </label>
                    <Select value={selectedFinish} onValueChange={setSelectedFinish}>
                      <SelectTrigger className="w-full bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Select finish" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="matt" className="text-white">Matt</SelectItem>
                        <SelectItem value="gloss" className="text-white">Gloss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button 
                      onClick={playClinkSound}
                      className="flex-1 bg-metallic-gold text-rich-black hover:bg-yellow-400 font-bold py-3"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Spec Sheet
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-rich-black font-bold py-3"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      View Installation Guide
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Specs Hub */}
        <section className="py-20 bg-rich-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
                Material <span className="text-metallic-gold text-shimmer">Specifications</span>
              </h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto reveal-fade">
                Comprehensive technical specifications for all our polymarble sheet collections.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-dark-forest/50 backdrop-blur-sm rounded-2xl border border-metallic-gold/20">
                <thead>
                  <tr className="border-b border-metallic-gold/20">
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Material</th>
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Size</th>
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Price</th>
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Thickness</th>
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Features</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material, index) => (
                    <tr key={index} className="border-b border-slate-700/50 hover:bg-metallic-gold/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{material.name}</td>
                      <td className="px-6 py-4 text-gray-300">{material.size}</td>
                      <td className="px-6 py-4 text-green-400 font-bold">{material.price}</td>
                      <td className="px-6 py-4 text-gray-300">{material.thickness}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {material.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-metallic-gold/20 text-metallic-gold text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuickQuote />
    </div>
  );
}