import { FormikValues } from "formik";
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
    throw new Error(error.response.data.message);
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
    throw new Error(error.response.data.message);
  }
  return response;
};

const validateChangePassToken = async (token: string): Promise<boolean> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response = false;

  try {
    const { data } = await axiosClient(`/auth/validator/${token}`);
    response = data;
  } catch (error: any) {
    response = error.response.data.message;
  }
  return response;
};
const validateBearerToken = async (token: string): Promise<boolean> => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response = false;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axiosClient(`/auth/validate`, config);
    response = data;
  } catch (error: any) {
    console.log(error);
  }
  return response;
};

const recoverPassword = async (userData: FormikValues) => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response: ServerResponseSuccess | ServerResponseFail = {
    message: "",
    typeStatus: "Success",
  };
  try {
    const { data } = await axiosClient.post<
      ServerResponseSuccess | ServerResponseFail
    >(`/auth/recover`, userData);
    response = data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
  return response;
};

const updatePassword = async (userData: FormikValues, token: string) => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response: ServerResponseSuccess | ServerResponseFail = {
    message: "",
    typeStatus: "Success",
  };
  try {
    const { data } = await axiosClient.patch<
      ServerResponseSuccess | ServerResponseFail
    >(`/auth/passwordChange/${token}`, userData);
    response = data;
  } catch (error: any) {
    response = error.response.data.message;
  }
  return response;
};

const activeAccount = async (token: string) => {
  const axiosClient = getAxiosClient("evoxAPI");
  let response: ServerResponseSuccess | ServerResponseFail = {
    message: "",
    typeStatus: "Success",
  };
  //[3]
  try {
    const { data } = await axiosClient.get<
      ServerResponseSuccess | ServerResponseFail
    >(`/auth/activateAccount/${token}`);
    response = data;
  } catch (error: any) {
    response = error.response.data.message;
  }
  return response;
};

export {
  authenticateUser,
  registerUser,
  validateChangePassToken,
  validateBearerToken,
  recoverPassword,
  updatePassword,
  activeAccount,
};
