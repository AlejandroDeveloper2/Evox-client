import getAxiosClient from "../config/axiosClient";
import { User } from "../types";

const getEvoxUsers = async (token: string): Promise<User[]> => {
  const axiosClient = getAxiosClient("evoxAPI");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let response: User[] = [];

  try {
    const { data } = await axiosClient<User[]>("/users/list", config);
    response = data;
  } catch (error) {
    console.log(error);
  }
  return response;
};

export { getEvoxUsers };
