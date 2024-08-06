import React, { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";

interface CarouselProps {
  images: string[];
}

const Carrousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <div className="relative w-full h-full">
      <div className="relative h-120 overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div className="absolute left-2 top-1/2 border border-custom-blue-ligth w-14 h-14 transform -translate-y-1/2 bg-white text-white p-2 rounded-full shadow-lg "></div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 border border-custom-blue-ligth w-14 h-14 transform -translate-y-1/2 bg-white text-white p-2 rounded-full shadow-lg hover:bg-custom-blue-ligth hover:bg-opacity-10"
      >
        <Icon
          icon="iconamoon:arrow-left-2-light"
          className="text-custom-blue-ligth w-7 h-7 ml-1"
        />
      </button>
      <div className="absolute right-2 top-1/2 border border-custom-blue-ligth w-14 h-14 transform -translate-y-1/2 bg-white text-white p-2 rounded-full shadow-lg"></div>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 border border-custom-blue-ligth w-14 h-14 transform -translate-y-1/2 bg-white text-white p-2 rounded-full shadow-lg hover:bg-custom-blue-ligth hover:bg-opacity-10"
      >
        <Icon
          icon="iconamoon:arrow-right-2-light"
          className="text-custom-blue-ligth w-7 h-7 ml-1"
        />
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`top-0 w-4 h-4 ml-4 rounded-full ${index === currentIndex ? "bg-custom-blue-ligth" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
