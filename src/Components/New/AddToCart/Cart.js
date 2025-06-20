import React, { useEffect } from "react";
import { useContext } from "react";
import { DataAuth, Logindata, cartcontext } from "../../../App";
import { Color } from "antd/es/color-picker";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  
  const { cartItems,removeToCart,incrementItem,decrementItem } = useContext(cartcontext);
  const [DoLogin,SetDoLogin]=useContext(Logindata)
  const [Data,setData]=useContext(DataAuth)

  const [NumProducts,SetNumProducts]=useState(1);
  const [Price,SetPrice]=useState(0);
  const [FullAmount,SetFullAmount]=useState(0);
  const [details,setDetails]=useState({})
  const [AddressDetails,SetAddressDetails]=useState([])
  const navigate=useNavigate()

  const paymentOptions=["Cash on Delivery","Credit/Debit card","UPI","Paypal"]
  const [selectedOption,setSelectedOption]=useState("")

  const handlepayment=(e)=>{
    setSelectedOption(e)
  }
      
  const totalCost=()=>{
    let tot=0;
    let full=0;
    cartItems.map((e)=>{
      tot+=parseInt((e.Cost - (e.Cost * e.Discount) / 100)*e.Quantity);
      full+=parseInt(e.Cost*e.Quantity)
    })
    SetFullAmount(full)
    SetPrice(tot)
  }
