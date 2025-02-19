import React from 'react'
import Castro from './Castro'
import Cinfo from './Cinfo';
import Gallery from './Gallery';
import Formcontact from './Formcontact';
import Social from './Social';
import styled from "styled-components"

const Contact = () => {

  const images = [
    { src: "https://drive.google.com/thumbnail?id=14nUrTScen7pDKJAn-kHg3r5Qu691YOBr&sz=w1000", alt: 'Image 1' },
    { src: "https://drive.google.com/thumbnail?id=14EuGiq1jmlsQUjHNx3iWWKenNhlfNZWa&sz=w1000", alt: 'Image 2' },
    { src: "", alt: 'Image 3' },
    { src: "", alt: 'Image 4' },
    
  ];

  return (

    <Mydiv>
      <div className="top">
        <Castro />
        <Cinfo />
      </div>
      <div className="maps">
          <div className="child">
            <Social />
          </div>
          <div className="child">
            <Formcontact />
          </div>
      </div>
      <div className='maps'>
      <Gallery imagedata={images} />
      </div>
      <div className="maps">
      <div className="mapchild">
      </div>
      <div className="mapchild">
      <iframe id='findme' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11979.115104502986!2d84.92118224025701!3d26.652448406656873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993358c6087320b%3A0x89351b48cc0a8dd3!2sSharma_Sales%20%26%20Suppliers!5e1!3m2!1sen!2sin!4v1738050653470!5m2!1sen!2sin" width="900" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </Mydiv>
  
  );
}

const Mydiv=styled.div`
margin:50px;



.top{
  display:flex;
  justify-content:center;
}
.maps{
margin:20px;
background: #171717;
display:flex;
justify-content:center;
align-item:center;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 5px solid rgba(255, 255, 255, 0.3); 
padding: 20px;
}

.child{
  margin:20px;
 
}

`;

export default Contact