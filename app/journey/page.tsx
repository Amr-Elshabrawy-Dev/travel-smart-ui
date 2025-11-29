"use client";

import { WizardProvider } from "../../contexts/WizardContext";
import WizardContainer from "../../components/wizard/WizardContainer";
import Icon from "../../components/Icon";
import AdvantagesSection from "@/components/sections/AdvantagesSection";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} className="mr-2" />
            AI-Powered Travel Planning
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">
            Find Your Perfect Destination
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
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
