import React from 'react'
import {motion} from 'framer-motion'
import { ImCross } from "react-icons/im";
import './style/teams.css'

function Teams() {
  return (
    <motion.section 
    className='teams' 
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
      <div className="container-fluid">
        <h1>
            <span data-aos="fade-down" data-aos-delay="300">T</span>
            <span data-aos="fade-down" data-aos-delay="500">E</span>
            <span data-aos="fade-down" data-aos-delay="700">A</span>
            <span data-aos="fade-down" data-aos-delay="900">M</span>
            <span data-aos="fade-down" data-aos-delay="1100">S</span>
            &nbsp;
            <span data-aos="fade-down" data-aos-delay="1300">&#x1F4AA;</span>
        </h1>
      </div>
      <div className="non-tech">
        <div className="heading">
          <h1>NON TECHNICAL <ImCross/> &#x1F9D1; &#x200D; &#x1F4BB;</h1>
        </div>
      </div>
    </motion.section>
  )
}

export default Teams