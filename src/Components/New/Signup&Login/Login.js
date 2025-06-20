import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { DataAuth, Logindata, checkLogin } from "../../../App";

const Login = () => {
  const [DoLogin, SetDoLogin] = useContext(Logindata);
  const [Token, SetToken] = useContext(checkLogin);
  const [Data, setData] = useContext(DataAuth);
  const navigate = useNavigate();

  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [EmailError, SetEmailError] = useState("");
  const [PasswordError, SetPasswordError] = useState("");

  // Load token on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Optional: Validate token here if necessary
      SetToken(storedToken);
      SetDoLogin(true);
    }
  }, []);

  // Fetch profile data when token changes
  useEffect(() => {
    if (Token && Token.trim() !== "") {
      axios
        .get(`https://furniflex-server-ynau.onrender.com/Users/myprofile`, {
          headers: { "x-token": Token },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error("Error fetching profile:", err);
          // If the token is invalid or expired, clear it
          if (err.response?.data?.name === "TokenExpiredError") {
            toast.error("Session expired. Please login again.");
          } else {
            toast.error("Invalid session. Please login.");
          }
          localStorage.removeItem("token");
          SetToken("");
          SetDoLogin(false);
        });
    }
  }, [Token]);

  const Loginform = (e) => {
    e.preventDefault();

    axios
      .post("https://furniflex-server-ynau.onrender.com/Users/login", { Email, Password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          SetToken(res.data.token);
          SetDoLogin(true);
          toast.success("Login successful");
        } else {
          toast.error("Login unsuccessful");
        }
      })
      .catch((e) => {
        console.error("Login error:", e);
        toast.error("Error logging in. Please try again.");
      });
  };
  useEffect(() => {
    if (Token.length !== 0) {
      navigate("/");
    }
  }, [Token]);
  return (
    <div
      className="container-fluid p-0 primary-bgcolor text-white d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <ToastContainer />
      <div className="col-4 m-auto rounded-5 shadow p-4 px-5 bg-white">
        <h3 className="text-center fw-bold my-4 text-dark">Login</h3>
        <form onSubmit={Loginform}>
          <input
            type="text"
            placeholder="Email"
            className="form-control my-2"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <p className="text-danger">{EmailError}</p>
          <input
            type="password"
            placeholder="Password"
            className="form-control my-2"
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <p className="text-danger">{PasswordError}</p>
          <input
            type="submit"
            value="Login"
            className="btn secondary-bgcolor text-white w-100 my-3"
          />
        </form>
        <p className="text-black">
          Didn't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
