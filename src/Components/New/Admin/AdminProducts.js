import React from 'react'
import Upload_items from './Other Components/Upload_items'
import { useState } from 'react'
import Edit_Items from './Other Components/Edit_Items';

const AdminProducts = () => {

  const [AdminProductBtn,SetAdminProductBtn]=useState('d-flex gap-2 AdminProduct-Btn')
  const [view,setview]=useState('Upload');
  const Btnhandlers=()=>{
    if(view==="Upload"){
      return <Upload_items/>
    }else if(view==="Edit"){
      return <Edit_Items/>
    }
  }

  return (
    <div className=' container'>
      <div className="d-flex gap-2 AdminProduct-Btn"> 
        <button className={view==="Upload"?"secondary-bgcolor text-white":""} onClick={()=>{setview('Upload')}}>Upload Products</button>
        <button className={view==="Edit"?"secondary-bgcolor text-white":""} onClick={()=>setview('Edit')}>Edit Products</button>
      </div>
        {Btnhandlers()}
      
    </div>
  )
}

export default AdminProducts