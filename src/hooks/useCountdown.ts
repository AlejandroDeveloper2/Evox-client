import React from "react";

import { CountDownHook } from "../types";

const useCountdown = (): CountDownHook => {
  const [timerDays, setTimerDays] = React.useState<number>(0);
  const [timerHours, setTimerHours] = React.useState<number>(0);
  const [timerMinutes, setTimerMinutes] = React.useState<number>(0);
  const [timerSeconds, setTimerSeconds] = React.useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  let interval: any = React.useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 17 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance: number = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  React.useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });

  return {
    timerValues: [timerDays, timerHours, timerMinutes, timerSeconds],
  };
};

export default useCountdown;
