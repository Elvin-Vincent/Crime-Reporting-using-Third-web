import React, { useState, useEffect } from "react";
import "./Services.css";
import Navbar from "./Navbar";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeAutoNext = 10000;

  // Define your thumbnail items here
  const thumbnailItems = [
    { id: 1, src: "images/drug.jpeg" },
    { id: 2, src: "images/waste.jpg" },
    { id: 3, src: "images/childlabour.jpg" },
    { id: 4, src: "images/sand.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), timeAutoNext);
    return () => clearInterval(interval);
  }, [activeIndex, timeAutoNext]);

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      document.getElementById("next")?.click();
    }, timeAutoNext);
    return () => clearTimeout(runNextAuto);
  }, [activeIndex, timeAutoNext]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % thumbnailItems.length);
  };

  const showSlider = (type) => {
    const sliderItemsDom = document.querySelectorAll(".carousel .list .item");
    const thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    if (type === "next") {
      document.querySelector(".carousel .list").appendChild(sliderItemsDom[0]);
      document
        .querySelector(".carousel .thumbnail")
        .appendChild(thumbnailItemsDom[0]);
      document.querySelector(".carousel")?.classList.add("next");
    } else {
      document
        .querySelector(".carousel .list")
        .prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      document
        .querySelector(".carousel .thumbnail")
        .prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      document.querySelector(".carousel")?.classList.add("prev");
    }

    setTimeout(() => {
      document.querySelector(".carousel")?.classList.remove("next");
      document.querySelector(".carousel")?.classList.remove("prev");
    }, 500);
  };

  return (
    <div className="carousel">
      <Navbar />
      <div className="list">
        <div className="item">
          <img src="images/drug.jpeg" />
          <div className="content">
            <div className="author">SAFE WHISTLE</div>
            <div className="title">OUR FOCUS AREAS</div>
            <div className="topic"> DRUG TRAFFICKING REPORTING</div>
            <div className="des">
              The website offers a cutting-edge solution for reporting illegal
              drug trafficking by leveraging blockchain technology. Through
              secure and immutable transactions recorded on the blockchain,
              users can anonymously report instances of drug trafficking,
              ensuring confidentiality and reliability in combating such
              criminal activities. This innovative approach enhances
              transparency and accountability, fostering a safer environment for
              communities worldwide.
            </div>
            <div className="buttons ">
              <button>SEE MORE</button>
              <button>CONNECT WALLET</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="images/waste.jpg" />
          <div className="content">
            <div className="author">SAFE WHISTLE</div>
            <div className="title">OUR FOCUS AREAS</div>
            <div className="topic"> PUBLIC WASTE REPORTING</div>
            <div className="des">
              The website offers a cutting-edge platform for reporting public
              waste management issues utilizing blockchain technology. Through
              secure and transparent transactions, users can document instances
              of waste mismanagement, fostering accountability and efficient
              resolution of environmental concerns. By harnessing blockchain's
              immutable ledger, the service ensures the integrity and
              traceability of reported data, ultimately empowering communities
              to drive positive change in waste management practices.
            </div>
            <div className="buttons ">
              <button>SEE MORE</button>
              <button>CONNECT WALLET</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="images/childlabour.jpeg" />
          <div className="content">
            <div className="author">SAFE WHISTLE</div>
            <div className="title">OUR FOCUS AREAS</div>
            <div className="topic"> CHILD LABOUR REPORTING</div>
            <div className="des">
              The website provides a secure platform for reporting instances of
              child labor, leveraging blockchain technology to ensure the
              integrity and immutability of the data. Through transparent and
              decentralized record-keeping, it empowers individuals and
              organizations to document and combat child labor more effectively,
              fostering accountability and driving sustainable change in
              communities worldwide.
            </div>
            <div className="buttons ">
              <button>SEE MORE</button>
              <button>CONNECT WALLET</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="images/sand.jpg" />
          <div className="content">
            <div className="author">SAFE WHISTLE</div>
            <div className="title">OUR FOCUS AREAS</div>
            <div className="topic">SAND MINING REPORTING</div>
            <div className="des">
              The website offers a groundbreaking solution for reporting illegal
              sand mining activities by leveraging blockchain technology.
              Through a decentralized platform, users can securely document
              instances of illicit sand extraction, ensuring transparency and
              accountability in the process. This innovative approach empowers
              communities to combat environmental degradation while preserving
              the integrity of their natural resources.
            </div>
            <div className="buttons ">
              <button>SEE MORE</button>
              <button>CONNECT WALLET</button>
            </div>
          </div>
        </div>
      </div>

      <div className="thumbnail">
        <div className="item">
          <img src="images/drug.jpeg" />
          <div className="content">
            <div className="title text-center"> DRUG TRAFFICKING REPORTING</div>
          </div>
        </div>
        <div className="item">
          <img src="images/waste.jpg" />
          <div className="content">
            <div className="title text-center">PUBLIC WASTE REPORTING</div>
          </div>
        </div>
        <div className="item">
          <img src="images/childlabour.jpeg" />
          <div className="content">
            <div className="title text-center">CHILD LABOUR REPORTING</div>
          </div>
        </div>
        <div className="item">
          <img src="images/sand.jpg" />
          <div className="content">
            <div className="title text-center">SAND MINING REPORTING</div>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button id="prev" onClick={() => showSlider("prev")}>
          &#60;
        </button>
        <button id="next" onClick={() => showSlider("next")}>
          &#62;
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default Services;
