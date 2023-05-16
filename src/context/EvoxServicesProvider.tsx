import React from "react";

import { useApp, useFetchData } from "../hooks";
import { EvoxContextType, Referral } from "../types";
import { getUserReferrals } from "../services/userReferrals";

const EvoxServicesContext = React.createContext<EvoxContextType>(
  {} as EvoxContextType
);

const EvoxServicesProvider = ({ children }: EvoxContextType) => {
  const [userReferrals, setUserReferrals] = React.useState<Referral[]>([]);
  const { setLoader, setIsValidating } = useApp();

  const getAllUserReferrals = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoader({ loading: true, message: "Loading referrals..." });
      setIsValidating(true);
      await getUserReferrals(token).then((res) => {
        setIsValidating(false);
        setLoader({ loading: false, message: "" });
        setUserReferrals(res);
        console.log(res);
      });
    }
  };
  useFetchData([{ function: getAllUserReferrals }]);

  return (
    <EvoxServicesContext.Provider
      value={{
        userReferrals,
      }}
    >
      {children}
    </EvoxServicesContext.Provider>
  );
};

export { EvoxServicesProvider };
export default EvoxServicesContext;
