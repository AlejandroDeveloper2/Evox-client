import { AxiosRequestConfig } from "axios";
import getAxiosClient from "../config/axiosClient";
import { Referral } from "../types";

const getUserReferrals = async (token: string): Promise<Referral[]> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      //"Access-Control-Allow-Origin": "http://localhost:5173", // Agrega este encabezado
    },
  };
  let response: Referral[] = [];
  try {
    const { data } = await axiosClient.get("/api/users/unilevel", config);
    response = data;
  } catch (error) {
    console.log(error);
  }
  return response;
};

export { getUserReferrals };
