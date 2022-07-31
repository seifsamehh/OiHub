import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// import required modules
import { Autoplay , EffectCreative } from "swiper";
import './style/coming.css'

function Coming() {
  return (
    <motion.section 
    className='coming'    
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1 , type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
      <div className="container-fluid">
        <h1>
          <span data-aos="fade-down" data-aos-delay="300">W</span>
          <span data-aos="fade-down" data-aos-delay="500">H</span>
          <span data-aos="fade-down" data-aos-delay="700">A</span>
          <span data-aos="fade-down" data-aos-delay="900">T</span>
          &nbsp;
          <span data-aos="fade-down" data-aos-delay="1100">I</span>
          <span data-aos="fade-down" data-aos-delay="1300">S</span>
          &nbsp;
          <span data-aos="fade-down" data-aos-delay="1500">C</span>
          <span data-aos="fade-down" data-aos-delay="1700">O</span>
          <span data-aos="fade-down" data-aos-delay="1900">M</span>
          <span data-aos="fade-down" data-aos-delay="2100">I</span>
          <span data-aos="fade-down" data-aos-delay="2300">N</span>
          <span data-aos="fade-down" data-aos-delay="2500">G</span>
          &nbsp;
          <span data-aos="fade-down" data-aos-delay="2700">&#x1F60E;</span>
        </h1>
      </div>
      <div className="coming-box">
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-125%", 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: true,
              translate: ["125%", 0, -800],
              rotate: [0, 0, 90],
            },
          }}
          modules={[EffectCreative , Autoplay]}
          className="mySwiper5"
        >
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/hakathon" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/news" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/news" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/news" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/news" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/news" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/news" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/news" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid doloremque voluptatem ratione nesciunt excepturi vel tenetur obcaecati, dignissimos illo, ipsam possimus accusantium sed, odio dolore dolorem asperiores eos ut.</p>
              <Link to="/news" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  )
}

export default Coming