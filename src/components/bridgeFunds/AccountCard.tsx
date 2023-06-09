import { useNavigate } from "react-router-dom";

import { BridgeFundsAccount } from "../../types";
import { useBridgeAccount, useEvoxServices } from "../../hooks";

import { CustomButton } from "..";

const AccountCard = (props: BridgeFundsAccount): JSX.Element => {
  const { isChecked, accountQuantity, price, handleChange, handleClick } =
    useBridgeAccount(props.price);
  const { getBridgeAccountFeatures } = useEvoxServices();
  const navigate = useNavigate();
  const features = props.description.split(",");

  return (
    <div
      className="w-full rounded-lg shadow-md border-[1px] border-violet 
      relative flex flex-col  justify-center items-start gap-5 px-5 pt-20 pb-10"
    >
      <span
        className="w-[20rem] py-2 bg-gradient-to-r from-mediumBlue to-lightBlue text-white
        font-poppins font-extrabold text-center flex justify-center items-center absolute top-[-1rem]
        left-0 right-0 m-auto text-[16px] rounded-md px-3 uppercase"
      >
        {props.title}
      </span>
      {features.map((feature, index) => (
        <p
          key={index}
          className="text-[12px] text-darkGray font-poppins font-normal"
        >
          • {feature}
        </p>
      ))}
      <div className="w-full flex justify-between items-center">
        <p className="text-[12px] text-darkGray font-poppins font-normal">
          • Acepto{" "}
          <span className="text-blue font-extrabold">
            condiciones de cuenta
          </span>
        </p>
        <input
          type="checkbox"
          name="accountConditions"
          checked={isChecked}
          className="outline-none bg-lightGray border-[2px] border-mediumGray p-2"
          onChange={handleClick}
        />
      </div>
      <div className="flex gap-5 justify-center items-center py-5 w-full">
        <label className="text-[12px] text-darkGray font-poppins font-extrabold">
          Cantidad
        </label>
        <input
          type="number"
          name="accountQuantity"
          value={accountQuantity}
          onChange={handleChange}
          className="text-[24px] text-darkGray font-extrabold font-poppins w-[3rem] 
          outline-none bg-lightGray [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
          [&::-webkit-inner-spin-button]:appearance-none"
          min={1}
          max={99}
        />
        <span className="text-[18px] text-darkGray font-extrabold font-poppins">
          {price} {props.currency}
        </span>
      </div>
      <CustomButton
        label="Seleccionar"
        theme={{
          bg: "bg-blue",
          color: "text-white",
          aditionalStyles: "m-auto w-full md:w-3/5 h-[2rem]",
        }}
        type="button"
        onClick={() => {
          getBridgeAccountFeatures(props.id, parseInt(accountQuantity));
          navigate("/dashboard/bridgeFunds/bridgeFundsPayment");
        }}
        disabled={!isChecked}
      />
    </div>
  );
};

export default AccountCard;
