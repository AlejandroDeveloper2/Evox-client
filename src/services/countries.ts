import getAxiosClient from "../config/axiosClient";
import { Country } from "../types";

const getAllCountries = async (): Promise<Country[]> => {
  const axiosClient = getAxiosClient("countriesAPI");
  let countries: Country[] = [];
  try {
    const { data } = await axiosClient("/all");
    countries = [...data];
  } catch (error) {
    console.log(error);
  }
  return countries;
};

export { getAllCountries };
