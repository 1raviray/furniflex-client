import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Upload_blogs from './Other Components/Upload_blogs'
import Edit_Blog from './Other Components/Edit_Blog'

const AdminBlog = () => {

  const [view,setview]=useState('Upload');
  const Btnhandlers=()=>{
    if(view==="Upload"){
      return <Upload_blogs/>
    }else if(view==="Edit"){
      return <Edit_Blog/>
    }
  }

  return (
    <div className=' container'>
      <div className=' container'>
      <div className="d-flex gap-2 AdminProduct-Btn"> 
        <button className={view==="Upload"?"secondary-bgcolor text-white":""} onClick={()=>{setview('Upload')}}>Upload Blog</button>
        <button className={view==="Edit"?"secondary-bgcolor text-white":""} onClick={()=>setview('Edit')}>Edit Blog</button>
      </div>
        {Btnhandlers()}
      
    </div>
    </div>
  )
}

export default AdminBlog