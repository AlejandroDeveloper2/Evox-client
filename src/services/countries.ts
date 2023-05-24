import getAxiosClient from "../config/axiosClient";
import { City, Country } from "../types";

const getAllCountries = async (): Promise<Country[]> => {
  const axiosClient = getAxiosClient("countriesAPI");
  let countries: Country[] = [];

  const config = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_COUNTRIES_TOKEN,
      "X-RapidAPI-Host": "city-and-state-search-api.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axiosClient("/countries", config);
    countries = [...data];
  } catch (error) {
    console.log(error);
  }
  return countries;
};

const getCitiesPerCountry = async (country: string): Promise<City[]> => {
  const axiosClient = getAxiosClient("countriesAPI");
  let cities: City[] = [];

  const config = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_COUNTRIES_TOKEN,
      "X-RapidAPI-Host": "city-and-state-search-api.p.rapidapi.com",
    },
    params: {
      country_name: country,
    },
  };

  try {
    const { data } = await axiosClient("/states", config);
    cities = [...data];
  } catch (error) {
    console.log(error);
  }
  return cities;
};
export { getAllCountries, getCitiesPerCountry };
