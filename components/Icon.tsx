import {
  Waves,
  Building,
  Mountain,
  Castle,
  Heart,
  Music,
  User,
  Users,
  Star,
  Check,
  MapPin,
  Plane,
  Navigation,
  Globe,
  Calendar,
  Sunrise,
  Zap,
  CheckCircle,
  DollarSign,
  CircleDollarSign,
  Sun,
  Activity,
  Footprints as Walking,
  Baby,
  Accessibility,
  Apple,
  Cat,
  Thermometer,
  CloudRain,
  ChevronLeft,
  ChevronRight,
  XCircle,
  Instagram,
  Facebook,
  LucideIcon,
} from "lucide-react";

type IconName =
  | "Waves"
  | "Building"
  | "Mountain"
  | "Castle"
  | "Heart"
  | "Music"
  | "User"
  | "Users"
  | "Star"
  | "Check"
  | "MapPin"
  | "Plane"
  | "Navigation"
  | "Globe"
  | "Calendar"
  | "Sunrise"
  | "Zap"
  | "CheckCircle"
  | "DollarSign"
  | "CircleDollarSign"
  | "Sun"
  | "Activity"
  | "Walking"
  | "Baby"
  | "Accessibility"
  | "Apple"
  | "Cat"
  | "Thermometer"
  | "CloudRain"
  | "ChevronRight"
  | "ChevronLeft"
  | "XCircle"
  | "Instagram"
  | "Facebook";

const iconMap: Record<IconName, LucideIcon> = {
  Waves,
  Building,
  Mountain,
  Castle,
  Heart,
  Music,
  User,
  Users,
  Star,
  Check,
  MapPin,
  Plane,
  Navigation,
  Globe,
  Calendar,
  Sunrise,
  Zap,
  CheckCircle,
  DollarSign,
  CircleDollarSign,
  Sun,
  Activity,
  Walking,
  Baby,
  Accessibility,
  Apple,
  Cat,
  Thermometer,
  CloudRain,
  ChevronRight,
  ChevronLeft,
  XCircle,
  Instagram,
  Facebook,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon = ({ name, className = "", size = 24 }: IconProps) => {
  const IconComponent = iconMap[name as IconName];

  if (!IconComponent) {
    return (
      <span className={className} style={{ fontSize: size }}>
        ❌
      </span>
    ); // Fallback icon
  }

  return <IconComponent className={className} size={size} />;
};

export default Icon;
