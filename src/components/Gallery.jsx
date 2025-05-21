import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const Gallery = ({imagedata}) => {

    const images = imagedata;
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState(1);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    setImageSize(1); // Reset image size when opening a new image
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
    setImageSize(1); // Reset image size when navigating to next image
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
    setImageSize(1); // Reset image size when navigating to previous image
  };

  // Keyboard event handling
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        switch (event.key) {
          case 'ArrowRight':
            nextImage();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'Escape':
            closeImage();
            break;
          case 'ArrowUp':
            setImageSize((prevSize) => prevSize + 0.1); // Increase image size on keyUp
            break;
          case 'ArrowDown':
            setImageSize((prevSize) => Math.max(prevSize - 0.1, 0.1)); // Decrease image size on keyDown
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  return (
    <div>
        <h1 style={{textAlign:"center",}}>. . . .  Gallery  . . . .</h1>
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
          <LargeImage src={selectedImage.src} alt={selectedImage.alt} size={imageSize} />
          <NavButton onClick={prevImage} style={{ left: '10px' }}>‹</NavButton>
          <NavButton onClick={nextImage} style={{ right: '10px' }}>›</NavButton>
        </Lightbox>
      )}
    </div>
  );
};

const GalleryWrapper = styled.div`
  margin: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  flex: 1 0 21%;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    flex: 1 0 45%;
    
    img {
      height: 200px;
    }
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
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const LargeImage = styled.img`
  max-width: ${({ size }) => size * 80}%;
  max-height: ${({ size }) => size * 80}%;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.3s ease;
  
  @keyframes zoomIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

export default Gallery;