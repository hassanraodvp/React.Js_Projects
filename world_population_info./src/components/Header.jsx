import React from "react";
import { Link } from "react-router-dom";
import { TbMenu3 } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("Home");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Country", path: "/country" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-gray-800 shadow-md fixed right-0 left-0 top-0 z-50 backdrop-blur-md border-b border-gray-200">
      <div className="w-full container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo  */}
        <div className="flex items-center cursor-pointer">
          <figure>
            <img src="../../public/logo.gif" alt="" className="w-12 h-12"/>
          </figure>
        </div>
        {/* Desktop NavBar  */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              to={link.path}
              onClick={() => setActiveLink(link.name)}
              className={`relative after:absolute after:w-0 after:left-0 after:bottom-0 after:transition-all after:bg-gray-200 after:h-0.5 hover:after:w-full ${
                activeLink === link.name
                  ? "text-gray-200 after:w-full"
                  : "text-gray-400 hover:text-gray-500"
              } after:duration-300`}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Input  */}
        <div className="hidden md:flex">
          <button className="hover-1">Login</button>
        </div>
        {/* Menu Icon  */}
        <div className="md:hidden flex items-center">
          <TbMenu3
            className="cursor-pointer text-2xl text-gray-50 hover:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        {/* Mobile Menu  */}
        <div
          className={`absolute space-y-5 top-16 right-0 bg-white shadow-lg rounded-lg p-4 w-full items-center transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              to={link.path}
              onClick={() => setActiveLink(link.name)}
              className={` flex  ${
                activeLink === link.name
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-900"
              } after:duration-300`}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
