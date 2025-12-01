"use client";

import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import WizardContext from "../../contexts/WizardContext";
import Icon from "../Icon";
import type { Destination } from "@/data";

interface DestinationCardProps {
  destination: Destination;
  variant?: "compact" | "expanded";
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  variant = "compact",
}) => {
  const router = useRouter();
  const wizardContext = useContext(WizardContext);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Ensure component is mounted on client side to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleViewDetails = () => {
    // Save complete wizard state to localStorage before navigating (client-side only)
    if (typeof window !== "undefined" && wizardContext) {
      const { preferences, currentStep } = wizardContext;
      localStorage.setItem(
        "savedWizardPreferences",
        JSON.stringify(preferences)
      );
      localStorage.setItem("savedCurrentStep", currentStep.toString());
      localStorage.setItem("showRecommendations", "true");
    }
    router.push(`/destination/${destination.id}`);
  };
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Hero Image */}
      <div className="relative h-64 bg-gray-200">
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
        {isMounted && destination.images[0] && (
          <Image
            src={destination.images[0]}
            alt={`${destination.name} - ${destination.country}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-500 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setIsImageLoaded(false);
            }}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50" />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">{destination.name}</h2>
          <p className="text-lg">{destination.country}</p>
        </div>
        <div className="absolute top-4 right-4 bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full">
          {destination.confidenceScore}% Match
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Match Reasons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Perfect Match Because:</h3>
          <ul className="space-y-2">
            {destination.matchReasons.map((reason, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="text-blue-600 mr-2">✓</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Weather & Dates */}
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium mb-1">Suggested Dates</h4>
            <p className="text-gray-600 text-sm">
              {destination.suggestedDates.from} -{" "}
              {destination.suggestedDates.to}
            </p>
          </div>
          <div className="text-right">
            <div className="font-medium mb-1">
              {destination.weather.avgTempC}°C
            </div>
            <p className="text-gray-600 text-sm">
              {destination.weather.sunnyDays} sunny days
            </p>
          </div>
        </div>

        {/* Cost Overview */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Estimated Total Cost</h4>
            <div className="text-xl font-bold text-blue-600">
              {destination.estimatedCost.currency}{" "}
              {destination.estimatedCost.total}
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Per person, including flights & accommodation
          </p>
        </div>

        {/* Top Activities Preview */}
        {variant === "expanded" && (
          <div>
            <h4 className="font-medium mb-3">Top Activities</h4>
            <div className="space-y-3">
              {destination.topActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-sm text-gray-600">{activity.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {destination.estimatedCost.currency} {activity.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg cursor-pointer"
        >
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
