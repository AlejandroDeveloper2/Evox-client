import { faCoins } from "@fortawesome/free-solid-svg-icons";

import { CustomButton } from "..";
import { useEvoxServices } from "../../hooks";

const SyntheticAccountList = (): JSX.Element => {
  const { userSyntheticAccount } = useEvoxServices();
  return (
    <div className="w-full flex flex-col gap-3 items-start justify-center">
      <div className="w-full border-b-[1px] border-gray py-3">
        {" "}
        <h2 className="text-blue font-poppins font-extrabold text-left text-[18px]">
          Mis Cuentas:
        </h2>
      </div>
      <div className="w-full flex flex-col gap-3 items-start justify-center py-4">
        <p className="md:text-[18px] text-[16px] text-darkGray font-bold text-left font-poppins">
          #1 {userSyntheticAccount.login}
        </p>
        <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
          <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
            Pago pendiente:
          </label>
          <input
            type="text"
            id="login"
            name="login"
            value={"$ 450"}
            readOnly
            className="outline-none bg-gray py-2 px-3 rounded-xl border-[1px] border-gray w-3/4 text-darkGray 
            font-extrabold font-poppins text-center"
          />
        </div>
        <CustomButton
          type={"button"}
          label={"Realizar Pago"}
          theme={{
            bg: "bg-blue",
            color: "text-white",
            aditionalStyles: "w-3/5 mx-auto mt-10",
          }}
          disabled={true}
          onClick={() => console.log("press")}
          icon={faCoins}
        />
      </div>
    </div>
  );
};

export default SyntheticAccountList;