useEffect(()=>{
  totalCost()
})
  const addresshandler=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }
  const Addressform=(e)=>{
    e.preventDefault()
    SetAddressDetails(details)
  }

  const placeOrder=()=>{
    if(DoLogin){
      const orders=JSON.stringify(details,selectedOption,Data,cartItems)
      axios.post("https://furniflex-server-ynau.onrender.com/cart",{details,selectedOption,Data,cartItems,Price})
      .then(toast("order placed successfully"))
      .catch((err)=>console.log(err))
    }else{
      navigate("/login")
    }
  }
  
    return (
      <div className=" container py-5">
      <ToastContainer/>
        <div className=" row">
          <div className=" col-12 col-lg-8">
                <button data-bs-toggle="modal" data-bs-target="#address" className=" d-flex ms-auto btn btn-warning"><i className="bi bi-plus-lg"></i>Address</button>
            <div className=" p-4 shadow">
              {cartItems.length===0?<h3 className=" fw-bold">No Items in the cart</h3>:
              cartItems.map((e) => {
                return (
                  <>
                    <div className=" row" key={e._id}>
                      <div className=" col-3  my-3">
                        <Link to={"/productsdetails/"+e._id}>
                        <img src={e.ImageURL} className=" w-100" />
                        </Link>
                      </div>
                      <div className=" col-9 my-3">
                        <h4>{e.ItemName}</h4>
                        <h6 className=" cartColor">
                          {e.Color} {e.Category} {e.Rating}
                          <i className="bi bi-star-fill text-warning"></i>
                        </h6>
                        <div className=" d-flex align-items-center">
                          <h6 className=" cartColor text-decoration-line-through my-0">
                            ₹{e.Cost*e.Quantity}
                          </h6>
                          <h4 className=" mx-2 my-0">
                            ₹{(e.Cost - (e.Cost * e.Discount) / 100)*e.Quantity}
                          </h4>
                          <span className=" text-success">{e.Discount}% Off</span>
                        
                        <div className=" d-inline-flex PDetails ms-3">
                          <button
                            className="PDetailsBtn text-black fw-semibold m-0 mx-2 "
                            onClick={() => decrementItem(e)}
                            disabled={e.Quantity>1?false:true}
                          >
                            -
                          </button>
                          <span>{e.Quantity}</span>
                          <button
                            className=" PDetailsBtn text-black fw-semibold m-0 mx-2"
                            onClick={() => incrementItem(e)}
                          >
                            +
                          </button>
                        </div>
                        </div>
                        <button onClick={()=>removeToCart(e)} className=" btn btn-danger">remove</button>
                      </div>
                    </div>
                  </>
                );
              })}
              <button data-bs-toggle="modal" data-bs-target="#orderModal" className=" btn btn-warning d-flex ms-auto px-5">Place order</button>
            </div>
          </div>
  
          <div className=" col-12 col-lg-4 ">
          <div className="position-sticky top-0 ">
            <div className=" p-4 bg-white shadow ">
              <div className=" ">
                <h4 className=" fw-bold text-light-emphasis p-3">
                  PRICE DETAILS
                </h4>
              </div>
              <span className=" d-flex justify-content-between mb-2">Price<span className="">₹{FullAmount}</span></span>
              <span className=" d-flex justify-content-between my-2">Discount<span className=" text-success">-₹{FullAmount-Price}</span></span>
              <span className=" d-flex justify-content-between my-2">Delivery<span className=" text-success">+₹0</span></span>
              <span className=" d-flex justify-content-between fw-bold fs-5 my-2">Total Amount<span className=" text-success">₹{Price}</span></span>
              <span className=" text-success my-2">You will save ₹{FullAmount-Price} on this order.</span>
            </div>
            <div className=" m-4"><i className="bi bi-shield-fill-check me-2"></i>Safe and Secure Payments.Easy returns.100% Authentic products.</div>
          </div>
          </div>
        </div>
  
        <div className="modal" id="address">
          <div className=" modal-dialog">
            <div className=" modal-content">
              <div className=" modal-header">
                  <h2 className=" fw-bold text-center">Address</h2>
              </div>
              <div className=" modal-body">
                  <form onSubmit={Addressform}>
                    <input type="text" name="Door_no" onChange={addresshandler} className=" form-control my-2" placeholder="Door number" />
                    <input type="text" name="Street" onChange={addresshandler} className=" form-control my-2" placeholder="Street" />
                    <input type="text" name="City" onChange={addresshandler} className=" form-control my-2" placeholder="City/Town" />
                    <input type="text" name="Pincode" onChange={addresshandler} className=" form-control my-2" placeholder="Pincode" />
                    <input type="submit" value="Submit" onChange={addresshandler} data-bs-dismiss="modal" className="btn btn-warning w-100"/>
                  </form>
              </div>
            </div>
          </div>
        </div>
  
  
        <div className="modal" id="orderModal">
          <div className=" modal-dialog">
            <div className=" modal-content">
              <div className=" modal-header">
                <span>Address:{AddressDetails.length===0?<button data-bs-toggle="modal" data-bs-target="#address" className=" d-flex ms-auto btn btn-warning"><i className="bi bi-plus-lg"></i>Address</button>:<span>{details.Door_no},{details.Street},{details.City},{details.Pincode}</span>}</span>
              </div>
              <div className=" modal-body">
                  <h3 className=" fw-bold text-center">Payment</h3>
                  {
                    paymentOptions.map((e,index)=>{
                      return(
                        <div key={index}>
                        <input type="radio" id={index} className=" form-radio me-2" value={e} name="paymentOptions" onChange={()=>handlepayment(e)} />
                        <label htmlFor={index}>{e}</label>
                      </div>
                      )
                    })
                  }
                  {selectedOption==="Credit/Debit card" &&
                    <div className=" p-3">
                      <h5 className=" fw-bold text-center">Enter card details</h5>
                    <form className="">
                    <input className=" form-control my-1" placeholder="Card Number" />
                    <div className=" d-flex">
                    <input className=" form-control w-50 my-1" placeholder="Expiry" />
                    <input className=" form-control w-50 my-1" placeholder="CVV" />
                    </div>
                    <input className=" form-control my-1" placeholder="Card holder name" />
                  </form>
                    </div> 
                  }
                    { selectedOption==="UPI" && 
                    <div className=" p-3">
                      <h5 className=" fw-bold text-center">Enter UPI ID</h5>
                      <form >
                    <input className=" form-control my-1" placeholder="Enter UPI" />
                      </form>
                    </div>}
                    { selectedOption==="Paypal" && 
                    <div className=" p-3">
                      <h5 className=" fw-bold text-center">Enter Paypal Email</h5>
                      <form >
                    <input className=" form-control my-1" placeholder="Enter Paypal mail" />
                      </form>
                    </div>}
                  <button className=" w-100 btn btn-warning mt-3" data-bs-dismiss="modal" onClick={placeOrder}>place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;
