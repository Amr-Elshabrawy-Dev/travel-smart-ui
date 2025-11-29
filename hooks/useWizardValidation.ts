import type { UserPreferences } from "@/data";

// Step validation types
type StepValidation = {
  [key in keyof UserPreferences]: (value: UserPreferences[key]) => boolean;
};

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

export const useWizardValidation = () => {
  const validateStep = <K extends keyof UserPreferences>(
    step: K,
    value: UserPreferences[K]
  ) => {
    return stepValidations[step](value);
  };

  const isStepValid = (step: number, preferences: UserPreferences): boolean => {
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
  };

  return {
    validateStep,
    isStepValid,
  };
};
