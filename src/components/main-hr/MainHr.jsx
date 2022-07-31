import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import './style/mainhr.css'

function MainHr() {
  return (
    <motion.section 
    className='main-hr'
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
        <div className="left">
            <div className="hr-box" data-aos="fade-down-right" data-aos-duration="1000">
                <motion.h1 
                drag
                dragConstraints={{ left: 0, right: 300 , top: -300, bottom: 300 }}>
                    HR
                </motion.h1>
            </div>
        </div>
        <div className="right">
            <div className="information" data-aos="fade-down-left" data-aos-duration="1000">
                <p>We provide trainning in Hiring,firing & and how to make interview around all season.</p>
                <Link to="/HrTeam" className="button button--greip"><span><span>MORE</span></span></Link>
            </div>
        </div>
    </motion.section>
  )
}

export default MainHr