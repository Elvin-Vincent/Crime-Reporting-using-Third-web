import React, { useState, useEffect } from "react";

const Message = ({ reportId }) => {
  const [reportDetails, setReportDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const fetchReportDetails = async () => {
      try {
        const details = await getReportDetails(reportId);
        setReportDetails(details);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching report details", error);
        setIsLoading(false);
      }
    };
    fetchReportDetails();
  }, [reportId]); // Include reportId in the dependency array

  return (
    <div className="h-screen w-full flex bg-red-500 flex-col">
      <h1>Message</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        reportDetails && (
          <div>
            <p>Reporter: {reportDetails.reporter}</p>
            <p>IPFS Hash: {reportDetails.ipfsHash}</p>
            <p>Timestamp: {reportDetails.timestamp}</p>
            <p>Verified: {reportDetails.verified}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Message;
