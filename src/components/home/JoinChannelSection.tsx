import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "..";

import { HomeImage1 } from "../../assets";

const JoinChannelSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col  gap-4 items-center justify-center md:flex-row px-10">
      <div className="w-full flex flex-col gap-4 items-center md:items-start justify-center">
        <h1
          className="md:text-[32px] text-[24px] text-center md:text-left font-montserrat 
      text-darkBlue dark:text-white font-extrabold flex flex-col gap-2"
        >
          Live Trading
          <span className="text-[20px] md:text-[24px] font-montserrat font-medium">
            Trade with trading professionals
          </span>
        </h1>
        <CustomButton
          type="button"
          label="Join Channel"
          theme={{
            bg: "bg-blue dark:bg-purple",
            color: "text-white",
            aditionalStyles: "w-full lg:w-1/3 md:w-3/4",
          }}
          icon={faPaperPlane}
        />
      </div>
      <img src={HomeImage1} alt="Live Trading" className="animate-wiggle" />
    </section>
  );
};

export default JoinChannelSection;
