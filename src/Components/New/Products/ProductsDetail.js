import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import YouMayLike from './YouMayLike';
import Section_5 from '../Home/Section_5';
import Section_2 from '../Home/Section_2';
import { Flex, Rate } from 'antd';
import { useContext } from 'react';
import { cartcontext,Logindata } from '../../../App';


const ProductsDetail = () => {
    const {_id}=useParams();
    const [SingleData,SetSingleData]=useState('');
    const [DoLogin,SetDoLogin]=useContext(Logindata)

    const Reviewer_Id=_id;
    const [ReviewerName,SetReviewerName]=useState('');
    const [ReviewerMessage,SetReviewerMessage]=useState('');
    const [OGreview,SetOGreview]=useState([]);

    const {addToCart,removeToCart,cartItems}=useContext(cartcontext)

      const [NumProducts,SetNumProducts]=useState(1);
      if(NumProducts<1){
        SetNumProducts(1)
      }
      useEffect(()=>{
        axios.get('https://furniflex-server-ynau.onrender.com/Items/'+_id)
        .then((r)=>SetSingleData(r.data))
        .catch((e)=>console.log(e))
      },[_id])

      useEffect(()=>{
        axios.get("https://furniflex-server-ynau.onrender.com/Reviews")
        .then((r)=>SetOGreview(r.data))
        .catch((e)=>console.log(e))
      })
      

    const ReviewHandler=(e)=>{
      e.preventDefault();
      axios.post('https://furniflex-server-ynau.onrender.com/Reviews',{Reviewer_Id,ReviewerName,ReviewerMessage,value})
      .then(alert("success"))
      .catch((e)=>console.log(e))

      setValue();SetReviewerMessage('');SetReviewerName('');
      }
      
      const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
      const [value, setValue] = useState(0);
      const today=new Date()

      const signpath=()=>{
        if(DoLogin){
          return "/cart"
        }else{
          return "/login"
        }
      }
  return (
    <div>
      <div className=' container-fluid title-name'>
            <h1 className=' text-center'>Product Details</h1>
        </div>
        <div className='  py-3 container fs-5'>
          <NavLink to='/products' className='text-warning text-decoration-none'>
            <i className="bi bi-arrow-left me-2"></i><span>Back to products</span>
          </NavLink>
        </div>
        <div className=' container pb-5'>
          <div className=' row'>
            <div className=' col-12 col-md-6'>
              <Carousel autoPlay={true} infiniteLoop={true}  interval={2000} showStatus={false} className=' rounded-5 shadow overflow-hidden h-100'>
                    <img src={SingleData.ImageURL} className="d-block w-100" alt="..." />
                    <img src={SingleData.ImageURL1} className="d-block w-100" alt="..." />
                    <img src={SingleData.ImageURL2} className="d-block w-100" alt="..." />
                    <img src={SingleData.ImageURL3} className="d-block w-100" alt="..." />
              </Carousel>
            </div>
            <div className=' col-12 col-md-6 p-3'>
              <h3>{SingleData.ItemName}</h3>
              <span className=' section5-discount p-3 m-0 mt-3'>{SingleData.Rating} <i className=' bi bi-star-fill text-warning ms-1'></i></span>
              <div>
                <h6 className=' text-success mt-3'>Special Price</h6>
                <div className=' d-flex'>
                  <h4 className=' fw-semibold'>₹{NumProducts*(SingleData.Cost-(SingleData.Cost*(SingleData.Discount/100)))}</h4>
                  <h5 className=' text-decoration-line-through text-dark-emphasis ms-3 me-3'>₹{SingleData.Cost}</h5>
                  <h5><span className=' fw-semibold'>{SingleData.Discount}</span>% Off</h5>
                </div>
                <div className=' d-inline-flex PDetails my-3'>
                  <button className='PDetailsBtn text-black fw-semibold m-0 mx-2 ' onClick={()=>SetNumProducts(NumProducts-1)}>-</button>
                  <span >{NumProducts}</span>
                  <button className=' PDetailsBtn text-black fw-semibold m-0 mx-2' onClick={()=>SetNumProducts(NumProducts+1)}>+</button>
                </div>
                <div className=' d-flex'>
                <Link to={signpath()} className=' text-decoration-none'>
                  <button onClick={()=>addToCart(SingleData)} className='hero-btn mt-3 d-flex me-3'>Buy Now</button>
                </Link>
                  {
                    cartItems.includes(SingleData)?
                    (<button className='hero-btn mt-3 d-flex text-bg-danger' onClick={()=>removeToCart(SingleData)}>Remove from cart</button>):
                    (<button className='hero-btn mt-3 d-flex primary-bgcolor' onClick={()=>addToCart(SingleData)}>Add to cart</button>)
                  }
                  
                </div>
                <div className=' primary-bgcolor text-center text-white mt-3 rounded-4 py-3  h-100'>
                  <h5>Coupon and Discounts</h5>
                  <p className=' m-0 fs-4'>GET EXTRA 15% OFF</p>
                  <p className=' m-0 text-warning'>USE CODE: TW015</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-10 py-4'>
            <h4 className=' d-inline-block primary-bgcolor text-white pe-5 ps-3 py-2 rounded-5 mb-3'>Product Information</h4>
            <p>{SingleData.Discription}</p>
            <h4 className=' d-inline-block primary-bgcolor text-white pe-5 ps-3 py-2 rounded-5 mb-3'>Warrenty & Support</h4>
            <p>FurniFlex.com Return Policy: Reguardless of your statutory right of withdrawal, you enjoy a 30-day right of return for many products. For Exceptions and Conditions, See <span className=' text-warning text-decoration-underline'>Return details.</span></p>
            <p>Manfacturer's warrenty can be requested from customer services. <span className=' text-warning text-decoration-underline'>Click here</span> to make a request to customer service.</p>
          </div>
          <div>
          
          <div>
          <div>
              <h2 className=' fw-semibold'>Review this Product</h2>
              <h6>Share your thoughts with other costomers</h6>
              <button data-bs-target='#review' data-bs-toggle='modal'  className=' d-inline-block secondary-bgcolor border-0 text-white p-3 px-4 rounded-5 my-3' >Write a customer review</button>
            </div>
            {
              OGreview.filter((e)=>{if(e.Reviewer_Id===_id){return e}}).map((e,index)=>{
                return(
                  <div key={index} className=' my-2'>
                    <div>
                  <div className=' d-flex align-items-center justify-content-between'>
                    <div className=' d-flex'>
                    <div className=' PDetails-emptyImg d-inline-block'></div>
                    <div className=' ms-2'>
                      <h5 className=' fw-semibold m-0'>{e.ReviewerName}</h5>
                      <h6 className=''>Verified user</h6>
                    </div>
                    </div>
                    <div className=' d-flex flex-column'>
                    <Flex gap="middle" allowHalf vertical className=' p-2 rounded'>
                    <Rate  value={e.value} />
                    {/* {e.value ? <span>{desc[e.value - 1]}</span> : null} */}
                  </Flex>
                  <div className='ps-2'>{`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`}</div>
                    </div>
                    </div>
                    <div className=' col-11 ps-2'>
                      <p className=' font-poppins'>{e.ReviewerMessage}</p>
                    </div>
                  </div>
                  </div>
                )
              })
            }
            
          </div>
            <YouMayLike category={SingleData.Category} />
            <Section_5/>
            <Section_2/>
          </div>
        </div>

        <div className=' modal' id='review'>
            <div className=' modal-dialog'>
              <div className=' modal-content'>
                <div className=' modal-header justify-content-center'>
                  <h3>Write a review</h3>
                </div>
                <div className=' modal-body justify-content-center'>
                <form className='' onSubmit={ReviewHandler}>
                <div className=' d-flex justify-content-between align-items-center'>
                  <Flex gap="middle" allowHalf vertical className=' p-2 rounded bg-warning-subtle'>
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span>{desc[value - 1]}</span> : null}
                  </Flex>
                  <div>
                    <img src={SingleData.ImageURL} className=' productDetail-modalImg' />
                    <img src={SingleData.ImageURL1} className=' productDetail-modalImg' />
                    <img src={SingleData.ImageURL2} className=' productDetail-modalImg' />
                    <img src={SingleData.ImageURL3} className=' productDetail-modalImg' />
                    <h6>{SingleData.ItemName}</h6>
                  </div>
                </div>
                  <input type='text' name='name' placeholder='Your name' className=' form-control my-2' value={ReviewerName} onChange={(e)=>SetReviewerName(e.target.value)} />
                  <textarea rows={5} name='message' placeholder='Review' className=' form-control my-2' value={ReviewerMessage} onChange={(e)=>SetReviewerMessage(e.target.value)} />
                  <input type='submit' data-bs-dismiss='modal' className='w-100 secondary-bgcolor border-0 text-white p-3 px-4 rounded-5 my-3 ' value="Submit" />
                </form>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default ProductsDetail