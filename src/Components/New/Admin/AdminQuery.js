import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AdminQuery = () => {

  const [Query,SetQuery]=useState([]);
  useEffect(()=>{
    axios.get("https://furniflex-server-ynau.onrender.com/contact")
    .then((e)=>SetQuery(e.data))
    .catch((e)=>console.log(e))
  })


  const deleteQuery=(e)=>{
    axios.delete("https://furniflex-server-ynau.onrender.com/contact/"+e)
    .then(toast("Query resolved"))
    .catch((e)=>console.log(e))
  }

  return (
    <div className=' container-fluid'>
    <ToastContainer/>
      <h3 className=' fw-bold text-center my-3'>User Queries</h3>
      <table className=' table table-bordered table-hover'>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Query.map((e,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{e.Name}</td>
                  <td>{e.Email}</td>
                  <td>{e.PNumber}</td>
                  <td>{e.Message}</td>
                  <td>
                    <NavLink to='https://mail.google.com/mail/u/0/#inbox'><button className=' btn btn-warning me-2'><i className=' bi bi-reply-fill'></i></button></NavLink>
                    <button onClick={()=>deleteQuery(e._id)} className=' btn btn-danger me-2'><i className=' bi bi-trash-fill'></i></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminQuery