import React, { useEffect, useState } from 'react'
import Section_2 from '../Home/Section_2'
import axios from 'axios';

const Contact = () => {

    const [Name,SetName]=useState('');
    const [Email,SetEmail]=useState('')
    const [PNumber,SetPNumber]=useState('')
    const [Message,SetMessage]=useState('')
    
    const [Nameerror,SetNameerror]=useState('')
    const [Emailerror,SetEmailerror]=useState('')
    const [Phoneerror,SetPhoneerror]=useState('')
    const [Messageerror,SetMessageerror]=useState('')
    let nameStat=false;let emailStat=false;let phoneStat=false;let messagestat=false;

    const ContactSubmit=(e)=>{
        e.preventDefault();

        if(Name===""){
            SetNameerror('*Name is required')
        }else if(Name.match(/^[a-zA-Z]*$/)){
            SetNameerror('');
            nameStat=true;
        }else{
            SetNameerror('*Name must be Alphabets');
            nameStat=false;
        }
        if(Email===""){
            SetEmailerror('*Email is required')
        }else if(Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            SetEmailerror('');
            emailStat=true;
        }else{
            SetEmailerror('*Check Email format')
        }
        
        if(PNumber===''){
            SetPhoneerror('*Phone number is required')
        }else if(PNumber.match(/^[0-9]+$/)){
            if(PNumber.length===10){
                SetPhoneerror('');
                phoneStat=true;
            }else SetPhoneerror('*Must required 10 digits')
        }else{
            SetPhoneerror('*Only numbers')
        }

        if(Message===""){
            SetMessageerror("*Message is required")
        }else{
            SetMessageerror('');
            messagestat=true;
        }

        if(nameStat&&emailStat&&phoneStat&&messagestat){
            axios.post("https://furniflex-server-ynau.onrender.com/contact",{Name,Email,PNumber,Message})
            .then(alert("Success"))
            .catch((err)=>console.log(err))
            SetName('');SetEmail('');SetPNumber("");SetMessage("");
        }
    }


  return (
    <div>
        <div className=' container-fluid title-name'>
            <h1 className=' text-center'>Contact Us</h1>
        </div>
        <div className=' container p-5'>
            <div className=' row py-5'>
                <div className=' col-12 col-md-6'>
                    <h2 className=' fw-semibold'>Get in touch</h2>
                    <p>We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is here to help with anything you need. Drop us a message, and we'll get back to you as soon as possible.</p>
                    <div className=' d-flex my-4'>
                        <div className=' contact-icon bg-danger-subtle'>
                            <i className="bi bi-envelope text-danger fs-4"></i>
                        </div>
                        <div className=' ms-2'>
                            <p className=' m-0 text-dark opacity-50'>Mail</p>
                            <p className=' m-0'>furniflex@gmail.com</p>
                        </div>
                    </div>
                    <div className=' d-flex my-4'>
                        <div className=' contact-icon bg-primary-subtle'>
                            <i className="bi bi-telephone text-primary fs-4"></i>
                        </div>
                        <div className=' ms-2'>
                            <p className=' m-0 text-dark opacity-50'>Phone</p>
                            <p className=' m-0'>+91 96584 23568</p>
                        </div>
                    </div>
                    <div className=' d-flex my-4'>
                        <div className=' contact-icon bg-warning-subtle'>
                            <i className="bi bi-printer text-warning fs-4"></i>
                        </div>
                        <div className=' ms-2'>
                            <p className=' m-0 text-dark opacity-50'>Fax</p>
                            <p className=' m-0'>(901) 234 - 765</p>
                        </div>
                    </div>
                    <div className=' d-flex my-4'>
                        <div className=' contact-icon bg-success-subtle'>
                            <i className="bi bi-geo-alt text-success fs-4"></i>
                        </div>
                        <div className=' ms-2'>
                            <p className=' m-0 text-dark opacity-50'>Office Address</p>
                            <p className=' m-0'>Bhanugudi, Kakinada, A.P, 533001</p>
                        </div>
                    </div>
                    <h2 className=' pe-2 m-0 d-block'>Stay Connected</h2>
                    <div className=' d-flex align-items-center my-3'>
                        <span className=' icon-circle bg-warning-subtle ms-2 mx-1'><i className=" bi bi-instagram text-warning"></i></span>
                        <span className=' icon-circle bg-warning-subtle mx-1'><i className=" bi bi-twitter-x text-warning"></i></span>
                        <span className=' icon-circle bg-warning-subtle mx-1'><i className=" bi bi-facebook text-warning"></i></span>
                    </div>
                </div>
                <div className=' col-12 col-md-6'>
                    <div className=' contact-form p-3 px-lg-5'>
                        <h2 className=' text-center py-3 '>Send us a Message</h2>
                        <p className=' text-center m-0'>Your Email address will not be published</p>
                        <p className=' text-center m-0'>Required Fields are marked</p>
                        <form className=' my-2' onSubmit={ContactSubmit}>
                            <label className=' form-label d-flex' >Name <span className=' ms-auto text-danger fw-semibold'>{Nameerror}</span></label>
                            <input type='text' value={Name} onChange={(e)=>SetName(e.target.value)} className=' mb-2 form-control bg-success-subtle' />
                            <label className=' form-label d-flex' >Email <span className=' ms-auto text-danger fw-semibold'>{Emailerror}</span></label>
                            <input type='text' value={Email} onChange={(e)=>SetEmail(e.target.value)} className=' mb-2 form-control bg-success-subtle' />
                            <label className=' form-label d-flex' >Phone number <span className=' ms-auto text-danger fw-semibold'>{Phoneerror}</span></label>
                            <input type='text' value={PNumber} onChange={(e)=>SetPNumber(e.target.value)} className=' mb-2 form-control bg-success-subtle' />
                            <label className=' form-label d-flex' >Message <span className=' ms-auto text-danger fw-semibold'>{Messageerror}</span></label>
                            <textarea rows='6' type='text' value={Message} onChange={(e)=>SetMessage(e.target.value)} className=' form-control bg-success-subtle' />
                            <input type='submit' value='Submit' className=' mt-3 contact-btn'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className=' container-fluid p-0'>
        <iframe className=' w-100' style={{height:'50vh'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7632.119043088962!2d82.23064899472743!3d16.97162228538555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382814b5d0e193%3A0x6c2571426b243af5!2sBhanugudi%20Junction%2C%20Police%20Quarters%2C%20Kakinada%2C%20Andhra%20Pradesh%20533003!5e0!3m2!1sen!2sin!4v1723631240396!5m2!1sen!2sin" ></iframe>
        </div>
        <Section_2/>
    </div>
  )
}

export default Contact