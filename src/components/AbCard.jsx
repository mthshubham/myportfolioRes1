import React from 'react'
import styled from 'styled-components'
import ProfileImage from './ProfileImage'

const AbCard = () => {
  return (
    <Mycssdiv>
        <h2>About me ...</h2>
        <div className='pic'>
           <ProfileImage />
           <p> Hello I am Shubham Kumar Sharma </p>
           <p> belong from Motihar Bihar. </p>
           <hr/>
           <p> Currently in Clement Town , Dehradun  persuing degree of </p>
           <p>MCA (Master's of Computer Application) </p>
        </div>
    </Mycssdiv>
    
  )
}

const Mycssdiv=styled.div`
margin:20px;
background: #171717;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.3);
     
padding: 20px;
text-align: center;
hr{
    width:20vw;
}
p{
    line-height:5px;
    color:white;
    font-size:20px
}

`;

export default AbCard