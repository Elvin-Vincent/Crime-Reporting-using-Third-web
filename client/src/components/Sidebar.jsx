import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faChalkboard,
  faFileLines,
  faChartLine,
  faMessage,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarHidden }) => {
  const handleSideMenuClick = (e) => {
    const clickedMenuItem = e.currentTarget.parentElement;

    document
      .querySelectorAll("#sidebar .side-menu.top li")
      .forEach((item) => item.classList.remove("active"));

    clickedMenuItem.classList.add("active");
  };

  return (
    <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
      <div className="brand ml-4">
        <i className="bx">
          <FontAwesomeIcon icon={faUserShield} />
        </i>
        <h1 className=" text-2xl ml-4 uppercase font-bold">Safe Whistle</h1>
      </div>
      <ul className="side-menu top">
        <li className="active">
          <a href="/dashboard" onClick={handleSideMenuClick}>
            <i className="bx">
              <FontAwesomeIcon icon={faChalkboard} />
            </i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <Link to="/dashboard/complaints" onClick={handleSideMenuClick}>
            <i className="bx bxs-shopping-bag-alt">
              <FontAwesomeIcon icon={faFileLines} />
            </i>
            <span className="text">Complaints</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/analytics" onClick={handleSideMenuClick}>
            <i className="bx bxs-doughnut-chart">
              <FontAwesomeIcon icon={faChartLine} />
            </i>
            <span className="text">Analytics</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/message" onClick={handleSideMenuClick}>
            <i className="bx bxs-message-dots">
              <FontAwesomeIcon icon={faMessage} />
            </i>
            <span className="text">Message</span>
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="/dashboard/settings" onClick={handleSideMenuClick}>
            <i className="bx bxs-cog">
              <FontAwesomeIcon icon={faGear} />
            </i>
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
