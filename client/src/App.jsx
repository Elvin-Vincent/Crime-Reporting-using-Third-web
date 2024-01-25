import "./App.css";
import Home from "./Home";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Error from "./components/Error";
import Admin from "./components/Admin";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="35f54b0dd60033ae3f80c93e76f45cd6"
      // authConfig={{
      //   authUrl: "/api/auth",
      //   domain: "http://localhost:3000",
      // }}
    >
      <div className=" h-screen bg-center bg-cover bg-img1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
