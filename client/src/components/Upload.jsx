import React, { useState } from "react";
import { useDisconnect } from "@thirdweb-dev/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  faCamera,
  faFileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

const UserMenu = () => {
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const disconnect = useDisconnect();

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  return (
    <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen text-gray-800">
      <div className="flex  lg:flex-row justify-between items-center ">
        <h1 className="text-4xl font-bold ml-6 text-zinc-800 py-3 uppercase  lg:mt-3">
          Safe Whistle
        </h1>
        <div className=" mt-3  lg:mr-12 ">
          <ConnectWallet />
        </div>
      </div>
      <div className="flex items-center justify-center  h-full">
        <div className="border-2 border-neutral-100 p-6 rounded-lg shadow-2xl w-full max-w-7xl mt-14 lg:mt-20 bg-opacity-70 backdrop-filter backdrop-blur-md">
          <form className="rounded-lg p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2 text-center text-black uppercase">
                Complaint Registration
              </h1>
              <label
                htmlFor="photo"
                className="mb-2 text-sm font-medium text-gray-800 flex items-center"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <FontAwesomeIcon
                  icon={faCamera}
                  className="mr-2 text-gray-800"
                />
                <h1 className="font-bold">Upload a Photo</h1>
              </label>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </div>
            <div className="mb-6">
              <label
                htmlFor="details"
                className=" mb-2 text-sm font-medium text-gray-800 flex items-center"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-black" />
                <h1 className="font-bold">
                  Provide Details of the Information
                </h1>
              </label>
              <textarea
                id="details"
                className="block w-full h-40 px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring focus:border-blue-300"
                value={details}
                onChange={handleDetailsChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="location"
                className=" mb-2 text-sm font-medium text-black flex items-center"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-black "
                />
                <h1 className="font-bold">Location</h1>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  className="block w-full px-4 py-2 text-sm text-black border border-gray-300 rounded-lg  focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter location"
                  value={location}
                  onChange={handleLocationChange}
                />
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <button
                type="submit"
                className="w-full lg:w-auto mb-4 lg:mb-0 px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit Report
              </button>
              <button
                className="w-full lg:w-auto bg-red-500 text-white font-medium py-3 px-6 rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={disconnect}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
