import React, { useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const contract_address = "0x23C6d47dF17251b21fd37cEff9D8ec580A9BeB2b";
const privatekey =
  "04412baef9e02eb3b94888ccf4917d29358562603012ebeebc73198e53230400";

const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwZDJkMzhiMC1hY2NhLTRhNzAtYTI1NC03ZjY5ZWJlYTI4NzMiLCJlbWFpbCI6ImVsdmludmEyMjcxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJhNDdjNWIyZmZiNjViYzAxYmM5ZCIsInNjb3BlZEtleVNlY3JldCI6IjUxMDZjZDk3M2ZmZjA4ZTZlMDM0ODAxODAyYTk3MDQwN2VhZDlmZDAxMzBhOGVkYTU0NzQyYzliYzZlN2YyMjciLCJpYXQiOjE3MTM4Mjk4NzJ9._IJG1b_g0yCmX3VHkGsAnpEofr4jadjfsn4uH-BYwSc"; // Your JWT token

const PinataUploader = () => {
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

      if (!res.ok) {
        throw new Error("Failed to pin file to IPFS");
      }

      const resData = await res.json();
      const IpfsHash = resData.IpfsHash;

      if (!privatekey) {
        throw new Error("Private key is not provided.");
      }

      const sdkOptions = {
        network: "polygon",
      };

      const sdk = new ThirdwebSDK(privatekey, sdkOptions);
      const contract = sdk.GetContract("{{contract_address}}");

      const TransactionResult = await contract.Write("submitReport", IpfsHash);
      console.log(TransactionResult);

      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="flex justify-center items-center mt-20">
      <label
        for="file-upload"
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Choose File
      </label>
      <input
        type="file"
        id="file-upload"
        class="hidden"
        onChange={handleFileChange}
      />
      <button
        class="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Upload
      </button>
    </div>
  );
};

export default PinataUploader;
