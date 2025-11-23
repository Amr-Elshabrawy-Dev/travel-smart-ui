"use client";

import { motion } from "framer-motion";
import Icon from "../Icon";

export default function ProjectObjectivesSection() {
  return (
    <motion.section
      className="py-20 bg-white"
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
            Our Mission
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Revolutionizing travel planning through intelligent personalization
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="Zap" size={32} className="text-blue-600" />
            </motion.div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Smart Recommendations
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our AI analyzes thousands of factors to recommend destinations
              that perfectly match your preferences, travel style, budget, and
              personality.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="Heart" size={32} className="text-green-600" />
            </motion.div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Personalized Experience
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From beach getaways to adventure travel, we create uniquely
              tailored experiences that remember your preferences for future
              trips.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="Globe" size={32} className="text-purple-600" />
            </motion.div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Global Expertise
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Access insider knowledge about destinations worldwide, including
              weather patterns, cultural insights, and local experiences that
              you won't find elsewhere.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
