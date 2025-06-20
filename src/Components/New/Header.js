import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DataAuth, cartcontext, checkLogin,Logindata } from "../../App";

const Header = () => {

  const {cartItems,wishlist}=useContext(cartcontext)
  const [Data,setData]=useContext(DataAuth)
  const [Token,SetToken]=useContext(checkLogin)
  const [DoLogin,SetDoLogin]=useContext(Logindata)

  const navigate=useNavigate()

  const handlelogout = () => {
    localStorage.removeItem("token");
    SetToken("");
    SetDoLogin(false);
    setData({});
  };
  
  
  return (
    <div>
      <div className=" container-fluid secondary-bgcolor m-auto py-2 d-small-none">
        <div className="  container text-white d-flex justify-content-between">
          <div className=" d-flex align-items-center">
            <h6 className=" pe-2 m-0">Follow Us</h6>
            <span className=" icon-circle ms-2 mx-1">
              <i className=" bi bi-instagram"></i>
            </span>
            <span className=" icon-circle mx-1">
              <i className=" bi bi-twitter-x"></i>
            </span>
            <span className=" icon-circle mx-1">
              <i className=" bi bi-facebook"></i>
            </span>
          </div>
          <div className=" d-flex align-items-center">
            <p className=" m-0">Sign up to get 20% Off for all collections</p>
          </div>
          <div className=" d-flex align-items-center">
            <span className="">
              <i className="bi bi-telephone pe-2"></i> +91-9968545872
            </span>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-sm navbar-light primary-bgcolor text-white"
        style={{ borderBottom: "2px solid #ffffff10" }}
      >
        <div className="container">
          <Link className=" navbar-brand" to="/">
            <h4 className=" fw-bold text-white m-0">
              FurniFlex<span className=" text-warning">.</span>
            </h4>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav m-auto ">
              <li className="nav-item">
                <NavLink
                  className="navlink nav-link mx-3 p-1"
                  to="/"
                  aria-current="page"
                >
                  Home
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink nav-link mx-3 p-1" to="/products">
                  Products
                </NavLink>
              </li>
              {/* <li className="nav-item">
          <NavLink className="navlink nav-link mx-3 p-1" to='/catogeries'>Categories</NavLink>
        </li> */}
              <li className="nav-item">
                <NavLink className="navlink nav-link mx-3 p-1" to="/aboutus">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink nav-link mx-3 p-1" to="/blogs">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink nav-link mx-3 p-1" to="/contactus">
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className=" d-flex align-items-center">
              <span className=" px-3">
              <Link to={"/wishlist"} className=" text-white text-decoration-none">
              <div className=" position-relative">
                    <i className="bi bi-heart"></i>
                    <div className=" text-bg-danger cartNumber">{wishlist.length}</div>
                  </div>
              </Link>
              </span>
              <span className=" px-3">
                <Link to={"/cart"} className=" text-white text-decoration-none">
                  <div className=" position-relative">
                    <i className="bi bi-bag"></i>
                    <div className=" text-bg-danger cartNumber">{cartItems.length}</div>
                  </div>
                </Link>
              </span>
              <NavLink to="/signup" className=" text-white">
                <span className=" px-2">
                  <i className="bi bi-person"></i>
                </span>
              </NavLink>
                  <div className=" position-relative Logout">{Data.Name}<div className="position-absolute p-3 rounded-3"><button className=" btn btn-warning" onClick={handlelogout}>Logout</button></div></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
