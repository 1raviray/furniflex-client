import React from 'react'
import { cartcontext } from '../../../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    const {wishlist,cartItems,addToCart,removewishlistItems,removeToCart}=useContext(cartcontext)
  return (
    <div className=' container py-5'>
      <h2 className=' text-center fw-bold primary-color'>Wishlist</h2>
    <div className=' row'>
        {wishlist.length===0?<h3 className=' fw-bold '>No Items in the Wishlist</h3>:wishlist.map((e)=>{
            return(
                <>
                <div className=" col-10 col-md-3 my-3 " key={e._id}>
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
                            onClick={()=>removewishlistItems(e)}
                          >
                            <i className="bi bi-heart-fill text-danger"></i>
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
                              {
                                cartItems.includes(e)?<span className=" section5-cart" onClick={()=>removeToCart(e)}>
                                <i className="bi bi-cart-x-fill d-block fs-4"></i>
                              </span>:
                              <span className=" section5-cart" onClick={()=>addToCart(e)}>
                                <i className="bi bi-cart-fill d-block fs-4"></i>
                              </span>
                              }
                          </div>
                        </div>
                      </div>
                    </div>
                </>
            )
        })}
    </div>
    </div>
  )
}

export default Wishlist