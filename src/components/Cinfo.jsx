import React from 'react';
import styled from 'styled-components';

const Cinfo = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="tools">
          <div className="circle">
            <span className="red box" />
            <span><b>&nbsp;&nbsp; Motihari</b></span>
          </div>
          <div className="circle">
            <span className="yellow box" />
            <span><b>&nbsp;&nbsp; Majirwa</b></span>
          </div>
          <div className="circle">
            <span className="green box" />
            <span><b>&nbsp;&nbsp; Uttrakhand</b></span>
          </div>
          <div className="circle">
            <span className="green box" />
            <span><b>&nbsp;&nbsp; Delhi </b></span>
          </div>
        </div>
        <div className="card__content">
            <p>Subhash Nagar 
                <br/>
                Chhatauni ,Motihari Bihar 845401
            </p>
            <a href='#findme'>Find Me on Map</a><br/>
            <a href="tel:7260882890" >Mob: 7260882890</a>
            <br/>
            <a href="mailto:mthshubhamsharma@gmail.com"> Email: mthshubhamsharma@gmail.com</a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

box-sizing:border-box;
display:inline-block;
margin:5px 20px;
color:black;

  .card {
    
   width: 40em;
   height: 28em;
   margin: 0 auto;
   background-color: #F8FBFE;
   border-radius: 8px;
   z-index: 1;
  }

  .tools {
   display: flex;
   align-items: center;
   padding: 9px;
  }

  .circle {
   padding: 0 4px;
   color:black;
  }

  .box {
   display: inline-block;
   align-items: center;
   width: 10px;
   height: 10px;
   padding: 1px;
   border-radius: 50%;
  }

  .card__content{
    color:black;
    margin:10px;
    overflow:hidden;
  }
  .child{
    width:20em;
    height:20em;
  }

  .red {
   background-color: #ff605c;
  }

  .yellow {
   background-color: #ffbd44;
  }

  .green {
   background-color: #00ca4e;
  }`;

export default Cinfo;
