import React from "react";

import { calculateTotalToPay } from "../../utils";

import { CustomButton } from "..";
import { useNavigate } from "react-router-dom";

const AccountCard = (): JSX.Element => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [accountQuantity, setAccountQuantity] = React.useState<string>("1");
  const [singlePrice] = React.useState("500");
  const [price, setPrice] = React.useState<string>(singlePrice);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (window.parseInt(e.target.value) > 0) setAccountQuantity(e.target.value);
  };

  const handleClick = (): void => {
    setIsChecked(!isChecked);
  };

  React.useEffect(() => {
    const total = calculateTotalToPay(singlePrice, accountQuantity);
    setPrice(total.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountQuantity]);

  return (
    <div
      className="w-full md:w-3/4 rounded-lg shadow-md border-[1px] border-violet 
    relative flex flex-col  justify-center items-start gap-3 px-5 pt-20 pb-10"
    >
      <span
        className="w-[14rem] py-2 bg-gradient-to-r from-mediumBlue to-lightBlue text-white
        font-poppins font-extrabold text-center flex justify-center items-center absolute top-[-1rem]
        left-0 right-0 m-auto text-[16px] rounded-md px-3 uppercase"
      >
        Cuenta $10.500 USD
      </span>
      <p className="text-[12px] text-darkGray font-poppins font-normal">
        • Retiros desde el primer dia.
      </p>
      <p className="text-[12px] text-darkGray font-poppins font-normal">
        • Sin límite de operaciones.
      </p>
      <p className="text-[12px] text-darkGray font-poppins font-normal">
        • Máximo drawdawn <span className="font-extrabold">2% diario.</span>
      </p>
      <p className="text-[12px] text-darkGray font-poppins font-normal">
        • Máxima drawdown <span className="font-extrabold">5% mensual.</span>
      </p>
      <p className="text-[12px] text-darkGray font-poppins font-normal">
        • Recuerda que debes operar todos los días (Lunes a Viernes).
      </p>
      <p className="text-[12px] text-darkGray font-poppins font-normal">
        • El volumen mínimo de operación es de 0,1 lotes.
      </p>
      <p className="text-[12px] text-darkGray font-poppins font-normal">
        • No está permitido el HFT (High Frecuency Trading) cada operación debe
        durar como mínimo 1m 30 seg
      </p>
      <p className="text-[12px] text-darkGray font-poppins font-normal">
        • Operativa válida en mercado FOREX & XAU
      </p>
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
          className="text-[24px] text-darkGray font-extrabold font-poppins w-[3rem] outline-none bg-lightGray"
          min={1}
          max={99}
        />
        <span className="text-[18px] text-darkGray font-extrabold font-poppins">
          {price} USD
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
        onClick={() => navigate("/dashboard/bridgeFunds/syntheticsPayment")}
        disabled={!isChecked}
      />
    </div>
  );
};

export default AccountCard;
