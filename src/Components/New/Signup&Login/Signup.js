import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home/Home';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Logindata } from '../../../App';
import usePostApi from '../CostomHook/PostApi';

const Signup = () => {
    const [DoLogin,SetDoLogin]=useContext(Logindata)

    const navigate=useNavigate();

    const [Name,SetName] = useState('');
    const [Email,SetEmail] = useState('');
    const [Phone,SetPhone] = useState('');
    const [Password,SetPassword] = useState('');
    const [ConfirmPassword,SetConfirmPassword] = useState('');

    const [NameError,SetNameError]=useState('');
    const [NumberError,SetNumberError]=useState('');
    const [EmailError,SetEmailError]=useState('');
    const [PasswordError,SetPasswordError]=useState('');
    let NameStat=false;let NumberStat=false;let EmailStat=false;let PasswordStat=false;

    const Signupform=(e)=>{
        e.preventDefault();

        if(Name===''){
            SetNameError("*Name is required")
        }else if(Name.match('^[A-Za-z ]*$')){
            SetNameError("")
            NameStat=true;
        }else {
            SetNameError("*Name must be alphabets")
        }

        if(Phone===''){
            SetNumberError("*Phone number is required")
        }else if(Phone.match('^[0-9]*$')){
            if(Phone.length===10){
                SetNumberError("");
                NumberStat=true;
            }else{
                SetNumberError("*Phone number contains atleast 10 digits")
            }
        }else{
            SetNumberError("*Phone number must be a number")
        }

        if(Email===''){
            SetEmailError('*Email is required')
        }else if(Email.match('^[a-zA-Z0-9_.#$%^&*!]+@+[a-z]+.+[a-z]*$')){
            SetEmailError('')
            EmailStat=true;
        }else{
            SetEmailError('*Check Email format')
        }

        if(Password===''){
            SetPasswordError('Create password')
        }else if(Password.length>8){
            if(Password===ConfirmPassword){
                SetPasswordError('');
                PasswordStat=true;
            }else{
                SetPasswordError('Password not matched')
            }
        }else{
            SetPasswordError('Password must be greater than 8 characters')
        }

        if(NameStat && PasswordStat && EmailStat && Phone){
            axios.post("https://furniflex-server-ynau.onrender.com/Users",{Name,Email,Password,Phone,ConfirmPassword})
            .then((res)=>{
                if(res.data.status){
                    toast('Signup successful')
                    SetDoLogin(true)
                    return navigate('/login')
                }else{
                    alert("unsucess")
                    toast('Signup unsuccessful')
                }
            })
            .catch((e)=>console.log(e))
            // const postapi=usePostApi("https://furniflex-server-ynau.onrender.com/Users",{Name,Email,Password,Phone,ConfirmPassword})
        }
        
    }
// console.log(DoLogin);
  return (
    <div className=' container-fluid p-0 primary-bgcolor text-white d-flex align-items-center' style={{height:'100vh'}}>
            <ToastContainer />
        <div className=' col-4 m-auto rounded-5 shadow p-4 px-5 bg-white'>
            <h3 className=' text-center fw-bold my-4 text-dark'>Register</h3>
            <form onSubmit={Signupform}>
                <input type='text' placeholder='Name' className=' form-control my-2' value={Name} onChange={(e)=>SetName(e.target.value)} />
                <p className=' text-danger'>{NameError}</p>
                <input type='text' placeholder='Email' className=' form-control my-2' value={Email} onChange={(e)=>SetEmail(e.target.value)} />
                <p className=' text-danger'>{EmailError}</p>
                <input type='tel' placeholder='Phone number' className=' form-control my-2' value={Phone} onChange={(e)=>SetPhone(e.target.value)} />
                <p className=' text-danger'>{NumberError}</p>
                <input type='password' placeholder='Password' className=' form-control my-2' value={Password} onChange={(e)=>SetPassword(e.target.value)} />
                <input type='password' placeholder='Confirm Password' className=' form-control my-2' value={ConfirmPassword} onChange={(e)=>SetConfirmPassword(e.target.value)} />
                <p className=' text-danger'>{PasswordError}</p>
                <input type='submit' value='SignUp' className=' btn secondary-bgcolor text-white w-100 my-3' />
            </form>
            <p className=' text-black'>Already have an account? <Link to={"/login"}>login</Link></p>
        </div>
    </div>
  )
}

export default Signup