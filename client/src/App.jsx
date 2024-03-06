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
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
