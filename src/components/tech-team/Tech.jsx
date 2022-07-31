import React from 'react'
import {motion} from 'framer-motion'
import './style/tech.css'

function Tech() {
  return (
    <motion.section 
    className='tech-team'
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
        <div className="tech">
            <div className="heading">
                <h1>TECHNICAL &#x1F9D1; &#x200D; &#x1F4BB;</h1>
            </div>
        </div>
    </motion.section>
  )
}

export default Tech