import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

import { getAccountStatus } from "../../services/synthetics";

import { LinkAccount, PaymentNoDone, Spinner } from "../../components";
import { EvoxSynteticsLogo } from "../../assets";
import useSWR from "swr";

const CopySynthetics = (): JSX.Element => {
  const token = localStorage.getItem("token") ?? "";
  const { data: status, isLoading } = useSWR(
    "/synthetic/accountStatus",
    () => getAccountStatus(token),
    {
      refreshInterval: 100,
    }
  );

  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-10 px-5  md:px-20">
      <img src={EvoxSynteticsLogo} alt="Evox syntetics logo" />
      {isLoading ? (
        <Spinner message="Cargando..." color="text-darkBlue" />
      ) : status === "Shopping" ? (
        <PaymentNoDone
          paymentLink="/dashboard/evoxSynthetics/syntheticsPayment"
          label="Realizar el pago de tu cuenta de sintéticos"
          type="synthetics"
        />
      ) : status === "Pending" ? (
        <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-center flex flex-col gap-2">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-[50px] text-success"
          />
          Tu cuenta de sinteticos esta pendiente a verificación en las proximas
          24 horas tu cuenta será activada!
        </p>
      ) : status === "Error" ? (
        <Navigate to={`/dashboard/evoxSynthetics/syntheticsPayment/error`} />
      ) : (
        <LinkAccount />
      )}
    </div>
  );
};

export default CopySynthetics;
