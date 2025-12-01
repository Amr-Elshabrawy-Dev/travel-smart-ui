import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Smart - Personalized Destination Recommendations",
  description:
    "Discover your perfect travel destination through our intuitive experience-first planning wizard. Get personalized recommendations based on your preferences, budget, and travel style.",
  keywords: [
    "travel planning",
    "destination recommendations",
    "vacation planning",
    "trip planning",
    "travel wizard",
  ],
  authors: [{ name: "Travel Smart Team" }],
  openGraph: {
    title: "Travel Smart - Find Your Perfect Destination",
    description:
      "Experience-first travel planning with personalized destination recommendations based on your ideal trip preferences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Smart - Personalized Travel Planning",
    description:
      "Discover amazing destinations tailored to your travel preferences. Plan the perfect trip with our smart recommendation engine.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
