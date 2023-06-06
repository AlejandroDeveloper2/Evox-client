import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

import useSWR from "swr";
import {
  getAccountStatus,
  getTransactionStatus,
} from "../../services/synthetics";

import { LinkAccount, PaymentNoDone } from "../../components";
import { EvoxSynteticsLogo } from "../../assets";

const CopySynthetics = (): JSX.Element => {
  const token = localStorage.getItem("token") ?? "";
  const { data: status } = useSWR("/synthetic/accountStatus", () =>
    getAccountStatus(token)
  );
  const { data: transaction } = useSWR("/synthetic/transaction", () =>
    getTransactionStatus(token)
  );

  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-10 px-5  md:px-20">
      <img src={EvoxSynteticsLogo} alt="Evox syntetics logo" />
      {status === "Shopping" ? (
        <PaymentNoDone
          paymentLink="/dashboard/evoxSynthetics/syntheticsPayment"
          label="Realizar el pago de tu cuenta de sintéticos"
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
        <Navigate
          to={`/dashboard/bridgeFunds/bridgeFundsPayment/${transaction?.transaction}`}
        />
      ) : (
        <LinkAccount />
      )}
    </div>
  );
};

export default CopySynthetics;
