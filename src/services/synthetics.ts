/* eslint-disable @typescript-eslint/no-explicit-any */
import getAxiosClient from "../config/axiosClient";
import {
  AccountStatus,
  ServerResponseFail,
  ServerResponseSuccess,
  SyntheticsAccount,
  Transaction,
  UserSyntheticAccount,
} from "../types";

const getUserSyntecticsAccounts = async (
  token: string
): Promise<SyntheticsAccount[]> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: SyntheticsAccount[] = [];
  try {
    const { data } = await axiosClient("/synthetic/list", config);
    response = data;
  } catch (error) {
    console.log(error);
  }
  return response;
};

const getAccountStatus = async (token: string): Promise<AccountStatus> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: AccountStatus = "Shopping";
  try {
    const { data } = await axiosClient("/synthetic/accountStatus", config);
    response = data;
  } catch (error) {
    console.log(error);
  }
  return response;
};

const activeSynteticsAccount = async (
  token: string,
  transaction: string
): Promise<SyntheticsAccount> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: SyntheticsAccount = {
    transaction: "",
    currency: "",
    price: 0,
    activationDate: "",
    expirationDate: "",
    state: false,
    username: "",
    email: "",
  };
  try {
    const { data } = await axiosClient.patch(
      `/synthetic/active/${transaction}`,
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

const registerSynteticAccount = async (
  token: string,
  login: string,
  password: string
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
    typeStatus: "Success",
  };
  try {
    const { data } = await axiosClient.post(
      `/synthetic/registerAccount`,
      { login, password },
      config
    );
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const saveTransaction = async (
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
      `/synthetic/transaction`,
      transaction,
      config
    );
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const invalidTransaction = async (
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
      `/synthetic/invalid/${transaction}`,
      {},
      config
    );
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const getTransactionStatus = async (token: string): Promise<Transaction> => {
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
    const { data } = await axiosClient.get(`/synthetic/transaction`, config);
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const verifyUserSyntheticAccount = async (token: string): Promise<boolean> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response = false;
  try {
    const { data } = await axiosClient.get<boolean>(
      `/users/syntheticsAccount`,
      config
    );
    response = data;
  } catch (error: any) {
    console.log(error);
  }
  return response;
};

const getUserSyntheticAccount = async (
  token: string
): Promise<UserSyntheticAccount> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let response: UserSyntheticAccount = {
    id: 0,
    login: "",
  };

  try {
    const { data } = await axiosClient.get<UserSyntheticAccount>(
      `/users/account`,
      config
    );
    response = data;
  } catch (error: any) {
    console.log(error);
  }
  return response;
};

export {
  getUserSyntecticsAccounts,
  getAccountStatus,
  activeSynteticsAccount,
  registerSynteticAccount,
  saveTransaction,
  invalidTransaction,
  getTransactionStatus,
  verifyUserSyntheticAccount,
  getUserSyntheticAccount,
};
