"use client";

import React from "react";
import { useWizard } from "../../contexts/WizardContext";

interface StepLabel {
  id: number;
  label: string;
  shortLabel: string;
}

const steps: StepLabel[] = [
  { id: 1, label: "Experience Type", shortLabel: "Type" },
  { id: 2, label: "Travel Companion", shortLabel: "Who" },
  { id: 3, label: "Activity Level", shortLabel: "Activity" },
  { id: 4, label: "Budget Range", shortLabel: "Budget" },
  { id: 5, label: "Duration", shortLabel: "Length" },
  { id: 6, label: "Flight Distance", shortLabel: "Distance" },
  { id: 7, label: "Special Requirements", shortLabel: "Extras" },
];

const StepIndicator: React.FC = () => {
  const { currentStep, goToStep, isStepValid } = useWizard();

  const getStepStatus = (stepId: number) => {
    if (stepId === currentStep) return "active";
    if (stepId < currentStep) return "completed";
    return "upcoming";
  };

  return (
    <div className="hidden md:flex justify-between items-center w-full">
      {steps.map((step, index) => {
        const status = getStepStatus(step.id);
        const canNavigate = step.id < currentStep && isStepValid(step.id);

        return (
          <React.Fragment key={step.id}>
            {index > 0 && (
              <div
                className={`flex-1 h-1 ${
                  status === "completed" ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            )}

            <button
              onClick={() => canNavigate && goToStep(step.id)}
              disabled={!canNavigate}
              className={`
                flex flex-col items-center relative
                ${canNavigate ? "cursor-pointer" : "cursor-default"}
              `}
            >
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${status === "active" ? "bg-blue-600 text-white" : ""}
                  ${status === "completed" ? "bg-blue-600 text-white" : ""}
                  ${status === "upcoming" ? "bg-gray-200 text-gray-500" : ""}
                `}
              >
                {step.id}
              </div>
              <span
                className={`
                absolute top-10 text-xs font-medium whitespace-nowrap
                ${status === "active" ? "text-blue-600" : ""}
                ${status === "completed" ? "text-gray-600" : ""}
                ${status === "upcoming" ? "text-gray-400" : ""}
              `}
              >
                {step.label}
              </span>
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
