import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen text-gray-800">
      <Navbar />
      <div className="container mx-auto p-4 md:p-8 flex-grow overflow-y-auto">
        <h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 uppercase"
          data-aos="zoom-in"
        >
          Our Mission
        </h1>

        {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
          Our Mission
        </h2> */}
        <p className="text-black mb-4 md:mb-7 text-sm" data-aos="zoom-in">
          Our mission is to empower individuals and communities to report
          illegal drug trafficking activities securely and anonymously. By
          utilizing blockchain technology, we aim to create a transparent and
          immutable record of reported incidents, ensuring the integrity of the
          data and promoting accountability.
        </p>

        <h2
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 uppercase"
          data-aos="zoom-in"
        >
          How It Works
        </h2>
        <p className="text-black mb-4 md:mb-8 text-sm  " data-aos="zoom-in">
          Our platform provides a user-friendly interface for individuals to
          submit reports related to illegal drug trafficking. The blockchain
          ensures that once a report is submitted, it becomes part of an
          unalterable ledger, making the information resistant to tampering or
          manipulation. This not only protects the anonymity of the reporter but
          also enhances the credibility of the reported incidents.Furthermore,
          our platform employs robust encryption protocols to safeguard
          sensitive information, ensuring the utmost privacy and security for
          all users involved in the reporting process.
        </p>

        <h2
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 uppercase"
          data-aos="zoom-in"
        >
          Meet the Team
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 uppercase">
          <div class="flex flex-col gap-8 md:mt-8">
            <div class="p-4 rounded-lg shadow-2xl" data-aos="flip-left">
              <h3 class="text-xl font-bold mb-2">Arjun M S</h3>
              <p class="text-black">Jyothi Engineering College</p>
            </div>
            <div class="p-4 rounded-lg shadow-2xl" data-aos="flip-left">
              <h3 class="text-xl font-bold mb-2">Abhin murali</h3>
              <p class="text-black">Jyothi Engineering College</p>
            </div>
          </div>

          <div class="flex flex-col gap-8 md:mt-8">
            <div class="p-4 rounded-lg shadow-2xl" data-aos="flip-right">
              <h3 class="text-xl font-bold mb-2">Elvin vincent a</h3>
              <p class="text-black">Jyothi Engineering College</p>
            </div>
            <div class="p-4 rounded-lg shadow-2xl" data-aos="flip-right">
              <h3 class="text-xl font-bold mb-2">joyel p r</h3>
              <p class="text-black">Jyothi Engineering College</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
