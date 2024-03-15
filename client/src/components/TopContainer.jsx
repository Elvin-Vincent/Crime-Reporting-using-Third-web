import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell } from "react-icons/fa";

import {
  faUser,
  faUserSecret,
  faRightFromBracket,
  faLanguage,
  faGlobe,
  faCircleQuestion,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
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

function TopContainer() {
  useEffect(() => {}, []);

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
    <div className="topContainer">
      <div className="inputBox ">
        <input type="text " placeholder="Search..." />
        <i className="flex items-center ml-3">
          <BiSearchAlt />
        </i>
      </div>

      <div class="profileContainer flex justify-end">
        <i class="profileIcon mr-4 cursor-pointer">
          <FaBell />
        </i>
        <p class="profileName mb-5"></p>
        <button type="primary" onClick={showDrawer}>
          <FontAwesomeIcon
            icon={faUserSecret}
            // style={{ color: "#000000" }}
            className="text-2xl mb-5"
          />
        </button>

        <Drawer title="User Profile & Settings" onClose={onClose} open={open}>
          <div className="">
            <div className="text-gray-800">
              <h2 className="text-2xl font-semibold ">User Name</h2>

              <div className="mt-10">
                <ul className=" cursor-pointer">
                  <li className="mb-6 ml-5">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="ml-5">Account Details:</span>
                  </li>
                  <li className="mb-6">
                    <Menu
                      mode="inline"
                      openKeys={openKeys}
                      onOpenChange={onOpenChange}
                      items={items1}
                    />
                  </li>
                  <li className="mb-6 ml-5">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span className="ml-5">Sign out</span>
                  </li>
                  <li className="mb-6">
                    <Menu onClick={onClick} mode="vertical" items={items} />
                  </li>
                  <li className="mb-6 ml-5 ">
                    <FontAwesomeIcon icon={faLanguage} />
                    <span className="ml-3">Language: English</span>
                  </li>
                  <li className="mb-6 ">
                    <Menu onClick={onClick} mode="vertical" items={items2} />
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
      </div>
    </div>
  );
}

export default TopContainer;
