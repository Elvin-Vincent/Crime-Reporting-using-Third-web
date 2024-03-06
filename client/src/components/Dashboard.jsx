import React, { useState, useEffect } from "react";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Pages from "./Pages";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(
    window.innerWidth < 768
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const handleDarkModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      {/* SIDEBAR */}
      <Sidebar isSidebarHidden={isSidebarHidden} />
      {/* SIDEBAR */}

      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx cursor-pointer" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} style={{ color: "#000305" }} />
          </i>
          <a href="#" className="nav-link">
            Categories
          </a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#ffffff" }}
                  />
                </i>
              </button>
            </div>
          </form>
          <input
            type="checkbox"
            id="switch-mode"
            hidden
            onChange={handleDarkModeChange}
          />
          <label htmlFor="switch-mode" className="switch-mode"></label>

          <a href="#" className="notification">
            <i className="bx">
              <FontAwesomeIcon icon={faBell} />
            </i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </nav>
        {/* NAVBAR */}

        {/* Pages */}
        <Pages />
        {/* Pages */}
      </section>
    </div>
  );
};

export default Dashboard;
