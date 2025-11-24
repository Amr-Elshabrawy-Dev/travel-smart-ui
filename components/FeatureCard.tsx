import { motion } from "framer-motion";
import Icon, { IconName } from "./Icon";

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  iconColorClass: string;
  iconBgClass: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconColorClass,
  iconBgClass,
}) => {
  return (
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
          className={`${iconBgClass} rounded-full p-3`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <Icon name={icon} size={24} className={iconColorClass} />
        </motion.div>
        <h3 className="ml-4 text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
