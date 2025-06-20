import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Logindata } from '../../../App';

const Admin_login = () => {

    const navigate=useNavigate();
    const [Username,SetUsername]=useState('');
    const [Password,SetPassword]=useState('');
    const [DoLogin,SetDoLogin]=useContext(Logindata)

    const AdminCheck=(e)=>{
        e.preventDefault();
        if(Username==="Admin" && Password==="Admin@123"){
            SetDoLogin(true)
            return navigate("/dashboardqwsfrnullnbhhj123nkc")
        }else{
            document.getElementById('error').innerHTML="*Invalid credentials "
        }
    }

  return (
    <div className='container-fluid d-flex m-auto' style={{height:'100vh'}}>
        <div className=' col-4 m-auto primary-bgcolor p-5 rounded-5 text-white shadow'>
            <h3 className=' text-center mb-3'>Admin Login</h3>
            <form className=' form-check' onSubmit={AdminCheck}>  
                <label>Username</label>
                <input type='text' className='mb-3 form-control' value={Username} onChange={(e)=>SetUsername(e.target.value)} />
                <label>Password</label>
                <input type='password' className='mb-3 form-control' value={Password} onChange={(e)=>SetPassword(e.target.value)}/>
                <p id='error' className=' text-danger m-0'></p>
                <input type='submit' value="Submit" className='my-3 btn btn-warning w-100' />
            </form>
        </div>
    </div>
  )
}

export default Admin_login