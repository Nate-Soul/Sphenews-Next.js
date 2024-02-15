"use client"

import { useState, useEffect } from "react";

const useCarousel = (carouselItems, duration = 3000) => {
    
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? carouselItems - 1 : prev - 1));
  }
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === carouselItems - 1 ? 0 : prev + 1 ));
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  useEffect(() => {
    const timer = setTimeout(
      nextSlide, duration
    )
  return () => {
    clearTimeout(timer);
  }
  }, [nextSlide]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide
  }

}

export default useCarousel;