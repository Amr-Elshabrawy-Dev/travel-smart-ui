import type { ActivityLevel } from "./types";

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
