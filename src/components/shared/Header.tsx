import { faHome } from "@fortawesome/free-solid-svg-icons";

import { CustomButton } from "..";
import { HeaderProps } from "../../types";

const Header = (props: HeaderProps): JSX.Element => {
  const { pageName } = props;
  return (
    <div
      className="w-screen bg-white dark:bg-darkGray h-[5rem] flex justify-center items-center 
      lg:justify-center lg:px-0 fixed z-20 gap-10 md:px-10 px-0"
    >
      <CustomButton
        type={"externalLink"}
        label={"Home"}
        theme={{
          bg: "bg-white",
          color: "text-darkGray",
          aditionalStyles: "w-[7rem] h-[3rem] uppercase",
        }}
        icon={faHome}
        externalLink="https://www.evox.com.co"
      />
      <h1 className="text-darkGray dark:text-white text-[20px] md:text-[22px] text-center font-poppins font-medium uppercase">
        {pageName}
      </h1>
      <div
        className="absolute bottom-0 w-full h-[6px] bg-gradient-to-r from-purple via-mediumBlue 
        to-lightBlue dark:to-mediumBlue dark:from-white left-0 right-0 m-auto"
      ></div>
    </div>
  );
};

export default Header;
