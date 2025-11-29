import type { IconName } from "../../components/Icon";

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  gradient: string;
}

export const features: Feature[] = [
  {
    icon: "CheckCircle",
    title: "95% Match Accuracy",
    description:
      "Our AI achieves unparalleled accuracy in destination matching, ensuring you get recommendations you'll truly love.",
    stat: "95%",
    statLabel: "Match Rate",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: "DollarSign",
    title: "Smart Savings",
    description:
      "Get real-time pricing insights and budget optimization suggestions to make the most of your travel dollars.",
    stat: "$847",
    statLabel: "Avg Saved",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: "Zap",
    title: "Instant Results",
    description:
      "Receive personalized recommendations in seconds. Our AI processes millions of data points to find your perfect match.",
    stat: "<3s",
    statLabel: "Response Time",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: "Sun",
    title: "Optimal Timing",
    description:
      "AI-powered weather prediction and crowd analysis help you pick the perfect dates for your ideal vacation.",
    stat: "365",
    statLabel: "Days Analyzed",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "Star",
    title: "Insider Experiences",
    description:
      "Discover hidden gems and local experiences that only our AI can uncover, curated specifically for you.",
    stat: "10K+",
    statLabel: "Hidden Gems",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: "Shield",
    title: "Trusted & Secure",
    description:
      "Your data is protected with enterprise-grade security. Travel with confidence knowing your information is safe.",
    stat: "100%",
    statLabel: "Encrypted",
    gradient: "from-indigo-600 to-blue-600",
  },
];
