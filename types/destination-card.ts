import { HTMLMotionProps } from "framer-motion";

export interface DestinationCardProps
  extends Omit<HTMLMotionProps<"div">, "title"> {
  iconName: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  perNightPrice: string;
  matchPercentage: number;
  matchText: string;
  weatherText: string;
  heartColor?: string;
  sunColor?: string;
  onClick?: () => void;
}
