import {
  faCheck,
  faInfoCircle,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";

import { getBridgeFundsAccountStatus } from "../../services/bridgeFunds";

import { CopyLink, MTPlatforms } from "../../components";
import { Navigate } from "react-router-dom";

const MyAccounts = (): JSX.Element => {
  const token = localStorage.getItem("token") ?? "";
  const { data: status } = useSWR("/bridgeFunds/accountStatus", () =>
    getBridgeFundsAccountStatus(token)
  );

  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-20 px-5  md:px-20">
      {status === "Shopping" ? (
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
            <div className="w-full border-b-[1px] border-gray flex justify-between items-center py-2">
              <label className="md:text-[18px] text-[16px] text-blue font-extrabold text-left font-poppins w-[70%]">
                Cuenta 10.500 USD
              </label>
              <label className="md:text-[18px] text-[16px] text-blue font-extrabold text-left font-poppins w-[30%]">
                Estado
              </label>
            </div>
            <div className="w-full grid grid-cols-2 py-3 place-items-start justify-items-center">
              <div className="w-full flex  flex-col gap-4 justify-center items-start ">
                <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
                  <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
                    Login:
                  </label>
                  <CopyLink link={"1014622"} />
                </div>
                <div className="grid  grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
                  <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
                    Contraseña:
                  </label>
                  <CopyLink link={"sdklsadkk"} />
                </div>
              </div>
              <label
                className="md:text-[18px] text-[16px] text-darkGray font-extrabold text-left 
                font-poppins flex gap-3 items-center justify-start"
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-blue md:text-[40px] text-[30px]"
                />
                Activo
              </label>
            </div>
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
