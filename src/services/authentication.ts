import getAxiosClient from "../config/axiosClient";
import {
  LoginFormValues,
  RegisterFormValues,
  ServerResponseFail,
  ServerResponseSuccess,
  LoginReasponse,
} from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const authenticateUser = async (
  userCredentials: LoginFormValues | any
): Promise<LoginReasponse> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response: LoginReasponse = {
    message: "",
    typeStatus: "Error",
    token: "",
  };
  try {
    const { data } = await axiosClient.post<LoginReasponse>(
      "/auth/login",
      userCredentials
    );
    response = data;
  } catch (error: any) {
    response = error.response.data;
  }
  return response;
};

const registerUser = async (
  userData: RegisterFormValues | any
): Promise<ServerResponseSuccess | ServerResponseFail> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response: ServerResponseSuccess | ServerResponseFail = {
    message: "",
    typeStatus: "Success",
  };
  try {
    const { data } = await axiosClient.post<
      ServerResponseSuccess | ServerResponseFail
    >("/auth/create", userData);
    response = data;
  } catch (error: any) {
    response = error.response.data;
  }
  return response;
};

const validateChangePassToken = async (token: string): Promise<boolean> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response = false;
  try {
    const { data } = await axiosClient(`/auth/validator/${token}`);
    response = data.message;
  } catch (error: any) {
    response = error.response.data.message;
  }
  return response;
};
const bearerToken = async (): Promise<boolean> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response = false;
  try {
    const { data } = await axiosClient(`/auth/validad`);
    response = data.message;
  } catch (error: any) {
    response = error.response.data.message;
  }
  return response;
};

export { authenticateUser, registerUser, validateChangePassToken, bearerToken };
