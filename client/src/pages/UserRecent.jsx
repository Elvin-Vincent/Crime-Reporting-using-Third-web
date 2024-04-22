import React from "react";
import { useLocation } from "react-router-dom";

const UserRecent = () => {
  const location = useLocation();
  const formData = location.state.formData;

  return (
    <div>
      <h1>Recently Submitted Details</h1>
      <p>Reporter Name: {formData.reporterName}</p>
      <p>Crime Title: {formData.crimeTitle}</p>
      <p>Crime Description: {formData.crimeDescription}</p>
      <p>Location: {formData.location}</p>
      <p>Date: {formData.date}</p>
      <img src={formData.evidenceImage} alt="Evidence" />
    </div>
  );
};

export default UserRecent;
