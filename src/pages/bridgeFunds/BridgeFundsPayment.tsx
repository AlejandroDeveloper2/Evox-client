import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";

import { useBridgeFundsPayment } from "../../hooks";
import { getBridgeFundsAccountStatus } from "../../services/bridgeFunds";
import { getToken } from "../../utils";

import { QrBridgeFundsImage, TetherLogo } from "../../assets";
import { CopyLink, CustomButton } from "../../components";
import { Navigate } from "react-router-dom";

interface Props {
  error: boolean;
}

const BridgeFundsPayment = ({ error }: Props): JSX.Element => {
  const { transactionHash, isButtonDisable, onChange, handleSubmit } =
    useBridgeFundsPayment(error);
  const token = getToken();
  const { data: status } = useSWR(
    "/bridgeFunds/accountStatus",
    () => getBridgeFundsAccountStatus(token),
    {
      refreshInterval: 100,
    }
  );

  if (status === "Error" || status === "Shopping")
    return (
      <div className="relative flex flex-col pt-20 pb-10 items-start gap-20 px-5  md:px-20">
        {error ? (
          <p className="w-full py-4 px-6 bg-error text-white font-poppins text-[18px] rounded-md text-center">
            La transacción es invalida por favor ingresela nuevamente!
          </p>
        ) : null}
        <h1 className="text-[20px] md:text-[24px] text-darkBlue font-extrabold text-center font-poppins align-middle">
          <FontAwesomeIcon
            icon={faCreditCard}
            className="mr-5 text-violet text-[50px] align-middle"
          />
          Pagos
        </h1>
        <div className="w-full flex flex-col gap-5 items-start">
          <p className="flex flex-col gap-1 items-start text-[18px] font-poppins font-extrabold text-darkBlue">
            <span>Criptomonedas</span>
            <span className="font-normal">Rellene los valores requeridos</span>
          </p>
          <div className="grid grid-cols-6 md:grid-cols-12">
            <span className="font-medium text-[18px] font-poppins text-darkBlue col-span-4">
              USDT Red TRC20
            </span>
            <div className="flex flex-col gap-5 items-start justify-center col-span-8">
              <p className="text-left text-[18px] font-poppins font-normal text-darkBlue">
                Utilice la siguiente red y ewallet para enviar su pago por USDT,
                debes enviar el valor exacto a depositar fuera de comisiones:
              </p>
              <span className="text-left text-[20px] text-darkBlue font-poppins font-semibold">
                • Red TRC20
              </span>
              <div className="flex gap-2 justify-center">
                <img
                  src={QrBridgeFundsImage}
                  alt="Evox qr"
                  className="object-contain"
                />
                <img
                  src={TetherLogo}
                  alt="Evox Tether logo"
                  className="object-contain"
                />
              </div>
              <CopyLink link={"TPnZsRPxjgskZ2cz3Lk4PtkJXBuXrrvcqp"} />
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col gap-3 justify-center items-center w-full">
                  <label
                    htmlFor="transactionId"
                    className="text-[18px] text-darkGray font-poppins font-normal"
                  >
                    ID de transacción o hash (obligatorio)
                  </label>
                  <input
                    type="text"
                    id="transactionId"
                    name="transaction"
                    value={transactionHash.transaction}
                    onChange={onChange}
                    className="outline-none bg-white py-2 px-3 rounded-xl border-[1px] border-gray w-full"
                  />
                  <CustomButton
                    label="Ya he enviado el pago por USDT"
                    theme={{
                      bg: "bg-blue",
                      color: "text-white",
                      aditionalStyles: "w-full h-[3rem] mt-3",
                    }}
                    type="submit"
                    disabled={isButtonDisable}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  return <Navigate to="/dashboard/bridgeFunds/myAccounts" />;
};

export default BridgeFundsPayment;
