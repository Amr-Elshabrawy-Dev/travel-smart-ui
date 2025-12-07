"use client";

import { motion } from "framer-motion";
import Icon from "../Icon";
import { useState } from "react";
import { offers } from "@/data";

export default function ExclusiveOffersSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-linear-to-b from-gray-50 via-blue-50/30 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Icon name="Sparkles" size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">
              AI-Curated Deals
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Exclusive Offers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Limited-time deals personalized just for you by our AI travel
            assistant
          </p>
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className={`group relative bg-linear-to-br ${offer.gradient} rounded-2xl p-8 text-white cursor-pointer overflow-hidden`}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredCard(offer.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0"
                initial={{ x: "-100%" }}
                animate={
                  hoveredCard === offer.id ? { x: "100%" } : { x: "-100%" }
                }
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Floating particles effect on hover */}
              {hoveredCard === offer.id && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      initial={{
                        x: Math.random() * 300,
                        y: 200,
                        opacity: 0,
                      }}
                      animate={{
                        y: -50,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`${offer.iconBg} backdrop-blur-sm rounded-2xl p-3`}
                  >
                    <Icon name={offer.icon} size={32} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {offer.title}
                    </h3>
                    <p className={`text-${offer.accentColor} text-sm`}>
                      {offer.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg mb-6 leading-relaxed text-white/90">
                  {offer.description}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-3xl sm:text-4xl font-bold drop-shadow-lg">
                      {offer.discount}
                    </span>
                  </motion.div>

                  <motion.span
                    className="inline-block text-xs sm:text-sm bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full font-semibold border border-white/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={
                      hoveredCard === offer.id ? { scale: [1, 1.1, 1] } : {}
                    }
                    transition={
                      hoveredCard === offer.id
                        ? { duration: 0.5, repeat: Infinity }
                        : { delay: 0.6 + index * 0.1, duration: 0.5 }
                    }
                  >
                    {offer.badge}
                  </motion.span>
                </div>

                {/* Hover arrow indicator */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    hoveredCard === offer.id
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <span>View Details</span>
                  <Icon name="ArrowRight" size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section with Premium Design */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[28px] p-1 overflow-hidden"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-75"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative bg-gray-900 rounded-3xl p-8 sm:p-12">
              <motion.h3
                className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Experience Travel Like Never Before?
              </motion.h3>

              <motion.p
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Join thousands of travelers who have discovered their perfect
                destinations through our AI-powered platform. Start your journey
                today and experience the future of travel planning.
              </motion.p>

              <motion.a
                href="/journey"
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-gray-900 bg-linear-to-r from-white to-gray-100 overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.0,
                  type: "spring",
                  bounce: 0.4,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-blue-200/50 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />

                <motion.div
                  className="mr-3"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name="Plane" size={24} />
                </motion.div>
                <span className="relative z-10">Plan My Perfect Trip</span>

                {/* Arrow that slides in */}
                <motion.div
                  className="ml-0 overflow-hidden"
                  initial={{ width: 0 }}
                  whileHover={{ width: 24 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </motion.div>
              </motion.a>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-green-400" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} className="text-yellow-400" />
                  <span>Instant recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-blue-400" />
                  <span>24/7 AI support</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
