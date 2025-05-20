import { useEffect, useState, useTransition } from "react";
import { getCountryIndData } from "../Api/data";
import { Loader } from "../components/Loader";
import { useParams } from "react-router-dom";
import { Country } from "../Types/Types";

export default function CountryDetails() {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id as string);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0] as Country);
      }

      console.log(Object.keys(res.data[0].name.common));
    });
  }, []);

  if (isPending) return <Loader />;
  return (
    <>
      {country ? (
        <section className="bg-gradient-to-br from-[#0f172a] to-[#020617] text-white px-8 py-20">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="block">{country.name.common}</span>

                <span className="block text-blue-400 text-sm">
                  Capital : {country.capital}
                </span>
              </h1>
              <p className="text-gray-300 max-w-md leading-relaxed">
                {country.subregion}{" "}
              </p>
              <p>
                <span className=""> Population : </span>
                {country.population.toLocaleString()}
              </p>
              
                <span className="card-description">Top Level Domain : </span>
                  {country.tld[0]}
            </div>

            <div className="md:w-1/2">
              <img
                src={country.flags.svg}
                alt="Shopping illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>
      ) : (
        <h1>Nothing to display</h1>
      )}
    </>
  );
}
