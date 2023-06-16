import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import { pcImages, mobileImages } from "./constans";
import { useCarousel, useScreen } from "../../../hooks";
import CustomButton from "../CustomButton";

const Carousel = (): JSX.Element => {
  const screenSize = useScreen();
  const { selectedImage, previous, next } = useCarousel(
    screenSize <= 768 ? mobileImages : pcImages
  );
  return (
    <>
      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
        loading="lazy"
        className="transition-all object-cover w-full"
      />
      <div className="w-full flex justify-between px-0 md:px-1 items-center absolute top-0 md:bottom-0 md:top-0 md:m-auto ">
        <CustomButton
          type={"button"}
          label={""}
          theme={{
            bg: "",
            color: "text-darkBlue",
            aditionalStyles: "w-[3rem] h-[3rem]",
          }}
          icon={faChevronCircleLeft}
          onClick={previous}
        />
        <CustomButton
          type={"button"}
          label={""}
          theme={{
            bg: "",
            color: "text-white",
            aditionalStyles: "w-[3rem] h-[3rem]",
          }}
          icon={faChevronCircleRight}
          onClick={next}
        />
      </div>
    </>
  );
};

export default Carousel;
