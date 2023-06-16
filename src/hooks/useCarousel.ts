/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { CarouselImage } from "../types";
// import { useScreen } from ".";

const useCarousel = (images: CarouselImage[]) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [selectedImage, setSelectedImage] = React.useState<CarouselImage>(
    images[0]
  );

  const selectNewImage = (
    index: number,
    images: CarouselImage[],
    next = true
  ) => {
    const condition: boolean = next ? index < images.length - 1 : index > 0;
    const nextIndex = next
      ? condition
        ? index + 1
        : 0
      : condition
      ? index - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = (): void => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = (): void => {
    selectNewImage(selectedIndex, images);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return {
    selectedImage,
    previous,
    next,
  };
};

export default useCarousel;
