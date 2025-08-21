import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function EnhancedContact() {
  useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll respond within 2 hours during business hours.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const advantages = [
    {
      icon: <Clock className="w-5 h-5 text-metallic-gold" />,
      title: "Quick Response",
      description: "Response within 2 hours during business hours"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-metallic-gold" />,
      title: "Free Consultation",
      description: "Detailed project assessment at no cost"
    },
    {
      icon: <Star className="w-5 h-5 text-metallic-gold" />,
      title: "Expert Guidance",
      description: "9 years of industry experience"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rich-black via-dark-forest to-rich-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-metallic-gold/20 via-transparent to-metallic-gold/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full px-4 py-2 border border-green-500/30 mb-6">
            <MessageCircle className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 font-medium">Ready to Transform Your Space?</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6 reveal-up">
            Let's <span className="text-metallic-gold text-shimmer">Start Your Project</span>
          </h3>
          <p className="text-xl text-gray-400 reveal-fade max-w-3xl mx-auto">
            Get a personalized quote, free samples, and expert consultation. 
            Our team will guide you through every step of your transformation.
          </p>
        </div>

        {/* Advantages Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-metallic-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-metallic-gold/20 transition-colors">
                {advantage.icon}
              </div>
              <h4 className="font-bold text-white mb-2">{advantage.title}</h4>
              <p className="text-gray-400 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Contact Form */}
          <div className="glass-effect rounded-2xl p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-metallic-gold/20 rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-metallic-gold" />
              </div>
              <h4 className="text-2xl font-bold text-metallic-gold">Get Your Free Quote</h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300 font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300 font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Smith"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300 font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 98421 06768"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-gray-300 font-medium">Project Type *</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300">
                      <SelectValue placeholder="Select Project Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-kitchen">Residential Kitchen</SelectItem>
                      <SelectItem value="residential-bathroom">Residential Bathroom</SelectItem>
                      <SelectItem value="residential-walls">Residential Accent Walls</SelectItem>
                      <SelectItem value="commercial-office">Commercial Office</SelectItem>
                      <SelectItem value="hospitality">Restaurant/Hotel</SelectItem>
                      <SelectItem value="retail">Retail Store</SelectItem>
                      <SelectItem value="healthcare">Healthcare Facility</SelectItem>
                      <SelectItem value="dealership">Dealership Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-gray-300 font-medium">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300">
                      <SelectValue placeholder="Select Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                      <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                      <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                      <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-gray-300 font-medium">Project Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-metallic-gold focus:ring-metallic-gold/50 transition-all duration-300">
                    <SelectValue placeholder="When do you want to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="3-months">Within 3 months</SelectItem>
                    <SelectItem value="6-months">Within 6 months</SelectItem>
                    <SelectItem value="planning">Just planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300 font-medium">Project Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your space, design preferences, specific requirements..."
                  rows={4}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-metallic-gold focus:ring-metallic-gold/50 resize-none transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-metallic-gold text-rich-black font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 duration-300 disabled:opacity-50 disabled:cursor-not-allowed py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-rich-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Get Free Quote & Samples
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-metallic-gold mb-6 text-shimmer">Get in Touch</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 hover-lift p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center glow-effect">
                    <MapPin className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">Madurai Corporate Office</div>
                    <div className="text-gray-300">No:46, Sivagangai Main Road, Melamadai,</div>
                    <div className="text-gray-300">Gomathipuram, Madurai - 625020</div>
                    <div className="text-metallic-gold text-sm mt-1">Open: Mon-Sat 9AM-7PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover-lift p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center glow-effect">
                    <Phone className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">Call or WhatsApp</div>
                    <div className="text-metallic-gold font-bold">+91 98421 06768</div>
                    <div className="text-gray-300">WhatsApp: +91 98421 26565</div>
                    <div className="text-metallic-gold text-sm mt-1">Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover-lift p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center glow-effect">
                    <Mail className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">Email Us</div>
                    <div className="text-metallic-gold">polymarblesheet@gmail.com</div>
                    <div className="text-gray-300 text-sm">Chennai Office: Dr. Kannan Tower, Porur</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-white/10">
              <h5 className="text-lg font-medium text-white mb-4">Follow Our Journey</h5>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@polymarblesheet3386" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center hover:bg-deep-jade/50 transition-all duration-300 magnetic">
                  <svg className="w-6 h-6 text-metallic-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/polymarblesheet_india" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center hover:bg-deep-jade/50 transition-all duration-300 magnetic">
                  <svg className="w-6 h-6 text-metallic-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297l-.806-.806-.806.806c-.878.807-2.029 1.297-3.326 1.297-2.606 0-4.714-2.108-4.714-4.714s2.108-4.714 4.714-4.714c1.297 0 2.448.49 3.326 1.297l.806.806.806-.806c.878-.807 2.029-1.297 3.326-1.297 2.606 0 4.714 2.108 4.714 4.714s-2.108 4.714-4.714 4.714z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/19aJmaJ7Nc/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-deep-jade/30 rounded-lg flex items-center justify-center hover:bg-deep-jade/50 transition-all duration-300 magnetic">
                  <svg className="w-6 h-6 text-metallic-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}