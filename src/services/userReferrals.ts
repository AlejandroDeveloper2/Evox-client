/* eslint-disable @typescript-eslint/no-explicit-any */
import getAxiosClient from "../config/axiosClient";
import { Referral, Team } from "../types";

const getUserReferrals = async (token: string): Promise<Referral[]> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: Referral[] = [];
  try {
    const { data } = await axiosClient("/users/referrals", config);
    const newData = data.map((element: { level?: any }) => {
      if (Object.keys(element).includes("level")) {
        delete element.level;
      }
      return element;
    });
    response = newData;
  } catch (error) {
    console.log(error);
  }
  return response;
};

const getUserTeam = async (token: string): Promise<Team[]> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response: Team[] = [];
  try {
    const { data } = await axiosClient("/users/referrals/team", config);
    const newData = data.map((element: { phone?: any }) => {
      if (Object.keys(element).includes("phone")) {
        delete element.phone;
      }
      return element;
    });
    response = newData;
  } catch (error) {
    console.log(error);
  }
  return response;
};

export { getUserReferrals, getUserTeam };
