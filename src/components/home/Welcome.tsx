import { CountDown } from "..";

import { ImageHomeWelcome } from "../../assets";

const Welcome = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col lg:px-10 px-0 items-center gap-5">
      <img
        src={ImageHomeWelcome}
        alt="Welcome to Evox"
        className="w-1/2 h-1/2 animate-wiggle"
      />
      <h1
        className="text-darkGray lg:text-[40px]  text-[30px] font-montserrat 
      font-bold dark:text-white text-center"
      >
        Welcome to EVOX Revolution!
      </h1>
      <p
        className="text-darkBlue lg:text-[24px] text-[20px] font-montserrat 
        font-medium text-center w-3/4 dark:text-purple"
      >
        Get ready for enjoying of the most biggest personal and financial
        transformation ecosystem!
      </p>
      <p
        className="text-lightBlue lg:text-[20px] text-[16px] font-montserrat 
        font-normal text-center w-3/4 dark:text-white"
      >
        On May 26th you will be able to choose whatever our services!
      </p>
      <CountDown />
    </section>
  );
};

export default Welcome;
