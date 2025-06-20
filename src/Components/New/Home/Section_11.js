import React, { useState } from "react";
import premium from '../../Assets/premium_photo-1661765778256-169bf5e561a6.jpg'
import axios from "axios";

const Section_11=()=>{
    const [news,Setnews]=useState('');
    const [newserror,Setnewserror]=useState('');
    let emailStat=false;
    const newsSubmit=(e)=>{
        e.preventDefault();
        if(news===""){
            Setnewserror('Email is required')
        }else if(news.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            Setnewserror('');
            emailStat=true;
            Setnews('');
        }else{
            Setnewserror('Email format is invalid')
        }

        if(emailStat===true){
            axios.post('https://furniflex-server-ynau.onrender.com/newsletter',{news})
            .then(alert('Newsletter Subscribed'))
            .catch((r)=>console.log(r))
        }
    }
    return(
        <div className=" container py-5">
            <div className=" row terirary-bgcolor p-4 rounded-4">
                <div className=" col-12 col-md-6 m-auto px-4">
                    <h1 className=" text-capitalize fw-semibold mb-4">Subscribe to our <br/>newsletter</h1>
                    <p >Subscribe to our email newsletter today to <br/>receive update on the latest news </p>
                    <form onSubmit={newsSubmit} className=" section11-form mt-4">
                        <i className=" bi bi-envelope section11-icon"></i>
                        <input type="text" className="section11-input " value={news} onChange={(e)=>Setnews(e.target.value)} placeholder="Enter your Email"/>
                        <input type="submit" className="section11-submit" value='Subscribe'/>
                    </form>
                        <p className=" text-danger mt-2">{newserror}</p>
                </div>
                <div className=" col-12 col-md-6 my-4">
                    <img src={premium} className=" w-100 rounded-4" />
                </div>
            </div>
        </div>
    )
}
export default Section_11;