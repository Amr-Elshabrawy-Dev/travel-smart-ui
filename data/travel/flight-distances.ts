import type { FlightDistance } from "./types";

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
