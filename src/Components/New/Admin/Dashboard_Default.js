import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import useGetApi from '../CostomHook/GetApi'
import axios from 'axios'

const Dashboard_Default = () => {
  
  const today=new Date()

  const userData=useGetApi("https://furniflex-server-ynau.onrender.com/Users")
  const Items=useGetApi("https://furniflex-server-ynau.onrender.com/Items")
  const Blog=useGetApi("https://furniflex-server-ynau.onrender.com/Blog")
  const Queries=useGetApi("https://furniflex-server-ynau.onrender.com/contact")
  const Orders=useGetApi("https://furniflex-server-ynau.onrender.com/cart")

  // const [Orders,setOrders]=useState([])
  // useEffect(()=>{
  //   axios.get("https://furniflex-server-ynau.onrender.com/cart")
  //   .then((res)=>{setOrders(res.data)})
  //   .catch((e)=>console.log(e))
  // })

  console.log(Orders);
  return (
    <div>
      <div className=' my-3 mt-5'>
        <h2 className=' fw-bold'>Welcome to Dashboard</h2>
      </div>
      <div className=' row'>
        <div className=' col-12 col-lg-3 ps-2 p-0'>
          <div className=' primary-bgcolor rounded-2 text-white p-3 dashboard-cards'>
            <span className=' mt-2'><i className=" fs-5 bi bi-people-fill me-3"></i>Number of users</span>
            <h3 className=' fw-bold py-3 ms-2 border-bottom'><CountUp end={userData.length} duration={3} /></h3>
            <span className=' text-center d-block mb-2 '>Updated on {today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()}</span>
          </div>
        </div>
        <div className=' col-12 col-lg-3 ps-2 p-0'>
          <div className=' primary-bgcolor rounded-2 text-white p-3 dashboard-cards'>
            <span className=' mt-2'><i className=" fs-5 bi bi-box2-fill me-3"></i>Number of Products</span>
            <h3 className=' fw-bold py-3 ms-2 border-bottom'><CountUp end={Items.length} duration={3} /></h3>
            <span className=' text-center d-block mb-2 '>Updated on {today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()}</span>
          </div>
        </div>
        <div className=' col-12 col-lg-3 ps-2 p-0'>
          <div className=' primary-bgcolor rounded-2 text-white p-3 dashboard-cards'>
            <span className=' mt-2'><i className=" fs-5 bi bi-box2-fill me-3"></i>Number of Orders</span>
            <h3 className=' fw-bold py-3 ms-2 border-bottom'><CountUp end={Orders.length} duration={3} /></h3>
            <span className=' text-center d-block mb-2 '>Updated on {today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()}</span>
          </div>
        </div>
        {/* <div className=' col-12 col-lg-3 ps-2 p-0'>
          <div className=' primary-bgcolor rounded-2 text-white p-3 dashboard-cards'>
            <span className=' mt-2'><i className=" fs-5 bi bi-book-half me-3"></i>Blogs</span>
            <h3 className=' fw-bold py-3 ms-2 border-bottom'><CountUp end={Blog.length} duration={3} /></h3>
            <span className=' text-center d-block mb-2 '>Updated on {today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()}</span>
          </div>
        </div> */}
        <div className=' col-12 col-lg-3 px-2 p-0'>
          <div className=' primary-bgcolor rounded-2 text-white p-3 dashboard-cards'>
            <span className=' mt-2'><i className=" fs-5 bi bi-question-octagon-fill me-3"></i>Queries</span>
            <h3 className=' fw-bold py-3 ms-2 border-bottom'><CountUp end={Queries.length} duration={5} /></h3>
            <span className=' text-center d-block mb-2 '>Updated on {today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_Default