import React from 'react'
import credit from './../Assets/PikPng.com_american-express-logo-png_612923.png'

const Footer = () => {
  return (
    <div>
      <div className=' text-center p-5 border'>
        <h1 className=' fw-bold m-0'>FurniFlex<span className=' text-warning'>.</span></h1>
      </div>
      <div className=' container-fluid p-0'>
        <div className=' row py-4 gx-0'>
            <div className=' col-6 col-md-4 d-flex justify-content-center'>
              <div>
                <h5 className=' fw-bold'>About</h5>
                <p className=' m-0'>Our Company</p>
                <p className=' m-0'>Our Story</p>
                <p className=' m-0'>Blog</p>
              </div>
            </div>
            <div className=' col-6 col-md-4 d-flex justify-content-center'>
              <div>
                <h5 className=' fw-bold'>Information</h5>
                <p className=' m-0'>Delivery Information</p>
                <p className=' m-0'>Privacy Policy</p>
                <p className=' m-0'>Terms and Conditions</p>
                <p className=' m-0'>Return</p>
              </div>
            </div>
            <div className=' col-6 col-md-4 d-flex justify-content-center'>
              <div>
                <h5 className=' fw-bold'>Support</h5>
                <p className=' m-0'>Contact Us</p>
                <p className=' m-0'>Help</p>
                <p className=' m-0'>FAQ</p>
                <p className=' m-0'>Checkout</p>
              </div>
            </div>
        </div>
        <div className=' container-fluid d-flex justify-content-around align-items-center primary-bgcolor text-white py-2 '>
            <p className=' m-0'>Copyright@2024 FuriFlex. All rights reserved.</p>
            <div className=' d-flex align-items-center'>
              <span className=' icon-circle ms-2 mx-1'><i className=" bi bi-instagram"></i></span>
              <span className=' icon-circle mx-1'><i className=" bi bi-twitter-x"></i></span>
              <span className=' icon-circle mx-1'><i className=" bi bi-facebook"></i></span>
            </div>
            <img src={credit} className='credit' />
        </div>
      </div>
    </div>
  )
}

export default Footer