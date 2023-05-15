import { CountDownElement } from "../../../types";

export const getCountDownElements = (): CountDownElement[] => {
  const countDownElements: CountDownElement[] = [
    {
      value: 0,
      label: "Days",
    },
    {
      value: 0,
      label: "Hours",
    },
    {
      value: 0,
      label: "Minutes",
    },
    {
      value: 0,
      label: "Seconds",
    },
  ];
  return countDownElements;
};
