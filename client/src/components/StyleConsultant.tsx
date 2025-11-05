import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Sparkles, Home, Palette, Ruler, CheckCircle2 } from "lucide-react";

export default function StyleConsultant() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({
    spaceType: "",
    style: "",
    budget: "",
    priority: ""
  });
  const [recommendation, setRecommendation] = useState<any>(null);

  const steps = [
    {
      id: "space",
      title: "What space are you designing?",
      icon: <Home className="w-8 h-8" />,
      options: [
        { value: "living-room", label: "Living Room", desc: "Main entertainment space" },
        { value: "kitchen", label: "Kitchen", desc: "Cooking and dining area" },
        { value: "bedroom", label: "Bedroom", desc: "Personal retreat" },
        { value: "bathroom", label: "Bathroom", desc: "Wet area application" },
        { value: "office", label: "Office", desc: "Professional workspace" },
        { value: "commercial", label: "Commercial", desc: "Business premises" }
      ]
    },
    {
      id: "style",
      title: "What's your preferred style?",
      icon: <Palette className="w-8 h-8" />,
      options: [
        { value: "modern", label: "Modern Minimalist", desc: "Clean lines, neutral tones" },
        { value: "luxury", label: "Luxury Classic", desc: "Elegant marble patterns" },
        { value: "natural", label: "Natural Warmth", desc: "Wood textures, earthy tones" },
        { value: "contemporary", label: "Contemporary Bold", desc: "Statement finishes" },
        { value: "traditional", label: "Traditional", desc: "Timeless designs" }
      ]
    },
    {
      id: "budget",
      title: "What's your budget range?",
      icon: <Ruler className="w-8 h-8" />,
      options: [
        { value: "budget", label: "Budget-Friendly", desc: "₹40-45 per sq.ft" },
        { value: "mid", label: "Mid-Range", desc: "₹45-50 per sq.ft" },
        { value: "premium", label: "Premium", desc: "₹50-55 per sq.ft" }
      ]
    },
    {
      id: "priority",
      title: "What's most important to you?",
      icon: <Sparkles className="w-8 h-8" />,
      options: [
        { value: "durability", label: "Maximum Durability", desc: "15+ year lifespan" },
        { value: "aesthetics", label: "Visual Appeal", desc: "Stunning finish" },
        { value: "maintenance", label: "Easy Maintenance", desc: "Minimal upkeep" },
        { value: "value", label: "Best Value", desc: "Cost-effectiveness" }
      ]
    }
  ];

  const getRecommendation = () => {
    const recommendations: Record<string, any> = {
      "living-room-modern-mid-aesthetics": {
        product: "Solid Color Range",
        finish: "Matte/Satin",
        color: "Contemporary grey or white",
        price: "₹40/sq.ft",
        reason: "Perfect for modern minimalist living rooms with clean, contemporary aesthetics"
      },
      "kitchen-luxury-premium-durability": {
        product: "High-Gloss Premium",
        finish: "High-gloss marble pattern",
        color: "Classic white marble",
        price: "₹45/sq.ft",
        reason: "Luxury finish with superior water resistance perfect for kitchens"
      },
      "bedroom-natural-mid-aesthetics": {
        product: "Woody Panels",
        finish: "Natural wood texture",
        color: "Warm wood tones",
        price: "₹52/sq.ft",
        reason: "Brings natural warmth and cozy ambiance to bedrooms"
      },
      "bathroom-luxury-premium-maintenance": {
        product: "Textured Finishes",
        finish: "Anti-slip textured",
        color: "Neutral tones",
        price: "₹48/sq.ft",
        reason: "Perfect for wet areas with anti-slip properties and easy maintenance"
      },
      "commercial-contemporary-premium-durability": {
        product: "Mirror Sheets",
        finish: "Mirror finish",
        color: "Reflective luxury",
        price: "₹55/sq.ft",
        reason: "High-impact finish perfect for showrooms and commercial spaces"
      }
    };

    const key = `${selections.spaceType}-${selections.style}-${selections.budget}-${selections.priority}`;
    
    const fallback = {
      product: "High-Gloss Premium",
      finish: "High-gloss",
      color: "Versatile patterns",
      price: "₹45/sq.ft",
      reason: "Our most popular choice, suitable for various applications with excellent durability"
    };

    return recommendations[key] || fallback;
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      const rec = getRecommendation();
      setRecommendation(rec);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setSelections({ spaceType: "", style: "", budget: "", priority: "" });
    setRecommendation(null);
  };

  const selectOption = (value: string) => {
    setSelections({
      ...selections,
      [steps[step].id]: value
    });
  };

  const currentStepKey = steps[step].id as keyof typeof selections;
  const isStepComplete = selections[currentStepKey] !== "";

  if (recommendation) {
    return (
      <section className="relative overflow-hidden py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-pure-white to-brand-peach/10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-peach/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-12 reveal-scale">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full mb-6 shadow-xl animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-pure-white" />
              </div>
              <h3 className="text-4xl font-bold text-brand-teal mb-4">
                Your Perfect Match!
              </h3>
              <p className="text-xl text-cool-grey">
                Based on your preferences, we recommend:
              </p>
            </div>

            {/* Recommendation Card */}
            <div className="bg-pure-white/80 backdrop-blur-xl rounded-3xl p-10 border border-brand-teal/30 shadow-2xl mb-8 reveal-up">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-deep-charcoal mb-4">
                    {recommendation.product}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-cool-grey font-medium">Finish:</span>
                      <p className="text-brand-teal text-lg font-bold">{recommendation.finish}</p>
                    </div>
                    <div>
                      <span className="text-cool-grey font-medium">Recommended Color:</span>
                      <p className="text-brand-teal text-lg font-bold">{recommendation.color}</p>
                    </div>
                    <div>
                      <span className="text-cool-grey font-medium">Price:</span>
                      <p className="text-brand-teal text-2xl font-bold">{recommendation.price}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="p-6 bg-brand-teal/10 rounded-2xl border border-brand-teal/20">
                    <h5 className="font-bold text-brand-teal mb-3">Why This Choice?</h5>
                    <p className="text-cool-grey leading-relaxed">
                      {recommendation.reason}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleReset}
                variant="outline"
                className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-pure-white font-bold px-8 py-6 text-lg"
                data-testid="button-start-over"
              >
                Start Over
              </Button>
              <Button 
                className="bg-brand-teal text-pure-white hover:bg-brand-teal/90 font-bold px-8 py-6 text-lg"
                data-testid="button-get-free-sample"
              >
                Get Free Sample
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-pure-white to-light-silver/20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-peach/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 reveal-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full mb-6 shadow-lg">
              {steps[step].icon}
              <span className="text-pure-white">{steps[step].icon}</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-brand-teal">AI Style</span> Consultant
            </h3>
            <p className="text-xl text-cool-grey">
              Answer a few questions to get your personalized recommendation
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-3">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className={`w-1/4 h-2 rounded-full mx-1 transition-all duration-500 ${
                    idx <= step ? 'bg-brand-teal' : 'bg-light-silver'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-cool-grey text-sm">
              Step {step + 1} of {steps.length}
            </p>
          </div>

          {/* Question Card */}
          <div className="bg-pure-white/80 backdrop-blur-xl rounded-3xl p-10 border border-brand-teal/20 shadow-2xl mb-8 reveal-scale">
            <h4 className="text-3xl font-bold text-deep-charcoal mb-8 text-center">
              {steps[step].title}
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              {steps[step].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => selectOption(option.value)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selections[currentStepKey] === option.value
                      ? 'border-brand-teal bg-brand-teal/10 shadow-lg scale-105'
                      : 'border-light-silver bg-pure-white hover:border-brand-teal/50 hover:scale-102'
                  }`}
                  data-testid={`option-${option.value}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                      selections[currentStepKey] === option.value
                        ? 'border-brand-teal bg-brand-teal'
                        : 'border-light-silver'
                    }`}>
                      {selections[currentStepKey] === option.value && (
                        <div className="w-3 h-3 bg-pure-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-deep-charcoal mb-1">{option.label}</h5>
                      <p className="text-cool-grey text-sm">{option.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              onClick={handleBack}
              disabled={step === 0}
              variant="outline"
              className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-pure-white font-bold px-8 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-back"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isStepComplete}
              className="bg-brand-teal text-pure-white hover:bg-brand-teal/90 font-bold px-8 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-next"
            >
              {step === steps.length - 1 ? "Get Recommendation" : "Next"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
