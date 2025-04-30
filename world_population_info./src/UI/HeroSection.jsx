import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className="Home pt-44 h-screen">
          <div className="container">
            <div className="flex flex-col md:flex-row px-6 md:px-8 items-center gap-2 md:gap-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="flex flex-col space-y-5">
                  <h1 className="w-80 text-center md:text-start md:w-100 text-2xl md:text-4xl font-bold">
                    Explore the World, One Country at a Time.
                  </h1>
                  <p className="w-80 md:w-100 text-center md:text-start">Discover the world's population, culture and the beauty of every nation. Sort, Search & Filter through countries to find the country you're looking for?</p>
                  <button className="hover-1 flex items-center gap-3 w-55 justify-center mx-auto md:mx-0">
                    Explore More <FaLongArrowAltRight className="text-xl"/>
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <figure>
                    <img src="../../public/world.webp" alt="world" className="w-full opacity-70 hover:opacity-100 cursor-pointer pt-2 md:pt-10" />
                </figure>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection