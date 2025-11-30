"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Icon from "../../components/Icon";

export default function AboutPage() {
  const features = [
    {
      icon: "Sparkles" as const,
      title: "AI-Powered Recommendations",
      description:
        "Our intelligent algorithm analyzes your preferences to suggest destinations that perfectly match your travel style and budget.",
    },
    {
      icon: "Heart" as const,
      title: "Personalized Experiences",
      description:
        "Every recommendation is tailored to you. We consider your interests, activity level, and travel companions for the perfect match.",
    },
    {
      icon: "Shield" as const,
      title: "Trusted & Secure",
      description:
        "Your data is safe with us. We prioritize privacy and only use your preferences to enhance your travel planning experience.",
    },
    {
      icon: "Globe" as const,
      title: "Global Destinations",
      description:
        "Explore destinations across the world, from hidden gems to popular hotspots, all curated based on real traveler experiences.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Travelers" },
    { number: "500+", label: "Destinations" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "50+", label: "Countries" },
  ];

  const values = [
    {
      icon: "Target" as const,
      title: "Precision",
      description:
        "We match you with destinations that align perfectly with your unique travel preferences.",
    },
    {
      icon: "Users" as const,
      title: "Community",
      description:
        "Join thousands of travelers who trust Travel Smart for their journey planning.",
    },
    {
      icon: "TrendingUp" as const,
      title: "Innovation",
      description:
        "We continuously improve our recommendation engine with the latest travel data.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-blue-50/30 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Travel Smart
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re revolutionizing travel planning with intelligent,
              personalized destination recommendations that match your unique
              style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Icon name="Compass" size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto text-white/90">
              At Travel Smart, we believe every journey should be extraordinary.
              Our mission is to simplify travel planning by understanding your
              preferences and connecting you with destinations that will create
              unforgettable memories. We combine cutting-edge technology with
              genuine travel insights to help you discover places you&apos;ll
              love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We&apos;re not just another travel website. Here&apos;s what sets
              Travel Smart apart.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-linear-to-br from-gray-50 to-blue-50/30 p-8 rounded-2xl hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Discover Your Perfect Destination?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of travelers who&apos;ve found their dream
              destinations with Travel Smart&apos;s personalized
              recommendations.
            </p>
            <Link href="/journey">
              <motion.button
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Sparkles" size={20} />
                <span>Start Your Journey</span>
                <Icon name="ArrowRight" size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
