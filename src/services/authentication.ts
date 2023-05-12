import getAxiosClient from "../config/axiosClient";
import { LoginFormValues, RegisterFormValues, ServerResponseFail, ServerResponseSuccess, LoginReasponse } from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const authenticateUser = async (
  userCredentials: LoginFormValues | any
): Promise<LoginReasponse> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response: LoginReasponse = {
    message: "",
    typeStatus: "Error",
    token: ""
  };
  try {
    const { data } = await axiosClient.post<LoginReasponse>("/auth/login", userCredentials);
    response = data;
    console.log(response);
  } catch (error: any) {
    response = error.response.data
  }
  return response;
};

const registerUser = async (userData: RegisterFormValues | any): Promise<ServerResponseSuccess | ServerResponseFail> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response: ServerResponseSuccess | ServerResponseFail = {
    message: "",
    typeStatus: "Success"
  };
  try {
    console.log(userData)
    const { data } = await axiosClient.post<ServerResponseSuccess | ServerResponseFail>("/auth/create", userData);
    response = data;
  } catch (error: any) {
    response = error.response.data
  }
  return response;
};

export { authenticateUser, registerUser };
