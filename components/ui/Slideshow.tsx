"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: string[];
  altPrefix: string;
}

export default function Slideshow({ images, altPrefix }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    let intervalId: NodeJS.Timeout;
    if (!isHovered) {
      intervalId = setInterval(nextSlide, 4500); // Autoplay every 4.5 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered, nextSlide, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="flex flex-col group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slideshow Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0a] rounded-sm border border-white/5 group-hover:border-stone/40 transition-colors duration-500">
        {images.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`${altPrefix} Image ${idx + 1}`}
            fill
            priority={idx === 0} // prioritize only the first image of the slideshow
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-90" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}

        {/* Gradient Overlay for subtle premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent pointer-events-none" />

        {/* Navigation Arrows (Show on desktop hover, light persistent on mobile) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white/70 backdrop-blur-md opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:text-white hover:bg-black/60 z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white/70 backdrop-blur-md opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:text-white hover:bg-black/60 z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </>
        )}
      </div>

      {/* Navigation Dots */}
      {images.length > 1 && (
        <div className="flex justify-start gap-2 mt-4 mb-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-stone" : "w-1.5 bg-stone/30 hover:bg-stone/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
