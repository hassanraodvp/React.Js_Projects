import React from "react";
import countryFacts from "../Data/countryFacts.json";

const About = () => {
  return (
    <section className="About py-28 ">
      <div className="container">
        <div className="mx-auto items-center tracking-wide text-center pb-10 w-90 md:w-100">
          <h1 className=" text-2xl md:text-4xl font-bold ">
            Here are the interesting facts, we're proud of
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {countryFacts.map((country) => {
            const { id, capital, population, interesting_fact } = country; 
            return (
              <div
                key={id}
                className="flex flex-col px-6 md:px-8 py-5 md:py-8 space-y-5 bg-gradient-to-b from-gray-900 to-gray-700 rounded-4xl"
              >
                <h2 className="text-2xl md:text-4xl font-bold text-center items-center">
                  {country.name}{" "}
                  {/* Assuming `name` is a property in your JSON */}
                </h2>
                <div className="flex space-x-2">
                  <span>Capital:</span>
                  <h4 className="font-bold tracking-wide">{capital}</h4>
                </div>
                <div className="flex space-x-2">
                  <span>Population:</span>
                  <h4 className="font-bold tracking-wide">{population}</h4>
                </div>
                <div className="flex space-x-2">
                  <span>Interesting Fact:</span>
                  <p className="tracking-wide">{interesting_fact}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
