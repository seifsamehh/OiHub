import React from 'react'
import About from '../about-oihub/About'
import Coming from '../coming/Coming'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import MainCpc from '../main-cpc/MainCpc'
import MainHr from '../main-hr/MainHr'
import MainMedia from '../main-media/MainMedia'
import MainPr from '../main-pr/MainPr'
import MainRobotics from '../main-robotics/MainRobotics'
import MainWeb from '../main-web/MainWeb'
import News from '../news/News'
import Structure from '../oihub-structure/Structure'
import Teams from '../teams/Teams'
import Tech from '../tech-team/Tech'

function Landing() {
  return (
    <section className='home'>
      <News/>
      <About/>
      <Teams/>
      <MainPr/>
      <MainHr/>
      <MainMedia/>
      <Tech/>
      <MainCpc/>
      <MainWeb/>
      <MainRobotics/>
      <Coming/>
      <Structure/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default Landing