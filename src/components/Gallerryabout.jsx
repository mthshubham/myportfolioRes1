import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from "../assets/AchiveGallery/achive1.jpg";
import image2 from "../assets/AchiveGallery/achive2.jpg";
import image3 from "../assets/AchiveGallery/achive3.jpg";
import image4 from "../assets/AchiveGallery/achive4.jpg";

const images = [
  { src: image1 , alt: 'Image 1' },
  { src: image2 , alt: 'Image 2' },
  { src: image3 , alt: 'Image 3' },
  { src: image4, alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image1.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
  // Add more images as needed
];

const Galleryabout = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <GalleryWrapper>
        {images.map((image, index) => (
          <ImageWrapper key={index} onClick={() => openImage(index)}>
            <img src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
      </GalleryWrapper>

      {selectedImage && (
        <Lightbox>
          <Overlay onClick={closeImage} />
          <LargeImage src={selectedImage.src} alt={selectedImage.alt} />
          <NavButton onClick={prevImage} style={{ left: '10px' }}>‹</NavButton>
          <NavButton onClick={nextImage} style={{ right: '10px' }}>›</NavButton>
        </Lightbox>
      )}
    </div>
  );
};

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ImageWrapper = styled.div`
  flex: 1 0 21%; /* Adjust the percentage to change the number of images per row */
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LargeImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 10px;
`;

export default Galleryabout;
