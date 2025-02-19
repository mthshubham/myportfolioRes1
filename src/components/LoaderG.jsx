import React from 'react';
import styled from 'styled-components';

const LoaderG = () => {
  return (
    <StyledWrapper>
      <div className="spinner">
        <div className="outer">
          <div className="inner tl" />
          <div className="inner tr" />
          <div className="inner br" />
          <div className="inner bl" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .spinner {
    position: relative;
    width: 128px;
    height: 128px;
    
    transform: perspective(206px) rotateX(45deg);
  }

  .outer {
    box-sizing: border-box;
    animation: spin 3s linear infinite;
    height: 100%;
  }

  .inner {
    position: absolute;
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }

  .tl {
    top: 0;
    left: 0;
    border-top: 8px solid red;
    border-left: 10px solid red;
    animation: spin 1s ease-in-out infinite;
  }

  .tr {
    top: 0;
    right: 0;
    border-top: 8px solid #0575E6;
    border-right: 10px solid #0575E6;
    animation: spin 1s ease-in-out infinite;
  }

  .br {
    bottom: 0;
    right: 0;
    border-bottom: 8px solid  #00F260;
    border-right: 10px solid  #00F260;
    animation: spin 1s ease-in-out infinite;
  }

  .bl {
    bottom: 0;
    left: 0;
    border-bottom: 8px solid  #e9e93e;
    border-left: 10x solid #e9e93e;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default LoaderG;
