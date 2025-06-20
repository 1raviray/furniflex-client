import axios from "axios";
import React from "react";
import { useState } from "react";

const Upload_blogs = () => {

    const [Bloger,SetBloger]=useState('');
    const [BlogTitle,SetBlogTitle]=useState('');
    const [BlogContent,SetBlogContent]=useState();
    const [BlogImg,SetBlogImg]=useState('');
    const [BlogDate,SetBlogDate]=useState('');
    const [BlogerImg,SetBlogerImg]=useState('');

    const BlogHandler=(e)=>{
        e.preventDefault();
        axios.post('https://furniflex-server-ynau.onrender.com/Blog',{Bloger,BlogDate,BlogerImg,BlogContent,BlogImg,BlogTitle})
        .then(alert("Successfully Uploaded"))
        .catch((e)=>console.log(e))
    }


  return (
    <div className=" container col-10 m-auto py-5">
    <h2 className=" fw-bold text-center mb-3">Upload Blog</h2>
      <form onSubmit={BlogHandler} className=" pt-4 p-5 rounded-5 shadow">
        <div className=" mb-2">
          <label className="mb-2" for="formId1">Bloger name</label>
          <input type="text" className="form-control" value={Bloger} onChange={(e)=>SetBloger(e.target.value)} name="formId1" id="formId1" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="formId1">Bloger image</label>
          <input type="text" className="form-control" value={BlogerImg} onChange={(e)=>SetBlogerImg(e.target.value)} name="formId1" id="formId1" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="formId2">Blog title</label>
          <input type="text" className="form-control" value={BlogTitle} onChange={(e)=>SetBlogTitle(e.target.value)} name="formId2" id="formId2" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="formId3">Blog image</label>
          <input type="text" className="form-control" value={BlogImg} onChange={(e)=>SetBlogImg(e.target.value)} name="formId3" id="formId3" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="formId4">Upload date</label>
          <input type="date" className="form-control" value={BlogDate} onChange={(e)=>SetBlogDate(e.target.value)} name="formId4" id="formId4" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="formId5">Blog Content</label>
          <textarea rows='15' className="form-control" value={BlogContent} onChange={(e)=>SetBlogContent(e.target.value)} name="formId5" id="formId5" placeholder="" />
        </div>
        <input type="submit" value='Submit' className=" secondary-bgcolor rounded-5 text-white border-0 w-100 p-3" />
      </form>
    </div>
  );
};

export default Upload_blogs;
