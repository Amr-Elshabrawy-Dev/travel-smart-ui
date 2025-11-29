import type { IconName } from "../../components/Icon";

export interface Objective {
  icon: IconName;
  title: string;
  description: string;
  gradient: string;
  bgColor: string;
  hoverBg: string;
  iconColor: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: IconName;
}

export const objectives: Objective[] = [
  {
    icon: "Zap",
    title: "Smart Recommendations",
    description:
      "Our AI analyzes thousands of factors to recommend destinations that perfectly match your preferences, travel style, budget, and personality.",
    gradient: "from-blue-600 to-purple-600",
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "Heart",
    title: "Personalized Experience",
    description:
      "From beach getaways to adventure travel, we create uniquely tailored experiences that remember your preferences for future trips.",
    gradient: "from-pink-600 to-purple-600",
    bgColor: "bg-pink-50",
    hoverBg: "group-hover:bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: "Globe",
    title: "Global Expertise",
    description:
      "Access insider knowledge about destinations worldwide, including weather patterns, cultural insights, and local experiences.",
    gradient: "from-purple-600 to-blue-600",
    bgColor: "bg-purple-50",
    hoverBg: "group-hover:bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export const stats: Stat[] = [
  {
    value: "500K+",
    label: "Destinations Analyzed",
    icon: "MapPin",
  },
  {
    value: "24/7",
    label: "AI Assistance",
    icon: "Clock",
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: "Heart",
  },
  {
    value: "150+",
    label: "Countries Covered",
    icon: "Globe",
  },
];
