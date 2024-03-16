import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "../pages/MainContainer";
import UserComplaint from "../pages/UserComplaint";
import UserAnalytics from "../pages/UserAnalytics";
import UserWallet from "../pages/UserWallet";
import UserRecent from "../pages/UserRecent";

const UserPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/usercomplaints" element={<UserComplaint />} />
        <Route path="/UserWallet" element={<UserWallet />} />
        <Route path="/useranalytics" element={<UserAnalytics />} />
        <Route path="/userrecent" element={<UserRecent />} />

        <Route
          path="/*"
          element={<div className="h-screen bg-red-300">Error</div>}
        />
      </Routes>
    </div>
  );
};

export default UserPages;
