import React, { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../img/sw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMessage,
  faRightFromBracket,
  faUser,
  faLanguage,
  faGlobe,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaDelicious,
  FaWallet,
  FaChartLine as FaChartLineRegular,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaFileUpload,
} from "react-icons/fa";
import { useDisconnect } from "@thirdweb-dev/react";
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

function SidebarMenu() {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
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
      getItem("Dark theme", "9"),
      getItem("Light theme", "10"),
      getItem("Device theme", "11"),
    ]),
  ];

  const onClick = (e) => {
    console.log("click", e);
  };

  const items2 = [
    getItem("Restricted Mode: Off", "sub4", <SettingOutlined />, [
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

  const disconnect = useDisconnect();

  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={logo} alt="" />

      <ul id="mainMenu" class="flex flex-col justify-center items-center ">
        <Link to="/userdashboard" className="flex items-center mb-4">
          <Icon icon={<FaDelicious />} />
        </Link>
        <Link
          to="/userdashboard/usercomplaints"
          className="flex items-center mb-4"
        >
          <Icon icon={<FaFileUpload />} />
        </Link>
        <Link to="/userdashboard/userwallet" className="flex items-center mb-4">
          <Icon icon={<FaWallet />} />
        </Link>
        <Link
          to="/userdashboard/useranalytics"
          className="flex items-center mb-4"
        >
          <Icon icon={<FaChartLineRegular />} />
        </Link>
        <Link to="/userdashboard/userrecent" className="flex items-center mb-4">
          <Icon icon={<FaRegClock />} />
        </Link>
      </ul>

      <ul className="lastMenu">
        <button
          type="primary "
          className="flex justify-center"
          onClick={showDrawer}
        >
          <Icon icon={<FaCog />} />
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

        <button className=" flex justify-center" onClick={disconnect}>
          <Icon icon={<FaSignOutAlt />} />
        </button>
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default SidebarMenu;
