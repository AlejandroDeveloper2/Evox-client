import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { useApp, useAuth } from "../../hooks";

import { CustomButton } from "..";

const InvitationLink = (): JSX.Element => {
  const { auth } = useAuth();
  const { setToast } = useApp();

  return (
    <section className="w-full px-10 flex flex-col gap-3">
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
        font-montserrat text-darkBlue dark:text-white font-extrabold"
      >
        My invitation link
      </h1>
      <div
        className="rounded-xl shadow-xl  w-full bg-primary-color p-4 flex lg:justify-between 
        dark:bg-mediumGray items-center lg:flex-row flex-col gap-3 lg:gap-0 justify-center"
      >
        <p className=" font-montserrat font-medium dark:text-white text-darkGray lg:text-[20px]">
          {auth?.refLink}
        </p>
        <CustomButton
          type="button"
          label="Copy"
          theme={{
            bg: "bg-blue dark:bg-purple",
            color: "text-white",
            aditionalStyles: "w-[5rem] lg:w-[6rem]",
          }}
          icon={faCopy}
          onClick={() =>
            setToast({
              message: "Link copied!",
              type: "success",
              visible: true,
            })
          }
        />
      </div>
    </section>
  );
};

export default InvitationLink;
