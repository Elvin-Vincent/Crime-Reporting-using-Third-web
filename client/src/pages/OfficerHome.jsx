import React, { useState } from "react";
import "../components/Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faFileCircleCheck,
  faWallet,
  faPlus,
  faCircleXmark,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { ConnectWallet, useBalanceForAddress } from "@thirdweb-dev/react";

const OfficerHome = () => {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  const { data } = useBalanceForAddress(
    "0xdE59668c188e0BA3B79F721442c167b92D357e1e"
  );
  const balance = data && data.value;

  return (
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
          <i className="bx bxs-group">
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
            <p>Your Balance :</p>{" "}
            <span className="text-black">
              {" "}
              {balance ? balance.toString() : "Loading..."}$
            </span>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
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
                  <FontAwesomeIcon icon={faUserSecret} />
                  <p>vdfvfdgr4t454664df</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faUserSecret} />
                  <p>dgrg5656ggew3r3r</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faUserSecret} />
                  <p>xvfssgrgr4t4t6567d</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status process">Process</span>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faUserSecret} />
                  <p>vsgvsfr557575t33r3</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faUserSecret} />
                  <p>ghdhhdfbdf465675r</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Todos</h3>
          </div>
          <ul className="todo-list">
            <div className="input flex items-center border-b border-blue-300 mb-4">
              <input
                value={toDo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Add to list..."
                className="w-full py-2 px-3 focus:outline-none bg-transparent"
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
                  className="todo flex justify-between items-center py-4 border-b border-green-300"
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
  );
};

export default OfficerHome;
