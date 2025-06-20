import React, { useState } from 'react'

const Flex_wrap = () => {

    const [move,Setmove]=useState(1);
    if(move>3){
        Setmove(1)
    }else if(move<1){
        Setmove(3)
    }
    
    console.log(move);
  return (
    <div className=' d-flex justify-content-center align-items-center' >
        <div>
        <div className=' d-flex flex-nowrap justify-content-start'>
            <input id='no.1' type='radio' name='wraper' className=' input-radio' checked={move===1} readOnly/>
            <label htmlFor="no.1" className='card-wraper shadow overflow-hidden'>
                <div className=' d-flex align-items-end h-100 ' >
                <div className=' d-flex align-items-center justify-content-center'>
                    <span className=' '>
                        <h5 className=' icon-circle ms-4 mb-3 bg-warning '>1</h5>
                    </span>
                    <p className=' wraper-para m-0 mb-3 text-white'>Bed Room</p>
                </div>
                </div>
            </label>
            <input id='no.2' type='radio' name='wraper' className=' input-radio' checked={move===2} readOnly/>
            <label htmlFor="no.2" className='card-wraper shadow overflow-hidden'>
            <div className=' d-flex align-items-end h-100 ' >
                <div className=' d-flex align-items-center justify-content-center'>
                    <span className=' '>
                        <h5 className=' icon-circle ms-4 mb-3 bg-warning '>2</h5>
                    </span>
                    <p className=' wraper-para m-0 mb-3 text-white'>Living Room</p>
                </div>
                </div>
            </label>
            <input id='no.3' type='radio' name='wraper' className=' input-radio' checked={move===3} readOnly/>
            <label htmlFor="no.3" className='card-wraper shadow overflow-hidden'>
            <div className=' d-flex align-items-end h-100 ' >
                <div className=' d-flex align-items-center justify-content-center'>
                    <span className=' '>
                        <h5 className=' icon-circle ms-4 mb-3 bg-warning '>3</h5>
                    </span>
                    <p className=' wraper-para m-0 mb-3 text-white d-block'>Kitchen Room</p>
                </div>
                </div>
            </label>
        </div>
        <div>
            <button onClick={()=>Setmove(move-1)} className=' hero-btn m-2 mt-4'><i className="bi bi-arrow-left d-block"></i></button>
            <button onClick={()=>Setmove(move+1)} className=' hero-btn m-2 mt-4'><i className="bi bi-arrow-right d-block"></i></button>
        </div>
        </div>
    </div>
  )
}

export default Flex_wrap