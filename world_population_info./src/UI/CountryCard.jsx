import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const CountryCard = ({ country }) => {
  const { name, region, capital, population, maps, flags } = country;
  return (
    <>
    <li className="bg-gradient-to-b from-gray-500 to-gray-900 rounded-2xl p-10 my-10">
      <div className="container">
        <div className="flex flex-col space-y-5 tracking-wide">
          <figure>
            <img
              src={flags.svg}
              alt={flags.alt}
              className="w-40 mx-auto rounded-md"
            />
          </figure>
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </h1>
          <h1>
            <span className="font-bold">Capital:</span> {capital}
          </h1>
          <h1>
            <span className="font-bold">Population:</span> {population}
          </h1>
          <h1>
            <span>Region: </span>
            {region}
          </h1>
          <h1 className=" overflow-hidden">
            <span className="font-bold">Google Map:</span> {maps.googleMaps}
          </h1>
          <Link to={`/country/${name.common}`}>
            <button className="hover-1 mt-5 flex gap-5">
              Read More <FaLongArrowAltRight className="text-2xl font-bold" />
            </button>
          </Link>
        </div> 
      </div>
    </li>
    </>
  );
};

export default CountryCard;
