"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import DestinationCard from "../DestinationCard";
import { destinations } from "@/data";
import Icon from "../Icon";

const MotionLink = motion(Link);

const categories = [
  "All",
  "Beach",
  "City",
  "Adventure",
  "Luxury",
  "Mountain",
  "Cultural",
];

export default function PopularDestinationsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Animation variants for the section
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // Animation variants for staggered cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // Filter destinations by category
  const filteredDestinations =
    activeCategory === "All"
      ? destinations.slice(0, 6) // Show first 6 destinations for "All"
      : destinations
          .filter((dest) =>
            dest.tags.some(
              (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
            )
          )
          .slice(0, 6); // Show up to 6 destinations per category

  return (
    <motion.section
      className="relative py-24 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Icon name="MapPin" size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">
              AI-Curated Destinations
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Popular Destinations
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Curated by travelers, powered by AI insights
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer duration-300 transition-all ${
                activeCategory === category
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          key={activeCategory} // Re-trigger animation on category change
        >
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              iconName="MapPin"
              imageUrl={destination.images[0]}
              title={`${destination.name}, ${destination.country}`}
              description={destination.highlights[0]}
              price={`$${destination.estimatedCost.total}`}
              perNightPrice={`from $${Math.round(
                destination.estimatedCost.accommodation / 7
              )}/night`}
              matchPercentage={destination.confidenceScore}
              matchText={
                destination.confidenceScore >= 90 ? "Top Match" : "Great Match"
              }
              weatherText={destination.weather.season}
              sunColor="orange-400"
              variants={cardVariants}
            />
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MotionLink
            href="/destination"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon name="Map" size={20} />
            <span>Explore All Destinations</span>
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              whileHover={{ width: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="ArrowRight" size={20} className="ml-1" />
            </motion.div>
          </MotionLink>

          <motion.p
            className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Icon name="Sparkles" size={14} className="text-yellow-500" />
            <span>Powered by AI • Updated daily</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
