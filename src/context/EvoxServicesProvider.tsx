import React from "react";

import { EvoxContextType, Referral, Team } from "../types";
import { activeSynteticsAccount } from "../services/synthetics";
import { useApp } from "../hooks";

const EvoxServicesContext = React.createContext<EvoxContextType>(
  {} as EvoxContextType
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const EvoxServicesProvider = ({ children }: Props) => {
  const [referrals, setReferrals] = React.useState<Referral[]>([]);
  const [team, setTeam] = React.useState<Team[]>([]);

  const {setLoading, setToast} =useApp();

  const getTeam = (team: Team[]): void => {
    setTeam(team);
  };

  const getDirectReferrals = (referrals: Referral[]): void => {
    setReferrals(referrals);
  };

  const activeSyntheticAccount = async(transaction:string):Promise<void>=>{
      const token = localStorage.getItem("token");
      setLoading({
        message: "Activando cuenta...",
        visible: true,
      });
      if(token){
        await activeSynteticsAccount(token, transaction).then((res)=>{
          console.log(res);
          setToast({
            message: "Cuenta activada correctamente!",
            visible: true,
            type:"success"
          });
        }).catch((error:Error)=>{
          setToast({
            message: error.message,
            visible: true,
            type:"error"
          });
        }).finally(()=>{         
          setLoading({
            message: "",
            visible: false,
          });
        });
      }    
  }

  return (
    <EvoxServicesContext.Provider
      value={{
        referrals,
        team,
        getTeam,
        getDirectReferrals,
        activeSyntheticAccount
      }}
    >
      {children}
    </EvoxServicesContext.Provider>
  );
};

export { EvoxServicesProvider };
export default EvoxServicesContext;
