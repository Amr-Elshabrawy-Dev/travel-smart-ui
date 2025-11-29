import type { IconName } from "../../components/Icon";

export interface Offer {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  discount: string;
  badge: string;
  icon: IconName;
  gradient: string;
  iconBg: string;
  accentColor: string;
}

export const offers: Offer[] = [
  {
    id: 1,
    title: "Early Bird Special",
    subtitle: "Book 60+ days in advance",
    description:
      "Save up to 25% on select destinations with our AI-recommended early booking deals. Perfect for planners who want the best value.",
    discount: "$500 OFF",
    badge: "Limited Time",
    icon: "Zap",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    iconBg: "bg-white/20",
    accentColor: "green-100",
  },
  {
    id: 2,
    title: "Weekend Warrior",
    subtitle: "Perfect short getaways",
    description:
      "Jet off for the weekend! Our AI finds destinations within 2-4 hour flight time with unbeatable deals on boutique hotels.",
    discount: "50% OFF",
    badge: "Hot Deal",
    icon: "Calendar",
    gradient: "from-purple-600 via-fuchsia-600 to-pink-600",
    iconBg: "bg-white/20",
    accentColor: "purple-100",
  },
  {
    id: 3,
    title: "Last Minute Magic",
    subtitle: "Spontaneous adventures",
    description:
      "Ready to go now? Grab incredible last-minute deals on flights and hotels. Our AI matches you with available luxury at budget prices.",
    discount: "40% OFF",
    badge: "Ends Soon",
    icon: "Sparkles",
    gradient: "from-orange-600 via-amber-600 to-yellow-600",
    iconBg: "bg-white/20",
    accentColor: "orange-100",
  },
  {
    id: 4,
    title: "Family Adventure",
    subtitle: "Make memories together",
    description:
      "Family-friendly destinations with kid-approved activities, family suites, and group discounts. AI-curated for all ages.",
    discount: "35% OFF",
    badge: "Family Pick",
    icon: "Heart",
    gradient: "from-pink-600 via-rose-600 to-red-600",
    iconBg: "bg-white/20",
    accentColor: "pink-100",
  },
];
