import { LinkAccountForm } from "..";

const LinkAccount = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-3 items-center w-full">
      <h1
        className="text-[20px] md:text-[24px] text-darkBlue font-extrabold 
            text-center font-poppins align-middle"
      >
        Copy Sintéticos
      </h1>
      <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-center flex flex-col gap-2">
        Recuerda puedas conectar máximo 1 cuenta por usuario de Deriv.
      </p>
      <div className="w-full flex flex-col gap-3 justify-center items-start mt-10">
        <div className="w-full border-b-[1px] border-gray flex justify-start items-center py-2">
          <label className="md:text-[18px] text-[16px] text-blue font-extrabold text-left font-poppins w-[70%]">
            Vincular cuenta nueva
          </label>
        </div>
        <LinkAccountForm />
      </div>
    </section>
  );
};

export default LinkAccount;
