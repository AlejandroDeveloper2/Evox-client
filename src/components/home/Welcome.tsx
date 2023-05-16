import { CountDown } from "..";

import { EvoxBanner } from "../../assets";

const Welcome = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col lg:px-10 px-0 items-center gap-5">
      <img
        src={EvoxBanner}
        alt="Welcome to Evox"
        className=" animate-wiggle object-cover"
      />
      <CountDown />
    </section>
  );
};

export default Welcome;
