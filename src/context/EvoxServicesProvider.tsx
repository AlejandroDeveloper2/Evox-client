import React from "react";

import { useApp, useAuth } from "../hooks";
import { EvoxContextType, Referral, Team } from "../types";
import { getUserReferrals, getUserTeam } from "../services/userReferrals";

const EvoxServicesContext = React.createContext<EvoxContextType>(
  {} as EvoxContextType
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const EvoxServicesProvider = ({ children }: Props) => {
  const [userReferrals, setUserReferrals] = React.useState<Referral[]>([]);
  const [userTeam, setUserTeam ] = React.useState<Team[]>([]);
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

  const getUserTeamRed = async () =>{
    const token = localStorage.getItem("token");
    if(token){
      setLoader({ loading: true, message: "Cargando equipo..." });
      setIsValidating(true);
      await getUserTeam(token).then((res) => {    
        const newTeam = res.filter(
          (referral) => referral.userName !== auth?.sub
        );
        setUserTeam(newTeam);
      }).finally(()=>{
        setIsValidating(false);
        setLoader({ loading: false, message: "" });
      });
    }
  }

  return (
    <EvoxServicesContext.Provider
      value={{
        userReferrals,
        userTeam,
        getAllUserReferrals,
        getUserTeamRed
      }}
    >
      {children}
    </EvoxServicesContext.Provider>
  );
};

export { EvoxServicesProvider };
export default EvoxServicesContext;
