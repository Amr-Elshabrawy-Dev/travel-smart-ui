"use client";

import { useState } from "react";
import Icon from "../Icon";

interface ImageGalleryProps {
  images: string[];
  name: string;
  country: string;
  region: string;
}

export default function ImageGallery({
  images,
  name,
  country,
  region,
}: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-96 bg-gray-200 overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`${name} - ${country}`}
        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
      />

      {/* Navigation arrows */}
      {images.length > 1 && (
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
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 focus:scale-125 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentImageIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              type="button"
              aria-label={`Show image ${index + 1} of ${images.length}`}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 z-0" />
      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-xl">
          {country}, {region}
        </p>
      </div>
    </div>
  );
}
