import React, { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../Data/Api";
import { Outlet, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import CountryCard from "../UI/CountryCard";
import SearchFilter from "../UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");
  const { id } = useParams();

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountriesData();
      setCountries(response.data);
    });
  }, []);
  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }
  const regionFilter = (country) => {
    if (filter === "all") {
      return country;
    }
    return country.region === filter;
  }

  const filterCountries = countries.filter((country) => searchCountry(country) && regionFilter(country));
  return (
    <section className="Country pt-34">
      <div className="container">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />

        {id ? (
          <Outlet />
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filterCountries.map((country, index) => {
              return <CountryCard key={index} country={country} />;
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Country;
