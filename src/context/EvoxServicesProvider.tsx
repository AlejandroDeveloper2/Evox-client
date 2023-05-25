import React from "react";

import { useApp, useAuth } from "../hooks";
import { EvoxContextType, Referral } from "../types";
import { getUserReferrals } from "../services/userReferrals";

const EvoxServicesContext = React.createContext<EvoxContextType>(
  {} as EvoxContextType
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const EvoxServicesProvider = ({ children }: Props) => {
  const [userReferrals, setUserReferrals] = React.useState<Referral[]>([]);
  const { setLoader, setIsValidating } = useApp();
  const { auth } = useAuth();

  const getAllUserReferrals = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoader({ loading: true, message: "Cargando referidos..." });
      setIsValidating(true);
      await getUserReferrals(token).then((res) => {
        setIsValidating(false);
        setLoader({ loading: false, message: "" });
        const newReferrals = res.filter(
          (referral) => referral.userName !== auth?.sub
        );
        setUserReferrals(newReferrals);
      });
    }
  };

  return (
    <EvoxServicesContext.Provider
      value={{
        userReferrals,
        getAllUserReferrals,
      }}
    >
      {children}
    </EvoxServicesContext.Provider>
  );
};

export { EvoxServicesProvider };
export default EvoxServicesContext;
