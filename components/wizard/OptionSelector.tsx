"use client";

import type { TravelCompanion, ActivityLevel, FlightDistance } from "@/data";
import Icon from "../Icon";

type OptionType = TravelCompanion | ActivityLevel | FlightDistance;

interface OptionSelectorProps<T extends OptionType> {
  options: T[];
  selected: string;
  onChange: (value: string) => void;
  variant: "card" | "button";
  title?: string;
  subtitle?: string;
}

const OptionSelector = <T extends OptionType>({
  options,
  selected,
  onChange,
  variant,
  title,
  subtitle,
}: OptionSelectorProps<T>) => {
  if (variant === "card") {
    return (
      <div className="space-y-6">
        {(title || subtitle) && (
          <div className="text-center">
            {title && (
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            )}
            {subtitle && (
              <p className="text-gray-600 max-w-md mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="group">
          {options.map((option) => (
            <button
              type="button"
              key={option.id}
              onClick={() => onChange(option.id)}
              aria-pressed={selected === option.id ? "true" : "false"}
              className={`
                group p-6 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer
                hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${
                  selected === option.id
                    ? "border-blue-600 bg-blue-50 shadow-lg"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }
              `}
            >
              {/* Common option properties */}
              <div className="flex items-center gap-4">
                {"icon" in option && (
                  <div
                    className={`p-2 rounded-lg ${
                      selected === option.id
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <Icon
                      name={option.icon}
                      size={28}
                      className={
                        selected === option.id
                          ? "text-blue-600"
                          : "text-gray-600"
                      }
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {option.label}
                  </h3>
                  {"description" in option && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {(title || subtitle) && (
        <div className="text-center">
          {title && (
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          )}
          {subtitle && (
            <p className="text-gray-600 max-w-md mx-auto">{subtitle}</p>
          )}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-3" role="group">
        {options.map((option) => (
          <button
            type="button"
            key={option.id}
            onClick={() => onChange(option.id)}
            aria-pressed={selected === option.id ? "true" : "false"}
            className={`
              px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200
              shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              ${
                selected === option.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50"
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
