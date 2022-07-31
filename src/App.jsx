import React, { useState , useEffect, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import Spline from '@splinetool/react-spline';
import {Animated, Header} from './components';

// loader
const override = css`
  display: block;
  margin: 90% auto;
  @media (min-width: 1025px) {
    display: none;
  }
`;
// theme
export const ThemeContext = createContext(null);
function App() {
  const [theme , setTheme] = useState("dark")

  const toogleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }
  // loading
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    <>
      {
      loading?
      <>
        <Spline scene="https://prod.spline.design/slbFpzwJSK4WesLr/scene.splinecode" />
        <BarLoader color={"#ffb101"} loading={loading} css={override} size={150} />
      </>
      :
      <>
      <Header/>
      <ThemeContext.Provider value={{theme,toogleTheme}}>
          <main id={theme}>
            <input type="checkbox" id="toggle_checkbox" onChange={toogleTheme}/>
            <label htmlFor="toggle_checkbox">
            <div id="star">
                <div className="star" id="star-1">★</div>
                <div className="star" id="star-2">★</div>
            </div>
            <div id="moon"></div>
            </label>
            <Animated/>
          </main>
        </ThemeContext.Provider>
      </>
    }
    </>
  )
}

export default App
