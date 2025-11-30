"use client";

import { motion } from "framer-motion";
import Icon from "../Icon";

const objectives = [
  {
    icon: "Zap" as const,
    title: "Smart Recommendations",
    description:
      "Our AI analyzes thousands of factors to recommend destinations that perfectly match your preferences, travel style, budget, and personality.",
    gradient: "from-blue-600 to-purple-600",
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "Heart" as const,
    title: "Personalized Experience",
    description:
      "From beach getaways to adventure travel, we create uniquely tailored experiences that remember your preferences for future trips.",
    gradient: "from-pink-600 to-purple-600",
    bgColor: "bg-pink-50",
    hoverBg: "group-hover:bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: "Globe" as const,
    title: "Global Expertise",
    description:
      "Access insider knowledge about destinations worldwide, including weather patterns, cultural insights, and local experiences.",
    gradient: "from-purple-600 to-blue-600",
    bgColor: "bg-purple-50",
    hoverBg: "group-hover:bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const stats = [
  {
    value: "500K+",
    label: "Destinations Analyzed",
    icon: "MapPin" as const,
  },
  {
    value: "24/7",
    label: "AI Assistance",
    icon: "Clock" as const,
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: "Heart" as const,
  },
  {
    value: "150+",
    label: "Countries Covered",
    icon: "Globe" as const,
  },
];

export default function ProjectObjectivesSection() {
  return (
    <section className="relative py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Icon name="Target" size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">
              Our Mission
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Revolutionizing Travel
            </span>
          </motion.h2>

          <motion.p
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transforming travel planning through intelligent personalization and
            cutting-edge AI technology
          </motion.p>
        </div>

        {/* Main Objectives Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
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
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${objective.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`relative w-16 h-16 ${objective.bgColor} ${objective.hoverBg} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300`}
              >
                <Icon
                  name={objective.icon}
                  size={32}
                  className={objective.iconColor}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {objective.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center">
                {objective.description}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${objective.gradient}`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[28px] p-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-blue-100 to-purple-100 rounded-xl mb-3"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon
                      name={stat.icon}
                      size={24}
                      className="text-blue-600"
                    />
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Ready to experience intelligent travel planning?
          </p>
          <motion.a
            href="/journey"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon name="Sparkles" size={20} />
            <span>Start Your Journey</span>
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              whileHover={{ width: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="ArrowRight" size={20} className="ml-1" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
