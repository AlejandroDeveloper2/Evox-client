import getAxiosClient from "../config/axiosClient";
import { LoginFormValues, RegisterFormValues } from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const authenticateUser = async (
  userCredentials: LoginFormValues | any
): Promise<any> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response:any;
  try {
    const { data } = await axiosClient.post("/auth/login", userCredentials);
    response = data;
    console.log(response.token);
  } catch (error) {
    console.log(error);
  }
  return response.token;
};

const registerUser = async (userData: RegisterFormValues | any): Promise<string> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response = "";
  try {
    console.log(userData)
    const { data } = await axiosClient.post("/auth/create", userData);
    response = data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  return response;
};

export { authenticateUser, registerUser };
