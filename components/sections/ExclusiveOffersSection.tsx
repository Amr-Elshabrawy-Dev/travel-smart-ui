"use client";

import { motion } from "framer-motion";
import Icon from "../Icon";

export default function ExclusiveOffersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Exclusive AI-Curated Offers
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Limited-time deals personalized just for you
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4,
              },
            },
          }}
        >
          {/* Early Bird Special */}
          <motion.div
            className="bg-linear-to-r from-green-400 to-green-600 rounded-xl p-8 text-white cursor-pointer"
            variants={{
              hidden: { opacity: 0, x: -100, scale: 0.9 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="bg-white/20 rounded-full p-3"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon name="Zap" size={32} className="text-white" />
              </motion.div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">Early Bird Special</h3>
                <p className="text-green-100">Book 60+ days in advance</p>
              </div>
            </div>
            <p className="text-lg mb-6 leading-relaxed">
              Save up to 25% on select destinations with our AI-recommended
              early booking deals. Perfect for spontaneous travelers who want
              the best value.
            </p>
            <div className="flex items-center justify-between">
              <motion.span
                className="text-3xl font-bold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  type: "spring",
                  bounce: 0.4,
                }}
                viewport={{ once: true }}
              >
                $500 OFF
              </motion.span>
              <motion.span
                className="text-sm bg-white/20 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Limited Time
              </motion.span>
            </div>
          </motion.div>

          {/* Weekend Warrior Deal */}
          <motion.div
            className="bg-linear-to-r from-purple-400 to-purple-600 rounded-xl p-8 text-white cursor-pointer"
            variants={{
              hidden: { opacity: 0, x: 100, scale: 0.9 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="bg-white/20 rounded-full p-3"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon name="Calendar" size={32} className="text-white" />
              </motion.div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">Weekend Warrior</h3>
                <p className="text-purple-100">Perfect short getaways</p>
              </div>
            </div>
            <p className="text-lg mb-6 leading-relaxed">
              Jet off for the weekend! Our AI finds destinations within 2-4 hour
              flight time with unbeatable deals on boutique hotels and
              activities.
            </p>
            <div className="flex items-center justify-between">
              <motion.span
                className="text-3xl font-bold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  type: "spring",
                  bounce: 0.4,
                }}
                viewport={{ once: true }}
              >
                50% OFF
              </motion.span>
              <motion.span
                className="text-sm bg-white/20 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Hot Deal
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-linear-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Experience Travel Like Never Before?
            </motion.h3>
            <motion.p
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
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
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 transition-colors shadow-lg"
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
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="Plane" size={24} className="mr-3" />
              </motion.div>
              <span>Plan My Perfect Trip</span>
            </motion.a>
            <motion.p
              className="text-blue-200 text-sm mt-4 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Icon name="Plane" size={16} className="mr-2" />
              No hidden fees • Instant recommendations • 24/7 AI support
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
