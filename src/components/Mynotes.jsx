import React from 'react';
import styled from 'styled-components';

const Mynotes = ({data}) => {
  return (
    <StyledWrapper>
      <div className="container">{data}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      0deg,
      black,
      1px,
      white 1px,
      white
    );
    background-size: 100% 30px;
    background-color: white;
  }`;

export default Mynotes;
