import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800  w-full text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Hassan Akhtyr</h4>
            <p className="w-80">
              Full Stack Developer with a passion for creating dynamic and
              user-friendly web applications.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Me</h4>
            <ul className="space-y-2">
              <li>
                <Link to="" className="hover:text-gray-300">
                  hassanakhtar.dba@gmail.com
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-gray-300">
                  +92 305 888 7237
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to="" className="hover:text-blue-400">
                <FaLinkedin className="text-2xl" />
              </Link>
              <Link to="" className="hover:text-blue-400">
                <FaGithub className="text-2xl" />
              </Link>
              <Link to="" className="hover:text-blue-400">
                <FaWhatsapp className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>Hassan Akhtyr | Copyright © 2025. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
