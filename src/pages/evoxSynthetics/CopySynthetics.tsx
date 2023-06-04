import { useNavigate } from "react-router-dom";

import useSWR from "swr";
import { getAccountStatus } from "../../services/synthetics";

import { CustomButton } from "../../components";
import { EvoxSynteticsLogo } from "../../assets";

const CopySynthetics = (): JSX.Element => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") ?? "";
  const { data: status } = useSWR("/synthetic/accountStatus", () =>
    getAccountStatus(token)
  );
  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-10 px-5  md:px-20">
      <img src={EvoxSynteticsLogo} alt="Evox syntetics logo" />
      {status === "Shopping" ? (
        <>
          <p className="text-[16px] text-darkGray font-poppins font-normal">
            Primero debes realizar el pago de tu cuenta de sinteticos para poder
            visualizarla!
          </p>
          <CustomButton
            label="Realizar el pago de tu cuenta de sintéticos"
            theme={{
              bg: "bg-blue",
              color: "text-white",
              aditionalStyles: "",
            }}
            type="button"
            onClick={() => navigate("/dashboard/bridgeFunds/syntheticsPayment")}
          />
        </>
      ) : status === "Pending" ? (
        <p>
          Tu cuenta de sinteticos esta pendiente a verificación porfavor espera!
        </p>
      ) : (
        <p>Mis cuentas</p>
      )}
    </div>
  );
};

export default CopySynthetics;
