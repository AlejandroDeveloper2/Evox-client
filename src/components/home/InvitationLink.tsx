import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { useApp, useAuth } from "../../hooks";
import { copyToDashDoard } from "../../utils";

import { CustomButton } from "..";

const InvitationLink = (): JSX.Element => {
  const { auth } = useAuth();
  const { setToast } = useApp();
  const link = auth ? auth.refLink : "link";

  return (
    <section className="w-full px-20 flex flex-col gap-3">
      <h1
        className="md:text-[24px] text-[20px] text-center md:text-left 
        font-poppins text-darkBlue dark:text-white font-extrabold"
      >
        My invitation link
      </h1>
      <div
        className="rounded-xl h-[3rem] w-full bg-gray px-5 flex md:justify-between 
        dark:bg-mediumGray items-center md:flex-row flex-col gap-3 md:gap-0 justify-center"
      >
        <p className=" font-poppins font-medium dark:text-white text-darkBlue md:text-[20px]">
          {link}
        </p>
        <CustomButton
          type="button"
          label=""
          theme={{
            bg: "",
            color: "text-blue",
            aditionalStyles: "w-2 h-2",
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
