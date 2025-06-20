import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const YouMayLike = (prop) => {
  const [Items, SetItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://furniflex-server-ynau.onrender.com/Items")
      .then((e) => SetItems(e.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className=" container py-5">
      <div className=" d-flex justify-content-between">
        <h2>You may like!</h2>
        <button className=" hero-btn d-flex align-items-center">
          View all products <i className=" bi bi-arrow-right ms-2 d-block"></i>
        </button>
      </div>
      <div className=" row py-4">
        {Items.filter((e) => {
          if (e.Category === prop.category) return e;
        })
          .slice(0, 6)
          .map((e, index) => {
            return (
              <div className=" col-10 col-md-4 my-3 m-auto" key={index}>
                <div class="card rounded-4 shadow border-0 card-hover position-relative">
                  <div className=" ">
                    <span
                      className="section5-discount position-absolute top-0 shadow"
                      style={{ left: "0" }}
                    >
                      {e.Discount}%
                    </span>
                    <span
                      className="section5-wishlist position-absolute top-0"
                      style={{ right: "0" }}
                    >
                      <i className="bi bi-heart"></i>
                    </span>
                  </div>
                  <img
                    class="card-img-top section5-img"
                    src={e.ImageURL}
                    alt="Title"
                  />
                  <div class="card-body primary-bgcolor text-white p-3 rounded-bottom-4">
                    <div className=" d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className=" fw-semibold">{e.ItemName}</h6>
                        <p class="card-text">₹{e.Cost}</p>
                      </div>
                      <Link to={"/productsdetails/" + e.id}>
                        <span className=" section5-cart">
                          <i className="bi bi-cart-fill d-block fs-4"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default YouMayLike;
