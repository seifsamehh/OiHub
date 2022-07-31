import React from 'react'
import {Routes,Route,useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
import Home from '../landing/Landing'
import News from '../news/News'
import About from '../about-oihub/About'
import Hakathon from '../hakathon-news/Hakathon';
import Teams from '../teams/Teams';
import Pr from '../pr-team/Pr';
import Hr from '../hr-team/Hr';
import Cpc from '../cpc-team/Cpc'
import Web from '../web-team/Web'
import Robotics from '../robotics-team/Robotics'
import MainPr from '../main-pr/MainPr';
import MainHr from '../main-hr/MainHr';
import MainMedia from '../main-media/MainMedia';
import Tech from '../tech-team/Tech';
import MainCpc from '../main-cpc/MainCpc';
import MainWeb from '../main-web/MainWeb';
import MainRobotics from '../main-robotics/MainRobotics';
import Coming from '../coming/Coming';
import Structure from '../oihub-structure/Structure';
import Contact from '../contact/Contact';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='news' element={<News/>}/>
            <Route path='hakathon' element={<Hakathon/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='teams' element={
              <>
              <Teams/>
              <MainPr/>
              <MainHr/>
              <MainMedia/>
              <Tech/>
              <MainCpc/>
              <MainWeb/>
              <MainRobotics/>
              </>
            }/>
            <Route path='PrTeam' element={<Pr/>}/>
            <Route path='HrTeam' element={<Hr/>}/>
            <Route path='CpcTeam' element={<Cpc/>}/>
            <Route path='WebTeam' element={<Web/>}/>
            <Route path='RoboticsTeam' element={<Robotics/>}/>
            <Route path='coming' element={<Coming/>}/>
            <Route path='structure' element={<Structure/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes