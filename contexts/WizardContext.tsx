"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { UserPreferences } from "../travel_smart_mockdata";
import { useWizardState } from "../hooks/useWizardState";
import { useWizardValidation } from "../hooks/useWizardValidation";

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

const WizardContext = createContext<WizardContextValue | undefined>(undefined);

export const WizardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const totalSteps = 7; // We have 7 steps in our wizard
  const {
    preferences,
    currentStep,
    updatePreference,
    nextStep: nextStepState,
    previousStep,
    goToStep,
    isLastStep,
  } = useWizardState(totalSteps);

  const { validateStep, isStepValid: checkStepValid } = useWizardValidation();

  const isStepValid = useCallback(
    (step: number): boolean => {
      return checkStepValid(step, preferences);
    },
    [checkStepValid, preferences]
  );

  const nextStep = useCallback(() => {
    nextStepState(isStepValid(currentStep));
  }, [nextStepState, isStepValid, currentStep]);

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
