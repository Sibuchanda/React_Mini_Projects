import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold tracking-wide">
          RaSi<span className="text-yellow-400 font-bold">STORE</span>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
