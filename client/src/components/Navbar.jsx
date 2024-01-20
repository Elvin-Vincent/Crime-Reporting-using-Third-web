import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center h-full py-5 uppercase ">
        <h1 className="text-4xl font-bold ml-6 text-neutral-600">
          Safe Whistle
        </h1>

        <ul className="flex gap-x-10 mr-10">
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
              href="/login"
              className="text-lg font-medium text-white hover:text-red-500"
            >
              login
              <div className="underline"></div>
            </a>
          </li>

          <li className="group relative">
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
          </li>
        </ul>
      </div>
    </div>
  );
}
