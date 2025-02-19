import React from 'react';
import styled from 'styled-components';

const Formcontact = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <div className="title">Contact us</div>
        <input type="text" placeholder="Your email" className="input" />
        <input type="phone" placeholder="Your phone" className="input" />
        <textarea placeholder="Your message" defaultValue={""} />
        <button>Submit</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 30px 30px -30px rgba(27, 26, 26, 0.315);
  }

  .form .title {
    color: royalblue;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form input {
    outline: 0;
    border: 1px solid rgb(219, 213, 213);
    padding: 8px 1px;
    color:black;
    background-color:white;
    border-radius: 8px;
    width: 100%;
    height: 50px;
  }

  .form textarea {
    border-radius: 8px;
    height: 100px;
    width: 100%;
    color:black;
    resize: none;
    background-color:white;
    outline: 0;
    padding: 8px 1px;
    border: 1px solid rgb(219, 213, 213);
  }

  .form button {
    align-self: flex-end;
    padding: 8px;
    outline: 0;
    border: 0;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    background-color: royalblue;
    color: #fff;
    cursor: pointer;
  }`;

export default Formcontact;
