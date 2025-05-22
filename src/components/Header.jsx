import "./header.css";
import React, { useState, useEffect } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import Socialicons from './Socialicons';
import Search from "./Search";
import facebook from '../assets/socialicons/facebook.png';
import whatsapp from '../assets/socialicons/whatsapp.png';
import linkedin from '../assets/socialicons/linkedin.png';
import twitter from '../assets/socialicons/twitter.png';
import instagram from '../assets/socialicons/insta.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <LeftSection>
          <Logo>
            <Link to="/">
              <span className="highlight">Port</span>folio
            </Link>
          </Logo>

          <Nav isOpen={isMenuOpen}>
            <StyledNavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <span>Home</span>
            </StyledNavLink>
            <StyledNavLink to="/work" onClick={() => setIsMenuOpen(false)}>
              <span>Work</span>
            </StyledNavLink>
            <StyledNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              <span>About</span>
            </StyledNavLink>
            <StyledNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <span>Contact</span>
            </StyledNavLink>
          </Nav>
        </LeftSection>

        <RightSection>
          <SocialIconsContainer>
            <Socialicons socialpath={whatsapp} sociallink="https://wa.me/7260882890"/>
            <Socialicons socialpath={facebook} sociallink="https://m.facebook.com/SHUBHAM0SHARMA/"/>
            <Socialicons socialpath={instagram} sociallink="https://www.instagram.com/sharma_shubham_mth"/>
            <Socialicons socialpath={linkedin} sociallink="https://www.linkedin.com/in/imshubhamthakur"/>
          </SocialIconsContainer>

          <Search />
        </RightSection>

        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.isScrolled 
    ? 'rgba(17, 17, 17, 0.95)' 
    : 'rgba(17, 17, 17, 0.8)'};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.isScrolled 
    ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
    : 'none'};
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.8em;
    font-weight: 700;
    letter-spacing: 1px;
    transition: all 0.3s ease;

    .highlight {
      color: #23a6d5;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 1.5em;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 35px;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(17, 17, 17, 0.95);
    backdrop-filter: blur(10px);
    padding: 20px;
    gap: 15px;
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #23a6d5;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover, &.active {
    color: #23a6d5;

    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 12px 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &::before {
      display: none;
    }
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    border-right: none;
    padding: 0;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 100%;
    height: 2px;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  ${props => props.isOpen && `
    span:first-child {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:last-child {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}
`;

export default Header;