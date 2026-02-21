import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Sparkles, ArrowDown } from "lucide-react";
import banner1 from "/assets/images/Banner_1.png";
import banner2 from "/assets/images/Banner_2.png";
import banner3 from "/assets/images/Banner_3.png";

const slides = [
  {
    id: 1,
    titleLine1: "The Elegance",
    titleLine2: "Of Polymarble",
    description: "Capturing the raw beauty of Italian marble with superior engineering. Indistinguishable aesthetics, waterproof durability, and fire resistance.",
    tag: "Architectural Grade",
    color: "from-[#F3EAC2] via-[#D4AF37] to-[#996515]", // Rich Gold Gradient
    image: banner1
  },
  {
    id: 2,
    titleLine1: "Your Dream",
    titleLine2: "Space",
    description: "Seamless perfection for interiors that demand distinction. A sustainable, lightweight alternative to traditional materials that lasts a lifetime.",
    tag: "Next-Gen Surface",
    color: "from-[#a8e0d3] via-[#16785c] to-[#0d4e3b]", // Premium Teal Gradient
    image: banner2
  },
  {
    id: 3,
    titleLine1: "Timeless",
    titleLine2: "Beauty",
    description: "Experience the perfect blend of modern innovation and classic design. Transform your space with surfaces that embody true elegance.",
    tag: "Premium Finish",
    color: "from-[#e0c3fc] via-[#8ec5fc] to-[#4facfe]", // Custom gradient
    image: banner3
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const textReveal = {
    hidden: { y: 100 },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-deep-charcoal text-white">
      {/* Dynamic Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 bg-deep-charcoal">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={slides[current].image}
            alt="Hero Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-10 pointer-events-none" />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-[1920px] mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="w-full"
          >
            {/* Tag */}
            <div className="overflow-hidden mb-6">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-brand-peach" />
                <span className="text-sm font-medium tracking-widest uppercase text-brand-peach">
                  {slides[current].tag}
                </span>
              </motion.div>
            </div>

            {/* Huge Typography */}
            <div className="flex flex-col gap-2 mb-8 select-none">
              <div className="overflow-hidden">
                <motion.h1
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-tight leading-[0.9] text-white/90"
                >
                  {slides[current].titleLine1}
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                  className={`text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r ${slides[current].color}`}
                >
                  {slides[current].titleLine2}
                </motion.h1>
              </div>
            </div>

            {/* Description and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 max-w-6xl border-t border-white/10 pt-8 mt-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300 max-w-md font-light leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <button className="group relative px-8 py-4 bg-white text-deep-charcoal rounded-full font-bold overflow-hidden transition-transform hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Collection
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-brand-peach scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                </button>

              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-6 sm:right-12 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-deep-charcoal transition-all duration-300 backdrop-blur-md group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <div className="h-[2px] w-12 bg-white/20 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            key={current}
            transition={{ duration: 8, ease: "linear" }}
            className="h-full w-full bg-brand-peach"
          />
        </div>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-deep-charcoal transition-all duration-300 backdrop-blur-md group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/50" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
