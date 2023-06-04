import { CustomButton } from "..";

const LinkAccountForm = (): JSX.Element => {
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
          value={""}
          // onChange={onChange}
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
          value={""}
          // onChange={onChange}
          className="outline-none bg-white py-2 px-3 rounded-xl border-[1px] border-gray w-full"
        />
      </div>
      <div className="w-full flex justify-start gap-3 items-center">
        <input
          type="checkbox"
          name="accountConditions"
          checked={true}
          className="outline-none bg-lightGray border-[2px] border-mediumGray p-2"
          // onChange={handleClick}
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
      />
    </div>
  );
};

export default LinkAccountForm;
