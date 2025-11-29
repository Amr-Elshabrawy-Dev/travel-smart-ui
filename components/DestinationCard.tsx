import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Icon from "./Icon";
import type { DestinationCardProps } from "../types/destination-card";

/**
 * DestinationCard displays a destination's key information in an animated card format
 * Features progressive image loading, smooth animations, and interactive hover states
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

  onClick,
  variants,
}: DestinationCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Ensure component is mounted on client side to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Build optimized image URL with proper parameter handling
  const getImageUrl = (url: string) => {
    // Check if URL already has query parameters
    const separator = url.includes("?") ? "&" : "?";
    // Only add Unsplash optimization parameters for Unsplash URLs
    if (url.includes("unsplash.com")) {
      return `${url}${separator}w=800&q=80&auto=format&fit=crop`;
    }
    return url;
  };

  return (
    <motion.article
      onClick={onClick}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden 
                 cursor-pointer will-change-transform border border-gray-100
                 transition-shadow duration-300"
      variants={variants}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
    >
      {/* Image Section with Progressive Loading */}
      <div className="relative h-48 bg-linear-to-br from-blue-50 to-purple-50 overflow-hidden">
        {/* Loading skeleton - shown while not mounted or loading */}
        {(!isMounted || (!isImageLoaded && !imageError)) && (
          <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}

        {/* Error state */}
        {isMounted && imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center text-gray-400">
              <Icon name="MapPin" size={32} className="mx-auto mb-2" />
              <p className="text-sm">Image unavailable</p>
            </div>
          </div>
        )}

        {/* Actual Image - only render on client side */}
        {isMounted && (
          <img
            src={getImageUrl(imageUrl)}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 transform
                       group-hover:scale-110 ${
                         isImageLoaded ? "opacity-100" : "opacity-0"
                       }`}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setIsImageLoaded(false);
            }}
            loading="lazy"
          />
        )}

        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <header className="flex items-center gap-2">
          <Icon
            name="MapPin"
            size={20}
            className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300 shrink-0"
          />
          <h3
            className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 
                        transition-colors duration-300 line-clamp-1"
          >
            {title}
          </h3>
        </header>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Price Information */}
        <div className="flex items-baseline justify-between pt-2 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-emerald-600">{price}</span>
            <span className="text-xs text-gray-500 mt-0.5">
              {perNightPrice}
            </span>
          </div>

          {/* Match percentage badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 rounded-full">
            <Icon name="Heart" size={14} className="text-red-500" />
            <span className="text-sm font-semibold text-red-600">
              {matchPercentage}%
            </span>
          </div>
        </div>

        {/* Additional Info */}
        <footer className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Icon name="Sun" size={14} className="text-amber-500" />
            <span className="text-xs font-medium">{weatherText}</span>
          </div>

          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
            {matchText}
          </span>
        </footer>
      </div>
    </motion.article>
  );
};

export default DestinationCard;
