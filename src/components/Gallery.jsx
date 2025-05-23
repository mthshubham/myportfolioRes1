import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [preloadedImages, setPreloadedImages] = useState({});

  const images = [
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      alt: "Coding Setup",
      category: "Development"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      alt: "Development",
      category: "Coding"
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Code",
      category: "Programming"
    },
    {
      src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Programming",
      category: "Development"
    }
  ];

  // Preload images
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setPreloadedImages(prev => ({ ...prev, [src]: true }));
      };
    };

    images.forEach(image => {
      if (!preloadedImages[image.src]) {
        preloadImage(image.src);
      }
    });
  }, [images]);

  const openImage = useCallback((index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    setImageSize(1);
    document.body.style.overflow = 'hidden';
  }, [images]);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
    setImageSize(1);
  }, [currentIndex, images]);

  const prevImage = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
    setImageSize(1);
  }, [currentIndex, images]);

  // Touch gesture handling
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
      setTouchStart(null);
    }
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
            setImageSize(prev => Math.min(prev + 0.1, 3));
            break;
          case 'ArrowDown':
            setImageSize(prev => Math.max(prev - 0.1, 0.5));
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeImage]);

  return (
    <GalleryWrapper>
      <GalleryHeader>
        <GalleryTitle>Project Gallery</GalleryTitle>
        <GalleryDescription>Explore my development journey through these snapshots</GalleryDescription>
      </GalleryHeader>

      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem 
            key={index}
            onClick={() => openImage(index)}
            className={preloadedImages[image.src] ? 'loaded' : ''}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              loading="lazy"
            />
            <ImageOverlay>
              <ImageTitle>{image.alt}</ImageTitle>
              <ImageCategory>{image.category}</ImageCategory>
            </ImageOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>

      {selectedImage && (
        <Lightbox>
          <Overlay onClick={closeImage} />
          <LightboxContent
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <ImageContainer>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                style={{ 
                  transform: `scale(${imageSize})`,
                  opacity: isLoading ? 0 : 1 
                }}
                onLoad={() => setIsLoading(false)}
              />
            </ImageContainer>
            <LightboxControls>
              <NavButton 
                onClick={prevImage} 
                aria-label="Previous image"
                disabled={currentIndex === 0}
              >
                ‹
              </NavButton>
              <ImageCounter>
                {currentIndex + 1} / {images.length}
              </ImageCounter>
              <NavButton 
                onClick={nextImage} 
                aria-label="Next image"
                disabled={currentIndex === images.length - 1}
              >
                ›
              </NavButton>
            </LightboxControls>
            <CloseButton onClick={closeImage} aria-label="Close">×</CloseButton>
          </LightboxContent>
        </Lightbox>
      )}
    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const GalleryTitle = styled.h2`
  font-size: 2.5rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const GalleryDescription = styled.p`
  color: #636e72;
  font-size: 1.1rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 16/9;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);

  @media (max-width: 768px) {
    aspect-ratio: 4/3;
  }

  &.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 1.5rem;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateY(20px);

  @media (max-width: 768px) {
    padding: 1rem;
    opacity: 1;
    transform: translateY(0);
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  }

  ${GalleryItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageTitle = styled.h3`
  color: white;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageCategory = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  display: block;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

const LightboxContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
    display: block;
    margin: auto;
  }
`;

const LightboxControls = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1001;
  height: 80px;
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  
  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ImageCounter = styled.div`
  color: white;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  min-width: 80px;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  color: white;
  font-size: 1.75rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  z-index: 1001;

  &:active {
    transform: scale(0.95);
  }
`;

export default Gallery;