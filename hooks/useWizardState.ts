import { useState, useEffect, useCallback } from "react";
import type { UserPreferences } from "@/data";

const initialPreferences: UserPreferences = {
  experienceType: "",
  travelCompanion: "",
  activityLevel: "",
  budgetRange: "",
  duration: 7, // Default to one week
  flightDistance: "",
  specialRequirements: [],
  departureWindow: "2-3 months", // Set a default
  departureFrom: "London, UK",
};

export const useWizardState = (totalSteps: number) => {
  const [preferences, setPreferences] =
    useState<UserPreferences>(initialPreferences);
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Load saved state after hydration to avoid SSR mismatch
  useEffect(() => {
    const savedPreferences = localStorage.getItem("savedWizardPreferences");
    if (savedPreferences) {
      try {
        const parsedPreferences = JSON.parse(savedPreferences);
        setPreferences(parsedPreferences);
      } catch (error) {
        console.warn("Failed to parse saved wizard preferences:", error);
      }
    }

    const savedStep = localStorage.getItem("savedCurrentStep");
    if (savedStep) {
      const step = parseInt(savedStep, 10);
      if (step >= 1 && step <= totalSteps) {
        setCurrentStep(step);
      }
    }
  }, [totalSteps]);

  const updatePreference = useCallback(
    <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
      setPreferences((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const nextStep = useCallback(
    (isStepValid: boolean) => {
      if (currentStep < totalSteps && isStepValid) {
        setCurrentStep((prev) => prev + 1);
      }
    },
    [currentStep, totalSteps]
  );

  const previousStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 1 && step <= totalSteps) {
        setCurrentStep(step);
      }
    },
    [totalSteps]
  );

  const isLastStep = useCallback(() => {
    return currentStep === totalSteps;
  }, [currentStep, totalSteps]);

  return {
    preferences,
    currentStep,
    updatePreference,
    nextStep,
    previousStep,
    goToStep,
    isLastStep,
  };
};
