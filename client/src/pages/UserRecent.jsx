// Images.jsx

import React from "react";
import { useParams } from "react-router-dom";

const UserRecent = () => {
  const { hash } = useParams(); // Get the hash value from the URL

  // Create the Cloudflare IPFS URL with the hash value
  const imageUrl = `https://cloudflare-ipfs.com/ipfs/${hash}`;

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Render the image using the created URL */}
      <img src={imageUrl} alt="Uploaded" className="max-w-full max-h-full" />
    </div>
  );
};

export default UserRecent;
