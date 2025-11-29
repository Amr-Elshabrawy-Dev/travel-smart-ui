// Utility functions for travel recommendations

import type { Destination } from "./destinations/types";
import type { UserPreferences } from "./travel/types";
import { destinations } from "./destinations/destinations";

/**
 * Filter destinations based on user preferences using a flexible matching system
 * Returns top 2 matching destinations sorted by match score and confidence
 */
export function getRecommendations(
  userPreferences: UserPreferences
): Destination[] {
  const {
    experienceType,
    travelCompanion,
    activityLevel,
    budgetRange,
    flightDistance,
    specialRequirements,
  } = userPreferences;

  // Score each destination based on matching criteria
  const scoredDestinations = destinations
    .map((dest) => {
      let matchScore = 0;
      const matchReasons: string[] = [];

      // Experience type (high priority)
      if (experienceType && dest.tags.includes(experienceType)) {
        matchScore += 30;
        matchReasons.push(`Perfect for ${experienceType} experiences`);
      }

      // Travel companion (high priority)
      if (travelCompanion && dest.bestFor.includes(travelCompanion)) {
        matchScore += 25;
        matchReasons.push(`Ideal for ${travelCompanion}s`);
      }

      // Activity level (medium priority)
      if (activityLevel && dest.activityLevel.includes(activityLevel)) {
        matchScore += 20;
        matchReasons.push(`Perfect ${activityLevel} activities`);
      }

      // Budget (medium priority)
      if (budgetRange && dest.budgetCategory === budgetRange) {
        matchScore += 15;
        matchReasons.push(`Within your ${budgetRange} budget`);
      }

      // Flight distance (low priority)
      if (flightDistance && dest.flightDistance === flightDistance) {
        matchScore += 10;
        matchReasons.push(`Great ${flightDistance} flight distance`);
      }

      // Special requirements (must-match if specified)
      if (
        specialRequirements.includes("childFriendly") &&
        !dest.childFriendly
      ) {
        return null; // Hard requirement - exclude if it doesn't match
      }

      // If no preferences set, give all destinations a minimum score
      if (
        !experienceType &&
        !travelCompanion &&
        !activityLevel &&
        !budgetRange &&
        !flightDistance
      ) {
        matchScore = dest.confidenceScore; // Fall back to original confidence
        matchReasons.push("Explore this destination's possibilities");
      }

      return {
        ...dest,
        dynamicMatchScore: matchScore,
        dynamicMatchReasons: matchReasons,
        totalScore: matchScore + dest.confidenceScore * 0.5, // Combine with base confidence
      };
    })
    .filter((dest): dest is NonNullable<typeof dest> => dest !== null) // Remove excluded destinations
    .sort((a, b) => {
      // Sort by match score first, then by original confidence score
      if (b.totalScore !== a.totalScore) {
        return b.totalScore - a.totalScore;
      }
      return b.confidenceScore - a.confidenceScore;
    });

  // Take top 2 and restore original structure (without dynamic scores)
  return scoredDestinations.slice(0, 2).map((dest) => ({
    id: dest.id,
    name: dest.name,
    country: dest.country,
    region: dest.region,
    coordinates: dest.coordinates,
    tags: dest.tags,
    bestFor: dest.bestFor,
    activityLevel: dest.activityLevel,
    flightDistance: dest.flightDistance,
    budgetCategory: dest.budgetCategory,
    confidenceScore: dest.confidenceScore,
    matchReasons: dest.dynamicMatchReasons,
    suggestedDates: dest.suggestedDates,
    weather: dest.weather,
    estimatedCost: dest.estimatedCost,
    highlights: dest.highlights,
    topActivities: dest.topActivities,
    images: dest.images,
    flightInfo: dest.flightInfo,
    accommodations: dest.accommodations,
    bestMonths: dest.bestMonths,
    crowdLevel: dest.crowdLevel,
    safetyRating: dest.safetyRating,
    childFriendly: dest.childFriendly,
  }));
}

/**
 * Get destination by ID
 */
export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((dest) => dest.id === id);
}

/**
 * Get all destinations for a specific experience type
 */
export function getDestinationsByExperience(
  experienceType: string
): Destination[] {
  return destinations.filter((dest) => dest.tags.includes(experienceType));
}

/**
 * Sample user preferences for testing
 */
export const sampleUserPreferences: UserPreferences = {
  experienceType: "beach",
  travelCompanion: "couple",
  activityLevel: "relaxation",
  budgetRange: "moderate",
  duration: 7,
  flightDistance: "medium",
  specialRequirements: [],
  departureWindow: "2-3 months",
  departureFrom: "London, UK",
};
