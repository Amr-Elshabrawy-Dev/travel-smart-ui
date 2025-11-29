"use client";

import React from "react";
import Icon from "../Icon";
import { specialRequirements } from "../../travel_smart_mockdata";

interface SpecialRequirementsSelectorProps {
  selected: string[];
  onChange: (values: string[]) => void;
}

const SpecialRequirementsSelector: React.FC<
  SpecialRequirementsSelectorProps
> = ({ selected, onChange }) => {
  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Any special requirements?
      </h2>
      <p className="text-gray-600">
        Select any that apply. These will help us find the most suitable
        destinations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialRequirements.map((req) => (
          <button
            key={req.id}
            onClick={() => handleToggle(req.id)}
            className={`
              p-6 rounded-xl border-2 text-left transition-all
              ${
                selected.includes(req.id)
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }
            `}
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon name={req.icon} size={24} />
              <h3 className="text-lg font-medium text-gray-900">{req.label}</h3>
            </div>
            <p className="text-sm text-gray-500">{req.description}</p>
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Note: You can proceed without selecting any special requirements.
      </p>
    </div>
  );
};

export default SpecialRequirementsSelector;
