import React, {useState,useEffect, useContext} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import useDeleteApi from '../../CostomHook/DeleteApi';
import { Logindata } from '../../../../App';
import $ from 'jquery';


const Edit_Blog = () => {

  const [ModalSticky,SetModalSticky]=useContext(Logindata)

    const [GetBlog,SetGetBlog]=useState([]);

    const [_id,Set_id]=useState('');
    const [Bloger,SetBloger]=useState('');
    const [BlogTitle,SetBlogTitle]=useState('');
    const [BlogContent,SetBlogContent]=useState();
    const [BlogImg,SetBlogImg]=useState('');
    const [BlogDate,SetBlogDate]=useState('');
    const [BlogerImg,SetBlogerImg]=useState('');

    useEffect(()=>{
        axios.get("https://furniflex-server-ynau.onrender.com/Blog")
        .then((e)=>SetGetBlog(e.data))
        .catch((e)=>console.log(e))
    })


    const Delete_Blog=(e)=>{
        useDeleteApi("https://furniflex-server-ynau.onrender.com/Blog/"+e)
    }

    const Edit_Blogs=(e)=>{
        axios.get("https://furniflex-server-ynau.onrender.com/Blog/"+e)
        .then((e)=>{
            Set_id(e.data._id);SetBloger(e.data.Bloger);SetBlogDate(e.data.BlogDate);SetBlogerImg(e.data.BlogerImg);SetBlogContent(e.data.BlogContent);
            SetBlogImg(e.data.BlogImg);SetBlogTitle(e.data.BlogTitle)
        })
        .catch((e)=>console.log(e))
    }

    const BlogHandler=(e)=>{
        e.preventDefault();
        axios.put('https://furniflex-server-ynau.onrender.com/Blog/'+_id,{Bloger,BlogDate,BlogerImg,BlogContent,BlogImg,BlogTitle})
        .then(toast("Successfully Uploaded"))
        .catch((e)=>console.log(e))
    }
  
  return (
    <div className=' container'>
        <ToastContainer/>
        <div className='row'>
            {
                GetBlog.map((e,index)=>{
                    return(
                        <div className=' col-12 col-md-4 my-3' key={index}>
                                <div className=' p-2 terirary-bgcolor rounded-4 blogImg overflow-hidden position-relative blogpic'>
                                    <div className=' position-absolute blogBtn'>
                                        <button onClick={()=>Edit_Blogs(e._id)} data-bs-toggle="modal" data-bs-target="#popup" className=' btn btn-warning'><i className=' bi bi-pencil-fill'></i></button>
                                        <button onClick={()=>Delete_Blog(e._id)} className=' btn btn-danger ms-4'><i className=' bi bi-trash-fill'></i></button>
                                    </div>
                                    <div className=' overflow-hidden rounded-4'>
                                        <img src={e.BlogImg} className=' w-100 rounded-4' />
                                    </div>
                                    <div className=' bg-white p-2 mt-2 rounded-4'>
                                        <h5 className=' fw-semibold'>{e.BlogTitle}</h5>
                                        <div className=' text-dark-emphasis'>by <span className=' fw-semibold'>{e.Bloger}</span> on <span className=' fw-semibold'>{e.BlogDate}</span></div>
                                    </div>
                                </div>
                        </div>
                    )})
            }
            </div>
            <div className=' modal position-absolute' id='popup'>
                <div className=' modal-dialog modal-xl'>
                    <div className=' modal-content'>
                        <div className=' modal-header justify-content-center'>
                            <h3 className=' fw-bold'>Edit Blog</h3>
                        </div>
                        <div className=' modal-body'>
                        <form onSubmit={BlogHandler} className=" pt-4 p-5 rounded-5 shadow">
        <div className=" mb-2">
          <label className="mb-2" for="form_Id1">Bloger name</label>
          <input type="text" className="form-control" value={Bloger} onChange={(e)=>SetBloger(e.target.value)} name="form_Id1" _id="form_Id1" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="form_Id1">Bloger image</label>
          <input type="text" className="form-control" value={BlogerImg} onChange={(e)=>SetBlogerImg(e.target.value)} name="form_Id1" _id="form_Id1" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="form_Id2">Blog title</label>
          <input type="text" className="form-control" value={BlogTitle} onChange={(e)=>SetBlogTitle(e.target.value)} name="form_Id2" _id="form_Id2" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="form_Id3">Blog image</label>
          <input type="text" className="form-control" value={BlogImg} onChange={(e)=>SetBlogImg(e.target.value)} name="form_Id3" _id="form_Id3" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="form_Id4">Upload date</label>
          <input type="date" className="form-control" value={BlogDate} onChange={(e)=>SetBlogDate(e.target.value)} name="form_Id4" _id="form_Id4" placeholder="" />
        </div>
        <div className=" mb-2">
          <label className="mb-2" for="form_Id5">Blog Content</label>
          <textarea rows='15' className="form-control" value={BlogContent} onChange={(e)=>SetBlogContent(e.target.value)} name="form_Id5" _id="form_Id5" placeholder="" />
        </div>
        <input type="submit" data-bs-dismiss='modal' value='Submit' className=" secondary-bgcolor rounded-5 text-white border-0 w-100 p-3" />
      </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Edit_Blog