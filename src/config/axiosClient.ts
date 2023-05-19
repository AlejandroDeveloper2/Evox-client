import axios, { AxiosInstance } from "axios";

const getAxiosClient = (
  apiName: "evoxAPI" | "countriesAPI" | "ipAddressAPI" | "cloudinaryAPI"
): AxiosInstance => {
  const axiosClient: AxiosInstance = axios.create({
    baseURL:
      apiName === "countriesAPI"
        ? import.meta.env.VITE_COUNTRIES_API_URL
        : apiName === "ipAddressAPI"
        ? import.meta.env.VITE_IP_ADDRESS_API_URL
        : apiName === "evoxAPI"
        ? import.meta.env.VITE_BACKEND_URL
        : "https://res.cloudinary.com/dym53oxov",
  });
  return axiosClient;
};

export default getAxiosClient;
