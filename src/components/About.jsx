import React from 'react'
import AbCard from './AbCard'
import Abeducation from './Abeducation'
import Abhobby from './Abhobby'

import Abachivement from './Abachivement';
import Galleryabout from './Gallerryabout';
import Gallery from './Gallery';


import image1 from "../assets/AchiveGallery/achive1.jpg";
import image2 from "../assets/AchiveGallery/achive2.jpg";
import image3 from "../assets/AchiveGallery/achive3.jpg";
import image4 from "../assets/AchiveGallery/achive4.jpg";

// Add more images as needed
const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image4, alt: 'Image 4' },
  
];


const About = () => {
  return (
    <div className='about'>
      <AbCard />
      
      <Abeducation />
      <Abhobby />
      <Abachivement />
      
      <Gallery imagedata={images} />
    </div>
  )
}

export default About