import React from 'react';
import round_table from './../../Assets/kindpng_687243.png'
import accent_chair from './../../Assets/table-chair-couch-clip-art-transparent-brown-leather-chair-png-clipart-b45f1d15e51c75f4226f66951186e401.png'
import light from '../../Assets/image_inspiration_on_Designspiration-removebg-preview.png'

const Section_3 = () => {
  return (
    <div className=' container py-5'>
        <div className=' row'>
            <div className=' col-12 col-md-7'>
                <div className=' terirary-bgcolor p-3 rounded-5'>
                            <span className=' hero-span primary-color bg-white m-4'>NEW COLLECTIONS</span>
                    <div className=' row'>
                        <div className=' col-6 col-md-5 ps-5 pe-0'>
                            <h3 className=' fw-semibold'>Center Table</h3>
                            <p className=' m-0'>Square table</p>
                            <p className=' m-0'>Round table</p>
                            <p className=' m-0'>Wooden table</p>
                            <p className=' m-0'>Glass table</p>
                            <button className=' line-btn'>View All <i className="bi bi-arrow-right"></i></button>
                        </div>
                        <div className=' col-6 col-md-7 ps-0 p-5'>
                            <img src={round_table} className=' w-100' />
                        </div>
                    </div>
                </div>
                <div className=' row'>
                    <div className=' col-12 col-md-6 p-3 pb-0'>
                    <div className=' terirary-bgcolor rounded-5'>
                        <span className=' hero-span primary-color bg-white m-4'>NEW COLLECTIONS</span>
                    <div className=' row'>
                        <div className='col-6 ps-5'>
                            <h5 className=' fw-semibold'>Lighting Lamp</h5>
                            <p className=' m-0'>Flore lamps</p>
                            <p className=' m-0'>Tripod lamps</p>
                            <p className=' m-0'>Table lamps</p>
                            <p className=' m-0'>Study lamps</p>
                            <button className=' line-btn'>View All <i className="bi bi-arrow-right"></i></button>
                        </div>
                        <div className=' col-6'>
                            <img src={light} className=' w-100' />
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className=' col-12 col-md-6 p-3 pb-0'>
                        <div className='primary-bgcolor rounded-5 h-100 d-flex align-items-center justify-content-center'>
                            <div className=''>
                            <button className=' hero-btn my-2' data-bs-toggle="modal" data-bs-target="#discount">GET DISCOUNT</button>
                            <h2 className=' text-white' >20% OFFER</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' col-12 col-md-5'>
                <div className=' terirary-bgcolor rounded-5 pt-4  d-flex h-100'>
                <div>

                    <span className=' hero-span primary-color bg-white m-4'>NEW COLLECTIONS</span>
                    <div className=' row'>
                        <div className=' col-4 ps-5'>
                            <h5 className=' fw-semibold'>Accent Chairs</h5>
                            <p className=' m-0'>Arm lamps</p>
                            <p className=' m-0'>Wing lamps</p>
                            <p className=' m-0'>Cafe lamps</p>
                            <p className=' m-0'>Wheels lamps</p>
                            <button className=' line-btn'>View All <i className="bi bi-arrow-right"></i></button>
                        </div>
                        <div className=' col-8 h-100'>
                            <img src={accent_chair} className=' py-5 w-100 h-100' />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='modal' id='discount'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body p-5 justify-content-center align-items-center d-flex'>
              <span>Use this code: GET20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_3