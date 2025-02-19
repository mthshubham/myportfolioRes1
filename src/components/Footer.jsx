import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <Mydiv>
        <h2> <span><img src="https://img.icons8.com/fluency/48/filled-like--v1.png" alt="icons" />Devloped with love by </span> <NavLink to='/about'>Shubham Kumar Sharma</NavLink> </h2>
    </Mydiv>
  )
}

const Mydiv=styled.div`
    position: relative;
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent black */
    border-radius: 15px;
    padding: 20px;
    margin: 20px 5px;
    backdrop-filter: blur(10px); /* Adjust blur level */
    -webkit-backdrop-filter: blur(10px); /* Safari support */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); /* Soft shadow */
    border: 1px solid rgba(255, 255, 255, 0.1); /* Light border */
    color: #ffffff; /* Text color for better readability */
text-align:center;

 img {
  vertical-align:middle;
  line-height:-50px;
}
`;

export default Footer