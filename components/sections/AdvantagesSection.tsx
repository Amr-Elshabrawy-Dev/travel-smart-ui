"use client";

import { motion } from "framer-motion";
import Icon, { IconName } from "../Icon";

interface Feature {
  icon: IconName;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: "CheckCircle",
    title: "95% Match Accuracy",
    description:
      "Our AI achieves unparalleled accuracy in destination matching, ensuring you get recommendations you'll truly love.",
    stat: "95%",
    statLabel: "Match Rate",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: "DollarSign",
    title: "Smart Savings",
    description:
      "Get real-time pricing insights and budget optimization suggestions to make the most of your travel dollars.",
    stat: "$847",
    statLabel: "Avg Saved",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: "Zap",
    title: "Instant Results",
    description:
      "Receive personalized recommendations in seconds. Our AI processes millions of data points to find your perfect match.",
    stat: "<3s",
    statLabel: "Response Time",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: "Sun",
    title: "Optimal Timing",
    description:
      "AI-powered weather prediction and crowd analysis help you pick the perfect dates for your ideal vacation.",
    stat: "365",
    statLabel: "Days Analyzed",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "Star",
    title: "Insider Experiences",
    description:
      "Discover hidden gems and local experiences that only our AI can uncover, curated specifically for you.",
    stat: "10K+",
    statLabel: "Hidden Gems",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: "Shield",
    title: "Trusted & Secure",
    description:
      "Your data is protected with enterprise-grade security. Travel with confidence knowing your information is safe.",
    stat: "100%",
    statLabel: "Encrypted",
    gradient: "from-indigo-600 to-blue-600",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
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
            <Icon name="Sparkles" size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">
              Why Choose Us
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
              AI-Powered Advantages
            </span>
          </motion.h2>

          <motion.p
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the future of travel planning with intelligent features
            designed to save you time and money
          </motion.p>
        </div>

        {/* Features Grid */}
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
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-[18px] p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon with gradient background */}
              <div
                className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${feature.gradient} mb-4`}
              >
                <Icon name={feature.icon} size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="flex items-baseline gap-2 pt-4 border-t border-gray-100">
                <motion.span
                  className={`text-3xl font-bold bg-linear-to-r ${feature.gradient} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  {feature.stat}
                </motion.span>
                <span className="text-sm text-gray-500 font-medium">
                  {feature.statLabel}
                </span>
              </div>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-purple-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-6 px-6 py-4 bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Users" size={18} className="text-blue-600" />
              <span className="text-gray-700">
                <span className="font-bold text-blue-600">100K+</span> Happy
                Travelers
              </span>
            </div>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Star" size={18} className="text-yellow-500" />
              <span className="text-gray-700">
                <span className="font-bold text-yellow-600">4.9/5</span> Average
                Rating
              </span>
            </div>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-2 text-sm">
              <Icon name="MapPin" size={18} className="text-green-600" />
              <span className="text-gray-700">
                <span className="font-bold text-green-600">200+</span>{" "}
                Destinations
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
