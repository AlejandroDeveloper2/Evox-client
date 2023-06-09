import { faInfoCircle, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";
import useSWR from "swr";

import {
  getBridgeFundsAccountStatus,
  getUserBridgeFundsAccounts,
} from "../../services/bridgeFunds";

import { AccountList, MTPlatforms, Spinner } from "../../components";

import { BridgeFundsLogo } from "../../assets";

const MyAccounts = (): JSX.Element => {
  const token = localStorage.getItem("token") ?? "";
  const { data: status, isLoading: isLoadingData } = useSWR(
    "/bridgeFunds/accountStatus",
    () => getBridgeFundsAccountStatus(token),
    {
      refreshInterval: 100,
    }
  );
  const { data: accounts, isLoading } = useSWR(
    "bridgeFunds/getAccounts",
    () => getUserBridgeFundsAccounts(token),
    {
      refreshInterval: 100,
    }
  );

  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-20 px-5  md:px-20">
      <h1 className="text-[36px] md:text-[40px] text-darkGray font-poppins font-bold  text-center flex gap-4 items-center justify-center">
        <img src={BridgeFundsLogo} alt="Bridge funds logo" />
        Bridge Funds
      </h1>
      {isLoadingData ? (
        <Spinner message="Cargango..." color="text-darkBlue" />
      ) : status === "Shopping" ? (
        <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-center flex flex-col gap-2">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-[50px] text-success"
          />
          No has comprado cuentas de fondeo aún empieza comprando una de tu
          preferencia!
        </p>
      ) : status === "Pending" ? (
        <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-center flex flex-col gap-2">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-[50px] text-success"
          />
          Tu cuenta de fondeo esta pendiente a verificación en las proximas 24
          horas tu cuenta será activada!
        </p>
      ) : status === "Error" ? (
        <Navigate to="/dashboard/bridgeFunds/bridgeFundsPayment/error" />
      ) : (
        <>
          <h1 className="text-[20px] md:text-[24px] text-darkBlue font-extrabold text-center font-poppins align-middle">
            <FontAwesomeIcon
              icon={faList}
              className="mr-5 text-violet text-[50px] align-middle"
            />
            Mis cuentas
          </h1>
          <MTPlatforms />
          {/*Acounts list */}
          <div className="w-full flex flex-col gap-3 justify-center items-center">
            {isLoading ? (
              <Spinner
                message="Cargando tus cuentas de fondeo.."
                color="text-darkBlue"
              />
            ) : (
              accounts?.map((account, index) => (
                <AccountList key={index} {...account} />
              ))
            )}
          </div>
          <p className="text-[16px] text-darkGray font-normal text-left font-poppins w-full">
            Recuerda solo puedes tener un máximo de 2 cuentas activas
          </p>
        </>
      )}
    </div>
  );
};

export default MyAccounts;
