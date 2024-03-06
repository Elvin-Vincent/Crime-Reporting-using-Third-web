import React from "react";
import { Route, Routes } from "react-router-dom";
import OfficerHome from "../pages/OfficerHome";
import NewComplaint from "../pages/NewComplaint";
import Analytics from "../pages/Analytics";
import Message from "../pages/Message";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OfficerHome />} />
        <Route path="/complaints" element={<NewComplaint />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/message" element={<Message />} />
        <Route
          path="/*"
          element={<div className="h-screen bg-red-300">Error</div>}
        />
      </Routes>
    </div>
  );
};

export default Pages;
