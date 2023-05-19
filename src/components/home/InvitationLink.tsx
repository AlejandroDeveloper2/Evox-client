import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { useApp, useAuth } from "../../hooks";
import { copyToDashDoard } from "../../utils";

import { CustomButton } from "..";

const InvitationLink = (): JSX.Element => {
  const { auth } = useAuth();
  const { setToast } = useApp();
  const link = "http:/evox/ref/Diego007";
  return (
    <section className="w-full px-10 flex flex-col gap-3">
      <h1
        className="md:text-[24px] text-[20px] text-center md:text-left 
        font-montserrat text-darkBlue dark:text-white font-extrabold"
      >
        My invitation link
      </h1>
      <div
        className="rounded-xl shadow-xl  w-full bg-primary-color p-4 flex md:justify-between 
        dark:bg-mediumGray items-center md:flex-row flex-col gap-3 md:gap-0 justify-center"
      >
        <p className=" font-montserrat font-medium dark:text-white text-darkGray md:text-[20px]">
          {link}
        </p>
        <CustomButton
          type="button"
          label="Copy"
          theme={{
            bg: "bg-blue dark:bg-purple",
            color: "text-white",
            aditionalStyles: "w-[5rem] md:w-[6rem]",
          }}
          icon={faCopy}
          onClick={() => {
            copyToDashDoard(link, setToast);
          }}
        />
      </div>
    </section>
  );
};

export default InvitationLink;
