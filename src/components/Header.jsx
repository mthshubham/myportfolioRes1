import "./header.css";
import React from 'react'
import { useEffect } from "react";
import Socialicons from './Socialicons';
import Search from "./Search";
import { NavLink } from 'react-router-dom';
import facebook from '../assets/socialicons/facebook.png';
import whatsapp from '../assets/socialicons/whatsapp.png';
import linkedin from '../assets/socialicons/linkedin.png';
import twitter from '../assets/socialicons/twitter.png';
import instagram from '../assets/socialicons/insta.png';

const Header = () => {
  
  return (
    <>
    <div className="header">
    <div className='socialIcons'>
        <Socialicons socialpath={whatsapp} sociallink="https://wa.me/7260882890"/>
        <Socialicons socialpath={facebook} sociallink="https://m.facebook.com/SHUBHAM0SHARMA/"/>
        <Socialicons socialpath={instagram} sociallink="https://www.instagram.com/sharma_shubham_mth"/>
        <Socialicons socialpath={linkedin} sociallink="https://www.linkedin.com/in/imshubhamthakur"/>
        </div>
        <div className="circle">
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/work" >Works</NavLink></li>
                <li><NavLink to="/about" >About me</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
            </ul>
        </div>
        
        <Search />
    </div>
    </>
  )
}

export default Header