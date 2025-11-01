"use client";

import { WizardProvider } from "../contexts/WizardContext";
import WizardContainer from "../components/wizard/WizardContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Plan Your Perfect Trip
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Tell us what you&apos;re looking for and let us find the perfect
            destination for you.
          </p>
        </div>

        <WizardProvider>
          <WizardContainer />
        </WizardProvider>
      </div>
    </main>
  );
}
