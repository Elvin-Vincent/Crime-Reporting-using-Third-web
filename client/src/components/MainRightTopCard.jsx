import React from "react";

function MainRightTopCard() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Statistics</h2>
        <a href="#">View More</a>
      </div>

      <div className="earning">
        <p>
          Total Reports <span>187</span>
        </p>

        <p>
          Solved Crimes <span>110</span>
        </p>

        <p>
          Pending Investigations <span>45</span>
        </p>

        <p>
          Open Cases <span>32</span>
        </p>

        <p>
          Blockchain Timestamped <span>Yes</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTopCard;
