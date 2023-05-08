import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  function handleLogin() {
    if (userName == "admin" && pass == "admin123") {
      navigate("/admin");
    } else {
      alert("Please try again.");
    }
  }
  return (
    <div>
      <div className="mt-5 border p-5" style={{ width: "50%", margin: "auto" }}>
        <h1 className="text-primary"> Admin Login </h1>
        <p className="text-danger">(U:admin P:admin123)</p>
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
        <Link to="/">User Login</Link>
      </div>
    </div>
  );
}

export default AdminLogin;