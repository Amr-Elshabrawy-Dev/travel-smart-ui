import {
  Accessibility,
  Activity,
  Apple,
  ArrowRight,
  Baby,
  Bot,
  Building,
  Calendar,
  Castle,
  Cat,
  Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleDollarSign,
  Clock,
  CloudRain,
  Compass,
  DollarSign,
  Facebook,
  Footprints as Walking,
  Globe,
  Heart,
  Home,
  Info,
  Instagram,
  Linkedin,
  LucideIcon,
  Map,
  MapPin,
  Menu,
  Mountain,
  Music,
  Navigation,
  Plane,
  Send,
  Shield,
  Sparkles,
  Star,
  Sun,
  Sunrise,
  Target,
  Thermometer,
  TrendingUp,
  Twitter,
  User,
  Users,
  Waves,
  X,
  XCircle,
  Zap,
} from "lucide-react";

export type IconName =
  | "Accessibility"
  | "Activity"
  | "Apple"
  | "ArrowRight"
  | "Baby"
  | "Bot"
  | "Building"
  | "Calendar"
  | "Castle"
  | "Cat"
  | "Check"
  | "CheckCircle"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "CircleDollarSign"
  | "Clock"
  | "CloudRain"
  | "Compass"
  | "DollarSign"
  | "Facebook"
  | "Globe"
  | "Heart"
  | "Home"
  | "Info"
  | "Instagram"
  | "Linkedin"
  | "Map"
  | "MapPin"
  | "Menu"
  | "Mountain"
  | "Music"
  | "Navigation"
  | "Plane"
  | "Send"
  | "Shield"
  | "Sparkles"
  | "Star"
  | "Sun"
  | "Sunrise"
  | "Target"
  | "Thermometer"
  | "TrendingUp"
  | "Twitter"
  | "User"
  | "Users"
  | "Walking"
  | "Waves"
  | "X"
  | "XCircle"
  | "Zap";

const iconMap: Record<IconName, LucideIcon> = {
  Accessibility,
  Activity,
  Apple,
  ArrowRight,
  Baby,
  Bot,
  Building,
  Calendar,
  Castle,
  Cat,
  Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleDollarSign,
  Clock,
  CloudRain,
  Compass,
  DollarSign,
  Facebook,
  Globe,
  Heart,
  Home,
  Info,
  Instagram,
  Linkedin,
  Map,
  MapPin,
  Menu,
  Mountain,
  Music,
  Navigation,
  Plane,
  Send,
  Shield,
  Sparkles,
  Star,
  Sun,
  Sunrise,
  Target,
  Thermometer,
  TrendingUp,
  Twitter,
  User,
  Users,
  Walking,
  Waves,
  X,
  XCircle,
  Zap,
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
