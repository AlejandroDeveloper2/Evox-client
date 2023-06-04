import getAxiosClient from "../config/axiosClient";
import { AccountStatus, SyntheticsAccount } from "../types";

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
  let response: AccountStatus = "Verified";
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
    createdAt: "",
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
    throw new Error(error.data.message);
  }
  return response;
};

export { getUserSyntecticsAccounts, getAccountStatus, activeSynteticsAccount };
