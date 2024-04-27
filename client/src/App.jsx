import "./App.css";
import Home from "./Home";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import UserMenu from "./components/UserMenu";
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";
import { ethers } from "ethers";

function App() {
  // const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

  return (
    // authConfig={{
    //   authUrl: "/api/auth",
    //   domain: "http://localhost:3000",
    // }}

    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="*" element={<Error />} />
        <Route path="/userdashboard/*" element={<UserMenu />} />
      </Routes>
    </div>
  );
}

export default App;
