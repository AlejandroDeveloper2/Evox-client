import {
  Banner1Mobile,
  Banner1PC,
  Banner2Mobile,
  Banner2PC,
  Banner3Mobile,
  Banner3PC,
  Banner4Mobile,
  Banner4PC,
} from "../../../assets";

import { CarouselImage } from "../../../types";

const pcImages: CarouselImage[] = [
  {
    src: Banner1PC,
    alt: "Evox banner Cuentas MAM",
  },
  {
    src: Banner2PC,
    alt: "Evox banner synthetics",
  },
  {
    src: Banner3PC,
    alt: "Evox banner bridge markets",
  },
  {
    src: Banner4PC,
    alt: "Evox banner bridge funds",
  },
];

const mobileImages: CarouselImage[] = [
  {
    src: Banner1Mobile,
    alt: "Evox banner Cuentas MAM",
  },
  {
    src: Banner2Mobile,
    alt: "Evox banner synthetics",
  },
  {
    src: Banner3Mobile,
    alt: "Evox banner bridge markets",
  },
  {
    src: Banner4Mobile,
    alt: "Evox banner bridge funds",
  },
];
export { pcImages, mobileImages };
