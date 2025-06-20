import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetApi from "../CostomHook/GetApi";
import Item from "antd/es/list/Item";
import { useContext } from "react";
import { cartcontext } from "../../../App";

const Products = () => {
  const Items=useGetApi("https://furniflex-server-ynau.onrender.com/Items");
  const [Itemsupdate, SetItemsupdate] = useState([]);

  const {addToCart,cartItems,wishlistItems,wishlist,removewishlistItems,removeToCart}=useContext(cartcontext)

  const Handlefilter = useCallback((ref) => {
    const newFilter = Items.filter((e) => {
      return e.Category === ref;
    });
    SetItemsupdate(newFilter);
    console.log("work");
  },[Items]);
  
  const HandlefilterColor = (ref) => {
    const newFilter = Items.filter((e) => {
      return e.Color === ref;
    });
    SetItemsupdate(newFilter);
  };

  const Sortitems=(value)=>{
    let sorteditems=[...Items];
    if(value==="HightoLowPrice"){
      SetItemsupdate(sorteditems.sort((a,b)=>(b.Cost-a.Cost)))
    }else if(value==="LowtoHighPrice"){
      SetItemsupdate(sorteditems.sort((a,b)=>(a.Cost-b.Cost)))
    }
  }  
  const Sortrating=(value)=>{
    let sortedrating=[...Items]
    if(value==="HightoLow"){
      SetItemsupdate(sortedrating.sort((a,b)=>(b.Rating-a.Rating)))
    }else if(value==="LowtoHigh"){
      console.log(value);
      SetItemsupdate(sortedrating.sort((a,b)=>(a.Rating-b.Rating)))
    }
  }  

  const itemsAllAndFiltered = Itemsupdate.length === 0 ? Items : Itemsupdate;

    return (
      <div>
        <div className=" container-fluid title-name">
          <h1 className=" text-center">Products</h1>
        </div>
        <div className=" container py-5">
          <div className="row">
            <div className=" col-12 col-md-3">
              <div className=" position-sticky top-0" >
              <h2 className=" mb-3">Filter Options</h2>
              <div className="products-border rounded-4">
                <button
                  className=" products-btn rounded-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#select-collapse"
                >
                  Category
                </button>
                <div className=" collapse show p-2" id="select-collapse">
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="i0"
                      onClick={() => SetItemsupdate(Items)}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="i0">
                      
                      All
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="i1"
                      onChange={() => Handlefilter("Bed room")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="i1">
                      
                      Bedroom
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="i2"
                      name="items"
                      onChange={() => Handlefilter("Living room")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="i2">
                      Living room
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="i3"
                      name="items"
                      onChange={() => Handlefilter("Office")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="i3">
                      
                      Office
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="i4"
                      name="items"
                      onChange={() => Handlefilter("Kitchen")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="i4">
                      
                      Kitchen
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="i5"
                      name="items"
                      onChange={() => Handlefilter("Outdoor")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="i5">
                      
                      Outdoor
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="i6"
                      name="items"
                      onChange={() => Handlefilter("Decor")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="i6">
                      
                      Decor
                    </label>
                  </div>
                </div>
              </div>
              <div className="products-border rounded-4 my-3">
                <button
                  className=" products-btn rounded-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#select-collapse1"
                >
                  Color
                </button>
                <div className=" collapse p-2" id="select-collapse1">
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="c0"
                      onClick={() => SetItemsupdate(Items)}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c0">
                      
                      All
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="c1"
                      onChange={() => HandlefilterColor("Brown")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c1">
                      
                      Brown
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="c2"
                      name="items"
                      onChange={() => HandlefilterColor("Orange")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c2">
                      Orange
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="c3"
                      name="items"
                      onChange={() => HandlefilterColor("Grey")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c3">
                      
                      Grey
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="c4"
                      name="items"
                      onChange={() => HandlefilterColor("Black")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c4">
                      
                      Black
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="c5"
                      name="items"
                      onChange={() => HandlefilterColor("Blue")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c5">
                      
                      Blue
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="c6"
                      name="items"
                      onChange={() => HandlefilterColor("Pink")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c6">
                      
                      Pink
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="c7"
                      name="items"
                      onChange={() => HandlefilterColor("White")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c7">
                      
                      White
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="c8"
                      name="items"
                      onChange={() => HandlefilterColor("Green")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c8">
                      
                      Green
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      id="c9"
                      name="items"
                      onChange={() => HandlefilterColor("Red")}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="c9">
                      
                      Red
                    </label>
                  </div>
                </div>
              </div>
              <div className="products-border rounded-4 my-3">
                <button
                  className=" products-btn rounded-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#select-collapse2"
                >
                  Cost
                </button>
                <div className=" collapse  p-2" id="select-collapse2">
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="r0"
                      onClick={() => SetItemsupdate(Items)}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="r0">
                      
                      All
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="r1"
                      onChange={()=>SetItemsupdate(Items.filter((e)=>{if(e.Cost<=10000)return e}))}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="r1">
                      
                      Below ₹10,000
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="r2"
                      onChange={()=>SetItemsupdate(Items.filter((e)=>{if(e.Cost>10000 && e.Cost<=50000){return e}}))}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="r2">
                      
                      ₹10,001 - ₹50,000
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="r3"
                      onChange={()=>SetItemsupdate(Items.filter((e)=>{if(e.Cost>50000 && e.Cost<=100000)return e}))}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="r3">
                      
                      ₹50,001 - ₹100,000
                    </label>
                  </div>
                  <div className="form-check products-radio m-2 d-flex">
                    <input
                      className=" bg-warning border-warning"
                      type="radio"
                      name="items"
                      id="r4"
                      onChange={()=>SetItemsupdate(Items.filter((e)=>{if(e.Cost>=100000)return e}))}
                    />
                    <label className="form-check-label ms-2 w-100" htmlFor="r4">
                      
                      Above ₹100,000
                    </label>
                  </div>
                  </div>
              </div>
              </div>
            </div>
            <div className=" col-12 col-md-9 products-selectOptions">
              <div className=" d-flex justify-content-between">
                <select onChange={(e)=>Sortitems(e.target.value)} className=" btn primary-bgcolor text-white pe-2">
                  <option className="">Price</option>
                  <option value="HightoLowPrice">High to low</option>
                  <option value="LowtoHighPrice">Low to high</option>
                </select>
                <select onChange={(e)=>Sortrating(e.target.value)} className=" btn primary-bgcolor text-white pe-2">
                  <option className="">Rating</option>
                  <option value="HightoLow">High to low</option>
                  <option value="LowtoHigh">Low to high</option>
                </select>
              </div>
              <div className=" row">
                {itemsAllAndFiltered.map((e,index) => {
                  return (
                    <div className=" col-10 col-md-4 my-3 m-auto" key={index}>
                      <div className="card rounded-4 shadow border-0 card-hover position-relative">
                        <div className=" ">
                          <span
                            className="section5-discount position-absolute top-0 shadow"
                            style={{ left: "0" }}
                          >
                            {e.Discount}%
                          </span>
                          {
                            wishlist.includes(e)?
                            (<span className="section5-wishlist position-absolute pointer-event top-0"
                            style={{ right: "0" }} onClick={()=>removewishlistItems(e)}>
                            <i className="bi bi-heart-fill text-danger"></i>
                          </span>):
                          (<span className="section5-wishlist position-absolute  top-0"
                            style={{ right: "0" }} onClick={()=>wishlistItems(e)}>
                            <i className="bi bi-heart"></i>
                          </span>)
                          }
                          
                        </div>
                        
                        <Link to={`/productsdetails/${e._id}`}>
                        <img
                          className="card-img-top section5-img"
                          src={e.ImageURL}
                          alt="Title"
                        /></Link>
                        <div className="card-body primary-bgcolor text-white p-3 rounded-bottom-4">
                          <div className=" d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className=" fw-semibold">{e.ItemName}</h6>
                              <p className="card-text">₹{e.Cost}</p>
                            </div>
                              {
                                cartItems.includes(e)?
                                (<span className=" section5-cart text-danger" onClick={()=>removeToCart(e)}>
                                <i className="bi bi-cart-x-fill d-block fs-4"></i>
                              </span>):
                                (<span className=" section5-cart" onClick={()=>addToCart(e)}>
                                <i className="bi bi-cart-fill d-block fs-4"></i>
                              </span>) 
                              }
                              
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Products;
