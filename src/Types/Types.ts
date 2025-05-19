export interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: { [code: string]: { name: string; symbol: string } };
  languages: { [code: string]: string };
  borders: string[];
  flags: { svg: string; alt?: string };
}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
