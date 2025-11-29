"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getDestinationById } from "../../../travel_smart_mockdata";
import Icon from "../../../components/Icon";

const DestinationDetailsPage: React.FC = () => {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const destination = useMemo(() => {
    return params.id ? getDestinationById(params.id as string) : null;
  }, [params.id]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading destination details...</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? destination.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Carousel */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={destination.images[currentImageIndex]}
          alt={`${destination.name} - Image ${currentImageIndex + 1}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Navigation Buttons */}
        {destination.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all hover:scale-110 z-10"
              type="button"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={26} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all hover:scale-110 z-10"
              type="button"
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={26} />
            </button>
          </>
        )}

        {/* Image indicators */}
        {destination.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {destination.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 focus:scale-125 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === currentImageIndex
                    ? "bg-white shadow-lg"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                type="button"
                aria-label={`Show image ${index + 1} of ${
                  destination.images.length
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 z-0" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
          <p className="text-xl">
            {destination.country}, {destination.region}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">
              {destination.weather.avgTempC}°C
            </div>
            <div className="text-sm text-gray-600">Avg Temperature</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">
              {destination.confidenceScore}%
            </div>
            <div className="text-sm text-gray-600">Match Score</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">
              ${destination.estimatedCost.total}
            </div>
            <div className="text-sm text-gray-600">Est. Total Cost</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="flex justify-center items-center gap-1">
              <Icon name="Star" size={20} className="text-yellow-400" />
              <span className="text-2xl font-bold">
                {destination.accommodations.rating}
              </span>
            </div>
            <div className="text-sm text-gray-600">Accommodation</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Match Reasons */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">
                Why This Perfect For You
              </h2>
              <ul className="space-y-3">
                {destination.matchReasons.map((reason, index) => (
                  <li key={index} className="flex items-center">
                    <Icon
                      name="CheckCircle"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weather & Travel Dates */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">
                Weather & Suggested Travel Dates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Suggested Dates</h3>
                  <p className="text-lg">
                    {destination.suggestedDates.from} -{" "}
                    {destination.suggestedDates.to}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {destination.suggestedDates.reason}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Weather During Your Stay
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Thermometer" size={24} />
                    <span>
                      {destination.weather.avgTempC}°C /{" "}
                      {destination.weather.avgTempF}°F
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Icon name="Sun" size={16} className="mr-1" />
                      {destination.weather.sunnyDays} sunny days
                    </span>
                    <span className="flex items-center">
                      <Icon name="CloudRain" size={16} className="mr-1" />
                      {destination.weather.rainyDays} rainy days
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {destination.weather.season}
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <ul className="space-y-2">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Activities */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Top Activities</h2>
              <div className="space-y-4">
                {destination.topActivities.map((activity, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{activity.name}</h3>
                      <div className="text-right">
                        <div className="font-bold text-green-600">
                          ${activity.price}
                        </div>
                        <div className="text-sm text-gray-600">
                          {activity.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Cost Breakdown */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Cost Breakdown</h2>
              <div className="space-y-3">
                {destination.estimatedCost.breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.item}</span>
                    <span className="font-medium">${item.cost}</span>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${destination.estimatedCost.total}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {destination.estimatedCost.perPerson
                    ? "Per person"
                    : "Total for group"}
                </p>
              </div>
            </div>

            {/* Flight Information */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Flight Information</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Airlines</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {destination.flightInfo.airlines.map((airline, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm"
                      >
                        {airline}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium">Duration</p>
                  <p>{destination.flightInfo.duration}</p>
                </div>
                <div>
                  <p className="font-medium">Stops</p>
                  <p>
                    {destination.flightInfo.stops === 0
                      ? "Direct flight"
                      : `${destination.flightInfo.stops} stop${
                          destination.flightInfo.stops > 1 ? "s" : ""
                        }`}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Price Range</p>
                  <p className="text-green-600 font-medium">
                    ${destination.flightInfo.priceRange}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Departure Airport</p>
                  <p className="text-sm">
                    {destination.flightInfo.departureAirport}
                  </p>
                </div>
              </div>
            </div>

            {/* Accommodation */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Accommodation</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">
                    {destination.accommodations.type}
                  </p>
                  <p className="text-sm text-gray-600">
                    {destination.accommodations.location}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Rating</p>
                  <div className="flex items-center">
                    <Icon name="Star" size={18} className="text-yellow-400" />
                    <span className="ml-1">
                      {destination.accommodations.rating}/5
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Includes</p>
                  <ul className="text-sm space-y-1 mt-1">
                    {destination.accommodations.included.map(
                      (feature, index) => (
                        <li key={index} className="flex items-center">
                          <Icon
                            name="Check"
                            className="text-green-500 mr-2"
                            size={16}
                          />
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Travel Info */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Travel Information</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Best Months to Visit</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {destination.bestMonths.map((month, index) => (
                      <span
                        key={index}
                        className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm"
                      >
                        {month}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium">Crowd Level</p>
                  <p className="capitalize">{destination.crowdLevel}</p>
                </div>
                <div>
                  <p className="font-medium">Safety Rating</p>
                  <p className="font-medium text-green-600">
                    {destination.safetyRating}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Child Friendly</p>
                  <p className="flex items-center">
                    <Icon
                      name={
                        destination.childFriendly ? "CheckCircle" : "XCircle"
                      }
                      className={
                        destination.childFriendly
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      size={16}
                    />
                    <span className="ml-1">
                      {destination.childFriendly ? "Yes" : "No"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Location */}
        <div className="mt-8 bg-white p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d${destination.coordinates.lng}!3d${destination.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z${destination.coordinates.lat},${destination.coordinates.lng}!5e0!3m2!1sen!2sus!4v1735689600000!5m2!1sen!2sus`}
              width="100%"
              height="100%"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${destination.name}, ${destination.country}`}
            />
          </div>
          <div className="mt-4 flex items-center">
            <Icon name="MapPin" size={20} className="text-green-600 mr-2" />
            <div>
              <p className="font-medium text-gray-900">
                {destination.name}, {destination.country}
              </p>
              <p className="text-sm text-gray-600">
                Coordinates: {destination.coordinates.lat.toFixed(4)},{" "}
                {destination.coordinates.lng.toFixed(4)}
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              // Navigate back to home and show recommendations
              window.location.href = "/journey";
            }}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors mr-4"
          >
            ← Back to Recommendations
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Book This Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
