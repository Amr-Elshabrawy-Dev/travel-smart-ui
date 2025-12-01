import React from "react";
import { motion } from "framer-motion";
import { useWizard } from "../../contexts/WizardContext";
import Icon from "../Icon";

interface StepLabel {
  id: number;
  label: string;
  shortLabel: string;
}

const steps: StepLabel[] = [
  { id: 1, label: "Experience", shortLabel: "Type" },
  { id: 2, label: "Companions", shortLabel: "Who" },
  { id: 3, label: "Activity", shortLabel: "Pace" },
  { id: 4, label: "Budget", shortLabel: "Cost" },
  { id: 5, label: "Duration", shortLabel: "Time" },
  { id: 6, label: "Distance", shortLabel: "Flight" },
  { id: 7, label: "Extras", shortLabel: "Reqs" },
];

const StepIndicator: React.FC = () => {
  const { currentStep, goToStep, isStepValid } = useWizard();

  const getStepStatus = (stepId: number) => {
    if (stepId === currentStep) return "active";
    if (stepId < currentStep) return "completed";
    return "upcoming";
  };

  return (
    <div className="w-full py-6">
      <div className="flex justify-between items-center relative">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-100 rounded-full -z-10" />

        {/* Progress Line */}
        <motion.div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full -z-10"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {steps.map((step) => {
          const status = getStepStatus(step.id);
          const canNavigate = step.id < currentStep && isStepValid(step.id);
          const isCompleted = status === "completed";
          const isActive = status === "active";

          return (
            <div key={step.id} className="relative flex flex-col items-center">
              <motion.button
                onClick={() => canNavigate && goToStep(step.id)}
                disabled={!canNavigate}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 z-10
                  ${
                    isActive
                      ? "bg-white border-blue-600 text-blue-600 shadow-lg shadow-blue-200"
                      : isCompleted
                      ? "bg-linear-to-r from-blue-600 to-purple-600 border-transparent text-white"
                      : "bg-white border-gray-200 text-gray-400"
                  }
                  ${
                    canNavigate
                      ? "cursor-pointer hover:scale-110"
                      : "cursor-default"
                  }
                `}
                whileHover={canNavigate ? { scale: 1.1 } : {}}
                whileTap={canNavigate ? { scale: 0.95 } : {}}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: isCompleted
                    ? "#4F46E5" // Fallback color for animation
                    : isActive
                    ? "#ffffff"
                    : "#ffffff",
                }}
              >
                {isCompleted ? (
                  <Icon name="Check" size={16} className="text-white" />
                ) : (
                  step.id
                )}
              </motion.button>

              {/* Label */}
              <motion.div
                className={`
                  absolute top-12 text-xs font-medium whitespace-nowrap
                  ${
                    isActive
                      ? "text-blue-600 font-bold"
                      : isCompleted
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                `}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isActive ? 1.1 : 1,
                }}
              >
                <span className="hidden md:block">{step.label}</span>
                <span className="md:hidden">{step.shortLabel}</span>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
