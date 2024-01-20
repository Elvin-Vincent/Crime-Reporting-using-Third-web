import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending login credentials to the server
    // In a real application, this should be done through an API call
    if (email === "username" && password === "password") {
      console.log("Login successful!");
      navigate("/Admin");
    } else {
      console.log("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <div className=" shadow-2xl rounded-lg p-8 border border-gray-100 w-full max-w-xl mt-32">
          <h1 className="text-3xl font-bold mb-6 text-red-500 text-center uppercase">
            OfferLogin
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-800">
                Username
              </label>
              <input
                type="text"
                id="email"
                className="border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 w-full p-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-20 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-36"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
