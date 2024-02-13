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
          <i
            onClick={() => setMobileView(true)}
            className="fa-solid fa-bars text-xl"
          ></i>

          <div
            className="flex flex-col h-full fixed top-0 right-0 items-start justify-start z-[999] duration-500 backdrop-blur-lg p-5"
            style={{ transform: mobileView ? "none" : "translateX(100%)" }}
          >
            <div className="flex flex-col">
              <div className="flex justify-end">
                <i
                  onClick={() => setMobileView(false)}
                  className="text-3xl justify-items-end fa-solid fa-xmark"
                ></i>
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
