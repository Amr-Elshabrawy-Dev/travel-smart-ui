"use client";

import type { ExperienceType } from "@/data";
import Icon from "../Icon";

interface ExperienceSelectorProps {
  value: string;
  options: ExperienceType[];
  onChange: (value: string) => void;
}

const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({
  value,
  options,
  onChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        What type of experience are you looking for?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`
              p-6 rounded-xl border-2 text-left transition-all cursor-pointer
              ${
                value === option.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }
            `}
          >
            <div className="text-3xl mb-3">
              <Icon name={option.icon} size={48} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {option.label}
            </h3>
            <p className="text-sm text-gray-500">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSelector;
