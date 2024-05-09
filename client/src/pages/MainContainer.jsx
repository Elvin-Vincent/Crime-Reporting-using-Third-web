import React from "react";
import "./MainContainer.css";

import { Link } from "react-router-dom";

function MainContainer() {
  return (
    <div>
      <div className="maincontainer">
        <div className="left">
          <div
            className="banner bg-cover bg-center relative"
            // style={{ backgroundImage: `url(${Banner})` }}
          >
            <div className="absolute inset-0 opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center te">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                Welcome to <span className="text-red-600">Safe Whistle</span>
              </h1>
              <h2 className="text-lg md:text-xl text-gray-300 mb-6 text-center">
                Your trusted destination for reporting and resolving issues
              </h2>
              <div className="flex justify-center">
                <Link to="/userdashboard/usercomplaints" className="button te">
                  New Complaint
                </Link>
              </div>
            </div>
          </div>

          <main>
            <div
              className="text-gray-300 font-bold mb-28 "
              data-aos="fade-down"
            >
              <h1 className="text-white text-center text-5xl mt-10 mb-10">
                Filing a Complaint on Safe Whistle Crime Reporting Portal
              </h1>
              <p class="text-lg leading-relaxed my-4">
                <span class="font-bold text-blue-800">Safe Whistle</span> is an
                innovative platform leveraging blockchain technology to enable
                secure and anonymous reporting of various crimes online.
                Developed with the mission of empowering individuals to report
                incidents without fear of retribution, Safe Whistle provides a
                user-friendly interface for victims/complainants to lodge their
                complaints.
              </p>
              <p class="text-lg leading-relaxed my-4">
                Our platform prioritizes{" "}
                <span class="font-bold text-green-600">cyber crimes</span>,
                particularly those targeting women and children, ensuring swift
                and appropriate action by law enforcement agencies. It's crucial
                to furnish accurate details while filing a complaint to expedite
                the resolution process.
              </p>
              <p class="text-lg leading-relaxed my-4">
                For emergencies or non-cyber crimes, please contact your local
                police department. National helpline numbers include{" "}
                <span class="font-bold text-red-600">112</span> for police
                assistance, <span class="font-bold text-red-600">181</span> for
                women's aid, and{" "}
                <span class="font-bold text-red-600">1930</span> for the Cyber
                Crime Helpline.
              </p>
            </div>

            {/* <body className="bg-transparent">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center flex-col">
                <h2 className="text-2xl font-bold text-center mb-6">
                  <FontAwesomeIcon icon={faLink} />
                  Useful Links
                </h2>
                <div className="flex space-x-4 overflow-auto p-4">
                  <div className="min-w-max  shadow-md rounded-lg p-4">
                    <img src="/images/left-logo.png" alt="Logo 1" />
                  </div>
                  <div className="min-w-max  shadow-md rounded-lg p-4">
                    <img src="/images/left-logo.png" alt="Logo 2" />
                  </div>
                  <div className="min-w-max  shadow-md rounded-lg p-4">
                    <img src="/images/left-logo.png" alt="Logo 3" />
                  </div>
                  <div className="min-w-max  shadow-md rounded-lg p-4">
                    <img src="/images/left-logo.png" alt="Logo 4" />
                  </div>
                  <div className="min-w-max  shadow-md rounded-lg p-4">
                    <img src="/images/left-logo.png" alt="Logo 5" />
                  </div>
                  <div className="min-w-max  shadow-md rounded-lg p-4">
                    <img src="/images/left-logo.png" alt="Logo 6" />
                  </div>
                  <div className="min-w-max  shadow-md rounded-lg p-4">
                    <img src="/images/left-logo.png" alt="Logo 7" />
                  </div>
                </div>
                <div className="flex space-x-1 mt-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-zinc-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-zinc-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-zinc-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </body> */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
