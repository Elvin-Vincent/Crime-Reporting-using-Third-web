import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 md:p-8 flex-grow overflow-y-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
          Our Mission
        </h1>

        {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
          Our Mission
        </h2> */}
        <p className="text-gray-700 mb-4 md:mb-8">
          Our mission is to empower individuals and communities to report
          illegal drug trafficking activities securely and anonymously. By
          utilizing blockchain technology, we aim to create a transparent and
          immutable record of reported incidents, ensuring the integrity of the
          data and promoting accountability.
        </p>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
          How It Works
        </h2>
        <p className="text-gray-700 mb-4 md:mb-8">
          Our platform provides a user-friendly interface for individuals to
          submit reports related to illegal drug trafficking. The blockchain
          ensures that once a report is submitted, it becomes part of an
          unalterable ledger, making the information resistant to tampering or
          manipulation. This not only protects the anonymity of the reporter but
          also enhances the credibility of the reported incidents.
        </p>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 uppercase">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 uppercase">
          <div className="p-4 rounded-lg shadow-2xl">
            <img className="mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2">Arjun M S</h3>
            <p className="text-gray-700">Jyothi Engineering College</p>
          </div>
          <div className="p-4 rounded-lg shadow-2xl">
            <img className="mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2">Abhin murali</h3>
            <p className="text-gray-700">Jyothi Engineering College</p>
          </div>
          <div className="p-4 rounded-lg shadow-2xl">
            <img className="mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2">Elvin vincent a</h3>
            <p className="text-gray-900">Jyothi Engineering College</p>
          </div>
          <div className="p-4 rounded-lg shadow-2xl">
            <img className="mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2">joyel p r</h3>
            <p className="text-gray-700">Jyothi Engineering College</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
