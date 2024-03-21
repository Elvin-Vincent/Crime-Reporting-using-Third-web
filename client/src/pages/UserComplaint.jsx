import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import "./UserComplaint.css";

import { useStateContext } from "../context";
import { createCampaign, money } from "../assets";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import { checkIfImage } from "../utils";

const UserComplaint = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    reporterName: "",
    crimeTitle: "",
    crimeDescription: "",
    location: "",
    date: "",
    evidenceImage: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    checkIfImage(form.evidenceImage, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Please provide a valid image URL as evidence.");
        setForm({ ...form, evidenceImage: "" });
      }
    });
  };

  return (
    <div className="user flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 ">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-gradient-to-r from-purple-700 to-pink-600 rounded-[10px] mt-40">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white ">
          Report a Crime
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Crime Title *"
            placeholder="Title of the Crime"
            inputType="text"
            value={form.crimeTitle}
            handleChange={(e) => handleFormFieldChange("crimeTitle", e)}
          />
        </div>

        <FormField
          labelName="Description *"
          placeholder="Description of the Crime"
          isTextArea
          value={form.crimeDescription}
          handleChange={(e) => handleFormFieldChange("crimeDescription", e)}
        />

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Location *"
            placeholder="Location of the Crime"
            inputType="text"
            value={form.location}
            handleChange={(e) => handleFormFieldChange("location", e)}
          />
          <FormField
            labelName="Date *"
            placeholder="Date of the Crime"
            inputType="date"
            value={form.date}
            handleChange={(e) => handleFormFieldChange("date", e)}
          />
        </div>

        <FormField
          labelName="Evidence Image *"
          placeholder="URL of Evidence Image"
          inputType="url"
          value={form.evidenceImage}
          handleChange={(e) => handleFormFieldChange("evidenceImage", e)}
        />

        <div className="flex justify-center items-center mt-[40px] pb-3">
          <CustomButton
            btnType="submit"
            title="Submit Report"
            styles="bg-gradient-to-r from-green-400 to-green-600 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700"
          />
        </div>
      </form>
    </div>
  );
};

export default UserComplaint;
