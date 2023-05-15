import { CountDownElement } from "../../../types";

export const getCountDownElements = (
  timerValues: number[]
): CountDownElement[] => {
  const countDownElements: CountDownElement[] = [
    {
      value: timerValues[0],
      label: "Days",
    },
    {
      value: timerValues[1],
      label: "Hours",
    },
    {
      value: timerValues[2],
      label: "Minutes",
    },
    {
      value: timerValues[3],
      label: "Seconds",
    },
  ];
  return countDownElements;
};
