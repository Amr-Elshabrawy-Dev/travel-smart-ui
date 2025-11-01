// travel_smart_mockdata.ts - Complete mock data for Travel Smart (TypeScript)

// ============= TYPE DEFINITIONS =============

export interface ExperienceType {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface TravelCompanion {
  id: string;
  label: string;
  icon: string;
}

export interface ActivityLevel {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface BudgetRange {
  id: string;
  label: string;
  range: string;
  icon: string;
}

export interface Duration {
  id: string;
  label: string;
  days: number;
  icon: string;
}

export interface FlightDistance {
  id: string;
  label: string;
  hours: string;
  icon: string;
}

export interface SpecialRequirement {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface CostBreakdownItem {
  item: string;
  cost: number;
}

export interface EstimatedCost {
  flights: number;
  accommodation: number;
  activities: number;
  food: number;
  transportation: number;
  total: number;
  currency: string;
  perPerson: boolean;
  breakdown: CostBreakdownItem[];
}

export interface Weather {
  avgTempC: number;
  avgTempF: number;
  rainyDays: number;
  sunnyDays: number;
  season: string;
}

export interface SuggestedDates {
  from: string;
  to: string;
  reason: string;
}

export interface Activity {
  name: string;
  duration: string;
  price: number;
  description: string;
}

export interface FlightInfo {
  airlines: string[];
  duration: string;
  stops: number;
  priceRange: string;
  departureAirport: string;
}

export interface Accommodations {
  type: string;
  location: string;
  included: string[];
  rating: number;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  coordinates: Coordinates;
  tags: string[];
  bestFor: string[];
  activityLevel: string[];
  flightDistance: string;
  budgetCategory: string;
  confidenceScore: number;
  matchReasons: string[];
  suggestedDates: SuggestedDates;
  weather: Weather;
  estimatedCost: EstimatedCost;
  highlights: string[];
  topActivities: Activity[];
  images: string[];
  flightInfo: FlightInfo;
  accommodations: Accommodations;
  bestMonths: string[];
  crowdLevel: string;
  safetyRating: string;
  childFriendly: boolean;
}

export interface UserPreferences {
  experienceType: string;
  travelCompanion: string;
  activityLevel: string;
  budgetRange: string;
  duration: number;
  flightDistance: string;
  specialRequirements: string[];
  departureWindow: string;
  departureFrom: string;
}

// ============= DATA =============

export const experienceTypes: ExperienceType[] = [
  {
    id: "beach",
    label: "Beach Relaxation",
    icon: "Waves",
    description: "Sun, sand, and sea",
  },
  {
    id: "city",
    label: "City Exploration",
    icon: "Building",
    description: "Museums, culture, and urban life",
  },
  {
    id: "adventure",
    label: "Adventure",
    icon: "Mountain",
    description: "Hiking, sports, and thrills",
  },
  {
    id: "cultural",
    label: "Cultural Heritage",
    icon: "Castle",
    description: "History and traditions",
  },
  {
    id: "romantic",
    label: "Romantic Getaway",
    icon: "Heart",
    description: "Perfect for couples",
  },
  {
    id: "nightlife",
    label: "Nightlife & Entertainment",
    icon: "Music",
    description: "Bars, clubs, and events",
  },
];

export const travelCompanions: TravelCompanion[] = [
  { id: "solo", label: "Solo Travel", icon: "User" },
  { id: "couple", label: "Couple", icon: "Users" },
  { id: "family", label: "Family with Kids", icon: "Users" },
  { id: "friends", label: "Group of Friends", icon: "Users" },
];

export const activityLevels: ActivityLevel[] = [
  {
    id: "relaxation",
    label: "Pure Relaxation",
    description: "Minimal physical activity",
    icon: "Sun",
  },
  {
    id: "light",
    label: "Light Activities",
    description: "Easy walks and sightseeing",
    icon: "Walking",
  },
  {
    id: "moderate",
    label: "Moderate",
    description: "Mix of activities and rest",
    icon: "Activity",
  },
  {
    id: "high",
    label: "High Adventure",
    description: "Active and energetic",
    icon: "Mountain",
  },
];

export const budgetRanges: BudgetRange[] = [
  {
    id: "economy",
    label: "Economy",
    range: "$500-1000",
    icon: "CircleDollarSign",
  },
  {
    id: "moderate",
    label: "Moderate",
    range: "$1000-2500",
    icon: "CircleDollarSign",
  },
  { id: "luxury", label: "Luxury", range: "$2500+", icon: "CircleDollarSign" },
];

export const durations: Duration[] = [
  { id: "weekend", label: "Weekend Getaway", days: 3, icon: "Sunrise" },
  { id: "short", label: "Short Break", days: 5, icon: "Zap" },
  { id: "week", label: "One Week", days: 7, icon: "Calendar" },
  { id: "extended", label: "Extended Stay", days: 10, icon: "MapPin" },
];

export const flightDistances: FlightDistance[] = [
  { id: "short", label: "Short Haul", hours: "2-4 hours", icon: "Plane" },
  {
    id: "medium",
    label: "Medium Distance",
    hours: "4-7 hours",
    icon: "Navigation",
  },
  { id: "long", label: "Long Haul", hours: "7+ hours", icon: "Globe" },
];

export const specialRequirements: SpecialRequirement[] = [
  {
    id: "childFriendly",
    label: "Child-Friendly",
    icon: "Baby",
    description: "Suitable for families with children",
  },
  {
    id: "accessibility",
    label: "Accessible",
    icon: "Accessibility",
    description: "Wheelchair accessible facilities",
  },
  {
    id: "petFriendly",
    label: "Pet-Friendly",
    icon: "Cat",
    description: "Accommodations that welcome pets",
  },
  {
    id: "dietaryOptions",
    label: "Dietary Requirements",
    icon: "Apple",
    description: "Vegetarian, vegan, and allergy-friendly options",
  },
  {
    id: "quietLocation",
    label: "Quiet Location",
    icon: "Star",
    description: "Away from busy tourist areas",
  },
];

export const destinations: Destination[] = [
  {
    id: "santorini-greece",
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    coordinates: { lat: 36.4072, lng: 25.4569 },
    tags: ["beach", "romantic", "cultural"],
    bestFor: ["couple", "friends"],
    activityLevel: ["relaxation", "light"],
    flightDistance: "medium",
    budgetCategory: "moderate",
    confidenceScore: 95,
    matchReasons: [
      "Perfect for romantic couples",
      "Stunning beaches and sunsets",
      "Within your budget range",
      "Great weather in suggested period",
    ],
    suggestedDates: {
      from: "2025-05-15",
      to: "2025-05-22",
      reason: "Perfect weather, lower prices than peak summer",
    },
    weather: {
      avgTempC: 24,
      avgTempF: 75,
      rainyDays: 1,
      sunnyDays: 6,
      season: "Spring - ideal conditions",
    },
    estimatedCost: {
      flights: 450,
      accommodation: 980,
      activities: 350,
      food: 420,
      transportation: 100,
      total: 2300,
      currency: "USD",
      perPerson: true,
      breakdown: [
        { item: "Round-trip flights", cost: 450 },
        { item: "7 nights accommodation", cost: 980 },
        { item: "Activities & excursions", cost: 350 },
        { item: "Food & dining", cost: 420 },
        { item: "Local transportation", cost: 100 },
      ],
    },
    highlights: [
      "Iconic blue-domed churches and white buildings",
      "World-famous sunsets in Oia",
      "Beautiful volcanic beaches",
      "Excellent local cuisine and wine",
      "Romantic atmosphere perfect for couples",
    ],
    topActivities: [
      {
        name: "Sunset cruise around the caldera",
        duration: "3 hours",
        price: 80,
        description: "Sail around the volcanic caldera with dinner",
      },
      {
        name: "Wine tasting tour",
        duration: "4 hours",
        price: 65,
        description: "Visit traditional wineries with stunning views",
      },
      {
        name: "Red Beach and Akrotiri ruins",
        duration: "Full day",
        price: 0,
        description: "Explore ancient ruins and unique volcanic beach",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      "https://images.unsplash.com/photo-1613395877614-8b45ab6d5cbb",
    ],
    flightInfo: {
      airlines: ["British Airways", "easyJet", "Ryanair"],
      duration: "3h 45m",
      stops: 0,
      priceRange: "£400-500",
      departureAirport: "London (LHR, LGW, STN)",
    },
    accommodations: {
      type: "4-star hotel with caldera view",
      location: "Fira or Oia",
      included: ["Breakfast", "Infinity pool", "Sunset terrace"],
      rating: 4.6,
    },
    bestMonths: ["April", "May", "September", "October"],
    crowdLevel: "Moderate (avoiding peak July-August)",
    safetyRating: "Very Safe",
    childFriendly: false,
  },
  {
    id: "barcelona-spain",
    name: "Barcelona",
    country: "Spain",
    region: "Europe",
    coordinates: { lat: 41.3851, lng: 2.1734 },
    tags: ["city", "beach", "cultural", "nightlife"],
    bestFor: ["couple", "friends", "solo"],
    activityLevel: ["light", "moderate"],
    flightDistance: "short",
    budgetCategory: "moderate",
    confidenceScore: 92,
    matchReasons: [
      "Perfect mix of beach and city",
      "World-class architecture and culture",
      "Vibrant nightlife scene",
      "Short flight from UK",
    ],
    suggestedDates: {
      from: "2025-06-01",
      to: "2025-06-08",
      reason: "Warm weather, beach season starts, pre-peak tourism",
    },
    weather: {
      avgTempC: 23,
      avgTempF: 73,
      rainyDays: 2,
      sunnyDays: 5,
      season: "Early summer - perfect beach weather",
    },
    estimatedCost: {
      flights: 180,
      accommodation: 700,
      activities: 300,
      food: 450,
      transportation: 70,
      total: 1700,
      currency: "USD",
      perPerson: true,
      breakdown: [
        { item: "Round-trip flights", cost: 180 },
        { item: "7 nights accommodation", cost: 700 },
        { item: "Attractions & tours", cost: 300 },
        { item: "Food & dining", cost: 450 },
        { item: "Metro & transport", cost: 70 },
      ],
    },
    highlights: [
      "Gaudí's stunning architecture (Sagrada Familia, Park Güell)",
      "Beautiful beaches along the Mediterranean",
      "Gothic Quarter with medieval streets",
      "World-class food scene and tapas culture",
      "Lively nightlife and entertainment",
    ],
    topActivities: [
      {
        name: "Sagrada Familia guided tour",
        duration: "2 hours",
        price: 35,
        description: "Skip-the-line access to Gaudí's masterpiece",
      },
      {
        name: "Gothic Quarter walking tour",
        duration: "3 hours",
        price: 25,
        description: "Explore medieval Barcelona with local guide",
      },
      {
        name: "Beach day at Barceloneta",
        duration: "Full day",
        price: 0,
        description: "Relax on Barcelona's most famous beach",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4",
    ],
    flightInfo: {
      airlines: ["British Airways", "Vueling", "Ryanair"],
      duration: "2h 15m",
      stops: 0,
      priceRange: "£150-200",
      departureAirport: "London (all airports)",
    },
    accommodations: {
      type: "3-star hotel in Gothic Quarter",
      location: "City center or Eixample",
      included: ["WiFi", "Rooftop terrace"],
      rating: 4.3,
    },
    bestMonths: ["May", "June", "September"],
    crowdLevel: "Moderate to Busy",
    safetyRating: "Safe (watch for pickpockets)",
    childFriendly: true,
  },
  {
    id: "reykjavik-iceland",
    name: "Reykjavik",
    country: "Iceland",
    region: "Europe",
    coordinates: { lat: 64.1466, lng: -21.9426 },
    tags: ["adventure", "cultural"],
    bestFor: ["couple", "friends", "solo"],
    activityLevel: ["moderate", "high"],
    flightDistance: "medium",
    budgetCategory: "luxury",
    confidenceScore: 88,
    matchReasons: [
      "Unique adventure experiences",
      "Stunning natural landscapes",
      "Northern lights season",
      "Perfect for active travelers",
    ],
    suggestedDates: {
      from: "2025-09-15",
      to: "2025-09-22",
      reason: "Northern lights season begins, autumn colors, fewer tourists",
    },
    weather: {
      avgTempC: 9,
      avgTempF: 48,
      rainyDays: 4,
      sunnyDays: 3,
      season: "Autumn - Northern lights visible",
    },
    estimatedCost: {
      flights: 220,
      accommodation: 1200,
      activities: 800,
      food: 600,
      transportation: 500,
      total: 3320,
      currency: "USD",
      perPerson: true,
      breakdown: [
        { item: "Round-trip flights", cost: 220 },
        { item: "7 nights accommodation", cost: 1200 },
        { item: "Tours & excursions", cost: 800 },
        { item: "Food & dining", cost: 600 },
        { item: "Car rental & fuel", cost: 500 },
      ],
    },
    highlights: [
      "Blue Lagoon geothermal spa",
      "Golden Circle tour (geysers, waterfalls, tectonic plates)",
      "Northern lights viewing",
      "Dramatic volcanic landscapes",
      "Unique Nordic culture",
    ],
    topActivities: [
      {
        name: "Golden Circle day tour",
        duration: "8 hours",
        price: 120,
        description: "Visit Þingvellir, Geysir, and Gullfoss waterfall",
      },
      {
        name: "Blue Lagoon experience",
        duration: "3 hours",
        price: 95,
        description: "Relax in milky-blue geothermal waters",
      },
      {
        name: "Northern lights tour",
        duration: "4 hours",
        price: 85,
        description: "Hunt for aurora borealis with expert guide",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927",
      "https://images.unsplash.com/photo-1531168556467-80aace0d0144",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
    ],
    flightInfo: {
      airlines: ["Icelandair", "British Airways", "easyJet"],
      duration: "3h 10m",
      stops: 0,
      priceRange: "£200-250",
      departureAirport: "London (LHR, LGW)",
    },
    accommodations: {
      type: "Boutique hotel in Reykjavik",
      location: "City center",
      included: ["Breakfast", "Northern lights wake-up call"],
      rating: 4.7,
    },
    bestMonths: ["September", "October", "March", "April"],
    crowdLevel: "Low to Moderate",
    safetyRating: "Extremely Safe",
    childFriendly: true,
  },
  {
    id: "bali-indonesia",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    coordinates: { lat: -8.3405, lng: 115.092 },
    tags: ["beach", "adventure", "cultural"],
    bestFor: ["couple", "friends", "solo"],
    activityLevel: ["relaxation", "light", "moderate"],
    flightDistance: "long",
    budgetCategory: "economy",
    confidenceScore: 91,
    matchReasons: [
      "Affordable luxury destination",
      "Perfect mix of beach and culture",
      "Great for wellness and relaxation",
      "Stunning rice terraces and temples",
    ],
    suggestedDates: {
      from: "2025-07-10",
      to: "2025-07-20",
      reason: "Dry season, good weather, avoid peak crowds",
    },
    weather: {
      avgTempC: 27,
      avgTempF: 81,
      rainyDays: 2,
      sunnyDays: 8,
      season: "Dry season - ideal conditions",
    },
    estimatedCost: {
      flights: 650,
      accommodation: 500,
      activities: 300,
      food: 200,
      transportation: 150,
      total: 1800,
      currency: "USD",
      perPerson: true,
      breakdown: [
        { item: "Round-trip flights", cost: 650 },
        { item: "10 nights accommodation", cost: 500 },
        { item: "Activities & tours", cost: 300 },
        { item: "Food & dining", cost: 200 },
        { item: "Scooter rental & transport", cost: 150 },
      ],
    },
    highlights: [
      "Beautiful beaches in Uluwatu and Seminyak",
      "Stunning rice terraces in Ubud",
      "Ancient temples and spiritual sites",
      "World-class surfing and diving",
      "Affordable luxury resorts and spas",
    ],
    topActivities: [
      {
        name: "Tegalalang rice terraces tour",
        duration: "4 hours",
        price: 30,
        description: "Visit iconic rice paddies and jungle swing",
      },
      {
        name: "Traditional Balinese massage",
        duration: "2 hours",
        price: 25,
        description: "Relaxing spa treatment with local techniques",
      },
      {
        name: "Sunset at Tanah Lot temple",
        duration: "3 hours",
        price: 15,
        description: "Visit iconic sea temple during golden hour",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47",
    ],
    flightInfo: {
      airlines: ["Singapore Airlines", "Emirates", "Qatar Airways"],
      duration: "16h (1 stop)",
      stops: 1,
      priceRange: "£600-750",
      departureAirport: "London (LHR)",
    },
    accommodations: {
      type: "4-star villa with pool",
      location: "Ubud or Seminyak",
      included: ["Breakfast", "Private pool", "Daily housekeeping"],
      rating: 4.8,
    },
    bestMonths: ["April", "May", "June", "July", "September"],
    crowdLevel: "Moderate",
    safetyRating: "Safe",
    childFriendly: true,
  },
  {
    id: "dubai-uae",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    coordinates: { lat: 25.0795, lng: 55.1492 },
    tags: ["city", "beach", "luxury", "adventure"],
    bestFor: ["couple", "family", "friends"],
    activityLevel: ["light", "moderate"],
    flightDistance: "long",
    budgetCategory: "luxury",
    confidenceScore: 89,
    matchReasons: [
      "Luxury experiences and modern architecture",
      "Family-friendly attractions",
      "Beach and desert adventures",
      "Tax-free shopping paradise",
    ],
    suggestedDates: {
      from: "2025-11-20",
      to: "2025-11-27",
      reason: "Perfect weather, post-summer heat, festive atmosphere",
    },
    weather: {
      avgTempC: 28,
      avgTempF: 82,
      rainyDays: 0,
      sunnyDays: 7,
      season: "Winter - most comfortable weather",
    },
    estimatedCost: {
      flights: 500,
      accommodation: 1400,
      activities: 600,
      food: 550,
      transportation: 200,
      total: 3250,
      currency: "USD",
      perPerson: true,
      breakdown: [
        { item: "Round-trip flights", cost: 500 },
        { item: "7 nights 5-star hotel", cost: 1400 },
        { item: "Attractions & experiences", cost: 600 },
        { item: "Fine dining & meals", cost: 550 },
        { item: "Taxis & transport", cost: 200 },
      ],
    },
    highlights: [
      "Burj Khalifa - world's tallest building",
      "Luxurious beach resorts and malls",
      "Desert safari with dune bashing",
      "Traditional souks and modern markets",
      "World-class dining and entertainment",
    ],
    topActivities: [
      {
        name: "Desert safari with BBQ dinner",
        duration: "6 hours",
        price: 85,
        description: "Dune bashing, camel ride, traditional entertainment",
      },
      {
        name: "Burj Khalifa At The Top",
        duration: "2 hours",
        price: 75,
        description: "Visit observation deck on 124th floor",
      },
      {
        name: "Dubai Marina dhow cruise",
        duration: "2 hours",
        price: 50,
        description: "Dinner cruise with city views",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e",
    ],
    flightInfo: {
      airlines: ["Emirates", "British Airways", "Virgin Atlantic"],
      duration: "7h",
      stops: 0,
      priceRange: "£450-600",
      departureAirport: "London (LHR, LGW)",
    },
    accommodations: {
      type: "5-star beach resort",
      location: "Dubai Marina or JBR",
      included: ["Breakfast", "Beach access", "Pool", "Gym"],
      rating: 4.7,
    },
    bestMonths: ["November", "December", "January", "February", "March"],
    crowdLevel: "Busy",
    safetyRating: "Very Safe",
    childFriendly: true,
  },
];

// ============= HELPER FUNCTIONS =============

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

// ============= SAMPLE DATA =============

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

// Default export for convenience
const travelSmartData = {
  experienceTypes,
  travelCompanions,
  activityLevels,
  budgetRanges,
  durations,
  flightDistances,
  destinations,
  getRecommendations,
  getDestinationById,
  getDestinationsByExperience,
  sampleUserPreferences,
};

export default travelSmartData;
