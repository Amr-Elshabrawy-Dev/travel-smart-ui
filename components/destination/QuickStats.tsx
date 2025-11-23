"use client";

interface QuickStatsProps {
  avgTempC: number;
  confidenceScore: number;
  totalCost: number;
  accommodationRating: number;
}

export default function QuickStats({
  avgTempC,
  confidenceScore,
  totalCost,
  accommodationRating,
}: QuickStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-blue-600">{avgTempC}°C</div>
        <div className="text-sm text-gray-600">Avg Temperature</div>
      </div>
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-green-600">
          {confidenceScore}%
        </div>
        <div className="text-sm text-gray-600">Match Score</div>
      </div>
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-purple-600">${totalCost}</div>
        <div className="text-sm text-gray-600">Est. Total Cost</div>
      </div>
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="flex justify-center items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-yellow-400"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-2xl font-bold">{accommodationRating}</span>
        </div>
        <div className="text-sm text-gray-600">Accommodation</div>
      </div>
    </div>
  );
}
