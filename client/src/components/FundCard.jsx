import React from "react";

const FundCard = ({ imageUrl, handleClick }) => {
  console.log(imageUrl);

  return (
    <div
      className="sm:w-[288px] m-10 w-full rounded-[15px] bg-[#424247] cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col"
      onClick={handleClick}
    >
      <div className="fund-card rounded-t-lg overflow-hidden">
        <img
          src={imageUrl}
          alt="Report Image"
          className="w-full h-[158px] object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Report Title</h2>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          convallis arcu vitae ex pharetra...
        </p>
      </div>
    </div>
  );
};

export default FundCard;
