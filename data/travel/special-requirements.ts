import type { SpecialRequirement } from "./types";

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
