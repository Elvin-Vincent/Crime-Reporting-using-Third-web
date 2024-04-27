import React, { useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useContractWrite,
  metamaskWallet,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x567Ba6974BF266515E26537A8b688afC67Af02a0" // Replace with your contract address
  );
  const { mutateAsync: submitReport } = useContractWrite(
    contract,
    "submitReport"
  );
  const { mutateAsync: verifyReport } = useContractWrite(
    contract,
    "verifyReport"
  );

  const address = useAddress();
  const connect = metamaskWallet();

  const publishReport = async (ipfsHash) => {
    try {
      const data = await submitReport({
        args: [ipfsHash],
      });

      console.log("Report submission success", data);
    } catch (error) {
      console.log("Report submission failure", error);
    }
  };

  const verifySubmittedReport = async (reportId) => {
    try {
      const data = await verifyReport({
        args: [reportId],
      });

      console.log("Report verification success", data);
    } catch (error) {
      console.log("Report verification failure", error);
    }
  };

  const getReportDetails = async (reportId) => {
    try {
      const reportDetails = await contract.call("getReport", [reportId]);
      return {
        reporter: reportDetails[0],
        ipfsHash: reportDetails[1],
        timestamp: reportDetails[2].toNumber(),
        verified: reportDetails[3],
      };
    } catch (error) {
      console.log("Error retrieving report details", error);
      return null;
    }
  };

  const getAllSubmittedReports = async () => {
    try {
      const allReports = await contract.call("getAllSubmittedReports");
      return allReports;
    } catch (error) {
      console.log("Error retrieving submitted reports", error);
      return [];
    }
  };

  const getAllVerifiedReports = async () => {
    try {
      const verifiedReports = await contract.call("getAllVerifiedReports");
      return verifiedReports;
    } catch (error) {
      console.log("Error retrieving verified reports", error);
      return [];
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        publishReport,
        verifySubmittedReport,
        getReportDetails,
        getAllSubmittedReports,
        getAllVerifiedReports,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
