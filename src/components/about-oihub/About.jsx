import React from 'react'
import {motion} from 'framer-motion'
import obour from '../../images/Obour.webp'
import atec from '../../images/ATEC.webp'
import oihub from '../../images/oi-logo.webp'
import './style/about.css'

function About() {
  return (
    <motion.section 
    className='about' 
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
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
            <span data-aos="fade-down" data-aos-delay="1500">O</span>
            <span data-aos="fade-down" data-aos-delay="1700">I</span>
            <span data-aos="fade-down" data-aos-delay="1900">H</span>
            <span data-aos="fade-down" data-aos-delay="2100">U</span>
            <span data-aos="fade-down" data-aos-delay="2300">B</span>
            <span data-aos="fade-down" data-aos-delay="2500">?</span>
            &nbsp;
            <span data-aos="fade-down" data-aos-delay="2700">&#x1F914;</span>
          </h1>
          <div className="content">
            <div className="left-part">
              <div className="upper">
                <p>
                  <span><strong>OI HUB</strong> is a student activity.<br/> Helps to discover the potentials buried inside students, support and improve them,<br/> in order to develop projects that help them get connected to the job market.</span>
                </p>
              </div>
              <div className="footer">
                <h1>
                  <span data-aos="fade-down" data-aos-delay="300">S</span>
                  <span data-aos="fade-down" data-aos-delay="500">P</span>
                  <span data-aos="fade-down" data-aos-delay="700">O</span>
                  <span data-aos="fade-down" data-aos-delay="900">N</span>
                  <span data-aos="fade-down" data-aos-delay="1100">S</span>
                  <span data-aos="fade-down" data-aos-delay="1300">E</span>
                  <span data-aos="fade-down" data-aos-delay="1500">R</span>
                  <span data-aos="fade-down" data-aos-delay="1700">E</span>
                  <span data-aos="fade-down" data-aos-delay="1900">D</span>
                  &nbsp;
                  <span data-aos="fade-down" data-aos-delay="2100">B</span>
                  <span data-aos="fade-down" data-aos-delay="2300">Y</span>
                </h1>
                <div className="logos">
                  <img src={obour} alt="obour" />
                  <img src={atec} alt="atec" />
                </div>
              </div>
            </div>
            <div className="right-part">
              <motion.img src={oihub} alt="oihub"
              drag
              dragConstraints={{ top: -200,right: 100,left: -100, bottom: 300}} />
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default About