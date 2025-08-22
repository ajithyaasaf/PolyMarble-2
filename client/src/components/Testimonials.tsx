import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";
import businessOwnerImage from "@assets/generated_images/Business_owner_testimonial_headshot_57a638cf.png";
import architectImage from "@assets/generated_images/Architect_testimonial_headshot_a03146d0.png";

export default function Testimonials() {
  useScrollReveal();

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

  return (
    <section className="py-20 bg-warm-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-metallic-gold/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-metallic-gold reveal-up mb-4">
            What Our <span className="text-deep-charcoal">Customers Say</span>
          </h3>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto reveal-fade">
            Real stories from satisfied customers across South India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-group">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-pure-white backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-300 stagger-item reveal-up group hover:transform hover:scale-105 shadow-lg"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-metallic-gold" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-cool-grey leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-metallic-gold/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-deep-charcoal font-bold group-hover:text-metallic-gold transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-cool-grey text-sm">{testimonial.type}</p>
                  <p className="text-metallic-gold text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-metallic-gold/10 to-yellow-600/10 backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-metallic-gold mb-2">2,00,000+</div>
              <div className="text-cool-grey">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-metallic-gold mb-2">9 Years</div>
              <div className="text-cool-grey">Of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-metallic-gold mb-2">5 Countries</div>
              <div className="text-cool-grey">Global Presence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}