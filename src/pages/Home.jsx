import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const navigate = useNavigate();
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("detail")) || ""
  );

  const handleClear = () => {
    localStorage.removeItem("detail");
    setLocalData("");
  };

  return (
    <>
      <nav>
        <ul className="navigation">
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/task");
            }}
          >
            Task
          </li>
          <li
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>
      </nav>

      <h1 className="welcome-text">
        Welcome {localData.fName} {localData.lName}
      </h1>
      <button className="clear-button" onClick={handleClear}>
        Clear
      </button>
    </>
  );
}
