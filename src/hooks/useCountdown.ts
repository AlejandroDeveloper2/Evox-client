import React from "react";

const useCountdown = () => {
  const [timerDays, setTimerDays] = React.useState<string>("00");
  const [timerHours, setTimerHours] = React.useState<string>("00");
  const [timerMinutes, setTimerMinutes] = React.useState<string>("00");
  const [timerSeconds, setTimerSeconds] = React.useState<string>("00");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let interval: any = React.useRef<number>();

  const startTimer = () => {
    const countdownDate = new Date("May 15 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance: number = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // // if(distance  < 0){

      // // }else{

      // }
    }, 1000);
  };
};

export default useCountdown;
