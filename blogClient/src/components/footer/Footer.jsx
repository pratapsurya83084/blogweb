import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
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
                <strong>Email : </strong> pratapsuryawanshi007@gmail.com
              </li>
              <li className="text-gray-400">
                <strong>Phone :</strong> +91  8308459145
              </li>
              <li className="text-gray-400">
                <strong>Address :</strong> karjat , City, india
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          
     <div>
     <h3 className="text-xl font-semibold mb-4">Social Media</h3>
     <div className="flex space-x-4">
      
      <a
        href="https://x.com/PratapSury19843"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-indigo-500 transition-transform transform hover:scale-110"
      >
        <FaTwitter size={28} />
      </a>
    
      <a
        href="https://www.linkedin.com/in/pratap-suryawanshi-41944b25a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-indigo-500 transition-transform transform hover:scale-110"
      >
        <FaLinkedin size={28} />
      </a>
    </div>
     </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            Developed by Pratap Suryawanshi  And Nimbalkar Dhananjay.
            {/* & Nimbalkar dhananjay */}
            &copy;{year} Everyday Aura. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
