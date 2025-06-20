import React from 'react'

const Section_7 = () => {
  return (
    <div className=' container py-5'>
        <div className=' row'>
            <div className=' col-12 col-md-6 text-white'>
                <div className=' section7-bg p-5 d-flex align-items-center '>
                    <div className=' ms-lg-5'>
                        <div className=' mb-4'>
                            <span className=' fs-5 me-3 mb-4'>Exclusive Offer</span>
                            <span className=' px-3 py-1 mb-4 rounded-4 bg-white text-warning'>15% OFF</span>
                        </div>
                        <h1 className=' fw-bold'>Best Online <br/>Deals, Free Stuff</h1>
                        <p className=' my-3'>Only on this week Don't miss it</p>
                        <button className=' hero-btn d-flex align-items-center'>Get Best Deals <i className=' bi bi-arrow-right ms-2 d-block'></i></button>
                    </div>
                </div>
            </div>
            <div className=' col-12 col-md-6'>
            <div className=' terirary-bgcolor p-5 d-flex align-items-center ' style={{height:'60vh',borderRadius:'30px'}}>
                    <div className=' ms-lg-5'>
                        <div className=' mb-4'>
                            <span className=' fs-5 me-3 mb-4'>Regular Offer</span>
                        </div>
                        <h1 className=' fw-bold'>10% Cash-Back <br/>on personal care</h1>
                        <p className=' my-3'>Max cashback ₹2000. Code: CADHL8569</p>
                        <button className=' hero-btn d-flex align-items-center' style={{backgroundColor:'#2D5356'}}>Shop Now <i className=' bi bi-arrow-right ms-2 d-block'></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section_7