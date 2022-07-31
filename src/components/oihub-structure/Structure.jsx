import React from 'react'
import {motion} from 'framer-motion'
import Tilt from 'react-vanilla-tilt'
import './style/structure.css'

function Structure() {
  return (
    <motion.section 
    className='oihub-structure' 
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1 , type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
      <div className="container-fluid">
        <h1>
          <span data-aos="fade-down" data-aos-delay="300">O</span>
          <span data-aos="fade-down" data-aos-delay="500">I</span>
          &nbsp;
          <span data-aos="fade-down" data-aos-delay="700">H</span>
          <span data-aos="fade-down" data-aos-delay="900">U</span>
          <span data-aos="fade-down" data-aos-delay="1100">B</span>
          &nbsp;
          <span data-aos="fade-down" data-aos-delay="1300">S</span>
          <span data-aos="fade-down" data-aos-delay="1500">T</span>
          <span data-aos="fade-down" data-aos-delay="1700">R</span>
          <span data-aos="fade-down" data-aos-delay="1900">U</span>
          <span data-aos="fade-down" data-aos-delay="2100">C</span>
          <span data-aos="fade-down" data-aos-delay="2100">T</span>
          <span data-aos="fade-down" data-aos-delay="2100">U</span>
          <span data-aos="fade-down" data-aos-delay="2100">R</span>
          <span data-aos="fade-down" data-aos-delay="2100">E</span>
          &nbsp;
          <span data-aos="fade-down" data-aos-delay="2300">&#x270A;</span>
        </h1>
      </div>
      <div className="cards">
        <Tilt className="test">
          <div className="card-1">
            <h1>Demo</h1>
          </div>
        </Tilt>
        <Tilt className="test">
          <div className="card-2">
            <h1>Demo</h1>
          </div>
        </Tilt>
        <Tilt className="test">
          <div className="card-3">
            <h1>Demo</h1>
          </div>
        </Tilt>
        <Tilt className="test">
          <div className="card-4">
            <h1>Demo</h1>
          </div>
        </Tilt>
        <Tilt className="test">
          <div className="card-5">
            <h1>Demo</h1>
          </div>
        </Tilt>
      </div>
    </motion.section>
  )
}

export default Structure