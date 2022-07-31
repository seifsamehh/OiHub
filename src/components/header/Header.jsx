import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/oi-logo.webp'
import './style/header.css'

function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="row">
                <div className="col-1 column-one">
                    <img src={logo} alt="OIHUB LOGO" />
                </div>
                <div className="col-11 column-two">
                    <nav>
                        <Link to="/">HOME</Link>
                        <Link to="/news">LATEST NEWS</Link>
                        <Link to="/about">WHAT IS OIHUB?</Link>
                        <Link to="/teams">TEAMS</Link>
                        <Link to="/coming">WHAT IS COMING?</Link>
                        <Link to="/structure">STRUCTURE</Link>
                        <Link to="/contact">CONTACT</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header