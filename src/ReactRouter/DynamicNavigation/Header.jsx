import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const handleActiveLink = ({isActive})=>{
      return{
        color: isActive ? "red" : "white",
      };
    };


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
              <NavLink
                to="/"
                className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium" style={handleActiveLink}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
