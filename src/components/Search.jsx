import React from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <StyledWrapper>
      <StyledInput placeholder="Search" name="text" type="text" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: inline-block;
  float:right;
  margin-top:10px;
  margin-right:20px;
`;

const StyledInput = styled.input`
  color: white;
  border: 2px solid rgb(10, 188, 248);
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  max-width: 190px;

  &:focus {
    box-shadow: 0 0 15px rgb(10, 188, 248);
    outline: none;
  }
`;

export default Search;
