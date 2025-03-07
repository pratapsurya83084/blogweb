import React, { useState } from "react";
import Swal from 'sweetalert2';
import {useNavigate}  from 'react-router-dom';
import {Link} from 'react-router-dom';

import ContextApp from "../context/ContextApp";
import {useContext}   from 'react';
const Register= () => {
  const { registerUser } = useContext(ContextApp); // Use the correct context
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };

    // Call the registerUser function from the context
    try {
      // console.log(await registerUser({ userData }));
      const result= await registerUser({ userData });
      console.log(result.success);
      
      if (result.success==true) {
        navigate('/login')
        Swal.fire({
          title: 'Success!',
          text: 'User registered successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        });
       
      } else {
        Swal.fire({
          title: 'error!',
          text: 'User Already registered ',
          icon: 'error',
          confirmButtonText: 'OK',
        });
       
      }
      // await ;
     
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Register</h2>
      <form onSubmit={handleSubmit} method="POST">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Register
        </button>
        <p className="mt-6 text-center text-gray-500">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>

     
    </div>
  </div>
  );
};

export default Register;
