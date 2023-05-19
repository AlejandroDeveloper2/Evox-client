
import getAxiosClient from "../config/axiosClient";
import { Referral } from "../types";

const getUserReferrals = async (token: string): Promise<Referral[]> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  };
  let response: Referral[] = [];
  try {
    const { data } = await axiosClient("/users/unilevel", config);
    response = data;
  } catch (error) {
    console.log(error);
  }
  return response;
};

export { getUserReferrals };
