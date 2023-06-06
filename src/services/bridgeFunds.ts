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
    const { data } = await axiosClient("/bridgeFunds/list", config);
    response = data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

export { getBridgeFundsAccounts };
