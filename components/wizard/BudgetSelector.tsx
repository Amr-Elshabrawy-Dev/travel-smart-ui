"use client";

import React from "react";
import type { BudgetRange } from "@/data";
import Icon from "../Icon";

interface BudgetSelectorProps {
  options: BudgetRange[];
  selected: string;
  onChange: (value: string) => void;
}

const BudgetSelector: React.FC<BudgetSelectorProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        What&apos;s your budget range?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`
              p-6 rounded-xl border-2 text-left transition-all
              ${
                selected === option.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }
            `}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {option.label}
              </h3>
              <Icon name={option.icon} size={24} />
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              {option.range}
            </p>
            <p className="text-sm text-gray-500 mt-2">per person</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BudgetSelector;
