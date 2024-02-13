import React from "react";

export const Together = () => {
  return (
    <div className="flex crime-reporting-container">
      <div className="w-1/2">
        {/* Insert your image here */}
        <img src="images/people.png" alt="Crime Reporting" className="h-full" />
      </div>
      <div className="w-1/2 px-4">
        <h1 className="text-2xl font-bold mb-2 text-black">
          TOGETHER TO MAKE OUR WORLD SECURE
        </h1>
        <p className="text-black text-sm font-bold">
          Public awareness and support for reporting crimes on a website
          utilizing blockchain technology are crucial steps towards creating a
          safer world to live in. Blockchain, known for its immutable and
          transparent nature, offers an innovative solution to enhance security
          and trust in crime reporting platforms. By leveraging blockchain,
          reported incidents can be securely recorded, timestamped, and stored
          in a decentralized manner, ensuring data integrity and preventing
          tampering or manipulation. Moreover, public awareness campaigns can
          educate individuals about the benefits of reporting crimes through
          such platforms, emphasizing the role of community involvement in
          combating criminal activities. With increased public participation and
          support, these blockchain-based crime reporting websites can become
          powerful tools for law enforcement agencies, enabling quicker response
          times, more efficient investigations, and ultimately contributing to
          the overall safety and well-being of society.
        </p>
      </div>
    </div>
  );
};
