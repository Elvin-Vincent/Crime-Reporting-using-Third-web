import "./Admin.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faChalkboard,
  faFileLines,
  faChartLine,
  faMessage,
  faGear,
  faRightFromBracket,
  faUser,
  faUserSecret,
  faLanguage,
  faGlobe,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
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
const Sidebar = ({ isSidebarHidden }) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleSideMenuClick = (e) => {
    const clickedMenuItem = e.currentTarget.parentElement;

    document
      .querySelectorAll("#sidebar .side-menu.top li")
      .forEach((item) => item.classList.remove("active"));

    clickedMenuItem.classList.add("active");
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
    <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
      <div className="brand ml-2">
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
          {/* <Link to="/dashboard/message" onClick={handleSideMenuClick}>
            <i className="bx bxs-message-dots">
              <FontAwesomeIcon icon={faMessage} />
            </i>
            <span className="text">Message</span>
          </Link> */}
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <button type="primary " onClick={showDrawer}>
            <i className="settings text-black  ml-4">
              <FontAwesomeIcon icon={faGear} />
            </i>
            <span className="settings ml-2 text-black">Settings</span>
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
        </li>
        <li>
          <a href="/login" className="logout">
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
