import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "..";

import { HomeImage1 } from "../../assets";

const JoinChannelSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col-reverse  gap-4 items-center justify-center md:flex-row px-5 md:px-20">
      <div className="w-full flex flex-col gap-4 items-center md:items-start justify-center">
        <h1
          className="md:text-[32px] text-[24px] text-center md:text-left font-poppins 
          text-darkBlue dark:text-white font-extrabold flex flex-col gap-2"
        >
          Bot de telegram Evox
          <span className="text-[20px] md:text-[24px] font-poppins font-medium">
            Unete ya a nuestro chat bot!
          </span>
        </h1>
        <CustomButton
          type="externalLink"
          label="Únete al canal"
          theme={{
            bg: "bg-blue dark:bg-purple",
            color: "text-white",
            aditionalStyles: "w-full ",
          }}
          icon={faPaperPlane}
          externalLink="https://t.me/evoXvirtualbot"
        />
      </div>
      <img
        src={HomeImage1}
        alt="Live Trading"
        className="animate-wiggle md:w-[20rem] md:h-[20rem]"
      />
    </section>
  );
};

export default JoinChannelSection;
