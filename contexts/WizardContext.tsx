"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { UserPreferences } from "../travel_smart_mockdata";

// Step validation types
type StepValidation = {
  [key in keyof UserPreferences]: (value: UserPreferences[key]) => boolean;
};

interface WizardContextValue {
  preferences: UserPreferences;
  currentStep: number;
  totalSteps: number;
  updatePreference: <K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K]
  ) => void;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  isStepValid: (step: number) => boolean;
  isLastStep: () => boolean;
  validateStep: <K extends keyof UserPreferences>(
    step: K,
    value: UserPreferences[K]
  ) => boolean;
}

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

const WizardContext = createContext<WizardContextValue | undefined>(undefined);

// Step validation rules
const stepValidations: StepValidation = {
  experienceType: (value) => value !== "",
  travelCompanion: (value) => value !== "",
  activityLevel: (value) => value !== "",
  budgetRange: (value) => value !== "",
  duration: (value) => value > 0,
  flightDistance: (value) => value !== "",
  specialRequirements: () => {
    // Special requirements are optional, always valid
    return true;
  },
  departureWindow: (value) => value !== "",
  departureFrom: (value) => value !== "",
};

export const WizardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [preferences, setPreferences] =
    useState<UserPreferences>(initialPreferences);
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Load saved state after hydration to avoid SSR mismatch
  useEffect(() => {
    const savedPreferences = localStorage.getItem("savedWizardPreferences");
    if (savedPreferences) {
      try {
        const parsedPreferences = JSON.parse(savedPreferences);
        setPreferences(parsedPreferences); // eslint-disable-line
      } catch (error) {
        console.warn("Failed to parse saved wizard preferences:", error);
      }
    }

    const savedStep = localStorage.getItem("savedCurrentStep");
    if (savedStep) {
      const step = parseInt(savedStep, 10);
      if (step >= 1 && step <= 7) {
        setCurrentStep(step);
      }
    }
  }, []);
  const totalSteps = 7; // We have 7 steps in our wizard

  const updatePreference = useCallback(
    <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
      setPreferences((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const isStepValid = useCallback(
    (step: number): boolean => {
      switch (step) {
        case 1:
          return stepValidations.experienceType(preferences.experienceType);
        case 2:
          return stepValidations.travelCompanion(preferences.travelCompanion);
        case 3:
          return stepValidations.activityLevel(preferences.activityLevel);
        case 4:
          return stepValidations.budgetRange(preferences.budgetRange);
        case 5:
          return stepValidations.duration(preferences.duration);
        case 6:
          return stepValidations.flightDistance(preferences.flightDistance);
        case 7:
          return stepValidations.specialRequirements(
            preferences.specialRequirements
          );
        default:
          return false;
      }
    },
    [preferences]
  );

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps && isStepValid(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, isStepValid]);

  const previousStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  }, []);

  const isLastStep = useCallback(() => {
    return currentStep === totalSteps;
  }, [currentStep]);

  const validateStep = useCallback(
    <K extends keyof UserPreferences>(step: K, value: UserPreferences[K]) => {
      return stepValidations[step](value);
    },
    []
  );

  const value: WizardContextValue = useMemo(
    () => ({
      preferences,
      currentStep,
      totalSteps,
      updatePreference,
      nextStep,
      previousStep,
      goToStep,
      isStepValid,
      isLastStep,
      validateStep,
    }),
    [
      preferences,
      currentStep,
      totalSteps,
      updatePreference,
      nextStep,
      previousStep,
      goToStep,
      isStepValid,
      isLastStep,
      validateStep,
    ]
  );

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
};

export const useWizard = () => {
  const context = useContext(WizardContext);
  if (context === undefined) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return context;
};

export default WizardContext;
