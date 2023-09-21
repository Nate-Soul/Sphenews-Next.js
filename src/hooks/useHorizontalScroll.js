"use client"

import { useEffect, useState, useRef } from "react";

const useHorizontalScroll = () => {
  const carouselInnerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const carouselContainer = carouselInnerRef.current;

    setCanScrollLeft(carouselContainer.scrollLeft > 0);
    setCanScrollRight(
      carouselContainer.scrollLeft <
        carouselContainer.scrollWidth - carouselContainer.clientWidth
    );

    const updateScroll = () => {
      setCanScrollLeft(carouselContainer.scrollLeft > 0);
      setCanScrollRight(
        carouselContainer.scrollLeft <
          carouselContainer.scrollWidth - carouselContainer.clientWidth
      );
    };

    carouselContainer.addEventListener("scroll", updateScroll);

    return () => {
      carouselContainer.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const scrollCarousel = (e, direction) => {
    e.preventDefault();
    const carouselContainer = carouselInnerRef.current;
    const carouselWidth = carouselContainer.clientWidth;

    if (direction === "left") {
      carouselContainer.scrollLeft -= carouselWidth;
    } else if (direction === "right") {
      carouselContainer.scrollLeft += carouselWidth;
    }
  };

  return {
    carouselInnerRef,
    canScrollLeft,
    canScrollRight,
    scrollCarousel,
  };
};

export default useHorizontalScroll;