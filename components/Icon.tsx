import {
  Home,
  Menu,
  X,
  Info,
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
  Map,
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
  Shield,
  Sparkles,
  ArrowRight,
  Clock,
  Target,
  ChevronUp,
  Compass,
  TrendingUp,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  LucideIcon,
} from "lucide-react";

export type IconName =
  | "Home"
  | "Menu"
  | "X"
  | "Info"
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
  | "Map"
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
  | "Shield"
  | "Sparkles"
  | "ArrowRight"
  | "Clock"
  | "Target"
  | "ChevronUp"
  | "Compass"
  | "TrendingUp"
  | "Linkedin"
  | "Twitter"
  | "Instagram"
  | "Facebook";

const iconMap: Record<IconName, LucideIcon> = {
  Home,
  Menu,
  X,
  Info,
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
  Map,
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
  Shield,
  Sparkles,
  ArrowRight,
  Clock,
  Target,
  ChevronUp,
  Compass,
  TrendingUp,
  Linkedin,
  Twitter,
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
    return <span className={`${className} text-[${size}px]`}>❌</span>; // Fallback icon
  }

  return <IconComponent className={className} size={size} />;
};

export default Icon;
