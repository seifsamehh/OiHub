import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import './style/mainrobotics.css'

function MainRobotics() {
  return (
    <motion.section 
    className='main-robotics'
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
        <div className="left">
            <div className="robotics-box" data-aos="fade-down-right" data-aos-duration="1000">
                <motion.h1 
                drag
                dragConstraints={{ left: 0, right: 300 , top: -300, bottom: 300 }}>
                    ROBOTICS
                </motion.h1>
            </div>
        </div>
        <div className="right">
            <div className="information" data-aos="fade-down-left" data-aos-duration="1000">
                <p>We provide trainning in Iot, arduino and Ai around all season.</p>
                <Link to="/RoboticsTeam" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
        </div>
    </motion.section>
  )
}

export default MainRobotics