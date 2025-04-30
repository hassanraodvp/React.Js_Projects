import React from "react";
import { FaSortDown } from "react-icons/fa";

const SearchFilter = ({search, setSearch, filter, setFilter, countries, setCountries}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  const sortCountries = (value) => {
    const sortedCountries = [...countries];
    if (value === "asc") {
      sortedCountries.sort((a, b) => a.population - b.population);
    } else {
      sortedCountries.sort((a, b) => b.population - a.population);
    }
    setCountries(sortedCountries);
    
  }
  return (
    <div className="flex justify-between gap-5 md:gap-10 items-center mb-10">
      <div>
        <input type="text" value={search} onChange={handleSearch} placeholder="Search" className="px-5 md:px-10 py-3 bg-transparent border border-gray-300 rounded-md text-white"/>
      </div>
      <div className="flex gap-5 md:gap-10">
      <button onClick={() => sortCountries("asc")} className="px-5 md:px-10 py-3 bg-transparent border border-gray-300 rounded-md text-white cursor-pointer hover:bg-gray-800">
        Ascending
      </button>
      <button  onClick={() => sortCountries("desc")} className="px-5 md:px-10 py-3 bg-transparent border border-gray-300 rounded-md text-white cursor-pointer hover:bg-gray-800">
        Descending
      </button>
      </div>
      <div>
        <select value={filter} onChange={handleFilter} className="flex items-center px-5 py-3 bg-transparent border border-gray-300 rounded-md text-white cursor-pointer hover:bg-gray-800">
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="population">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
