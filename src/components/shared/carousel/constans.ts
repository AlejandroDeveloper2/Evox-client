import { Banner1PC, Banner2PC, Banner3PC } from "../../../assets";

interface CarouselImage {
  src: string;
  alt: string;
}

const pcImages: CarouselImage[] = [
  {
    src: Banner1PC,
    alt: "Evox banner",
  },
  {
    src: Banner2PC,
    alt: "Evox banner",
  },
  {
    src: Banner3PC,
    alt: "Evox banner",
  },
];
export { pcImages };
