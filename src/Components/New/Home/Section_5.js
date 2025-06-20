import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { cartcontext } from '../../../App';

const Section_5 = () => {

    const [Items,SetItems]=useState([]);
    const {addToCart}=useContext(cartcontext)

    useEffect(()=>{
        axios.get("https://furniflex-server-ynau.onrender.com/Items")
        .then((e)=>SetItems(e.data))
        .catch((e)=>console.log(e))
    },[])

  return (
    <div className=' container py-5'>
        <div className=' d-flex justify-content-between'>
            <h2>Trending Products for You!</h2>
            <NavLink to='/products' className=' text-decoration-none'><button className=' hero-btn d-flex align-items-center'>View all products <i className=' bi bi-arrow-right ms-2 d-block'></i></button></NavLink>
        </div>
        <div className=' row py-4'>
        {
            Items.slice(0,6).map((e,index)=>{
                return(
                    <div className=' col-10 col-md-4 my-3 m-auto' key={index}>
                    <div className="card rounded-4 shadow border-0 card-hover position-relative">
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
                              <span className=" section5-cart" onClick={()=>addToCart(e)}>
                                <i className="bi bi-cart-fill d-block fs-4"></i>
                              </span>
                          </div>
                        </div>
                      </div>
                        </div>
                )
            })
        }
        </div>
        
    </div>
  )
}

export default Section_5

