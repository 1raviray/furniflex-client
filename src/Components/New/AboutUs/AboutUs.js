import React from 'react'
import about from "../../Assets/2150695875.jpg"
import carpenter from "../../Assets/2149451066.jpg"
import award from "../../Assets/15685.jpg"
import chair from "../../Assets/2147944824.jpg"
import globe from "../../Assets/2149451016.jpg"
import person1 from "../../Assets/person1.jpg"
import person2 from "../../Assets/person2.jpg"
import person3 from "../../Assets/person3.jpg"
import Section_2 from '../Home/Section_2'
import Section_8 from '../Home/Section_8'

const AboutUs = () => {
  return (
    <div>
        <div className=' container-fluid title-name'>
            <h1 className=' text-center'>About Us</h1>
        </div>
        <div className=' container py-5'>
            <h2 className=' font-poppins fw-semibold fs-1 mb-4 text-center'>Discover Furniflex - <br/>where innovation meets Design</h2>
            <div className=''>
                <img src={about} className=' w-100 rounded-5' style={{height:''}} />
            </div>
            <div className=' container'>
                <div className='text-center'>
                    <span className=' hero-span text-dark'>FurniFlex Challenging</span>
                    <h3 className=' fw-medium'>The FurniFlex Journey Story</h3>
                    <p>The FurniFlex Journey: Transforming spaces with innovative design. Explore our story of craftmanship <br/>and style, creating furniture that inspires and enchances mordern design.</p>
                </div>
                <div className='row'>
                    <div className=' col-12 col-md-6 about-border p-0'>
                        <div className='position-relative'>
                            <span className='about-circle'></span>
                            <img src={carpenter} className=' w-100 object-fit-cover about-img' />
                        </div>
                    </div>
                    <div className=' col-12 col-md-6 my-auto px-5'>
                    <div className=' contact-icon bg-warning-subtle border-warning border border-2 mb-4'>
                            <i className="bi bi-globe text-warning"></i>
                        </div>
                        <h2 className=' fw-bold mb-3'>From Humble Beginnings</h2>
                        <p className=' font-poppins'>FurniFlex started as a small, passionate venture driven by a love for creating spaces that feel like home. In the early days, FurniFlex was nothing more than a humble workshop where a few skilled craftsmen designed and built custom furniture pieces by hand. These pieces were crafted with care, using sustainable materials and traditional techniques that have been passed down through generations.</p>
                    </div>
                
                    <div className=' col-12 col-md-6 p-0 displayOnlySM'>
                        <div className='position-relative'>
                            {/* <span className='about-circle1'></span> */}
                            <img src={award} className=' w-100 object-fit-cover about-img1' />
                        </div>
                    </div>
                    <div className=' col-12 col-md-6 my-auto px-5'>
                        <div className=' contact-icon bg-warning-subtle border-warning border border-2 mb-4'>
                            <i className="bi bi-award-fill text-warning"></i>
                        </div>
                        <h2 className=' fw-bold mb-3'>Innovation and Growth</h2>
                        <p className=' font-poppins'>FurniFlex started as a small, passionate venture driven by a love for creating spaces that feel like home. In the early days, FurniFlex was nothing more than a humble workshop where a few skilled craftsmen designed and built custom furniture pieces by hand. These pieces were crafted with care, using sustainable materials and traditional techniques that have been passed down through generations.</p>
                    </div>
                    <div className=' col-12 col-md-6 about-border1 p-0' style={{marginTop:'-14.5px'}}>
                        <div className='position-relative'>
                            {/* <span className='about-circle1'></span> */}
                            <img src={award} className=' w-100 object-fit-cover about-img1' />
                        </div>
                    </div>
                    <div className=' col-12 col-md-6 about-border p-0' style={{marginTop:'-14.5px'}}>
                        <div className='position-relative'>
                            {/* <span className='about-circle'></span> */}
                            <img src={chair} className=' w-100 object-fit-cover about-img' />
                        </div>
                    </div>
                    <div className=' col-12 col-md-6 my-auto px-5'>
                        <div className=' contact-icon bg-warning-subtle border-warning border border-2 mb-4'>
                            <i className="bi bi-bar-chart-fill text-warning"></i>
                        </div>
                        <h2 className=' fw-bold mb-3'>Our Global Reach</h2>
                        <p className=' font-poppins'>FurniFlex started as a small, passionate venture driven by a love for creating spaces that feel like home. In the early days, FurniFlex was nothing more than a humble workshop where a few skilled craftsmen designed and built custom furniture pieces by hand. These pieces were crafted with care, using sustainable materials and traditional techniques that have been passed down through generations.</p>
                    </div>
                
                    <div className=' col-12 col-md-6 p-0 displayOnlySM' >
                        <div className='position-relative'>
                            <span className='about-circle1'></span>
                            <img src={globe} className=' w-100 object-fit-cover about-img1' />
                        </div>
                    </div>
                    <div className=' col-12 col-md-6 my-auto px-5'>
                    <div className=' contact-icon bg-warning-subtle border-warning border border-2 mb-4'>
                            <i className="bi bi-hand-index-fill text-warning"></i>
                        </div>
                        <h2 className=' fw-bold mb-3'>Achievements</h2>
                        <p className=' font-poppins'>FurniFlex started as a small, passionate venture driven by a love for creating spaces that feel like home. In the early days, FurniFlex was nothing more than a humble workshop where a few skilled craftsmen designed and built custom furniture pieces by hand. These pieces were crafted with care, using sustainable materials and traditional techniques that have been passed down through generations.</p>
                    </div>
                    <div className=' col-12 col-md-6 about-border1 p-0' style={{marginTop:'-14.5px'}}>
                        <div className='position-relative'>
                            <span className='about-circle1'></span>
                            <img src={globe} className=' w-100 object-fit-cover about-img1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=' container py-5'>
            <h1 className=' fw-semibold text-center mb-3'>Our Awesome Team</h1>
            <div className=' row'>
                <div className=' col-10 col-md-4 m-auto my-2 MainCard'>
                    <div className=' aboutCard p-2 bg-dark-subtle rounded-4'>
                        <img src={person1} className=' w-100  rounded-4' />
                        <div className=' d-flex align-items-center justify-content-between bg-white rounded-4 px-3 pt-2 mt-2 Details'>
                            <div>
                                <h4>Raviraj</h4>
                                <p>CEO & Owner</p>
                            </div>
                            <div className=' d-flex align-items-center'>
                            <span className=' icon-circle ms-2 mx-1'><i className=" bi bi-instagram"></i></span>
                            <span className=' icon-circle mx-1'><i className=" bi bi-twitter-x"></i></span>
                            <span className=' icon-circle mx-1'><i className=" bi bi-facebook"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-10 col-md-4 m-auto my-2 MainCard '>
                    <div className=' aboutCard p-2 bg-dark-subtle rounded-4'>
                        <img src={person2} className=' w-100  rounded-4' />
                        <div className=' d-flex align-items-center justify-content-between bg-white rounded-4 px-3 pt-2 mt-2 Details'>
                            <div>
                                <h4>Nancy</h4>
                                <p>Lead Interior Design</p>
                            </div>
                            <div className=' d-flex align-items-center'>
                            <span className=' icon-circle ms-2 mx-1'><i className=" bi bi-instagram"></i></span>
                            <span className=' icon-circle mx-1'><i className=" bi bi-twitter-x"></i></span>
                            <span className=' icon-circle mx-1'><i className=" bi bi-facebook"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-10 col-md-4 m-auto my-2 MainCard '>
                    <div className=' aboutCard p-2 bg-dark-subtle rounded-4'>
                        <img src={person3} className=' w-100  rounded-4' />
                        <div className=' d-flex align-items-center justify-content-between bg-white rounded-4 px-3 pt-2 mt-2 Details'>
                            <div>
                                <h4>Pradeep</h4>
                                <p>DIY Expert</p>
                            </div>
                            <div className=' d-flex align-items-center'>
                            <span className=' icon-circle ms-2 mx-1'><i className=" bi bi-instagram"></i></span>
                            <span className=' icon-circle mx-1'><i className=" bi bi-twitter-x"></i></span>
                            <span className=' icon-circle mx-1'><i className=" bi bi-facebook"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Section_8/>
        <Section_2/>
    </div>
  )
}

export default AboutUs