import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  function handleLogin() {
    if (userName == "user" && pass == "user123") {
      navigate("/student");
    } else {
      alert("Please try again.");
    }
  }
  return (
    <div>
      <div className="mt-5 border p-5" style={{ width: "50%", margin: "auto" }}>
        <h1 className="text-primary"> User Login </h1>
        <p className="text-danger">(U:user P:user123)</p>
        <input
          className="form-control mt-5"
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="UserName"
        />
        <input
          className="form-control  mt-3"
          onChange={(e) => setPass(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <button className="btn btn-success  mt-5" onClick={handleLogin}>
          Login
        </button>
        <Link to="/adminlogin">Admin Login</Link>
      </div>
    </div>
  );
}

export default LoginPage;