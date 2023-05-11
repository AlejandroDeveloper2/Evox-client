import getAxiosClient from "../config/axiosClient";
import { LoginFormValues } from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const authenticateUser = async (
  userCredentials: LoginFormValues | any
): Promise<string> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response = "";
  try {
    const { data } = await axiosClient("/auth/login", userCredentials);
    response = data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  return response;
};

const registerUser = async () => {
  console.log("Register");
};

export { authenticateUser, registerUser };
