// AboutUs.js

import React from "react";

const AboutUs = () => {
  return (
    <div
      className=" bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen"
      id="content3"
    >
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-8">
          Welcome to the Illegal Drug Trafficking Reporting Project. We are a
          dedicated team committed to leveraging blockchain technology to combat
          illegal drug trafficking and contribute to building safer communities.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-8">
          Our mission is to empower individuals and communities to report
          illegal drug trafficking activities securely and anonymously. By
          utilizing blockchain technology, we aim to create a transparent and
          immutable record of reported incidents, ensuring the integrity of the
          data and promoting accountability.
        </p>

        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-700 mb-8">
          Our platform provides a user-friendly interface for individuals to
          submit reports related to illegal drug trafficking. The blockchain
          ensures that once a report is submitted, it becomes part of an
          unalterable ledger, making the information resistant to tampering or
          manipulation. This not only protects the anonymity of the reporter but
          also enhances the credibility of the reported incidents.
        </p>

        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" p-4 rounded-lg shadow-2xl">
            <img className="mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2">Arjun M S</h3>
            <p className="text-gray-700">Jec20cs029</p>
          </div>
          <div className=" p-4 rounded-lg shadow-2xl">
            <img className="mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2">Abhin murali</h3>
            <p className="text-gray-700">Jec20cs003</p>
          </div>
          <div className=" p-4 rounded-lg shadow-2xl">
            <img className="mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2">Elvin vincent a</h3>
            <p className="text-gray-900">Jec20cs047</p>
          </div>
          <div className=" p-4 rounded-lg shadow-2xl">
            <img className="mb-4 rounded-full" />
            <h3 className="text-xl font-bold mb-2">joyel p r</h3>
            <p className="text-gray-700">Jec20cs059</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
