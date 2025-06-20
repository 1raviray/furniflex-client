import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Blog = () => {

    const [GetBlog,SetGetBlog]=useState([]);

    useEffect(()=>{
        axios.get("https://furniflex-server-ynau.onrender.com/Blog")
        .then((e)=>SetGetBlog(e.data))
        .catch((e)=>console.log(e))
    })
    

  return (
    <div className=''>
        <div className=" container-fluid title-name">
            <h1 className=" text-center">Blogs</h1>
        </div>
        <div className=' container py-5'>
            <div className='row'>
            {
                GetBlog.map((e,index)=>{
                    return(
                        <div className=' col-12 col-md-4 my-3' key={index}>
                            <NavLink to={"/blogdetails/"+e._id} className=' text-decoration-none text-dark'>
                                <div className=' p-2 terirary-bgcolor rounded-4 blogImg'>
                                    <div className=' overflow-hidden rounded-4'>
                                        <img src={e.BlogImg} className=' w-100 rounded-4' />
                                    </div>
                                    <div className=' bg-white p-2 mt-2 rounded-4'>
                                        <h5 className=' fw-semibold'>{e.BlogTitle}</h5>
                                        <div className=' text-dark-emphasis'>by <span className=' fw-semibold'>{e.Bloger}</span> on <span className=' fw-semibold'>{e.BlogDate}</span></div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )})
            }
            </div>
        </div>
    </div>
  )
}

export default Blog