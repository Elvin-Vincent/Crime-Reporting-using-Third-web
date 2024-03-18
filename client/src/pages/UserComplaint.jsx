import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import {
  faCamera,
  faFileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
// import { UploadOutlined } from "@ant-design/icons";
// import { Button, message, Upload } from "antd";

const UserComplaint = () => {
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState("");

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };
  // const props = {
  //   name: "file",
  //   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  //   progress: {
  //     strokeColor: {
  //       "0%": "#108ee9",
  //       "100%": "#87d068",
  //     },
  //     strokeWidth: 3,
  //     format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
  //   },
  // };

  return (
    <div className="flex items-center justify-center  h-full">
      <div className="border-2 border-blue-500 p-6 rounded-lg shadow-2xl w-full max-w-7xl mt-14 lg:mt-20  ">
        <form className="rounded-lg p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2 text-center text-red-500 uppercase">
              Complaint Registration
            </h1>
            <div className="mb-6">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-gray-200 flex items-center"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <FontAwesomeIcon
                  icon={faCamera}
                  className="mr-2 text-blue-500"
                />
                <h1 className="font-bold">Upload a Photo</h1>
                <input
                  type="file"
                  id="photo"
                  className="hidden"
                  value={photo}
                  onChange={handlePhotoChange}
                  // You can add more attributes as per your requirement
                />
                <span className="ml-2 inline-flex rounded-md shadow-sm">
                  <label
                    htmlFor="photo"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150 cursor-pointer"
                  >
                    Choose File
                  </label>
                </span>
              </label>
            </div>
          </div>
          <div className="mb-6 mt-10">
            <label
              htmlFor="details"
              className="text-sm font-medium text-gray-200 flex items-center"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                className="mr-2 text-blue-500"
              />
              <h1 className="font-bold">Provide Details of the Information</h1>
            </label>
            <textarea
              id="details"
              className="block w-full h-40 px-4 mt-2 py-2 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring focus:border-blue-300"
              value={details}
              onChange={handleDetailsChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-200 flex items-center"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 text-blue-500 "
              />
              <h1 className="font-bold">Location</h1>
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                className="block w-full px-4 py-2 mt-2 text-sm text-black border border-gray-300 rounded-lg  focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter location"
                value={location}
                onChange={handleLocationChange}
              />
              {/* <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  ></path>
                </svg>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <button
              type="submit"
              className="w-full lg:w-auto mb-4 lg:mb-0 px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit Report
            </button>
            <button className="w-full lg:w-auto bg-red-500 text-white font-medium py-3 px-6 rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserComplaint;
