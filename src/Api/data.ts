import axios, { AxiosResponse } from "axios";
import { Country } from "../Types/Types";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});



// getting the Country Data
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};


//individual country
export const getCountryIndData = (name: string): Promise<AxiosResponse<Country[]>> => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};



