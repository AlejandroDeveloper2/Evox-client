import { browserName } from "react-device-detect";

import getAxiosClient from "../config/axiosClient";
import { UserIP } from "../types";

const getUserIPAddress = async (): Promise<UserIP> => {
  const axiosClient = getAxiosClient("ipAddressAPI");
  let userIpAddressData: UserIP = {
    ip: "",
    country_name: "",
    browser_name: "",
  };

  try {
    const { data } = await axiosClient("/json");
    userIpAddressData = { ...data, browser_name: browserName };
  } catch (error) {
    console.log(error);
  }
  return userIpAddressData;
};

export { getUserIPAddress };
