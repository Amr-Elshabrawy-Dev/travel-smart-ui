import type { BudgetRange } from "./types";

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
