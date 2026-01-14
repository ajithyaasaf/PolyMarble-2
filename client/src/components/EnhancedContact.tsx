import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Star, ArrowRight } from "lucide-react";
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
      description: "We'll get back to you soon.",
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
      icon: <Clock className="w-5 h-5 text-brand-teal" />,
      title: "Quick Response",
      description: "Fast and reliable support during business hours"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-brand-teal" />,
      title: "Free Consultation",
      description: "Detailed project assessment at no cost"
    },
    {
      icon: <Star className="w-5 h-5 text-brand-teal" />,
      title: "Expert Guidance",
      description: "10 years of industry experience"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-brand-teal/20 via-transparent to-brand-teal/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-brand-teal/20 to-brand-teal/20 rounded-full px-4 py-2 border border-brand-teal/30 mb-6">
            <MessageCircle className="w-4 h-4 text-brand-teal mr-2" />
            <span className="text-brand-teal font-medium">Ready to Transform Your Space?</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold mb-4 reveal-up">
            Let's <span className="text-brand-teal text-shimmer">Start Your Project</span>
          </h3>
          <p className="text-xl text-cool-grey reveal-fade max-w-3xl mx-auto">
            Get a personalized quote and expert consultation.
            Our team will guide you through every step of your transformation.
          </p>
        </div>

        {/* Advantages Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-teal/20 transition-colors">
                {advantage.icon}
              </div>
              <h4 className="font-bold text-deep-charcoal mb-2">{advantage.title}</h4>
              <p className="text-cool-grey text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start max-w-6xl mx-auto">
          {/* Enhanced Contact Form */}
          <div className="glass-effect rounded-2xl p-8 hover-lift shadow-card-custom relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-teal/20 rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-brand-teal" />
              </div>
              <h4 className="text-2xl font-bold text-brand-teal">Get Free Enquiry</h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-cool-grey font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-brand-teal focus:ring-metallic-gold/50 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-cool-grey font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Smith"
                    className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-brand-teal focus:ring-metallic-gold/50 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cool-grey font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-brand-teal focus:ring-metallic-gold/50 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-cool-grey font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 98421 06768"
                    className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-brand-teal focus:ring-metallic-gold/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-cool-grey font-medium">Project Type *</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="bg-pure-white border-light-silver text-deep-charcoal focus:border-brand-teal focus:ring-metallic-gold/50 transition-all duration-300">
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
                  <Label htmlFor="budget" className="text-cool-grey font-medium">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="bg-pure-white border-light-silver text-deep-charcoal focus:border-brand-teal focus:ring-metallic-gold/50 transition-all duration-300">
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
                <Label htmlFor="timeline" className="text-cool-grey font-medium">Project Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger className="bg-pure-white border-light-silver text-deep-charcoal focus:border-brand-teal focus:ring-metallic-gold/50 transition-all duration-300">
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
                <Label htmlFor="message" className="text-cool-grey font-medium">Project Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your space, design preferences, specific requirements..."
                  rows={4}
                  className="bg-pure-white border-light-silver text-deep-charcoal placeholder:text-cool-grey focus:border-brand-teal focus:ring-metallic-gold/50 resize-none transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-teal text-pure-white font-bold hover:bg-brand-teal/90 transition-all transform hover:scale-105 duration-300 disabled:opacity-50 disabled:cursor-not-allowed py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-deep-charcoal border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Get Quote
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-brand-teal mb-6 text-shimmer">Get in Touch</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-pure-white border border-black/[0.03] shadow-sm hover:shadow-md hover:border-brand-teal/20 transition-all duration-300 max-w-md">
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center glow-effect">
                    <MapPin className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <div className="text-deep-charcoal font-bold mb-1">Madurai Corporate Office</div>
                    <div className="text-cool-grey">No:46, Sivagangai Main Road, Melamadai,</div>
                    <div className="text-cool-grey">Gomathipuram, Madurai - 625020</div>
                    <div className="text-brand-teal text-sm mt-1">Open: Mon-Sat 9AM-7PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-pure-white border border-black/[0.03] shadow-sm hover:shadow-md hover:border-brand-teal/20 transition-all duration-300 max-w-md">
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center glow-effect">
                    <MapPin className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <div className="text-deep-charcoal font-bold mb-1">Chennai Office</div>
                    <div className="text-cool-grey">Dr. Kannan Tower, Arcot Road,</div>
                    <div className="text-cool-grey">Opp to Naidu Hall, Porur, Chennai - 116</div>
                    <div className="text-brand-teal text-sm mt-1">Open: Mon-Sat 9AM-7PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-pure-white border border-black/[0.03] shadow-sm hover:shadow-md hover:border-brand-teal/20 transition-all duration-300 max-w-md">
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center glow-effect">
                    <Phone className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <div className="text-deep-charcoal font-bold mb-1">Call or WhatsApp</div>
                    <div className="text-brand-teal font-bold">+91 98421 06768</div>
                    <div className="text-cool-grey">WhatsApp: +91 98421 26565</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-pure-white border border-black/[0.03] shadow-sm hover:shadow-md hover:border-brand-teal/20 transition-all duration-300 max-w-md">
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center glow-effect">
                    <Mail className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <div className="text-deep-charcoal font-bold mb-1">Email Us</div>
                    <div className="text-brand-teal">polymarblesheet@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>

        {/* Google Maps - Full Width below the grid */}
        <div className="mt-16 pt-16 border-t border-light-silver/30 reveal-up">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h5 className="text-3xl font-bold text-brand-teal mb-4 text-shimmer">Visit Our Showrooms</h5>
            <p className="text-cool-grey">Experience our premium polymarble sheets in person at our dedicated display centers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Madurai Map */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-brand-teal" />
                <span className="text-xl font-bold text-deep-charcoal">Madurai Experience Center</span>
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-brand-teal/10 shadow-xl h-[400px] hover:border-brand-teal/30 transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2074839862524!2d78.10638647501712!3d9.90901899012835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5bd87f8e87d%3A0x4c4c4c4c4c4c4c4c!2sGomathipuram%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Polymarble Sheet India - Madurai Office Location"
                ></iframe>
              </div>
              <div className="text-center pt-2">
                <a
                  href="https://maps.app.goo.gl/MZTH5XRDhkxR1MMN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal hover:bg-brand-teal hover:text-white px-6 py-2 rounded-full transition-all duration-300 font-bold"
                >
                  Get Directions to Madurai <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Chennai Map */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-brand-teal" />
                <span className="text-xl font-bold text-deep-charcoal">Chennai Experience Center</span>
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-brand-teal/10 shadow-xl h-[400px] hover:border-brand-teal/30 transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.72151624883!2d80.14856064999999!3d13.0398686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52612f6e624cbf%3A0x7d97960100416972!2sPorur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Polymarble Sheet India - Chennai Office Location"
                ></iframe>
              </div>
              <div className="text-center pt-2">
                <a
                  href="https://www.google.com/maps/search/Dr.+Kannan+Tower,+Arcot+Road,+Porur,+Chennai+-+116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal hover:bg-brand-teal hover:text-white px-6 py-2 rounded-full transition-all duration-300 font-bold"
                >
                  Get Directions to Chennai <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
