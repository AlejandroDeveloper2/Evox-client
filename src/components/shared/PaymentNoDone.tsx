import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "..";

interface PaymentNoDaneProps {
  paymentLink: string;
  label: string;
}

const PaymentNoDone = (props: PaymentNoDaneProps): JSX.Element => {
  const navigate = useNavigate();
  return (
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
        label={props.label}
        theme={{
          bg: "bg-blue",
          color: "text-white",
          aditionalStyles: "",
        }}
        type="button"
        onClick={() => navigate(props.paymentLink)}
      />
    </>
  );
};

export default PaymentNoDone;
