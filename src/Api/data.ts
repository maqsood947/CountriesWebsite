import axios, { AxiosResponse } from "axios";
import { Country } from "../Types/Types";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

const PostsApi =axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD fro the indvi. country name
export const getCountryIndData = (name: string): Promise<AxiosResponse<Country[]>> => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};

export const GetPost = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data; // ✅ This should be an array
};

