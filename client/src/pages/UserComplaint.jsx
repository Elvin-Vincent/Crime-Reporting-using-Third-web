import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";
import "./UserComplaint.css";

import { useStateContext } from "../context";
import { money } from "../assets";
import CustomButton from "../components/CustomButton";
import FormField from "../components/FormField";
import Loader from "../components/Loader";

import { checkIfImage } from "../utils";

const UserComplaint = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { UserComplaint, publishReport } = useStateContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    deadline: "",
    image: "",
    target: "", // Initialize target as an empty string
  });

  const [file, setFile] = useState(null);
  const [displayImg, setDisplayImg] = useState(null);
  const [fileName, setFileName] = useState("Upload Image");

  const uploadToPinata = async () => {
    setFileName("Image Uploading.....");
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "6a243823f7229c8e03c0",
            pinata_secret_api_key:
              "01ac379756e0f61a28cb6e1517f028e10f6b8ce8782e586e27ecc7fe684f3245",
            "Content-Type": "multipart/form-data",
          },
        });
        const imageUrl = response.data.IpfsHash;
        const publish = await publishReport(imageUrl);
        setIsLoading(false);
        setForm({ ...form, image: imageUrl });

        alert("Successfully Image Uploaded");
        setFileName("Uploaded...");

        navigate(
          `/userdashboard/userrecent/${imageUrl}?title=${form.title}&description=${form.description}&deadline=${form.deadline}`
        );
      } catch (error) {
        alert("Unable to upload to IPFS");
      }
    }
  };

  const retriveHash = (event) => {
    event.preventDefault(); // Prevent form submission

    const data = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(event.target.files[0]);
      if (event.target.files && event.target.files[0]) {
        setDisplayImg(URL.createObjectURL(event.target.files[0]));
      }
    };
  };

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const { title, description, deadline, image } = form;

    if (image || title || deadline || description) {
      await UserComplaint({
        ...form,
        target: ethers.utils.parseUnits(form.target, 18),
      });
      setIsLoading(false);
    } else {
      console.log("Provide the details");
    }
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 h-screen  overflow-y-auto">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] mt-48">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Send Report
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Report Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          Upload Image
        </span>

        <div className="relative w-64">
          <div className="h-100 bg-gray-100 rounded-lg flex flex-col justify-between">
            <div className="flex items-center p-2">
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex items-center px-4 py-2 bg-gray-800 text-white rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15l5-5m0 0l-5-5m5 5H7"
                  />
                </svg>
                Choose Image
              </label>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={retriveHash}
              />
            </div>
            {displayImg ? (
              <img
                src={displayImg}
                alt="image"
                className="w-48 h-auto max-h-48 object-contain mx-auto"
              />
            ) : (
              <img
                src="/src/assets/logo1.png"
                alt="placeholder"
                className="w-48 h-auto max-h-48 object-contain mx-auto"
              />
            )}
            <button
              // onClick={uploadToPinata}
              className="w-full bg-blue-500 text-white py-2 rounded-b-lg hover:bg-blue-600"
            >
              {fileName}
            </button>
          </div>
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>

        <div className="flex justify-center items-center mt-[40px]">
          <button
            type="button"
            onClick={uploadToPinata}
            className="font-semibold border-none bg-[#4caf50] p-4 text-white rounded-md hover:bg-[#388e3c] transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserComplaint;
