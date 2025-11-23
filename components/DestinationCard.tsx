import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import type { DestinationCardProps } from "../types/destination-card";

/**
 * DestinationCard displays a destination's key information in an animated card format
 * Uses progressive image loading and smooth animations for better UX
 */

const DestinationCard = ({
  imageUrl,
  title,
  description,
  price,
  perNightPrice,
  matchPercentage,
  matchText,
  weatherText,
  heartColor = "red-400",
  sunColor = "orange-400",
  onClick,
  variants,
}: DestinationCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const imageContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(false);
    img.className = "relative h-48 w-full object-cover overflow-hidden";
    if (imageContainer.current) {
      imageContainer.current.append(img);
    }
  }, []);
  return (
    <motion.article
      onClick={onClick}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden 
                 cursor-pointer will-change-transform transition-all duration-300"
      variants={variants}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: 0.6,
        scale: { type: "spring", stiffness: 300 }
      }}
    >
      {/* Image Section with Progressive Loading */}
      <div
        ref={imageContainer}
        className={`relative h-48 bg-cover bg-center bg-no-repeat flex items-center
                   transform transition-transform duration-500 group-hover:scale-105 ${
          isImageLoaded
            ? "bg-black/5"
            : "bg-linear-to-r from-blue-600/10 to-purple-700/10"
        }`}
        aria-label={`View of ${title}`}
      ></div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <header className="flex items-center gap-2">
          <Icon 
            name="MapPin" 
            size={20} 
            className="text-gray-400 group-hover:text-blue-500 transition-colors" 
          />
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </header>

        {/* Description */}
        <p className="text-gray-600">{description}</p>

        {/* Price Information */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">{price}</span>
          <span className="text-sm text-gray-500">{perNightPrice}</span>
        </div>

        {/* Match and Weather Info */}
        <footer className="flex items-center gap-4">
          <div className="flex items-center">
            <Icon
              name="Heart"
              size={16}
              className={`text-${heartColor} transition-colors`}
            />
            <span className="text-sm text-gray-600 ml-1">
              {matchPercentage}% {matchText}
            </span>
          </div>
          <div className="flex items-center">
            <Icon 
              name="Sun" 
              size={16} 
              className={`text-${sunColor} transition-colors`} 
            />
            <span className="text-sm text-gray-600 ml-1">{weatherText}</span>
          </div>
        </footer>
      </div>
    </motion.article>
  );
};

export default DestinationCard;
