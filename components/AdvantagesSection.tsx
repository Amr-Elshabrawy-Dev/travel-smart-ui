import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const AdvantagesSection = () => {
  const features = [
    {
      icon: "CheckCircle" as const,
      title: "95% Match Accuracy",
      description:
        "Our AI achieves unparalleled accuracy in destination matching, ensuring you get recommendations you'll truly love.",
      iconColorClass: "text-blue-600",
      iconBgClass: "bg-blue-100",
    },
    {
      icon: "DollarSign" as const,
      title: "Smart Savings",
      description:
        "Get real-time pricing insights and budget optimization suggestions to make the most of your travel dollars.",
      iconColorClass: "text-green-600",
      iconBgClass: "bg-green-100",
    },
    {
      icon: "Sunrise" as const,
      title: "Optimal Timing",
      description:
        "AI-powered weather prediction and crowd analysis help you pick the perfect dates for your ideal vacation.",
      iconColorClass: "text-purple-600",
      iconBgClass: "bg-purple-100",
    },
    {
      icon: "Star" as const,
      title: "Insider Experiences",
      description:
        "Discover hidden gems and local experiences that only our AI can uncover, curated specifically for travelers like you.",
      iconColorClass: "text-red-600",
      iconBgClass: "bg-red-100",
    },
  ];

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
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvantagesSection;
