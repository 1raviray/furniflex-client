import React from 'react'
import Flex_wrap from './Flex_wrap'
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Logindata } from '../../../App';

const Hero = () => {

  const [DoLogin,SetDoLogin]=useContext(Logindata)
  const signpath = ()=>{
    if(DoLogin){
      return '/products'
    }else{
      return '/signup'
    }
  }

  return (
    <div className=' primary-bgcolor d-flex align-items-center py-5' style={{height:'100%'}}>
      <div className=' container-fluid pt-5'>
        <div className=' row'>
          <div className=' col-12 col-md-6 col-lg-5 wraper-anime '>
            <div className=' text-white ps-lg-5'>
              <span className=' hero-span'>FURNITURE DESIGN IDEAS</span>
              <p className=' hero-para'>Moderen Interior Design Studios</p>
              <p>Choosing the right furniture for your home online will and elegance and functionality to your interior while also being cost effictive and long lasting. </p>
              <NavLink to={signpath()} className=' text-decoration-none'><button className='hero-btn mt-3 d-flex'>Shop Now <i className="bi bi-arrow-right d-block ms-2"></i></button></NavLink>
              <div className=' d-flex justify-content-between mt-5'>
                <div>
                  <h3><CountUp end={2500} delay={.6} duration={1} />+</h3>
                  <p>Unique Styles</p>
                </div>
                <div>
                <h3><CountUp end={5000} delay={.6} duration={1} />+</h3>
                  <p>Happy Customers</p>
                </div>
                <div>
                <h3><CountUp end={300} delay={.6} duration={1} />+</h3>
                  <p>Certified Outlets</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-12 col-md-6 col-lg-7 m-auto overflow-hidden wraper-anime'>
              <Flex_wrap/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero