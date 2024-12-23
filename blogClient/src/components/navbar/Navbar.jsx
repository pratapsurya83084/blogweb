import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  
    <div>
        <div className="bg-black text-white ">
      <div className="  container mx-auto flex items-center justify-between py-3">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-20 p-2"
              src="\Screenshot_2024-12-12_160626-removebg-preview.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-purple-400">
            Home
          </Link>
          <Link to="/blog" className="hover:text-purple-400">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-purple-400">
            Contact
          </Link>

          <Link to="/admin" className="block hover:text-purple-400">
              Admin
            </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
         <Link to='/login'>
         <button className="bg-indigo-700 px-4 py-2 border border-white rounded hover:bg-indigo-800 transition">
            Login
          </button></Link>
        </div>

        {/* Burger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {/* Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 top-16 bg-gray-800 rounded-xl text-white w-48 shadow-lg z-50 md:hidden">
          <div className="space-y-4 p-4 text-center">
            <Link to="/" className="block hover:text-purple-400">
              Home
            </Link>
            <Link to="/blog" className="block hover:text-purple-400">
              Blog
            </Link>
            <Link to="/contact" className="block hover:text-purple-400">
              Contact
            </Link>

            <Link to="/admin" className="block hover:text-purple-400">
              Admin
            </Link>
           <Link to='/login'> <button className="bg-indigo-600 px-4 py-2 border mt-3 border-white rounded hover:bg-indigo-700 transition">
              Login
            </button></Link>

          </div>
        </div>
      )}

 
    </div>
          
    </div>

  );
};

export default Navbar;
