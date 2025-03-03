import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ContextApp from "../context/ContextApp";
import { useContext } from "react";
const Login = () => {
  const { loginUser, Adminlogin } = useContext(ContextApp);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  //  console.log(role);

  const data = {
    email: email,
    password: password,
    role: role,
  };

  const handelSubmitForm = (e) => {
    e.preventDefault();
    // console.log("user cradential is : ", email, password);
  };

  const submitLogin = async () => {
    // console.log(data.role);
//user Api call
    if (data.role == "user") {
      const result = await loginUser(data);
      // console.log("user login sucessfull :", result);

      if (result.success == false) {
        return Swal.fire({
          title: "error!",
          text: "invalid email or password",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        localStorage.setItem("sessionId", JSON.stringify(result.session_id));
        localStorage.setItem("user_id", result.id); //logged user id set
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("username", result.user.username);
        navigate("/");
        return Swal.fire({
          title: "Success!",
          text: "Login successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    }
// admin api call
    if (data.role == "admin") {
      const adminLogin = await Adminlogin(data);

      // console.log("admin login sucess :", adminLogin);

      if (adminLogin.success == false) {
        return Swal.fire({
          title: "error!",
          text: "invalid email or password",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        localStorage.setItem(
          "sessionId",
          JSON.stringify(adminLogin.session_id)
        );
        localStorage.setItem("user_id", adminLogin.id); //logged user id set
        localStorage.setItem("email", adminLogin.user.email);
        localStorage.setItem("username", adminLogin.user.username);
        navigate("/");
        return Swal.fire({
          title: "Success!",
          text: `${data.role} Login successfully`,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const handleChange = (event) => {
    setrole(event.target.value);
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
          {/* role based login */}
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select role
            </label>
            <select
              required
              name="role"
              id="role"
              value={role}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
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
        {/* <div className="flex items-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div> */}

        {/* Social Login Buttons */}
        {/* 
        <button className="flex justify-center w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300">
          <span>
            {" "}
            <img className="h-6" src="\Google-Symbol.png" alt="" />{" "}
          </span>{" "}
          Login with Google
        </button> */}

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
