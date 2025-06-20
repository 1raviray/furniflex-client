import React, { useMemo, useState } from "react";
import Dashboard_Default from "./Dashboard_Default";
import pic from "../../Assets/2148227939.jpg";
import { useContext } from "react";
import { Logindata } from "../../../App";
import Admin_login from "./Admin_login";
import AdminUser from "./AdminUser";
import AdminProducts from "./AdminProducts";
import AdminBlog from "./AdminBlog";
import AdminQuery from "./AdminQuery";
import {Icondata} from "./Other Components/IconHeading"
import AdminOrders from "./AdminOrders";

const Dashboard = () => {
  const [DoLogin,SetDoLogin]=useContext(Logindata)
  const [View, SetView] = useState("Overview");
  const [Viewbtn, SetViewbtn] = useState(0);
  
  const DashboardHandler = useMemo(()=>{
    if (View === "Overview") {
      return <Dashboard_Default />;
    } else if (View === "Users") {
      return <AdminUser />;
    } else if (View === "Products") {
      return <AdminProducts />;
    } else if (View === "Blog") {
      return <AdminBlog />;
    } else if (View === "Queries") {
      return <AdminQuery />;
    } else if (View === "Orders") {
      return <AdminOrders />;
    }
  },[View])

  const [Col, SetCol] = useState(
    "col-2 primary-bgcolor text-white pe-0 overflow-hidden"
  );
  const [BCol, SetBCol] = useState("col-10 overflow-hidden");

  const [val, setval] = useState(1);

  const Coloum = ()=>{
    setval(val + 1);
  }
  
  useMemo(()=>{
    if (val % 2 === 0) {
      SetCol("col-2 primary-bgcolor text-white pe-0");
      SetBCol("col-10 overflow-hidden");
    } else {
      SetCol("col1 primary-bgcolor text-white pe-0");
      SetBCol("col10 overflow-hidden");
    }
  },[val])

  if (DoLogin) {
    return (
      <div className=" container-fluid">
        <div className=" row">
          <div id="col" className={Col} style={{ height: "100vh",position:"sticky",top:'0' }}>
            <div className="" >
              <h4 className=" fw-bold text-white m-3">
                FF<span className=" text-warning me-2">.</span>FurniFlex
                <span className=" text-warning">.</span>
              </h4>
              <div className="mt-5 ">

                <div>
                  {
                    Icondata.map((e,index)=>{
                      return(
                        <div key={index}>
                      <button className={Viewbtn===index?"adminbtn1":"adminbtn"} onClick={() => {SetViewbtn(index);SetView(e.heading)}} >
                    <i className={e.icon}></i>{e.heading}
                  </button>
                        </div>
                      )
                    })
                  }
                </div>

              </div>
            </div>
          </div>
          <div className={BCol}>
            <nav className="navbar navbar-expand-lg bg-body-primary">
              <div className="container-fluid align-items-center d-flex p-0">
                <button
                  onClick={Coloum}
                  className=" border-0 bg-transparent p-0 me-3 fs-5"
                >
                  <i className="bi bi-list"></i>
                </button>
                <h3 className=" m-0 fw-bold" href="#">
                  {View}
                </h3>
                <form className=" col-6 m-auto section11-form">
                  <i className=" bi bi-search section11-icon"></i>
                  <input
                    type="text"
                    className="section11-input "
                    placeholder=""
                  />
                  <input
                    type="submit"
                    className="section11-submit"
                    value="Search"
                  />
                </form>
                {/* <p className=" text-danger mt-2">{newserror}</p> */}
                {/* <button>click</button> */}
                <div className=" d-flex">
                  <img src={pic} className=" dashboard-pic me-2" />
                  <div>
                    <p className=" fw-semibold m-0">Raviraj</p>
                    <p className=" text-dark-emphasis m-0">Admin</p>
                  </div>
                </div>
              </div>
            </nav>
            <div>{DashboardHandler}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Admin_login />;
  }
};

export default Dashboard;
