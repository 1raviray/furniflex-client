import React from "react";
import useGetApi from "../CostomHook/GetApi";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AdminOrders = () => {
  // const data=useGetApi("https://furniflex-server-ynau.onrender.com/cart")
  const [CartData, setCartData] = useState([]);
  useEffect(() => {
    axios
      .get("https://furniflex-server-ynau.onrender.com/cart")
      .then((e) => setCartData(e.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(CartData);
  return (
    <div className=" container my-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Items</th>
            <th>Address</th>
            <th>Payment mode</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {CartData.map((e, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e.Data.Name}</td>
                <td>
                    {e.cartItems.map((e, index) => {
                      return (
                        <div className=" d-flex" key={index}>
                            <img src={e.ImageURL} className=" cartImg"/>
                            <h6 className=" ps-3">{e.ItemName}</h6>
                        </div>);
                    })}
                </td>
                <td>
                  {e.details.Door_no},{e.details.Street},{e.details.City},
                  {e.details.Pincode},{e.Data.Phone}
                </td>
                <td>{e.selectedOption}</td>
                <td>₹ {e.Price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {CartData.map((e, index) => {
        return (
          <div className=" d-flex p-5 shadow" key={index}>
            {index+1}
            <h6 className=" fw-bold m-0 mx-2">{e.Data.Name}</h6>
            <div>
              {e.cartItems.map((e, index) => {
                return (<>
                    <img src={e.ImageURL} className=" cartImg" />
                    <span>{e.ItemName}</span>
                </>);
              })}
            </div>
            <h2>Head{e.selectedOption}</h2>
          </div>
        );
      })} */}
    </div>
  );
};

export default AdminOrders;
