import React from "react";

import { EvoxContextType, Referral, Team } from "../types";

const EvoxServicesContext = React.createContext<EvoxContextType>(
  {} as EvoxContextType
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const EvoxServicesProvider = ({ children }: Props) => {
  const [referrals, setReferrals] = React.useState<Referral[]>([]);
  const [team, setTeam] = React.useState<Team[]>([]);

  const getTeam = (team: Team[]): void => {
    setTeam(team);
  };

  const getDirectReferrals = (referrals: Referral[]): void => {
    setReferrals(referrals);
  };

  return (
    <EvoxServicesContext.Provider
      value={{
        referrals,
        team,
        getTeam,
        getDirectReferrals,
      }}
    >
      {children}
    </EvoxServicesContext.Provider>
  );
};

export { EvoxServicesProvider };
export default EvoxServicesContext;
