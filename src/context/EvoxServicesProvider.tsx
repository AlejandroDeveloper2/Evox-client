import React from "react";
import { useNavigate } from "react-router-dom";

import {
  BridgeFundsAccount,
  EvoxContextType,
  Referral,
  Team,
  Transaction,
  UserAccountBridgeFunds,
} from "../types";
import {
  activeSynteticsAccount,
  checkSyntheticAccountCredentials,
  invalidTransaction,
  registerSynteticAccount,
  saveTransaction,
} from "../services/synthetics";
import { useApp } from "../hooks";
import {
  activeBridgeFundsAccount,
  getBridgeFundsAccounts,
  invalidBridgeFundsTransaction,
  saveBridgeFundsTransaction,
  sendAccountsRegistration,
} from "../services/bridgeFunds";

const EvoxServicesContext = React.createContext<EvoxContextType>(
  {} as EvoxContextType
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const EvoxServicesProvider = ({ children }: Props) => {
  const [referrals, setReferrals] = React.useState<Referral[]>([]);
  const [team, setTeam] = React.useState<Team[]>([]);
  const [bridgeFundsAccounts, setBridgeFundsAccounts] = React.useState<
    BridgeFundsAccount[]
  >([]);
  const [bridgeFundsAccountInfo, setBridgeFundsAccountInfo] = React.useState({
    id: 0,
    quantity: 0,
  });
  const [isChecking, setIsChecking] = React.useState<boolean>(false);

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

  const checkSyntheticCredentials = async (id: number) => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Procesando...",
      visible: true,
    });
    if (token) {
      await checkSyntheticAccountCredentials(token, id)
        .then((res) => {
          setToast({
            message: res.message,
            visible: true,
            type: "success",
          });
          setIsChecking(true);
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
          setTimeout(() => {
            setToast({
              message: "",
              visible: false,
              type: "success",
            });
          }, 3000);
        });
    }
  };

  /*Bidge Context */
  const getBridgeKindOfAccounts = async () => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Cargando tipos de cuentas de fondeo...",
      visible: true,
    });
    if (token) {
      await getBridgeFundsAccounts(token)
        .then((res) => {
          setBridgeFundsAccounts(res);
        })
        .catch((error: Error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading({
            message: "",
            visible: false,
          });
        });
    }
  };

  const activeBridgeAccount = async (transaction: string): Promise<void> => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Activando cuenta...",
      visible: true,
    });
    if (token) {
      await activeBridgeFundsAccount(token, transaction)
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

  const invalidBridgeAccount = async (transaction: string): Promise<void> => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Invalidando transacción...",
      visible: true,
    });
    if (token) {
      await invalidBridgeFundsTransaction(token, transaction)
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

  const sendBridgeTransaction = async (
    transaction: Transaction
  ): Promise<void> => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Enviando transacción...",
      visible: true,
    });
    if (token) {
      await saveBridgeFundsTransaction(token, transaction)
        .then((res) => {
          setToast({
            message: res.message,
            visible: true,
            type: "success",
          });
          navigate("/dashboard/bridgeFunds/myAccounts");
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

  const getBridgeAccountFeatures = (id: number, quantity: number): void => {
    setBridgeFundsAccountInfo({ id, quantity });
  };

  const registerUserBridgeAccounts = async (
    id: number,
    dataAccounts: UserAccountBridgeFunds[]
  ): Promise<void> => {
    const token = localStorage.getItem("token");
    setLoading({
      message: "Enviando cuentas...",
      visible: true,
    });
    if (token) {
      await sendAccountsRegistration(token, id, dataAccounts)
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
        bridgeFundsAccounts,
        bridgeFundsAccountInfo,
        isChecking,
        getTeam,
        getDirectReferrals,
        activeSyntheticAccount,
        registerSyntheticsAccount,
        sendTransaction,
        invalidSyntheticAccount,
        getBridgeKindOfAccounts,
        activeBridgeAccount,
        invalidBridgeAccount,
        sendBridgeTransaction,
        getBridgeAccountFeatures,
        checkSyntheticCredentials,
        registerUserBridgeAccounts,
      }}
    >
      {children}
    </EvoxServicesContext.Provider>
  );
};

export { EvoxServicesProvider };
export default EvoxServicesContext;
