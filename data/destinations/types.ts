// Destination-related type definitions

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
