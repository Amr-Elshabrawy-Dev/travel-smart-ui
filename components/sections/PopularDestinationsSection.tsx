"use client";

import { motion } from "framer-motion";
import DestinationCard from "../DestinationCard";
import { destinations } from "../../travel_smart_mockdata";

export default function PopularDestinationsSection() {
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
        ease: [0.25, 0.1, 0.25, 1] as const, // Custom easing for smooth motion
      },
    },
  };

  // Animation variants for staggered cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
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
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Destinations
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Curated by travelers, powered by AI insights
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <DestinationCard
            iconName="MapPin"
            imageUrl={destinations[0].images[0]}
            title="Santorini, Greece"
            description="Romantic sunsets and volcanic beaches"
            price="$2,300"
            perNightPrice="from $184/night"
            matchPercentage={95}
            matchText="Match"
            weatherText="Perfect Weather"
            variants={cardVariants}
          />

          <DestinationCard
            iconName="MapPin"
            imageUrl={destinations[1].images[0]}
            title="Barcelona, Spain"
            description="Architectural masterpieces and vibrant culture"
            price="$1,700"
            perNightPrice="from $136/night"
            matchPercentage={92}
            matchText="Match"
            weatherText="Nightlife Hotspot"
            sunColor="purple-400"
            variants={cardVariants}
          />

          <DestinationCard
            iconName="MapPin"
            imageUrl={destinations[3].images[0]}
            title="Bali, Indonesia"
            description="Tropical paradise with spiritual vibes"
            price="$1,800"
            perNightPrice="from $143/night"
            matchPercentage={91}
            matchText="Match"
            weatherText="Affordable Luxury"
            sunColor="orange-400"
            variants={cardVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
