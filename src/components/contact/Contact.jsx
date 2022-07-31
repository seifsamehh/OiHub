import React from 'react'
import {motion} from 'framer-motion'
import { MdLocationPin } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import './style/contact.css'


function Contact() {
  return (
    <motion.section 
    className='contact'
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1 , type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
        <div className="container-fluid">
            <h1>
            <span data-aos="fade-down" data-aos-delay="300">C</span>
            <span data-aos="fade-down" data-aos-delay="500">O</span>
            <span data-aos="fade-down" data-aos-delay="700">N</span>
            <span data-aos="fade-down" data-aos-delay="900">T</span>
            <span data-aos="fade-down" data-aos-delay="1100">A</span>
            <span data-aos="fade-down" data-aos-delay="1300">C</span>
            <span data-aos="fade-down" data-aos-delay="1500">T</span>
            &nbsp;
            <span data-aos="fade-down" data-aos-delay="2300">&#x2709;</span>
            </h1>
        </div>
        <div id='contact-info'>
            <div className='links'>
                <a href='https://goo.gl/maps/XFu7fE4VqHXQEgju9' title='location' className='location-background' target='_blank' rel='noreferrer'>
                    <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                        <MdLocationPin/>
                    </span>
                    </div>
                </a>
                <a href='mailto:OIHUB@outlook.com' title='gmail' className='gmail-background' target='_blank' rel='noreferrer'>
                    <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                        <TbBrandGmail/>
                    </span>
                    </div>
                </a>
                <a href='tel:+0201144720017' title='call' className='phone-background' target='_blank' rel='noreferrer'>
                    <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                        <BsFillTelephoneFill/>
                    </span>
                    </div>
                </a>
            </div>
        </div>
    </motion.section>
  )
}

export default Contact