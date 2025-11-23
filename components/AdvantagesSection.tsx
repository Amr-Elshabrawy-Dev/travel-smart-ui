import { motion } from "framer-motion";
import Icon from "./Icon";

const AdvantagesSection = () => {
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
            Why Choose AI-Powered Travel Planning?
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the future of travel planning with our intelligent
            platform
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="bg-blue-100 rounded-full p-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="CheckCircle" size={24} className="text-blue-600" />
              </motion.div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">
                95% Match Accuracy
              </h3>
            </div>
            <p className="text-gray-600">
              Our AI achieves unparalleled accuracy in destination matching,
              ensuring you get recommendations you'll truly love.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="bg-green-100 rounded-full p-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="DollarSign" size={24} className="text-green-600" />
              </motion.div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">
                Smart Savings
              </h3>
            </div>
            <p className="text-gray-600">
              Get real-time pricing insights and budget optimization suggestions
              to make the most of your travel dollars.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="bg-purple-100 rounded-full p-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="Sunrise" size={24} className="text-purple-600" />
              </motion.div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">
                Optimal Timing
              </h3>
            </div>
            <p className="text-gray-600">
              AI-powered weather prediction and crowd analysis help you pick the
              perfect dates for your ideal vacation.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="bg-red-100 rounded-full p-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="Star" size={24} className="text-red-600" />
              </motion.div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">
                Insider Experiences
              </h3>
            </div>
            <p className="text-gray-600">
              Discover hidden gems and local experiences that only our AI can
              uncover, curated specifically for travelers like you.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvantagesSection;
