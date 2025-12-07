"use client";

import Link from "next/link";
import { WizardProvider } from "../../contexts/WizardContext";
import WizardContainer from "../../components/wizard/WizardContainer";
import Icon from "../../components/Icon";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
// h-16 md:h-20
export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mt-16 md:mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} className="mr-2" />
            AI-Powered Travel Planning
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Find Your Perfect Destination
            </span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Answer a few questions and let our advanced AI create personalized
            travel recommendations tailored just for you.
          </p>
        </div>

        {/* Interactive Wizard Section */}
        <WizardProvider>
          <WizardContainer />
        </WizardProvider>

        {/* Additional Info Section */}
        <AdvantagesSection />

        {/* Back to Home Link */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="inline-flex items-center px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 cursor-pointer group">
              <Icon
                name="ArrowRight"
                size={20}
                className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
