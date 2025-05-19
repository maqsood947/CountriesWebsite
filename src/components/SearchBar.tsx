interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
}
export default function SearchBar({ search, setSearch,filter, setFilter, setSortOrder }:SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <section className="flex flex-row justify-between py-5 my-5">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
        className="p-3 rounded-2xl border-2 border-white text-white"
      />
      <button onClick={() => setSortOrder("asc")} className="rounded-lg w-10 border-2 border-white text-white">
        Asc
      </button>
      <button onClick={() => setSortOrder("desc")} className="rounded-lg w-10 border-2 border-white text-white">
        Decs
      </button>

    <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

    </section>
  );
}
