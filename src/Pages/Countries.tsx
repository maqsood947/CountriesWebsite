import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/data";
import { CountryCard } from "../components/CountryCard";
import { Loader } from "../components/Loader";
import SearchBar from "../components/SearchBar";
import { Country } from "../Types/Types";

export default function Countries() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState<Country[]>([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  const searchCountry = (country: Country): boolean => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country: Country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  const sortedCountries = [...filterCountries].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });

  if(isPending) return <Loader />

  return (
    <section className=" container-gradient px-4">
      <SearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <ul className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {sortedCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
}
