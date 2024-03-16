import React from "react";
import "./Container.css";
import TopContainer from "./TopContainer";

import UserPages from "./UserPages";

function Container() {
  return (
    <div className="container">
      <TopContainer />
      <UserPages />
    </div>
  );
}

export default Container;
