import React from "react";
import { useNavigate } from "react-router-dom";

import { EvoxContextType, Referral, Team, Transaction } from "../types";
import {
  activeSynteticsAccount,
  invalidTransaction,
  registerSynteticAccount,
  saveTransaction,
} from "../services/synthetics";
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
  const navigate = useNavigate();

  const { setLoading, setToast } = useApp();

  const getTeam = (team: Team[]): void => {
    setTeam(team);
  };

  const getDirectReferrals = (referrals: Referral[]): void => {
    setReferrals(referrals);
  };

  const activeSyntheticAccount = async (transaction: string): Promise<void> => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Activando cuenta...",
      visible: true,
    });
    if (token) {
      await activeSynteticsAccount(token, transaction)
        .then((res) => {
          console.log(res);
          setToast({
            message: "Cuenta activada correctamente!",
            visible: true,
            type: "success",
          });
        })
        .catch((error: Error) => {
          setToast({
            message: error.message,
            visible: true,
            type: "error",
          });
        })
        .finally(() => {
          setLoading({
            message: "",
            visible: false,
          });
        });
    }
  };

  const registerSyntheticsAccount = async (
    login: string,
    password: string
  ): Promise<void> => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Creando tu cuenta de sinteticos...",
      visible: true,
    });
    if (token) {
      await registerSynteticAccount(token, login, password)
        .then((res) => {
          setToast({
            message: res.message,
            visible: true,
            type: "success",
          });
        })
        .catch((error: Error) => {
          setToast({
            message: error.message,
            visible: true,
            type: "error",
          });
        })
        .finally(() => {
          setTimeout(() => {
            setToast({
              message: "",
              visible: false,
              type: "success",
            });
          }, 3000);
          setLoading({
            message: "",
            visible: false,
          });
        });
    }
  };

  const sendTransaction = async (transaction: Transaction): Promise<void> => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Enviando transacción...",
      visible: true,
    });
    if (token) {
      await saveTransaction(token, transaction)
        .then((res) => {
          setToast({
            message: res.message,
            visible: true,
            type: "success",
          });
          navigate("/dashboard/evoxSynthetics/copySynthetics");
        })
        .catch((error: Error) => {
          setToast({
            message: error.message,
            visible: true,
            type: "error",
          });
        })
        .finally(() => {
          setTimeout(() => {
            setToast({
              message: "",
              visible: false,
              type: "success",
            });
          }, 3000);
          setLoading({
            message: "",
            visible: false,
          });
        });
    }
  };

  const invalidSyntheticAccount = async (
    transaction: string
  ): Promise<void> => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Invalidando transacción...",
      visible: true,
    });
    if (token) {
      await invalidTransaction(token, transaction)
        .then((res) => {
          setToast({
            message: res.message,
            visible: true,
            type: "success",
          });
        })
        .catch((error: Error) => {
          setToast({
            message: error.message,
            visible: true,
            type: "error",
          });
        })
        .finally(() => {
          setTimeout(() => {
            setToast({
              message: "",
              visible: false,
              type: "success",
            });
          }, 3000);
          setLoading({
            message: "",
            visible: false,
          });
        });
    }
  };

  return (
    <EvoxServicesContext.Provider
      value={{
        referrals,
        team,
        getTeam,
        getDirectReferrals,
        activeSyntheticAccount,
        registerSyntheticsAccount,
        sendTransaction,
        invalidSyntheticAccount,
      }}
    >
      {children}
    </EvoxServicesContext.Provider>
  );
};

export { EvoxServicesProvider };
export default EvoxServicesContext;
