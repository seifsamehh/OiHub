import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay , EffectCreative } from "swiper";
import './style/news.css'

function News() {
  return (
    <motion.section 
    className='news'    
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1 , type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
      <div className="container-fluid">
        <h1>
          <span data-aos="fade-down" data-aos-delay="300">L</span>
          <span data-aos="fade-down" data-aos-delay="500">A</span>
          <span data-aos="fade-down" data-aos-delay="700">T</span>
          <span data-aos="fade-down" data-aos-delay="900">E</span>
          <span data-aos="fade-down" data-aos-delay="1100">S</span>
          <span data-aos="fade-down" data-aos-delay="1300">T</span>
          &nbsp;
          <span data-aos="fade-down" data-aos-delay="1500">N</span>
          <span data-aos="fade-down" data-aos-delay="1700">E</span>
          <span data-aos="fade-down" data-aos-delay="1900">W</span>
          <span data-aos="fade-down" data-aos-delay="2100">S</span>
          &nbsp;
          <span data-aos="fade-down" data-aos-delay="2300">&#x1F4F0;</span>
        </h1>
      </div>
      <div className="news-box">
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

export default News