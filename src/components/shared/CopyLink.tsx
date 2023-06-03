import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { copyToDashDoard } from "../../utils";
import { CopyLinkProps } from "../../types";

import { CustomButton } from "..";
import { useApp } from "../../hooks";

const CopyLink = (props: CopyLinkProps): JSX.Element => {
  const { link, width } = props;
  const { setToast } = useApp();

  return (
    <div
      className={`rounded-xl h-[3rem] ${
        width ? width : "w-full"
      } bg-gray px-5 flex justify-center md:justify-between 
        dark:bg-mediumGray items-center flex-row gap-3 md:gap-0`}
    >
      <p className=" font-poppins font-medium dark:text-white text-darkBlue text-[14px] md:text-[20px] truncate w-full">
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
  );
};

export default CopyLink;
