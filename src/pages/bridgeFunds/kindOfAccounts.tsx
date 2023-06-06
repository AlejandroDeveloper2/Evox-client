/* eslint-disable react-hooks/rules-of-hooks */
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useApp, useEvoxServices, useFetchData } from "../../hooks";

import { AccountCard, Spinner } from "../../components";

const kindOfAccounts = (): JSX.Element => {
  const { getBridgeKindOfAccounts, bridgeFundsAccounts } = useEvoxServices();
  const { loading } = useApp();
  useFetchData([{ function: getBridgeKindOfAccounts }]);

  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-20 px-5  md:px-20">
      <h1 className="text-[20px] md:text-[24px] text-darkBlue font-extrabold text-center font-poppins align-middle">
        <FontAwesomeIcon
          icon={faMoneyCheckDollar}
          className="mr-5 text-violet text-[50px] align-middle"
        />
        Tipos de cuentas
      </h1>
      {loading.visible ? (
        <Spinner color="text-darkBlue" />
      ) : (
        <section className="flex flex-row flex-wrap gap-5 items-center justify-center">
          {bridgeFundsAccounts.map((account, index) => (
            <AccountCard key={index} {...account} />
          ))}
        </section>
      )}
    </div>
  );
};

export default kindOfAccounts;
