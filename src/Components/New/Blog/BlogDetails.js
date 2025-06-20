import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'

const BlogDetails = () => {

    const {_id}=useParams();
    const [SingleBlog,SetSingleBlog]=useState('');
    const [GetBlog,SetGetBlog]=useState([]);

    useEffect(()=>{
        axios.get("https://furniflex-server-ynau.onrender.com/Blog/"+_id)
        .then((e)=>SetSingleBlog(e.data))
        .catch((e)=>console.log(e))
        axios.get("https://furniflex-server-ynau.onrender.com/Blog")
        .then((e)=>SetGetBlog(e.data))
        .catch((e)=>console.log(e))
    })
    console.log();

  return (
    <div>
        <div className=" container-fluid title-name">
            <h1 className=" text-center">Our Blog Details</h1>
        </div>
        <div className=' container py-5 font-poppins'>
            <img src={SingleBlog.BlogImg} className=' w-100 rounded-5'/>
            <div className=' row py-3'>
              <div className=' col-12 col-md-10 mb-3'>
                <div className=' terirary-bgcolor p-3 rounded-4'>
                <div className=' primary-bgcolor text-white rounded-4 p-2 my-2'>
                    <h5 className=' fw-semibold'>{SingleBlog.BlogTitle}</h5>
                    <div className=''>by <span className=' fw-semibold'>{SingleBlog.Bloger}</span> on <span className=' fw-semibold'>{SingleBlog.BlogDate}</span></div>
                </div>
                <div className=' p-2' dangerouslySetInnerHTML={{ __html: SingleBlog.BlogContent }} />
                </div>
              </div>
              <div className=' col-12 col-md-2 mb-3 p-0'>
                <div className=' terirary-bgcolor p-3 rounded-4 top-0 position-sticky'>
                    <div className=' d-flex  align-items-center'>
                        <img src={SingleBlog.BlogerImg} className=' Blogerimg' />
                        <div className=' ms-2'>
                            <span>Written by</span>
                            <h5>{SingleBlog.Bloger}</h5>
                        </div>
                    </div>
                    <div className=' mt-4'>
                        <div className=' mb-4'>
                            <span>Facebook</span>
                            <h5>{SingleBlog.Bloger}</h5>
                        </div>
                        <div className=' mb-4'>
                            <span>Instagram</span>
                            <h5>@{SingleBlog.Bloger}</h5>
                        </div>
                        <div className=' mb-4'>
                            <span>LinkedIn</span>
                            <h5>{SingleBlog.Bloger}</h5>
                        </div>
                        <div className=' mb-4'>
                            <span>Youtube</span>
                            <h5>{SingleBlog.Bloger}</h5>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <h3 className=' mt-3'>Latest Blogs</h3>
            <div className='row'>
            {
                GetBlog.slice(0,3).map((e,index)=>{
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

export default BlogDetails