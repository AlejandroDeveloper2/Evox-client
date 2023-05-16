import { CountDownElement } from "../../../types";

export const getCountDownElements = (
  timerValues: number[]
): CountDownElement[] => {
  const countDownElements: CountDownElement[] = [
    {
      value: formatTimerValues(timerValues[0]),
      label: "Days",
    },
    {
      value: formatTimerValues(timerValues[1]),
      label: "Hours",
    },
    {
      value: formatTimerValues(timerValues[2]),
      label: "Minutes",
    },
    {
      value: formatTimerValues(timerValues[3]),
      label: "Seconds",
    },
  ];
  return countDownElements;
};

const formatTimerValues = (timerValue: number): string => {
  const formattedTimerValue =
    timerValue < 10 ? `0${timerValue}` : timerValue.toString();
  return formattedTimerValue;
};
