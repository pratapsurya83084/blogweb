import React, { useState } from "react";
import axios from "axios";
import {useNavigate}  from 'react-router-dom';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
const Register= () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the backend
    const userData = {
      username: username,
      email: email,
      password: password,
    };

  
      // Send a POST request to the backend
      const response = await axios.post(
        "http://localhost/blogweb/backendserver/registeruser.php", // URL to your backend
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
console.log(response.data);

if (response.data.success==true) {
  Swal.fire({
    title: 'Success!',
    text: 'User registered successfully',
    icon: 'success',
    confirmButtonText: 'OK',
  });
  navigate('/login')
} else {
  Swal.fire({
    title: 'error!',
    text: 'failed registered ',
    icon: 'error',
    confirmButtonText: 'OK',
  });
  // alert(response.data.message); // For any error or other message from the backend
  setMessage("User already Exists !");
}
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
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

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  </div>
  );
};

export default Register;
