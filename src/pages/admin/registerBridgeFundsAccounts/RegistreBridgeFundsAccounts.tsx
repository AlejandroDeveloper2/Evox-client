import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

import { validateRegistration } from "../../../services/bridgeFunds";
import { getQuantityAndIdBridgeFunds, getToken } from "../../../utils";

import { BridgeFundsAccountForm, Spinner } from "../../../components";

const RegistreBridgeFundsAccounts = (): JSX.Element => {
  const token = getToken();
  const location = useLocation();
  const [quantity, id] = getQuantityAndIdBridgeFunds(location);

  const { data: isValid, isLoading } = useSWR(
    "/bridgeFunds/validateRegistration",
    () => validateRegistration(token, id),
    {
      refreshInterval: 100,
    }
  );

  return (
    <div className="relative flex flex-col pt-10 pb-10 items-center gap-10 px-5  md:px-20">
      <h1 className="text-[20px] md:text-[24px] text-darkBlue font-extrabold text-center font-poppins align-middle">
        <FontAwesomeIcon
          icon={faList}
          className="mr-5 text-violet text-[50px] align-middle"
        />
        Registro de cuentas de fondeo
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-10">
        {isLoading ? (
          <Spinner message="Validando estado..." color="text-darkBlue" />
        ) : isValid ? (
          <BridgeFundsAccountForm id={id} quantity={quantity} />
        ) : (
          <p className="text-[18px] md:text-[22px] text-darkBlue font-bold text-center font-poppins align-middle">
            Ya registraste las cuentas de fondeo de este usuario!
          </p>
        )}
      </div>
    </div>
  );
};

export default RegistreBridgeFundsAccounts;
