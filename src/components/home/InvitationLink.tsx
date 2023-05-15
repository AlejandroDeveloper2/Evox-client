import { useAuth } from "../../hooks";

import { CustomButton } from "..";

const InvitationLink = (): JSX.Element => {
  const { auth } = useAuth();
  return (
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
          bg: "bg-blue dark:bg-purple w-[5rem] lg:w-[6rem]",
          color: "text-white",
        }}
      />
    </div>
  );
};

export default InvitationLink;
