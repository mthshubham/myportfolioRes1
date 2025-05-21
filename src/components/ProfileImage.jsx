import React from 'react';
import styled from 'styled-components';
import skprofie from "../assets/myim.png";

const ProfileImage = () => {
  return (
    <ImageContainer>
      <Image src={skprofie} alt="Profile Front" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
 display:inline-block; 
border-radius:50%;
 border:3px solid rgb(10, 188, 248);
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 5px;
  clip-path: circle(50%);
  backface-visibility: hidden;
  transition: transform 0.6s;
  overflow: hidden;
  animation: growShrink 2s infinite;

  @keyframes growShrink {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  /* Media query for small screens */
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;





export default ProfileImage;
