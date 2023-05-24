import { getCountDownElements } from "./constans";
import { useCountdown } from "../../../hooks";

const CountDown = (): JSX.Element => {
  const { timerValues } = useCountdown();
  const countDownElements = getCountDownElements(timerValues);
  return (
    <div
      className="w-full bg-white dark:bg-mediumGray h-[10rem] rounded-xl flex 
      flex-row gap-2 lg:gap-5 items-center justify-center shadow-xl px-3 lg:px-0"
    >
      {countDownElements.map((element, index) => (
        <div key={index} className="flex flex-row gap-2 lg:gap-5 items-center">
          <div
            className="lg:w-[7rem] lg:h-[7rem] dark:bg-purple  bg-blue rounded-lg flex 
            flex-col lg:gap-1 items-center justify-center w-[5rem] h-[5rem] gap-0"
          >
            <h2 className="text-white lg:text-[40px] font-montserrat font-bold text-[20px]">
              {element.value}
            </h2>
            <span className="text-white lg:text-[16px] font-montserrat font-normal text-[12px]">
              {element.label}
            </span>
          </div>
          {index < 3 && (
            <span
              className="dark:text-white lg:text-[50px] text-[25px] text-center 
            font-montserrat font-extrabold text-blue"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountDown;
