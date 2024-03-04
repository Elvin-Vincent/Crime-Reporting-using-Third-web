import React, { useState, useEffect } from "react";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faUser,
  faBell,
  faMagnifyingGlass,
  faBars,
  faChalkboard,
  faFileLines,
  faChartLine,
  faMessage,
  faGear,
  faRightFromBracket,
  faClipboardList,
  faFileCircleCheck,
  faWallet,
  faPlus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ConnectWallet } from "@thirdweb-dev/react";

const Admin = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(
    window.innerWidth < 768
  );

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);
      if (window.innerWidth > 576) {
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const handleDarkModeChange = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const handleSideMenuClick = (e) => {
    const clickedMenuItem = e.currentTarget.parentElement;

    document
      .querySelectorAll("#sidebar .side-menu.top li")
      .forEach((item) => item.classList.remove("active"));

    clickedMenuItem.classList.add("active");
  };

  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
        <a href="#" className="brand ml-4">
          <i class="bx">
            <FontAwesomeIcon icon={faUserShield} />
          </i>
          <h1 className=" text-2xl ml-4 uppercase font-bold">Safe Whistle</h1>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#" onClick={handleSideMenuClick}>
              <i className="bx">
                <FontAwesomeIcon icon={faChalkboard} />
              </i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleSideMenuClick}>
              <i class="bx bxs-shopping-bag-alt">
                <FontAwesomeIcon icon={faFileLines} />
              </i>
              <span class="text">Complaints</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleSideMenuClick}>
              <i class="bx bxs-doughnut-chart">
                <FontAwesomeIcon icon={faChartLine} />
              </i>
              <span class="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleSideMenuClick}>
              <i class="bx bxs-message-dots">
                <FontAwesomeIcon icon={faMessage} />
              </i>
              <span class="text">Message</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="#" onClick={handleSideMenuClick}>
              <i class="bx bxs-cog">
                <FontAwesomeIcon icon={faGear} />
              </i>
              <span class="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i class="bx bxs-log-out-circle">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </i>
              <span class="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}

      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx cursor-pointer" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} style={{ color: "#000305" }} />
          </i>
          <a href="#" class="nav-link ">
            Categories
          </a>
          <form action="#">
            <div className="form-input ">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i class="bx ">
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
          <label for="switch-mode" class="switch-mode"></label>
          <a href="#" className="notification">
            <i className="bx ">
              <FontAwesomeIcon icon={faBell} />
            </i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </nav>
        {/* NAVBAR */}

        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <span>
              <ConnectWallet />
            </span>
          </div>
          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check">
                <FontAwesomeIcon icon={faClipboardList} />
              </i>
              <span className="text">
                <h3>1020</h3>
                <p>New Complaints</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-group">
                <FontAwesomeIcon icon={faFileCircleCheck} />
              </i>
              <span className="text">
                <h3>284</h3>
                <p>Inspected</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-dollar-circle">
                <FontAwesomeIcon icon={faWallet} />
              </i>
              <span className="text">
                <h3>$2543</h3>
                <p>Balance</p>
              </span>
            </li>
          </ul>

          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Recent Orders</h3>
                <i class="bx bx-search"></i>
                <i class="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>vdfvfdgr4t454664df</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span class="status completed">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>dgrg5656ggew3r3r</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span class="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>xvfssgrgr4t4t6567d</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span class="status process">Process</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>vsgvsfr557575t33r3</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span class="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>ghdhhdfbdf465675r</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span class="status completed">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="todo">
              <div class="head">
                <h3>Todos</h3>
              </div>
              <ul className="todo-list">
                <div className="input flex items-center border-b border-blue-300 mb-4">
                  <input
                    value={toDo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    placeholder="Add to list..."
                    className="w-full py-2 px-3 focus:outline-none"
                  />
                  <i
                    onClick={() => setTodos([...toDos, toDo])}
                    className="fas fa-plus ml-4 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </div>
                <div className="todos">
                  {toDos.map((value, i) => (
                    <div
                      className="todo flex justify-between items-center py-2 border-b border-gray-300"
                      key={i}
                    >
                      <div className="left flex items-center">
                        <input type="checkbox" className="mr-3" />
                        <p className="text-gray-800">{value}</p>
                      </div>
                      <div className="right">
                        <i
                          onClick={() =>
                            setTodos((previoustoDos) => {
                              const updatedTodos = [...previoustoDos];
                              updatedTodos.splice(i, 1);
                              return updatedTodos;
                            })
                          }
                          className="fas fa-times cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faCircleXmark} />
                        </i>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
};

export default Admin;
