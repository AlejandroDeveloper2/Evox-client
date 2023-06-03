import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { QrImagen, TetherLogo } from "../../assets";
import { CopyLink, CustomButton } from "../../components";

const SyntheticsPayment = (): JSX.Element => {
  return (
    <div className="relative flex flex-col pt-20 pb-10 items-start gap-20 px-5  md:px-20">
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
        <div className="grid grid-cols-1 md:grid-cols-2">
          <span className="font-medium text-[18px] font-poppins text-darkBlue">
            USDT Red TRC20
          </span>
          <div className="flex flex-col gap-5 items-start justify-center">
            <p className="text-left text-[18px] font-poppins font-normal text-darkBlue">
              Utilice la siguiente red y ewallet para enviar su pago por USDT,
              debes enviar el valor exacto a depositar fuera de comisiones:
            </p>
            <span className="text-left text-[20px] text-darkBlue font-poppins font-semibold">
              • Red TRC20
            </span>
            <div className="flex gap-2 justify-center">
              <img src={QrImagen} alt="Evox qr" className="object-contain" />
              <img
                src={TetherLogo}
                alt="Evox Tether logo"
                className="object-contain"
              />
            </div>
            <CopyLink link={"LIJKSADNCIAJSDNCPASD1231545ASDOJCHASD12"} />
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
                name="transactionId"
                value=""
                className="outline-none bg-white py-2 px-3 rounded-xl border-[1px] border-gray w-full"
              />
              <CustomButton
                label="Ya he enviado el pago por USDT"
                theme={{
                  bg: "bg-blue",
                  color: "text-white",
                  aditionalStyles: "w-full h-[3rem] mt-3",
                }}
                type="button"
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticsPayment;
