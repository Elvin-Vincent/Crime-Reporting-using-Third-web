import React, { useState, useEffect } from "react";
import FundCard from "./FundCard"; // Assuming FundCard component is in a separate file
import { loader } from "../assets"; // Import the loader image
import {
  useAddress,
  useContract,
  useContractWrite,
  metamaskWallet,
} from "@thirdweb-dev/react";
import UserFundCard from "./UserFundCard";

// Define the getAllSubmittedReports function
const getAllSubmittedReports = async (contract, setisLoading) => {
  try {
    const allReports = await contract.call("getAllSubmittedReports");
    const cloudflareIpfsGateway = "https://cloudflare-ipfs.com/ipfs/";

    // Create a new array with imageUrl property added to each report
    const reportsWithImageUrl = allReports.map((report) => {
      const ipfsHash = report[1];
      const imageUrl = cloudflareIpfsGateway + ipfsHash;
      console.log(imageUrl); // Output each image URL separately
      return { ...report, imageUrl }; // Create a new object with imageUrl property
    });

    // Set loading to false after reports are fetched
    setisLoading(false);

    return reportsWithImageUrl;
  } catch (error) {
    console.log("Error retrieving submitted reports", error);
    setisLoading(false); // Set loading to false in case of error
    return [];
  }
};

// Define the UserDisplay
const UserDisplay = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setisLoading] = useState(true); // State to track loading

  const { contract } = useContract(
    "0x567Ba6974BF266515E26537A8b688afC67Af02a0" // Replace with your contract address
  );

  useEffect(() => {
    async function fetchReports() {
      try {
        const allReports = await getAllSubmittedReports(contract, setisLoading);
        setReports(allReports);
      } catch (error) {
        console.log("Error fetching reports", error);
      }
    }

    fetchReports();
  }, [contract]); // Adding contract as a dependency

  return (
    <div>
      {/* <h1 className="text-center text-2xl font-bold mt-6 mb-4">All Reports</h1> */}
      <div className="parent-component flex flex-wrap justify-center">
        {/* Display loader if isLoading is true */}
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {/* Display FundCards if reports are available */}
        {!isLoading &&
          reports.map((report, index) => (
            <UserFundCard key={index} imageUrl={report.imageUrl} />
          ))}
      </div>
    </div>
  );
};

export default UserDisplay;
