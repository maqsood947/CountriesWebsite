import { NavLink } from "react-router-dom";

interface CountryCardProps {
  country: {
    flags: { svg: string; alt?: string };
    name: { common: string };
    population: number;
    region: string;
    capital: string[];
  };
}

export const CountryCard = ({ country }: CountryCardProps) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="w-full max-w-xs mx-auto">
      <div className="bg-transparent rounded-2xl border-white border-1 overflow-hidden items-center justify-center">
        <div className="flex justify-center items-center">
          <img
            src={flags.svg}
            alt={flags.alt || `${name.common} flag`}
            className="w-40 h-36 mt-3 "
          />
        </div>
        <div className="p-4 flex flex-col items-center gap-3">
          <h2 className="text-white font-semibold text-xl text-center">
            {name.common}
          </h2>

          <p className="text-white text-sm">
            <span className="font-bold text-white">Population:</span>{" "}
            {population.toLocaleString()}
          </p>

          <p className="text-white text-sm">
            <span className="font-bold text-white/60">Region:</span> {region}
          </p>

          <p className="text-white text-sm">
            <span className="font-bold text-white/60">Capital:</span>{" "}
            {capital[0]}
          </p>

          <NavLink to={`/CountryDetails/${name.common}`}>
            
            <button className="mt-2 px-4 py-1 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-full transition duration-300">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
