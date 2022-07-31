import React from 'react'
import {motion} from 'framer-motion'
import './style/pr.css'

function Pr() {
  return (
    <motion.section 
    className='pr-team'
    initial={{opacity: 0, x: "-100vw", scale: 0.8, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    animate={{opacity: 1, x: 0, scale: 1, transition: {duration : 1, type: "tween", ease: "anticipate"}}}
    exit={{opacity: 0, x: "100vw", scale: 1.2, transition: {duration : 1, type: "tween", ease: "anticipate"}}}>
        <h1>Pr team</h1>
    </motion.section>
  )
}

export default Pr