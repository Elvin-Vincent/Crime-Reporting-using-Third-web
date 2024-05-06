import React, { useState, useEffect } from "react";

import DisplayCampaigns from "../components/DisplayCampaigns";
import { useStateContext } from "../context";

const UserRecent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getAllSubmittedReports } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getAllSubmittedReports();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default UserRecent;
