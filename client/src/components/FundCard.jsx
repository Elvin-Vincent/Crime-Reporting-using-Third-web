// FundCard.jsx

import React from "react";
import { StateContextProvider, useStateContext } from "../context";

const FundCard = ({ imageUrl, title, index, description, date }) => {
  const { verifySubmittedReport } = useStateContext();
  const verifyReport = async () => {
    try {
      await verifySubmittedReport(index); // Use reportId dynamically
    } catch (error) {
      console.log("Report verification failure", error);
    }
  };

  return (
    <div className="sm:w-[288px] m-10 w-full rounded-[15px] bg-gray-100 cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col">
      <div className="fund-card rounded-t-lg overflow-hidden">
        <img
          src={imageUrl}
          alt="Report Image"
          className="w-full h-[158px] object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
        <p className="text-sm text-gray-400">Date: {date}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={verifyReport}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default FundCard;
