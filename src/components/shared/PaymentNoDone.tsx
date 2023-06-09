import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { CopyLink, CustomButton } from "..";
import { BridgeFundsLogo } from "../../assets";

interface PaymentNoDaneProps {
  paymentLink: string;
  label: string;
  type?: "synthetics" | "brigeFunds";
}

const PaymentNoDone = (props: PaymentNoDaneProps): JSX.Element => {
  if (props.type === "synthetics") return <SyntheticsPresentation {...props} />;
  return <BrigeFundsPresentation {...props} />;
};

const SyntheticsPresentation = (props: PaymentNoDaneProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center gap-5 w-full py-4">
      <h1 className="text-[20px] text-darkGray font-poppins font-bold  text-center">
        Solicitud Operación Trading Sintéticos
      </h1>
      <h1 className="text-[20px] text-darkGray font-poppins font-bold  text-center">
        Paso#1
      </h1>
      <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-center">
        Crea tu cuenta en nuestro broker recomendado{" "}
        <span className="font-bold">DERIV</span> y realiza tu primer depósito
      </p>
      <CustomButton
        label={"Ir a www.deriv.com"}
        theme={{
          bg: "bg-blue",
          color: "text-white",
          aditionalStyles: "rounded-[6rem]",
        }}
        type="externalLink"
        externalLink="https://deriv.com/es/signup/"
      />
      <p className="text-[14px] text-darkGray font-poppins font-normal text-center">
        En caso de requerir ayuda puedes usar nuestro chat bot
      </p>
      <CustomButton
        label={""}
        theme={{
          bg: "bg-lightBlue",
          color: "text-white",
          aditionalStyles: "rounded-[50%]",
        }}
        type="externalLink"
        externalLink="https://t.me/evoXvirtualbot"
        icon={faPaperPlane}
      />
      <h1 className="text-[20px] text-darkGray font-poppins font-bold  text-center">
        Paso#2
      </h1>
      <p className="text-[16px] text-darkGray font-poppins font-normal md:w-3/4 text-center flex flex-col gap-2">
        Realiza el pago mensual de $15 USD de servicio de VPS para el correcto
        funcionamiento de tu cuenta.
      </p>
      <CustomButton
        label={"Realizar pago"}
        theme={{
          bg: "bg-blue",
          color: "text-white",
          aditionalStyles: "rounded-[6rem]",
        }}
        type="button"
        onClick={() => navigate(props.paymentLink)}
      />
    </section>
  );
};

const BrigeFundsPresentation = (props: PaymentNoDaneProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center gap-5 w-full py-4">
      <h1 className="text-[36px] md:text-[40px] text-darkGray font-poppins font-bold  text-center flex gap-4 items-center justify-center">
        <img src={BridgeFundsLogo} alt="Bridge funds logo" />
        Bridge Funds
      </h1>
      <p className="text-[18px] text-darkGray font-poppins font-bold md:w-3/5 text-center">
        Obtén acceso a tu cuenta fondeada en minutos consigue el profit que
        deseas sin arriesgar tu capital
      </p>
      <h1 className="text-[20px] text-darkGray font-poppins font-bold  text-center">
        Paso#1
      </h1>
      <p className="text-[18px] text-darkGray font-poppins font-normal md:w-3/4 text-center">
        Crea tu cuenta con el siguiente link en nuestro Broker recomendado,
        Bridge Markets 👇.
      </p>
      <CustomButton
        label={"Ir a bridgefunds.eu"}
        theme={{
          bg: "bg-blue",
          color: "text-white",
          aditionalStyles: "rounded-[6rem]",
        }}
        type="externalLink"
        externalLink="https://trading.bridgemarkets.eu/register/?ibid=1118"
      />
      <h1 className="text-[20px] text-darkGray font-poppins font-bold  text-center">
        Paso#2
      </h1>
      <p className="text-[18px] text-darkGray font-poppins font-normal text-center">
        Ahora has tu depósito y activa tu cuenta de fondeo. Es sencillo y lo
        único que necesitas es: Hacer tu deposito y en el correo que envías para
        activación de tu deposito escribe:{" "}
        <span className="font-bold">
          Quiero activar una cuenta de fondeo de (pones el valor)
        </span>
      </p>
      <CopyLink link="finance@bridgemarkets.eu" />
      <CustomButton
        label={"Tipos de cuentas"}
        theme={{
          bg: "bg-gradient-to-r from-lightBlue to-mediumBlue",
          color: "text-white",
          aditionalStyles: "rounded-[6rem]",
        }}
        type="button"
        onClick={() => navigate(props.paymentLink)}
      />
    </section>
  );
};

export default PaymentNoDone;
