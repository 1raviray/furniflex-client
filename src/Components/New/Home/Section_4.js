import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import side_table from '../../Assets/65901-14618985-removebg-preview.png'
import arm_chair from '../../Assets/wooden-relax-chair-1000x1000-removebg-preview.png'
import dining_table from '../../Assets/Enquire_for_Antique_round_centre_table-removebg-preview.png'
import pillow from '../../Assets/—Pngtree—pillow_5639014.png'
import clock from '../../Assets/—Pngtree—clock_616758.png'
import bed from '../../Assets/pngwing.com.png';

const Section_4 = () => {
    const options={
        autoplay:true,
        loop:true, 
        autoplayTimeout:2500,
        responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            // nav:true,
        }
    }
    }
  return (
    <div className=' container py-4'>
        <h2>Featured Categories</h2>
        <div className=' my-4'>
        <OwlCarousel className='owl-theme' margin={10} {...options}>
            <div className='item d-flex flex-column justify-content-center align-items-center'>
                <div className=' sectio4_card'>
                    <img src={side_table} className=''  />
                </div>
                <h5 className='text-center mt-2 section4-font'>Side Table</h5>
            </div>
            <div className='item d-flex flex-column justify-content-center align-items-center'>
                <div className=' sectio4_card'>
                    <img src={arm_chair} className=''  />
                </div>
                <h5 className='text-center mt-2 section4-font'>Arm Chair</h5>
            </div>
            <div className='item d-flex flex-column justify-content-center align-items-center'>
                <div className=' sectio4_card'>
                    <img src={dining_table} className=''  />
                </div>
                <h5 className='text-center mt-2 section4-font'>Dinner Table</h5>
            </div>
            <div className='item d-flex flex-column justify-content-center align-items-center'>
                <div className=' sectio4_card'>
                    <img src={pillow} className=''  />
                </div>
                <h5 className='text-center mt-2 section4-font'>pillow</h5>
            </div>
            <div className='item d-flex flex-column justify-content-center align-items-center'>
                <div className=' sectio4_card'>
                    <img src={clock} className=''  />
                </div>
                <h5 className='text-center mt-2 section4-font'>Clock</h5>
            </div>
            <div className='item d-flex flex-column justify-content-center align-items-center'>
                <div className=' sectio4_card'>
                    <img src={bed} className=''  />
                </div>
                <h5 className='text-center mt-2 section4-font'>Bed</h5>
            </div>
        </OwlCarousel>
        </div>
    </div>
  )
}

export default Section_4