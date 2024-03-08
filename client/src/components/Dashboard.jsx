import React, { useState, useEffect } from "react";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faMagnifyingGlass,
  faBars,
  faUserSecret,
  faRepeat,
  faRightFromBracket,
  faMoon,
  faLanguage,
  faUserLock,
  faGlobe,
  faCircleQuestion,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import Pages from "./Pages";
import Sidebar from "./Sidebar";
import { Drawer } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Dashboard = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
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
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    // getItem("Navigation One", "sub1", <MailOutlined />, [
    //   getItem(
    //     "Item 1",
    //     null,
    //     null,
    //     [getItem("Option 1", "1"), getItem("Option 2", "2")],
    //     "group"
    //   ),
    //   getItem(
    //     "Item 2",
    //     null,
    //     null,
    //     [getItem("Option 3", "3"), getItem("Option 4", "4")],
    //     "group"
    //   ),
    // ]),
    // getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    //   getItem("Option 5", "5"),
    //   getItem("Option 6", "6"),
    //   getItem("Submenu", "sub3", null, [
    //     getItem("Option 7", "7"),
    //     getItem("Option 8", "8"),
    //   ]),
    // ]),
    getItem("Appearance", "sub4", <SettingOutlined />, [
      getItem("Darktheme", "9"),
      getItem("Light theme", "10"),
      getItem("Device theme", "11"),
    ]),
  ];
  const onClick = (e) => {
    console.log("click", e);
  };
  const items2 = [
    getItem(" Restricted Mode:Off", "sub4", <SettingOutlined />, [
      getItem("On", "9"),
      getItem("Off", "10"),
    ]),
  ];
  const items1 = [
    getItem("Switch Account", "sub1", <MailOutlined />, [
      getItem("Account 1", "1"),
      getItem("Account 2", "2"),
      getItem("Account 3", "3"),
    ]),
  ];

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
              <FontAwesomeIcon icon={faBell} className="text-2xl" />
            </i>
            <span className="num">8</span>
          </a>
          <a className=" ">
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <button type="primary" onClick={showDrawer}>
              <FontAwesomeIcon
                icon={faUserSecret}
                // style={{ color: "#000000" }}
                className="text-2xl"
              />
            </button>

            <Drawer
              title="Officer Profile & Settings"
              onClose={onClose}
              open={open}
            >
              <div className="">
                <div className="text-gray-800">
                  <h2 className="text-2xl font-semibold ">Officer Name</h2>

                  <div className="mt-10">
                    <ul className=" cursor-pointer">
                      <li className="mb-6 ml-5">
                        {" "}
                        <FontAwesomeIcon icon={faUser} />
                        <span className="ml-5">Account Details:</span>
                      </li>
                      <li className="mb-6">
                        {/* <FontAwesomeIcon icon={faRepeat} /> */}
                        <Menu
                          mode="inline"
                          openKeys={openKeys}
                          onOpenChange={onOpenChange}
                          // style={{ width: 256 }}
                          items={items1}
                        />
                      </li>
                      <li className="mb-6 ml-5">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span className="ml-5">Sign out</span>
                      </li>
                      <li className="mb-6">
                        {/* <FontAwesomeIcon icon={faMoon} /> */}
                        {/* <span className="ml-5"> */}
                        <Menu
                          onClick={onClick}
                          // style={{
                          //   width: 256,
                          // }}
                          mode="vertical"
                          items={items}
                        />
                        {/* </span> */}
                      </li>
                      <li className="mb-6 ml-5 ">
                        <FontAwesomeIcon icon={faLanguage} />
                        <span className="ml-3">Language: English</span>
                      </li>
                      <li className="mb-6 ">
                        {/* <FontAwesomeIcon icon={faUserLock} /> */}

                        {/* Restricted Mode: Off */}
                        <Menu
                          onClick={onClick}
                          // style={{
                          //   width: 256,
                          // }}
                          mode="vertical"
                          items={items2}
                        />
                      </li>
                      <li className="mb-6 ml-5">
                        <FontAwesomeIcon icon={faGlobe} />
                        <span className="ml-5">Location: India</span>
                      </li>

                      <li className="mb-6 ml-5">
                        <FontAwesomeIcon icon={faCircleQuestion} />
                        <span className="ml-5">Help</span>
                      </li>
                      <li className="ml-5">
                        <FontAwesomeIcon icon={faMessage} />
                        <span className="ml-5">Send feedback</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Drawer>
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
