"use client";

import React, { useMemo } from "react";
import { useWizard } from "../../contexts/WizardContext";
import { getRecommendations } from "../../travel_smart_mockdata";
import DestinationCard from "./DestinationCard";

const RecommendationsContainer: React.FC = () => {
  const { preferences } = useWizard();

  const recommendations = useMemo(() => {
    return getRecommendations(preferences);
  }, [preferences]);

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          No Perfect Matches Found
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          We couldn&apos;t find destinations matching all your criteria. Try
          adjusting your preferences to see more options.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your Perfect Destinations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your preferences, we&apos;ve found these amazing destinations
          that match what you&apos;re looking for.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {recommendations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            variant="expanded"
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Adjust Preferences & Search Again
        </button>
      </div>
    </div>
  );
};

export default RecommendationsContainer;
