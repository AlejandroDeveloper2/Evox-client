/* eslint-disable @typescript-eslint/no-explicit-any */
import getAxiosClient from "../config/axiosClient";
import {
  AccountStatus,
  BridgeAccount,
  BridgeFundsAccount,
  ServerResponseFail,
  ServerResponseSuccess,
  Transaction,
} from "../types";

const getBridgeFundsAccounts = async (
  token: string
): Promise<BridgeFundsAccount[]> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: BridgeFundsAccount[] = [];
  try {
    const { data } = await axiosClient("/bridgeFunds/list", config);
    response = data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const getBridgeFundsAccountStatus = async (
  token: string
): Promise<AccountStatus> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: AccountStatus = "Shopping";
  try {
    const { data } = await axiosClient("/bridgeFunds/accountStatus", config);
    response = data;
  } catch (error) {
    console.log(error);
  }
  return response;
};

const activeBridgeFundsAccount = async (
  token: string,
  transaction: string
): Promise<BridgeAccount> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: BridgeAccount = {
    transaction: "",
    currency: "",
    price: 0,
    activationDate: "",
    expirationDate: "",
    state: false,
    username: "",
    email: "",
    title: "",
    quantity: 0,
    total: 0,
  };
  try {
    const { data } = await axiosClient.patch(
      `/bridgeFunds/active/${transaction}`,
      {},
      config
    );
    response = data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const saveBridgeFundsTransaction = async (
  token: string,
  transaction: Transaction
): Promise<ServerResponseFail | ServerResponseSuccess> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: ServerResponseFail | ServerResponseSuccess = {
    message: "",
    typeStatus: "Warning",
  };
  try {
    const { data } = await axiosClient.post(
      `/bridgeFunds/transaction`,
      transaction,
      config
    );
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const invalidBridgeFundsTransaction = async (
  token: string,
  transaction: string
): Promise<ServerResponseFail | ServerResponseSuccess> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: ServerResponseFail | ServerResponseSuccess = {
    message: "",
    typeStatus: "Warning",
  };
  try {
    const { data } = await axiosClient.patch(
      `/bridgeFunds/invalid/${transaction}`,
      {},
      config
    );
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const getBridgeFundsTransactionStatus = async (
  token: string
): Promise<Transaction> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let response: Transaction = {
    transaction: "",
  };

  try {
    const { data } = await axiosClient.get(`/bridgeFunds/transaction`, config);
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const getUsersBridgeFundsAccounts = async (
  token: string
): Promise<BridgeAccount[]> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: BridgeAccount[] = [];

  try {
    const { data } = await axiosClient.get(`/bridgeFunds/list/users`, config);
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

export {
  getBridgeFundsAccounts,
  getBridgeFundsAccountStatus,
  activeBridgeFundsAccount,
  saveBridgeFundsTransaction,
  invalidBridgeFundsTransaction,
  getBridgeFundsTransactionStatus,
  getUsersBridgeFundsAccounts,
};
