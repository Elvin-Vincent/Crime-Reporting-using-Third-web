import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [mobileView, setMobileView] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center h-full py-5 uppercase relative z-50 ">
        <h1 className="text-4xl max-xs:text-[25px] font-bold ml-6 text-red-600 cursor-pointer  tracking-wider transform hover:scale-95 hover:bg-opacity-50 transition ease-in duration-200">
          Safe Whistle
        </h1>

        <ul className="xs:flex hidden gap-x-10 mr-10">
          <li className="group relative">
            <a
              href="/"
              className="text-lg font-medium text-white hover:text-red-500"
            >
              home
              <div className="underline"></div>
            </a>
          </li>
          <li className="group relative">
            <a
              href="/services"
              className="text-lg font-medium text-white hover:text-red-500"
            >
              services
              <div className="underline"></div>
            </a>
          </li>
          <li className="group relative">
            <a
              href="/login"
              className="text-lg font-medium text-white hover:text-red-500"
            >
              login
              <div className="underline"></div>
            </a>
          </li>
          <li className="group relative">
            <a
              href="/aboutus"
              className="text-lg font-medium text-white hover:text-red-500"
            >
              About Us
              <div className="underline"></div>
            </a>
          </li>

          {/* <li className="group relative">
            <ScrollLink
              to="content3"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-lg font-medium text-white hover:text-red-500 cursor-pointer"
            >
              About us
              <div className="underline"></div>
            </ScrollLink>
          </li> */}
        </ul>

        <div className="hidden max-xs:block px-5 cursor-pointer">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setMobileView(true)}
          >
            <path
              d="M20 7L4 7"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20 12L4 12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20 17L4 17"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div
            className="flex flex-col h-full fixed top-0 right-0 items-start justify-start z-[999] duration-500 backdrop-blur-lg p-5 bg-slate-600/90"
            style={{ transform: mobileView ? "none" : "translateX(100%)" }}
          >
            <div className="flex flex-col">
              <div className="flex justify-end">
                <svg
                  onClick={() => setMobileView(false)}
                  fill="#ffffff"
                  width="25px"
                  height="25px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>cross-round</title>
                  <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM9.76 20.256q0 0.832 0.576 1.408t1.44 0.608 1.408-0.608l2.816-2.816 2.816 2.816q0.576 0.608 1.408 0.608t1.44-0.608 0.576-1.408-0.576-1.408l-2.848-2.848 2.848-2.816q0.576-0.576 0.576-1.408t-0.576-1.408-1.44-0.608-1.408 0.608l-2.816 2.816-2.816-2.816q-0.576-0.608-1.408-0.608t-1.44 0.608-0.576 1.408 0.576 1.408l2.848 2.816-2.848 2.848q-0.576 0.576-0.576 1.408z"></path>
                </svg>
              </div>
              <div>
                <ul className="flex-col py-14 px-6 space-y-6">
                  <li className="group relative">
                    <a
                      href="/"
                      className="text-lg font-medium text-white hover:text-red-500"
                    >
                      home
                      <div className="underline"></div>
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="/services"
                      className="text-lg font-medium text-white hover:text-red-500"
                    >
                      services
                      <div className="underline"></div>
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="/login"
                      className="text-lg font-medium text-white hover:text-red-500"
                    >
                      login
                      <div className="underline"></div>
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="/aboutus"
                      className="text-lg font-medium text-white hover:text-red-500"
                    >
                      About Us
                      <div className="underline"></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
