import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Palette, Layers, Sparkles } from "lucide-react";
import highGlossImage from "@assets/generated_images/High-gloss_polymarble_product_showcase_f795ab21.png";
import woodyPanelImage from "@assets/generated_images/Woody_panel_polymarble_sheets_479b86f5.png";
import solidColorImage from "@assets/generated_images/Solid_color_polymarble_sheets_f47ccc7d.png";
import texturedImage from "@assets/generated_images/Textured_polymarble_variety_showcase_6af6050d.png";
import mirrorImage from "@assets/generated_images/Mirror_finish_polymarble_sheets_1e70ee77.png";

export default function Products() {
  useScrollReveal();

  const [selectedPattern, setSelectedPattern] = useState("high-gloss");
  const [selectedThickness, setSelectedThickness] = useState("12");
  const [selectedFinish, setSelectedFinish] = useState("matt");

  const patterns = [
    { id: "high-gloss", name: "High-Gloss Premium", image: highGlossImage },
    { id: "woody-panels", name: "Woody Panels", image: woodyPanelImage },
    { id: "solid-color", name: "Solid Color Range", image: solidColorImage },
    { id: "textured-finishes", name: "Textured Finishes", image: texturedImage },
    { id: "mirror-sheets", name: "Mirror Sheets", image: mirrorImage },
  ];

  const materials = [
    {
      name: "High-Gloss Premium",
      size: "8×4 ft",
      features: ["Water Resistant", "Fire Resistant", "Termite Proof", "Easy Installation"],
      thickness: "10-15mm",
      description: "Timeless elegance with authentic marble patterns and veining"
    },
    {
      name: "Woody Panels", 
      size: "8×4 ft",
      features: ["Water Resistant", "Fire Resistant", "Lightweight", "Termite Proof"],
      thickness: "12-15mm",
      description: "Natural wood textures with superior durability and water resistance"
    },
    {
      name: "Solid Color Range",
      size: "8×4 ft", 
      features: ["Water Resistant", "Stain Resistant", "Easy Maintenance", "Highly Durable"],
      thickness: "10-12mm",
      description: "Clean, contemporary colors for modern architectural applications"
    },
    {
      name: "Textured Finishes",
      size: "8×4 ft",
      features: ["Water Resistant", "Fire Resistant", "Anti-Slip", "Dimensional Surface"],
      thickness: "12-15mm",
      description: "Dimensional surfaces that add depth and character to any space"
    },
    {
      name: "Mirror Sheets",
      size: "8×4 ft",
      features: ["Water Resistant", "High Gloss", "Reflective", "Luxury Finish"],
      thickness: "10-12mm",
      description: "Mirror-like finish for luxurious, high-impact installations"
    }
  ];

  const currentPattern = patterns.find(p => p.id === selectedPattern);

  const playClinkSound = () => {
    console.log("Clink sound on configurator");
  };

  return (
    <div className="relative min-h-screen bg-pure-white text-deep-charcoal">
      <Header />
      
      <main className="pt-20 scroll-smooth">
        {/* Hero Section */}
        <section 
          className="py-20 relative overflow-hidden"
          style={{
            backgroundImage: `url('${highGlossImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/85 via-deep-charcoal/75 to-deep-charcoal/90"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 reveal-up text-pure-white drop-shadow-lg">
                Products & <span className="text-metallic-gold text-shimmer">Configurator</span>
              </h1>
              <p className="text-xl text-warm-cream max-w-3xl mx-auto reveal-fade drop-shadow-md">
                Design your perfect polymarble solution with our interactive configurator. 
                Visualize, customize, and order your premium polymer stone sheets.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Configurator */}
        <div className="section-spacing bg-warm-cream">
          <section className="relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Live Preview */}
              <div className="reveal-left">
                <h3 className="text-3xl font-bold text-metallic-gold mb-6">Live Preview</h3>
                <div className="relative bg-pure-white backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20 shadow-lg">
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
                      <span className="text-cool-grey">Pattern:</span>
                      <span className="text-deep-charcoal font-medium">{currentPattern?.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cool-grey">Thickness:</span>
                      <span className="text-deep-charcoal font-medium">{selectedThickness}mm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cool-grey">Finish:</span>
                      <span className="text-deep-charcoal font-medium capitalize">{selectedFinish}</span>
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
                    <label className="block text-lg font-medium text-deep-charcoal mb-4">
                      <Palette className="w-5 h-5 inline mr-2" />
                      Pattern
                    </label>
                    <Select value={selectedPattern} onValueChange={setSelectedPattern}>
                      <SelectTrigger className="w-full bg-pure-white border-light-silver text-deep-charcoal">
                        <SelectValue placeholder="Select a pattern" />
                      </SelectTrigger>
                      <SelectContent className="bg-pure-white border-light-silver">
                        {patterns.map((pattern) => (
                          <SelectItem key={pattern.id} value={pattern.id} className="text-deep-charcoal">
                            {pattern.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Thickness Selection */}
                  <div>
                    <label className="block text-lg font-medium text-deep-charcoal mb-4">
                      <Layers className="w-5 h-5 inline mr-2" />
                      Thickness
                    </label>
                    <Select value={selectedThickness} onValueChange={setSelectedThickness}>
                      <SelectTrigger className="w-full bg-pure-white border-light-silver text-deep-charcoal">
                        <SelectValue placeholder="Select thickness" />
                      </SelectTrigger>
                      <SelectContent className="bg-pure-white border-light-silver">
                        <SelectItem value="10" className="text-deep-charcoal">10mm</SelectItem>
                        <SelectItem value="12" className="text-deep-charcoal">12mm</SelectItem>
                        <SelectItem value="15" className="text-deep-charcoal">15mm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Finish Selection */}
                  <div>
                    <label className="block text-lg font-medium text-deep-charcoal mb-4">
                      <Sparkles className="w-5 h-5 inline mr-2" />
                      Finish
                    </label>
                    <Select value={selectedFinish} onValueChange={setSelectedFinish}>
                      <SelectTrigger className="w-full bg-pure-white border-light-silver text-deep-charcoal">
                        <SelectValue placeholder="Select finish" />
                      </SelectTrigger>
                      <SelectContent className="bg-pure-white border-light-silver">
                        <SelectItem value="matt" className="text-deep-charcoal">Matt</SelectItem>
                        <SelectItem value="gloss" className="text-deep-charcoal">Gloss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button 
                      onClick={playClinkSound}
                      className="flex-1 bg-metallic-gold text-pure-white hover:bg-yellow-400 font-bold py-3"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Spec Sheet
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-pure-white font-bold py-3"
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
        <section className="py-20 bg-light-silver/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
                Material <span className="text-metallic-gold text-shimmer">Specifications</span>
              </h3>
              <p className="text-xl text-cool-grey max-w-2xl mx-auto reveal-fade">
                Comprehensive technical specifications for all our polymarble sheet collections.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-pure-white backdrop-blur-sm rounded-2xl border border-metallic-gold/20 shadow-lg">
                <thead>
                  <tr className="border-b border-metallic-gold/20">
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Material</th>
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Size</th>
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Thickness</th>
                    <th className="px-6 py-4 text-left text-metallic-gold font-bold">Features</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material, index) => (
                    <tr key={index} className="border-b border-light-silver/50 hover:bg-metallic-gold/5 transition-colors">
                      <td className="px-6 py-4 text-deep-charcoal font-medium">{material.name}</td>
                      <td className="px-6 py-4 text-cool-grey">{material.size}</td>
                      <td className="px-6 py-4 text-cool-grey">{material.thickness}</td>
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
        </div>
      </main>

      <Footer />
      <QuickQuote />
    </div>
  );
}