import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year,setYear]=useState()

  useEffect(() => {
    let a=new Date()
    setYear(a.getFullYear())
    // console.log(a.getFullYear());
  }, [])
 
  
  
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Everyday Aura</h3>
            <p className="text-gray-400">
              Everyday Aura is your go-to place for insightful blog posts on lifestyle, wellness, and personal growth. Stay connected with us for daily inspiration.
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-purple-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-500">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-500">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <strong>Email:</strong> info@everydayaura.com
              </li>
              <li className="text-gray-400">
                <strong>Phone:</strong> +123 456 7890
              </li>
              <li className="text-gray-400">
                <strong>Address:</strong> 123 Aura Street, City, Country
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500"
              >
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            Developed by Pratap Suryawanshi & Nimbalkar dhananjay
            &copy;{year} Everyday Aura. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
