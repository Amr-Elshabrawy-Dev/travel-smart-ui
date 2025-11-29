// Travel preference-related type definitions

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
