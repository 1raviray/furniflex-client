import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const AdminUser = () => {

  const [User,SetUser]=useState([]);

  const [_id,Set_id] = useState('');
  const [Name,SetName] = useState('');
  const [Email,SetEmail] = useState('');
  const [Phone,SetPhone] = useState('');
  const [Password,SetPassword] = useState('');

  useEffect(()=>{
    axios.get('https://furniflex-server-ynau.onrender.com/Users')
    .then((e)=>SetUser(e.data))
    .catch((e)=>console.log(e))
  })

  const deleteRow=(e)=>{
    axios.delete('https://furniflex-server-ynau.onrender.com/Users/'+e)
    .then(toast('Deleted Successfully'))
    .catch((e)=>console.log(e))
  }

  const editRow=(e)=>{
    axios.get('https://furniflex-server-ynau.onrender.com/Users/'+e)
    .then((e)=>{
      Set_id(e.data._id)
      SetName(e.data.Name)
      SetEmail(e.data.Email)
      SetPhone(e.data.Phone)
      SetPassword(e.data.Password)
    })
    .catch((e)=>console.log(e))
  }

  const signupform=(e)=>{
    e.preventDefault()
    axios.put('https://furniflex-server-ynau.onrender.com/Users/'+_id,{Name,Email,Phone,Password})
    .then(toast('Details successfully updated'))
    .catch((e)=>console.log(e))
  }


  return (
    <div className=' container m-0'>
      <ToastContainer/>
      <h3 className=' fw-bold text-center my-4'>Users Information</h3>
      <table className=' table table-bordered m-0'>
        <thead className=''>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {User.map((e,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{e.Name}</td>
                <td>{e.Email}</td>
                <td>{e.Phone}</td>
                <td>{e.Password}</td>
                <td>
                  <button data-bs-toggle='modal' data-bs-target="#Popup" onClick={()=>editRow(e._id)} className=' btn btn-primary'><i className='bi bi-pencil-square'></i></button>
                  <button onClick={()=>deleteRow(e._id)} className=' btn btn-danger ms-2'><i className=' bi bi-trash-fill'></i></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className=' modal' id='Popup'>
          <div className=' modal-dialog'>
            <div className=' modal-content'>
              <div className=' modal-header justify-content-center'>
                  <h3 className=' fw-bold'>Edit User</h3>
              </div>
              <div className=' modal-body'>
              <form onSubmit={signupform}>
                <input type='text' placeholder='Name' className=' form-control my-2' value={Name} onChange={(e)=>SetName(e.target.value)} />
                
                <input type='text' placeholder='Email' className=' form-control my-2' value={Email} onChange={(e)=>SetEmail(e.target.value)} />
                
                <input type='tel' placeholder='Phone number' className=' form-control my-2' value={Phone} onChange={(e)=>SetPhone(e.target.value)} />
                
                <input type='password' placeholder='Password' className=' form-control my-2' value={Password} onChange={(e)=>SetPassword(e.target.value)} />
                
                <input type='submit' value='Submit' data-bs-dismiss="modal" className=' btn secondary-bgcolor text-white w-100 my-3' />
            </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AdminUser