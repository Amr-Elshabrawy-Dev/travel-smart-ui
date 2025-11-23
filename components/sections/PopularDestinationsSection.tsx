"use client";

import { motion } from "framer-motion";
import DestinationCard from "../DestinationCard";
import { destinations } from "../../travel_smart_mockdata";

export default function PopularDestinationsSection() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Popular Destinations
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Curated by travelers, powered by AI insights
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
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
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
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
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
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
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
