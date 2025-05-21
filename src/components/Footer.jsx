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

const Mydiv = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  margin: 20px 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  color: #ffffff;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: 1.5em;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  img {
    vertical-align: middle;
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.2) rotate(10deg);
  }

  a {
    color: #ffffff;
    text-decoration: none;
    position: relative;
    padding: 0 5px;
    transition: all 0.3s ease;
  }

  a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #ffffff;
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin: 10px 5px;
    font-size: 0.9em;

    h2 {
      font-size: 1.2em;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export default Footer