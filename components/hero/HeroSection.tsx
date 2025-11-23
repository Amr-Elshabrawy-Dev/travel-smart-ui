"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../Icon";

export default function HeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1521295121783-8a321d551ad2";
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(false);
  }, []);

  return (
    <motion.div
      className={`relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center ${
        isImageLoaded
          ? "bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2')]"
          : "bg-linear-to-r from-blue-600 to-purple-700"
      }`}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={
        isImageLoaded ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }
      }
      transition={{
        duration: 1.2,
        ease: [0.6, 0.01, 0.05, 0.95],
        scale: { duration: 2, ease: "easeOut" },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded ? 0.25 : 0.3 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-center">
          <motion.h1
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-lg"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              filter: { duration: 0.8 },
            }}
          >
            Plan Your Perfect Trip
            <motion.span
              className="block text-2xl sm:text-3xl md:text-4xl font-normal mt-2 text-blue-200 drop-shadow"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94],
                filter: { duration: 0.6 },
              }}
            >
              Powered by AI Intelligence
            </motion.span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white leading-relaxed drop-shadow"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 1.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Tell us what you're looking for and let our advanced AI find the
            perfect destination tailored just for you. Experience travel
            planning like never before.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.8,
              ease: [0.34, 1.56, 0.64, 1],
              scale: { duration: 0.5, ease: "backOut" },
            }}
          >
            <motion.a
              href="/journey"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-white hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              <span className="relative">Start Planning Your Journey</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
