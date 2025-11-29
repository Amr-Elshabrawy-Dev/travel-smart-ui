"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "../Icon";

// Premium background images that rotate
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format&fit=crop", // Scenic lake
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80&auto=format&fit=crop", // Ancient city
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80&auto=format&fit=crop", // Tropical beach
];

// Floating particle component for dynamic background
const FloatingParticle = ({
  delay = 0,
  initialX,
  initialScale,
  endX,
  duration,
}: {
  delay?: number;
  initialX: number;
  initialScale: number;
  endX: number;
  duration: number;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
      initial={{
        x: initialX,
        y: typeof window !== "undefined" ? window.innerHeight + 10 : 1000,
        scale: initialScale,
      }}
      animate={{
        y: -10,
        x: endX,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);

  // Pre-calculate particle properties to avoid hydration issues
  const [particleProps] = useState(() =>
    [...Array(20)].map(() => ({
      initialX: Math.random() * 1920,
      initialScale: Math.random() * 0.5 + 0.5,
      endX: Math.random() * 1920,
      duration: Math.random() * 10 + 15,
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Preload all images
  useEffect(() => {
    HERO_IMAGES.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
    });
  }, []);

  // Rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden flex items-center"
      aria-label="Hero section"
    >
      {/* Animated Background Images */}
      {HERO_IMAGES.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: imagesLoaded[index]
              ? `url('${image}')`
              : undefined,
            scale,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      ))}

      {/* Fallback gradient */}
      <div
        className={`absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 transition-opacity duration-1000 ${
          imagesLoaded.some((loaded) => loaded) ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Animated Gradient Overlays */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-purple-900/30 to-transparent"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(30, 58, 138, 0.4), rgba(88, 28, 135, 0.3), transparent)",
            "linear-gradient(to bottom right, rgba(88, 28, 135, 0.4), rgba(30, 58, 138, 0.3), transparent)",
            "linear-gradient(to bottom right, rgba(30, 58, 138, 0.4), rgba(88, 28, 135, 0.3), transparent)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Floating particles - only render on client */}
      {mounted &&
        particleProps.map((props, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            initialX={props.initialX}
            initialScale={props.initialScale}
            endX={props.endX}
            duration={props.duration}
          />
        ))}

      {/* Content Container with Glassmorphism */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Main Heading with Gradient Text */}
          <motion.h1
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="bg-linear-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
              Plan Your Perfect Trip
            </span>

            {/* Subtitle with animated gradient */}
            <motion.span
              className="block text-2xl sm:text-3xl md:text-4xl font-normal mt-4"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.span
                className="bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Powered by AI Intelligence
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Description with enhanced styling */}
          <motion.p
            className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-white/90 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Tell us what you&apos;re looking for and let our advanced AI find
            the perfect destination tailored just for you. Experience travel
            planning like never before.
          </motion.p>

          {/* CTA Button with premium effects */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <motion.a
              href="/journey"
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-gray-900 bg-linear-to-r from-white to-blue-50 overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              aria-label="Start planning your journey"
            >
              {/* Animated gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full"
                transition={{ duration: 0.6 }}
              />

              <Icon name="MapPin" size={22} className="mr-2 relative z-10" />
              <span className="relative z-10">Start Planning Your Journey</span>

              {/* Arrow icon that slides in on hover */}
              <motion.div
                className="ml-0 overflow-hidden"
                initial={{ width: 0 }}
                whileHover={{ width: 24 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="ArrowRight" size={20} className="ml-1" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={16} className="text-yellow-300" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-green-300" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={16} className="text-orange-300" />
              <span>Instant Results</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          role="button"
          aria-label="Scroll to content"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-white/60 rounded-full mx-auto"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
