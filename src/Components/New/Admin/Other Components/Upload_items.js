import axios from 'axios';
import React, { useState } from 'react'
import usePostApi from '../../CostomHook/PostApi';
import { ToastContainer } from 'react-toastify';

const Upload_items = () => {

    const [Category,SetCategory]=useState("");
    const [ItemName,SetItemName]=useState("");
    const [Cost,SetCost]=useState("");
    const [ImageURL,SetImageURL]=useState("");
    const [ImageURL1,SetImageURL1]=useState("");
    const [ImageURL2,SetImageURL2]=useState("");
    const [ImageURL3,SetImageURL3]=useState("");
    const [Discount,SetDiscount]=useState("");
    const [Color,SetColor]=useState("");
    const Quantity=1;
    const [Rating,SetRating]=useState("");
    const [Discription,SetDiscription]=useState("");

    const ItemUpload=(e)=>{
        e.preventDefault();
        usePostApi("https://furniflex-server-ynau.onrender.com/Items",{Category,ItemName,Discription,ImageURL,ImageURL1,ImageURL2,ImageURL3,Rating,Quantity,Color,Cost,Discount})
    }


  return (
    <div>
    <ToastContainer/>
        <div className=' col-10 m-auto'>
            <form  onSubmit={ItemUpload} className=' primary-bgcolor p-5 text-white rounded-5 my-4 shadow'>
            <h2 className=' fw-bold text-center'>Upload Product</h2>
                <label>Category</label>
                <select className=' mb-2 form-select bg-success-subtle' value={Category} onChange={(e)=>SetCategory(e.target.value)}>
                    <option>Select one</option>
                    <option>Bed room</option>
                    <option>Living room</option>
                    <option>Office</option>
                    <option>Kitchen</option>
                    <option>Outdoor</option>
                    <option>Decor</option>
                </select>
                <label>Item name</label>
                <input type='text' className=' mb-2 form-control bg-success-subtle' value={ItemName} onChange={(e)=>SetItemName(e.target.value)}  />
                <label>Cost</label>
                <input type='number' className=' mb-2 form-control bg-success-subtle' value={Cost} onChange={(e)=>SetCost(e.target.value)} />
                <label>Image URL</label>
                <input type='text' className=' mb-2 form-control bg-success-subtle' value={ImageURL} onChange={(e)=>SetImageURL(e.target.value)} />
                <label>Image URL 1</label>
                <input type='text' className=' mb-2 form-control bg-success-subtle' value={ImageURL1} onChange={(e)=>SetImageURL1(e.target.value)} />
                <label>Image URL 2</label>
                <input type='text' className=' mb-2 form-control bg-success-subtle' value={ImageURL2} onChange={(e)=>SetImageURL2(e.target.value)} />
                <label>Image URL 3</label>
                <input type='text' className=' mb-2 form-control bg-success-subtle' value={ImageURL3} onChange={(e)=>SetImageURL3(e.target.value)} />
                <label>Discription</label>
                <input type='text' className=' mb-2 form-control bg-success-subtle' value={Discription} onChange={(e)=>SetDiscription(e.target.value)} />
                <label>Discount</label>
                <input type='text' className=' mb-2 form-control bg-success-subtle' value={Discount} onChange={(e)=>SetDiscount(e.target.value)} />
                <label>Rating</label>
                <input type='text' className=' mb-2 form-control bg-success-subtle' value={Rating} onChange={(e)=>SetRating(e.target.value)} />
                <label>Color</label>
                <select className=' mb-2 form-select bg-success-subtle' value={Color} onChange={(e)=>SetColor(e.target.value)}>
                    <option>Select one</option>
                    <option>Brown</option>
                    <option>Orange</option>
                    <option>Grey</option>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Pink</option>
                    <option>White</option>
                    <option>Green</option>
                    <option>Red</option>
                </select>
                <input type='submit' className=' w-100 btn secondary-bgcolor mt-3' value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default Upload_items