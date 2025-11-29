"use client";

import { useState, useEffect, useMemo } from "react";
import { useWizard } from "../../contexts/WizardContext";
import StepIndicator from "./StepIndicator";
import ExperienceSelector from "./ExperienceSelector";
import OptionSelector from "./OptionSelector";
import BudgetSelector from "./BudgetSelector";
import SpecialRequirementsSelector from "./SpecialRequirementsSelector";
import RecommendationsContainer from "../recommendations/RecommendationsContainer";
import {
  experienceTypes,
  travelCompanions,
  activityLevels,
  budgetRanges,
  durations,
  flightDistances,
} from "@/data";

const WizardContainer: React.FC = () => {
  const {
    currentStep,
    preferences,
    updatePreference,
    nextStep,
    previousStep,
    isStepValid,
    isLastStep,
  } = useWizard();

  const [showRecommendations, setShowRecommendations] = useState(false);

  // Handle localStorage access after hydration to avoid SSR mismatch
  useEffect(() => {
    const saved = localStorage.getItem("showRecommendations");
    if (saved === "true") {
      localStorage.removeItem("showRecommendations");
      // eslint-disable-next-line
      setShowRecommendations(true); // Initialization - only called once on mount
    }
  }, []);

  const currentStepComponent = useMemo(() => {
    switch (currentStep) {
      case 1:
        return (
          <ExperienceSelector
            value={preferences.experienceType}
            options={experienceTypes}
            onChange={(value) => updatePreference("experienceType", value)}
          />
        );
      case 2:
        return (
          <OptionSelector
            options={travelCompanions}
            selected={preferences.travelCompanion}
            onChange={(value) => updatePreference("travelCompanion", value)}
            variant="card"
            title="Who's traveling with you?"
            subtitle="We'll tailor our recommendations to make the perfect experience for everyone"
          />
        );
      case 3:
        return (
          <OptionSelector
            options={activityLevels}
            selected={preferences.activityLevel}
            onChange={(value) => updatePreference("activityLevel", value)}
            variant="card"
            title="How active do you want to be?"
            subtitle="Choose your preferred pace - from relaxing to adventure-packed"
          />
        );
      case 4:
        return (
          <BudgetSelector
            selected={preferences.budgetRange}
            options={budgetRanges}
            onChange={(value) => updatePreference("budgetRange", value)}
          />
        );
      case 5:
        return (
          <OptionSelector
            options={durations}
            selected={
              durations.find((d) => d.days === preferences.duration)?.id || ""
            }
            onChange={(value) => {
              const selectedDuration = durations.find((d) => d.id === value);
              if (selectedDuration) {
                updatePreference("duration", selectedDuration.days);
              }
            }}
            variant="card"
            title="How long do you want to travel?"
            subtitle="Select the perfect duration for your journey"
          />
        );
      case 6:
        return (
          <OptionSelector
            options={flightDistances}
            selected={preferences.flightDistance}
            onChange={(value) => updatePreference("flightDistance", value)}
            variant="card"
            title="What's your flight distance preference?"
            subtitle="Choose how far you're willing to travel to reach your destination"
          />
        );
      case 7:
        return (
          <SpecialRequirementsSelector
            selected={preferences.specialRequirements}
            onChange={(values) =>
              updatePreference("specialRequirements", values)
            }
          />
        );
      default:
        return null;
    }
  }, [currentStep, preferences, updatePreference]);

  const handleFindDestinations = () => {
    if (isLastStep() && isStepValid(currentStep)) {
      setShowRecommendations(true);
    } else {
      nextStep();
    }
  };

  if (showRecommendations) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <RecommendationsContainer />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <StepIndicator />

      <div className="mt-8">{currentStepComponent}</div>

      <div className="flex justify-between mt-8">
        <button
          onClick={previousStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg ${
            currentStep === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleFindDestinations}
          disabled={!isStepValid(currentStep)}
          className={`px-6 py-2 rounded-lg ${
            !isStepValid(currentStep)
              ? "bg-blue-200 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isLastStep() ? "Find Destinations" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default WizardContainer;
