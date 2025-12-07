"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";

const footerLinks = {
  destinations: [
    { name: "Europe", href: "#" },
    { name: "Asia", href: "#" },
    { name: "Americas", href: "#" },
    { name: "Africa", href: "#" },
    { name: "Oceania", href: "#" },
    { name: "Caribbean", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Partners", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Safety", href: "#" },
    { name: "Cancellation", href: "#" },
    { name: "FAQs", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: "Facebook" as const,
    href: "#",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: "Instagram" as const,
    href: "#",
    color: "hover:text-pink-400",
  },
  {
    name: "Twitter",
    icon: "Twitter" as const,
    href: "#",
    color: "hover:text-sky-400",
  }, // Using MapPin as placeholder
  {
    name: "LinkedIn",
    icon: "Linkedin" as const,
    href: "#",
    color: "hover:text-blue-500",
  }, // Using Map as placeholder
];

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          className="py-12 border-b border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Icon name="Sparkles" size={20} className="text-yellow-400" />
              <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <Icon name="Sparkles" size={20} className="text-yellow-400" />
            </motion.div>
            <p className="text-gray-400 mb-6">
              Get exclusive travel deals and AI-curated destination
              recommendations
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                aria-label="Email address"
              />
              <motion.button
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow whitespace-nowrap cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
            {/* Brand Column */}
            <motion.div
              className="col-span-2 md:col-span-4 lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon name="Plane" size={32} className="text-blue-400" />
                </motion.div>
                <h4 className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TravelSmart
                </h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Revolutionizing travel planning with artificial intelligence for
                unforgettable experiences.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Icon name="Shield" size={14} className="text-green-400" />
                <span>Trusted by 100K+ travelers</span>
              </div>
            </motion.div>

            {/* Destinations */}
            <motion.div
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4 text-white">Destinations</h5>
              <ul className="space-y-2.5">
                {footerLinks.destinations.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <Icon
                        name="MapPin"
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4 text-white">Company</h5>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <Icon
                        name="ArrowRight"
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4 text-white">Support</h5>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <Icon
                        name="ArrowRight"
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4 text-white">Legal</h5>
              <ul className="space-y-2.5 mb-6">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <Icon
                        name="ArrowRight"
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* Social Links */}
          <div className="mt-6 ">
            <h5 className="font-semibold mb-3 text-white text-sm">Follow Us</h5>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`p-2 bg-gray-800 rounded-full ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} TravelSmart UI. All rights reserved.
              Powered by AI.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Icon name="Sparkles" size={14} className="text-yellow-500" />
                <span>AI-Powered Platform</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Icon name="Shield" size={14} className="text-green-500" />
                <span>Secure & Trusted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-8 p-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-blue-500/50 transition-shadow"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
        viewport={{ once: true }}
        aria-label="Scroll to top"
      >
        <Icon name="ChevronUp" size={20} />
      </motion.button>
    </footer>
  );
}
