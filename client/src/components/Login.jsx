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
      navigate("/Admin");
    } else {
      console.log("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center ">
        <div className="sm:shadow-2xl sm:rounded-lg p-8 md:p-20 border-2 border-gray-100 bg-transparent backdrop-filter backdrop-blur-lg mt-20 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h1 className="text-2xl font-bold  text-white text-center uppercase">
            Officer Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="input-box relative mt-6 border-b border-white">
              <label className="block text-sm font-medium mb-2 text-white uppercase">
                Username
              </label>
              <input
                type="text"
                id="email"
                className="w-full h-12 bg-transparent outline-none text-white text-lg pl-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box relative mt-6 border-b border-white">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-white uppercase"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full h-12 bg-transparent outline-none text-white text-lg pl-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="remember-forgot mt-6">
              <a href="#" className="text-white hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-white text-black font-semibold rounded-full mt-6 text-lg"
            >
              Login
            </button>
            <div className="register-link mt-8">
              <p className="text-white text-center">
                Don't have an account?
                <a
                  href="#"
                  className="text-white font-semibold hover:underline"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
