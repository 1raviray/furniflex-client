import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pic1 from "../../Assets/7770.jpg";
import pic2 from "../../Assets/16306.jpg";
import pic3 from "../../Assets/2148227939.jpg";
import pic4 from "../../Assets/2149069174.jpg";
import pic5 from "../../Assets/2151237437.jpg";

const Section_8 = () => {
    
    const options={
      responsiveClass:true,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2500,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1.32,
            nav:false
        },
        1000:{
            items:1.32,
        }
    }
    }    
    
  return (
    <div className=" container py-5">
      <div className=" mb-4">
        <h1>
          Don't take our word,
          <br />
          see what our clients say
        </h1>
      </div>
      <OwlCarousel
        className="owl-theme"
        {...options}
      >
        <div className="item">
          <div className=" primary-bgcolor rounded-4 me-3 ">
            <div className=" row">
              <div className=" col-12 col-md-4">
                <div className=" p-4">
                  <img src={pic1} className=" w-100 rounded-4" />
                </div>
              </div>
              <div className=" col-12 col-md-8 text-white m-auto">
                <div className=" section8-border pb-3">
                  <p className=" m-0">
                    This was my first time buying furniture online in FurniFlex,
                    and it was a seamless experience. The website was easy to
                    navigate, and the product descriptions were spot on. My new
                    dining set looks fantastic in my home!
                  </p>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                </div>
                <div className=" p-3">
                  <h3 className=" m-0">Danny</h3>
                  <p className=" m-0">-Kakinada,AP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className=" primary-bgcolor rounded-4 me-3 ">
            <div className=" row">
              <div className=" col-12 col-md-4">
                <div className=" p-4">
                  <img src={pic2} className=" w-100 rounded-4" />
                </div>
              </div>
              <div className=" col-12 col-md-8 text-white m-auto">
                <div className=" section8-border pb-3">
                  <p className=" m-0">
                    I couldn't be happier with my purchase! The quality of the
                    furniture exceeded my expectations, and it arrived right on
                    time. The customer service team was incredibly helpful in
                    answering all my questions. I’ll definitely be shopping here
                    again!
                  </p>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                </div>
                <div className=" p-3">
                  <h3 className=" m-0">Sophia</h3>
                  <p className=" m-0">-Kakinada,AP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className=" primary-bgcolor rounded-4 me-3 ">
            <div className=" row">
              <div className=" col-12 col-md-4">
                <div className=" p-4">
                  <img src={pic3} className=" w-100 rounded-4" />
                </div>
              </div>
              <div className=" col-12 col-md-8 text-white m-auto">
                <div className=" section8-border pb-3">
                  <p className=" m-0">
                    Amazing selection and top-notch quality! I’ve furnished my
                    entire living room from this store, and every piece has been
                    perfect. The delivery was fast, and the items were carefully
                    packaged. Highly recommend!
                  </p>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                </div>
                <div className=" p-3">
                  <h3 className=" m-0">Ramesh</h3>
                  <p className=" m-0">-Yanam,AP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className=" primary-bgcolor rounded-4 me-3 ">
            <div className=" row">
              <div className=" col-12 col-md-4">
                <div className=" p-4">
                  <img src={pic4} className=" w-100 rounded-4" />
                </div>
              </div>
              <div className=" col-12 col-md-8 text-white m-auto">
                <div className=" section8-border p-3">
                  <p className=" m-0">
                    Shopping here was a delight. The furniture arrived in
                    perfect condition, and it looks exactly like the photos
                    online. The variety of styles available is impressive, and I
                    found just what I was looking for.
                  </p>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                </div>
                <div className=" p-3">
                  <h3 className=" m-0">Anjali</h3>
                  <p className=" m-0">-Hyderabad,TG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className=" primary-bgcolor rounded-4 me-3 ">
            <div className=" row">
              <div className=" col-12 col-md-4">
                <div className=" p-4">
                  <img src={pic5} className=" w-100 rounded-4" />
                </div>
              </div>
              <div className=" col-12 col-md-8 text-white m-auto ">
                <div className=" section8-border p-3">
                  <p className=" m-0">
                    Recently purchased a dining table set from this store, and I
                    couldn't be happier! The craftsmanship is top-notch, and the
                    delivery was right on time. The customer service team was
                    incredibly helpful in answering all my questions. Highly
                    recommend!
                  </p>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                  <i className=" bi bi-star-fill text-warning fs-5 "></i>
                </div>
                <div className=" p-3">
                  <h3 className=" m-0">Akhila</h3>
                  <p className=" m-0">-Banglore,KA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Section_8;
