import React from "react";

import { CustomButton } from "..";

const LinkAccountForm = (): JSX.Element => {
  const [accountData, setAccountData] = React.useState({
    login: "",
    password: "",
  });
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };
  const handleCheck = (): void => {
    setIsChecked(!isChecked);
  };
  const validateFields = (): boolean => {
    if (Object.values(accountData).includes("") || !isChecked) return true;
    return false;
  };

  return (
    <div className="w-full flex flex-col gap-5 items-start justify-center">
      <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-left">
        Completa los datos con la información de acceso a tu cuenta Deriv
      </p>
      <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
        <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
          Login:
        </label>
        <input
          type="text"
          id="login"
          name="login"
          value={accountData.login}
          onChange={handleChange}
          className="outline-none bg-white py-2 px-3 rounded-xl border-[1px] border-gray w-full"
        />
      </div>
      <div className="grid  grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
        <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
          Contraseña:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          value={accountData.password}
          onChange={handleChange}
          className="outline-none bg-white py-2 px-3 rounded-xl border-[1px] border-gray w-full"
        />
      </div>
      <div className="w-full flex justify-start gap-3 items-center">
        <input
          type="checkbox"
          name="accountConditions"
          checked={isChecked}
          className="outline-none bg-lightGray border-[2px] border-mediumGray p-2"
          onChange={handleCheck}
        />
        <p className="text-[18px] text-darkGray font-poppins font-normal">
          Acepto{" "}
          <span className="text-blue font-extrabold">
            términos y condiciones
          </span>
        </p>
      </div>
      <CustomButton
        type="button"
        label="Enviar datos"
        theme={{
          bg: "bg-blue",
          color: "text-white",
          aditionalStyles: "w-3/5 m-auto",
        }}
        disabled={validateFields()}
        onClick={() => console.log("pressed")}
      />
    </div>
  );
};

export default LinkAccountForm;
