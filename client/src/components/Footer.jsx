import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        rel="stylesheet"
      />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div className="logo-details text-white text-2xl">
            <i className="fab fa-slack"></i>
            <span className="ml-2">SAFE WHISTLE</span>
          </div>
          <div className="media-icons flex items-center space-x-4">
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-white hover:text-blue-400 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-pink-600 text-white hover:bg-white hover:text-pink-600 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-white hover:text-blue-700 transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500 transition duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="link-boxes flex flex-wrap">
            <div className="box mr-8 mb-4">
              <h3 className="link_name text-white font-semibold mb-2">About</h3>
              <ul className="text-gray-300">
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Mission & Vision
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div className="box mr-8 mb-4">
              <h3 className="link_name text-white font-semibold mb-2">
                Solutions
              </h3>
              <ul className="text-gray-300">
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Blockchain Reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Social Issues Tracker
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Data Transparency
                  </a>
                </li>
              </ul>
            </div>
            <div className="box mr-8 mb-4">
              <h3 className="link_name text-white font-semibold mb-2">
                Resources
              </h3>
              <ul className="text-gray-300">
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Whitepapers
                  </a>
                </li>
              </ul>
            </div>
            <div className="box mr-8 mb-4">
              <h3 className="link_name text-white font-semibold mb-2">
                Contact
              </h3>
              <ul className="text-gray-300">
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-500">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="box">
              <h3 className="link_name text-white font-semibold mb-2">
                Feedback
              </h3>
              <div className="flex items-center">
                <textarea
                  placeholder="Enter your feedback"
                  className=" bg-gray-200 w-80 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <button className="bg-white text-blue-500 font-semibold py-1 px-4 rounded ml-2 hover:bg-blue-500 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between">
            <span className="text-white text-sm">
              © {new Date().getFullYear()}{" "}
              <a href="#" className="text-blue-500">
                SAFE WHISTLE
              </a>{" "}
              All rights reserved
            </span>
            <span className="text-white text-sm">
              <a href="#" className="mr-2 text-blue-500 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
