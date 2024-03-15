import React from "react";
import TopComplaint from "./TopComplaint";

function MainRightBottomCard() {
  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Suggestions</h2>
        <a href="#">View More</a>
      </div>

      {TopComplaint &&
        TopComplaint.map((seller) => (
          <div className="topSeller" key={seller.id}>
            <div className="topSellerImg">
              <img src={seller?.imgSrc} alt="" />
            </div>
            <div className="topSellerName">
              <p>
                {seller?.seller_name} <span>{seller?.username}</span>
              </p>
            </div>
            <a href="#" className="button">
              View
            </a>
          </div>
        ))}
    </div>
  );
}

export default MainRightBottomCard;
