import React, { useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
const contract_address = "0x23C6d47dF17251b21fd37cEff9D8ec580A9BeB2b";
const privatekey =
  "04412baef9e02eb3b94888ccf4917d29358562603012ebeebc73198e53230400";

const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwZDJkMzhiMC1hY2NhLTRhNzAtYTI1NC03ZjY5ZWJlYTI4NzMiLCJlbWFpbCI6ImVsdmludmEyMjcxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI4OGNkNjUwYmM1ZGYzYzhmMjdmYiIsInNjb3BlZEtleVNlY3JldCI6IjU2ZDNmY2I3ZWZjODMzOWRhNTcwN2ZlZjQyOWI1NDNkNzk3ZmNiYjdiNGY4YzlkYzBlMmM4ZDZlY2FjMjFhZDciLCJpYXQiOjE3MTM4MDgxMzd9.POIjz-M02q2Jn-i0Oe7qjZRxITB8ZWxQ5m_EmFmI0pE";

const UserComplaint = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }

    try {
      console.log(contract_address, "address here");
      console.log(privatekey);
      const formData = new FormData();
      formData.append("file", selectedFile);

      const pinataMetadata = JSON.stringify({
        name: selectedFile.name,
      });
      formData.append("pinataMetadata", pinataMetadata);

      const pinataOptions = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", pinataOptions);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
          body: formData,
        }
      );
      const sdk = ThirdwebSDK.fromPrivateKey(privatekey, "polygon");
      const resData = await res.json();
      const IpfsHash = resData.IpfsHash;
      const contract = await sdk.GetContract(contract_address);

      const TransactionResult = await contract.Write("submitReport", IpfsHash);
      console.log(TransactionResult);

      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default UserComplaint;
