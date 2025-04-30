import React, { useEffect, useState, useTransition } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountryIndividualData } from "../Data/Api";
import Loader from "../components/Loader";

const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();
  const params = useParams();

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryIndividualData(params.id);
      if (response.status === 200) {
        setCountry(response.data[0]);
      }
    });
  }, []);
  if (isPending) {
    return <Loader />;
  }
  return (
    <section className="CountryDetail pb-20  py-0 md:py-20">
      <div className="container">
        {country && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <figure>
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt}
                  className="w-90 md:w-full mx-auto h-full rounded-md"
                />
              </figure>
            </div>
            <div className="flex flex-col space-y-5 tracking-wide items-start mx-0 md:mx-auto px-6 md:px-8 overflow-hidden">
              <h1 className="text-3xl md:text-5xl font-bold">
                {country.name.official}
              </h1>
              <div className="flex flex-col space-y-5">
                <h5 className="font-bold">
                  <span>Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common.length > 10 ? country.name.nativeName[key].common.slice(0, 10) + "..." : country.name.nativeName[key].common)
                    .join(", ")}
                </h5>
                <h5 className="font-bold">
                  <span>Population: </span>
                  {country.population.toLocaleString()}
                </h5>
                <h5 className="font-bold">
                  <span>Region: </span> {country.region}
                </h5>
                <h5 className="font-bold">
                  <span>Sub Region: </span> {country.subregion}
                </h5>
                <h5 className="font-bold">
                  <span>Capital: </span> {country.capital}
                </h5>
                <h5 className="font-bold">
                  <span>Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((key) => country.currencies[key].name.length > 10 ? country.currencies[key].name.slice(0, 25) + "..." : country.currencies[key].name)
                    .join(", ")}
                </h5>
                <h5 className="font-bold">
                  <span>Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </h5>
                <h5 className="font-bold">
                  <span>Google Maps: </span>
                  {country.maps.googleMaps.length > 10 ? country.maps.googleMaps.slice(0, 35) + "..." : country.maps.googleMaps}
                </h5>
              </div>
              <div className="flex items-end justify-end">
                    <Link to="/country">
                      <button className="hover-1">Back to Country</button>
                    </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryDetails;
