import getAxiosClient from "../config/axiosClient";
import { BridgeFundsAccount } from "../types";

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
    const { data } = await axiosClient("/synthetic/list", config);
    response = data;
  } catch (error) {
    console.log(error);
  }
  return response;
};

export { getBridgeFundsAccounts };