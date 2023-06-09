import { CustomButton } from "..";

import { useBridgeFundsForm } from "../../hooks";
import { BridgeFundsFormProps } from "../../types";

const BridgeFundsAccountForm = (props: BridgeFundsFormProps): JSX.Element => {
  const { id, quantity } = props;
  const { data, handleChange, sendAccounts, validateFields } =
    useBridgeFundsForm(id, quantity);
  const errorMessage = validateFields();

  return (
    <form
      onSubmit={sendAccounts}
      className="flex w-full flex-col gap-4 justify-center items-center"
    >
      <div className="flex w-full flex-row flex-wrap gap-4 justify-center items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl px-5 py-10 flex flex-col gap-3 w-full md:w-auto"
          >
            <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-8 place-items-center justify-items-start">
              <label className="md:text-[18px] text-[16px] text-darkBlue font-medium text-left font-poppins md:col-span-3">
                Login:
              </label>
              <input
                type="text"
                id="login"
                name={`login-${index}`}
                value={item.login}
                onChange={(e) => handleChange(e, index, "login")}
                className="outline-none bg-white py-2 px-3 rounded-xl border-[1px] border-gray w-full md:col-span-5"
              />
            </div>
            <div className="grid  grid-cols-1 gap-3 md:gap-0 md:grid-cols-8 place-items-center justify-items-start">
              <label className="md:text-[18px] text-[16px] text-darkBlue  font-medium text-left font-poppins md:col-span-3">
                Contraseña:
              </label>
              <input
                type="text"
                id="password"
                name={`password-${index}`}
                value={item.password}
                onChange={(e) => handleChange(e, index, "password")}
                className="outline-none bg-white py-2 px-3 rounded-xl border-[1px] border-gray w-full md:col-span-5"
              />
            </div>
          </div>
        ))}
      </div>
      <CustomButton
        type={"submit"}
        label={"Enviar cuentas"}
        theme={{
          bg: "bg-blue",
          color: "text-white",
          aditionalStyles: "md:w-3/5 w-full",
        }}
        disabled={errorMessage ? true : false}
      />
      {errorMessage ? (
        <p className="text-[18px] font-poppins text-darkGray font-semibold">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
};

export default BridgeFundsAccountForm;
