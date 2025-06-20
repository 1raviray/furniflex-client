import React, { useContext,useEffect } from 'react'
import Hero from './Hero'
import Section_2 from './Section_2'
import Section_3 from './Section_3'
import Section_4 from './Section_4'
import Section_5 from './Section_5'
import Section_6 from './Section_6'
import Section_7 from './Section_7'
import Section_8 from './Section_8'
import Section_10 from './Section_10'
import Section_11 from './Section_11'
import { checkLogin } from '../../../App'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // const [Token,setToken]=useContext(checkLogin)
  // const navigate=useNavigate()
  // console.log(Token.length);
  // useEffect(() => {
  //   if (Token.length === 0) {
  //     navigate("/login");
  //   }
  // }, [Token]);
  return (
    <div>
        <Hero/>
        <Section_2/>
        <Section_3/>
        <Section_4/>
        <Section_5/>
        <Section_6/>
        <Section_7/>
        <Section_8/>
        <Section_10/>
        <Section_11/>
    </div>
  )
}

export default Home