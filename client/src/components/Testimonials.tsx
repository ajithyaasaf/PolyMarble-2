import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import businessOwnerImage from "@assets/generated_images/Business_owner_testimonial_headshot_57a638cf.png";
import architectImage from "@assets/generated_images/Architect_testimonial_headshot_a03146d0.png";

export default function Testimonials() {
  useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Residential Customer",
      location: "Madurai",
      type: "Kitchen Renovation",
      quote: "The polymarble sheets transformed our kitchen completely. Two years later, they still look brand new despite heavy daily use.",
      rating: 5,
      image: businessOwnerImage
    },
    {
      id: 2,
      name: "Commercial Client",
      location: "Chennai",
      type: "Hotel Project",
      quote: "We chose Polymarble for our hotel project. The durability and ease of maintenance have exceeded our expectations.",
      rating: 5,
      image: businessOwnerImage
    },
    {
      id: 3,
      name: "Interior Designer",
      location: "Coimbatore",
      type: "Luxury Projects",
      quote: "My go-to choice for luxury projects. Clients love the look, and I love the reliability.",
      rating: 5,
      image: architectImage
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-pure-white to-brand-peach/5"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-peach/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-light-silver/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-brand-teal reveal-up mb-4">
            What Our <span className="text-deep-charcoal">Customers Say</span>
          </h3>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto reveal-fade">
            Real stories from satisfied customers across South India
          </p>
        </div>

        {/* Holographic Carousel */}
        <div className="max-w-5xl mx-auto mb-16 reveal-scale">
          <div className="relative">
            {/* Main Testimonial Card with Glassmorphism */}
            <div className="relative min-h-[400px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : index < activeIndex 
                      ? 'opacity-0 -translate-x-full scale-95' 
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                  data-testid={`testimonial-card-${index}`}
                >
                  <div className="relative p-12 rounded-3xl backdrop-blur-xl bg-pure-white/60 border border-brand-teal/30 shadow-2xl overflow-hidden">
                    {/* Holographic Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-peach/10 opacity-50"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-teal/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-peach/20 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-full flex items-center justify-center mb-8 shadow-lg animate-pulse">
                        <Quote className="w-8 h-8 text-pure-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-2 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-brand-peach text-brand-peach animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-2xl text-deep-charcoal leading-relaxed mb-8 italic font-medium">
                        "{testimonial.quote}"
                      </p>

                      {/* Customer Info with Holographic Portrait */}
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-brand-teal/40 shadow-lg relative z-10">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Animated Ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-brand-teal/40 animate-ping"></div>
                        </div>
                        <div>
                          <h4 className="text-2xl text-deep-charcoal font-bold mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-cool-grey text-lg">{testimonial.type}</p>
                          <p className="text-brand-teal font-medium">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-pure-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-brand-teal hover:text-pure-white transition-all duration-300 border border-brand-teal/20 group"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-4 bg-pure-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-brand-teal hover:text-pure-white transition-all duration-300 border border-brand-teal/20 group"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-brand-teal'
                    : 'w-3 h-3 bg-brand-teal/30 hover:bg-brand-teal/50'
                }`}
                data-testid={`button-indicator-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 stagger-group max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={`mini-${testimonial.id}`}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 stagger-item reveal-up group ${
                index === activeIndex
                  ? 'bg-brand-teal/20 border-brand-teal shadow-lg scale-105'
                  : 'bg-pure-white/40 border-brand-teal/20 hover:border-brand-teal/40 hover:scale-102'
              }`}
              data-testid={`mini-testimonial-${index}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-teal/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-deep-charcoal">{testimonial.name}</h5>
                  <p className="text-xs text-brand-teal">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-brand-peach text-brand-peach" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-brand-teal/10 to-brand-teal/10 backdrop-blur-sm rounded-2xl p-8 border border-brand-teal/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">2,00,000+</div>
              <div className="text-cool-grey">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">9 Years</div>
              <div className="text-cool-grey">Of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">5 Countries</div>
              <div className="text-cool-grey">Global Presence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}