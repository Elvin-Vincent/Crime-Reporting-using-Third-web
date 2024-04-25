import React from "react";
import "./MainContainer.css";
import Banner from "../img/1.jpg";
import CardMain from "../components/CardMain";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import MainRightTopCard from "../components/MainRightTopCard";
import MainRightBottomCard from "../components/MainRightBottomCard";
import { Link } from "react-router-dom";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Welcome to <span className="text-red-600">Safe Whistle</span>
            </h1>
            <h2 className="text-lg md:text-xl text-gray-300 mb-6 text-center">
              Your trusted destination for reporting and resolving issues
            </h2>
            <div className="flex justify-center">
              <Link
                to="/userdashboard/usercomplaints"
                className="button text-white"
              >
                New Complaint
              </Link>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">
                Popular
              </a>
            </div>
            {/* <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="#" className="button2">
                Illustration
              </a>
              <a href="#" className="button2">
                Art
              </a>
              <a href="#" className="button2">
                Games
              </a>
            </div> */}
          </div>

          {/* <main>
            <CardMain imgSrc={Card1} title={"Drug Trafficking"} hearts={"65"} />
            <CardMain imgSrc={Card2} title={"PUBLIC WASTE "} hearts={"65"} />
            <CardMain imgSrc={Card3} title={"CHILD LABOUR"} hearts={"65"} />
            <CardMain imgSrc={Card4} title={"Drug Trafficking"} hearts={"65"} />
            <CardMain imgSrc={Card5} title={"CHILD LABOUR"} hearts={"65"} />
            <CardMain imgSrc={Card6} title={"SAND MINING"} hearts={"65"} />
          </main> */}
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;
