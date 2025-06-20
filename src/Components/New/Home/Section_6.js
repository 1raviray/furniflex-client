import React from 'react'
import Countdown from 'react-countdown-simple';
import sofa from '../../Assets/1558178901658-jpg-1000x1000-removebg-preview.png'
import table from '../../Assets/JJTBSI62GY32031_2-removebg-preview.png'
import chair from '../../Assets/b-removebg-preview.png'

const Section_6 = () => {
    
const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 12)
  ).toISOString()

  const renderer = ({ days, hours, minutes, seconds }) =>
  <div className=' fs-4'><span className=' rounded p-2 bg-white me-2'>{hours}H</span><span className=' rounded p-2 bg-white me-2'>{minutes}M</span><span className=' rounded p-2 bg-white'>{seconds}S</span></div>
  return (
    <div className=' container p-5'>
        <div className='row'>
            <div className=' col-12 col-md-8 terirary-bgcolor rounded-5 p-5 pb-0 mb-3'>
                <div className='row'>
                    <div className=' col-12 col-md-8 '>
                        <h2 className=' section4-font'>Flash Sale!</h2>
                        <p>Act fast to grab incredable deals on select furniture pieces in our limited-time flash sale.</p>
                    </div>
                    <div className=' col-12 col-md-4 d-flex justify-content-center align-items-center'>
                        <div className=''>
                            <div className=' fs-6 d-block mb-3'><i className="bi bi-stopwatch me-2"></i>End time</div>
                            <Countdown targetDate={oneHour} renderer={renderer} />
                        </div>
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className=' col-12 col-md-5 m-auto '>
                        <img src={sofa} className=' w-100' />
                    </div>
                    <div className=' col-12 col-md-6 m-auto'>
                        <h5>Purple Fraiche Italian Leather</h5>
                        <p>Bring a touch of retro charm to your home with this Creme Fraiche Italian Leather sofa.</p>
                        <button className='hero-btn mt-3 d-flex'>Shop Now <i className="bi bi-arrow-right d-block ms-2"></i></button>
                    </div>
                </div>
            </div>
            <div className=' col-12 col-md-4 h-100 mb-3'>
                <div className=' col-12  terirary-bgcolor rounded-5 mb-3 p-4 h-100'>
                    <img src={table} className=' w-100' />
                    <div className=' d-flex justify-content-between align-items-center px-4'>
                        <h5>Solid wood side table</h5>
                        <button className='hero-btn px-3 py-2 d-flex'><i className="bi bi-arrow-right d-block ms-2"></i></button>
                    </div>
                </div>
                <div className=' col-12  terirary-bgcolor rounded-5 h-100 p-4'>
                    <img src={chair} className=' w-100' />
                    <div className=' d-flex justify-content-between align-items-center px-4'>
                        <h5>Doris Fabric Accent Chair</h5>
                        <button className='hero-btn px-3 py-2 d-flex'><i className="bi bi-arrow-right d-block ms-2"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section_6