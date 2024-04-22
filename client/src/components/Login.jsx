import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "username" && password === "password") {
      console.log("Login successful!");
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-purple-500 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="sm:shadow-2xl sm:rounded-lg p-8 md:p-20 border-2  backdrop-filter backdrop-blur-lg mt-20 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h1 className="text-3xl font-bold text-gray-800 text-center uppercase mb-8">
            Officer Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="input-box relative">
              <label className="block text-sm font-medium mb-2 text-gray-800 uppercase">
                Username
              </label>
              <input
                type="text"
                id="email"
                placeholder="Username"
                className="w-full h-12 bg-gray-100 rounded-md border border-gray-300 outline-none text-gray-800 text-lg pl-5 focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-gray-800 uppercase"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full h-12 bg-gray-100 rounded-md border border-gray-300 outline-none text-gray-800 text-lg pl-5 focus:ring-2 focus:ring-purple-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="remember-forgot flex justify-between items-center">
              <a href="#" className="text-gray-600 hover:underline">
                Forgot Password?
              </a>
              <button
                type="submit"
                className="w-32 h-12 bg-purple-500 text-white font-semibold rounded-md text-lg hover:bg-purple-600 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
          <div className="register-link mt-8 text-center">
            <p className="text-gray-800">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-purple-500 font-semibold hover:underline"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
