import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import useSWR from "swr";
import { getAccountStatus } from "../../services/synthetics";

import { CustomButton, LinkAccount } from "../../components";
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
          <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-center flex flex-col gap-2">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-[50px] text-success"
            />
            Primero debes realizar el pago mensual de $15 USD de servicio de VPS
            para el correcto funcionamiento de tu cuenta.
          </p>
          <CustomButton
            label="Realizar el pago de tu cuenta de sintéticos"
            theme={{
              bg: "bg-blue",
              color: "text-white",
              aditionalStyles: "",
            }}
            type="button"
            onClick={() =>
              navigate("/dashboard/evoxSynthetics/syntheticsPayment")
            }
          />
        </>
      ) : status === "Pending" ? (
        <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-center flex flex-col gap-2">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-[50px] text-success"
          />
          Tu cuenta de sinteticos esta pendiente a verificación en las proximas
          24 horas tu cuenta será activada!
        </p>
      ) : (
        <LinkAccount />
      )}
    </div>
  );
};

export default CopySynthetics;
