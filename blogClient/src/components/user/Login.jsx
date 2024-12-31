import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const data={
    email: email,
    password: password,
  }

  const handelSubmitForm = (e) => {
    e.preventDefault();
    // console.log("user cradential is : ", email, password);
  };

  const submitLogin = async () => {
    try {
      //fetch api
      const api = await axios.post(
        "http://localhost/blogweb/backend/login.php",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(api.data);
      if (api.data.success==false) {
        alert("Invalid credentials");
      }else{
        alert("Successfully logged in");

        //hold user
//         localStorage.setItem('user_id', userId);
// localStorage.setItem('username', username);


        // Access session cookie in JavaScript
const sessionId = document.cookie
.split('; ')
.find(row => row.startsWith('PHPSESSID='))
?.split('=')[1];

console.log(sessionId);  // Logs the PHP session ID

      }
      
    } catch (error) {
      console.log("something  went wrong :", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Welcome Back!
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please login to your account.
        </p>
        <form onSubmit={handelSubmitForm}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={submitLogin}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Social Login Buttons */}
        
        <button className="flex justify-center w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300">
          <span>
            {" "}
            <img className="h-6" src="\Google-Symbol.png" alt="" />{" "}
          </span>{" "}
          Login with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
