"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useWizard } from "../../contexts/WizardContext";
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
  const { preferences, currentStep } = useWizard();

  const handleViewDetails = () => {
    // Save complete wizard state to localStorage before navigating (client-side only)
    if (typeof window !== "undefined") {
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
        {destination.images[0] && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={destination.images[0]}
            alt={`${destination.name} - ${destination.country}`}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50" />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">{destination.name}</h2>
          <p className="text-lg">{destination.country}</p>
        </div>
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
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
        <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
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
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
