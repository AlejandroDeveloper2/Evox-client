import { TetherLogo } from "../../../assets";

const InputWallet = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-10 justify-center items-center w-full">
      <div className="flex gap-5 justify-center items-center">
        <img src={TetherLogo} alt="Tether evox" />
        <p className="flex flex-col gap-1 items-start font-poppins font-medium text-darkBlue">
          <span className="font-poppins font-extrabold text-[16px]">
            {" "}
            Criptomonedas{" "}
          </span>
          USDT Red TRC20
        </p>
      </div>
      <div
        className="flex flex-col  justify-center w-1/2 items-start border-solid border-primary-color
        border-[1px] rounded-[10px] overflow-hidden p-3 gap-1 dark:bg-mediumGray bg-disabledColor
        hover:border-darkGray dark:hover:border-primary-color"
      >
        <label
          className={`text-black text-opacity-40 text-left font-poppins font-semibold`}
        >
          Tu wallet
        </label>
        <div className="w-full flex flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Dirección de tu billetera"
            name="walletAddress"
            className={`border-none outline-none  w-full text-[14px] font-poppins  
            dark:bg-mediumGray bg-disabledColor dark:placeholder:text-primary-color 
            dark:placeholder:text-opacity-60  dark:text-white`}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default InputWallet;
