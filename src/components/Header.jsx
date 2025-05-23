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
              <span className="highlight">S</span>hubham
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
    ? 'rgba(13, 17, 23, 0.95)' 
    : 'rgba(13, 17, 23, 0.85)'};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.isScrolled 
    ? '0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)' 
    : 'none'};
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.2s ease;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

    .highlight {
      color: #58a6ff;
      font-weight: 700;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 1.3em;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(13, 17, 23, 0.98);
    backdrop-filter: blur(10px);
    padding: 16px;
    gap: 8px;
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95em;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  padding: 4px 0;
  opacity: 0.8;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

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
    height: 1px;
    background: #58a6ff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease;
  }

  &:hover, &.active {
    opacity: 1;
    color: #ffffff;

    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 12px 16px;
    text-align: left;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 6px;
    transition: all 0.2s ease;
    opacity: 0.9;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      opacity: 1;
    }

    &::before {
      display: none;
    }
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 0 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    border-right: none;
    padding: 0;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 100%;
    height: 1.5px;
    background: #ffffff;
    border-radius: 2px;
    transition: all 0.2s ease;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  ${props => props.isOpen && `
    span:first-child {
      transform: translateY(8px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  `}
`;

export default Header;