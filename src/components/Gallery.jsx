import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  { original: './src/assets/gallery1.jpeg', thumbnail: './src/assets/gallery1.jpeg' },
  { original: './src/assets/gallery2.jpeg', thumbnail: './src/assets/gallery2.jpeg' },
  { original: './src/assets/gallery3.jpeg', thumbnail: './src/assets/gallery3.jpeg' }
];

const GalleryComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenGallery = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="gallery-section py-5">
      <h2 className="text-center">Gallery</h2>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={{ default: 3, 800: 2, 500: 1 }}
        className="gallery-masonry"
        columnClassName="gallery-column"
      >
        {images.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => handleOpenGallery(index)}
            aria-label={`Open Gallery Image ${index + 1}`}
          >
            <img 
              src={img.original} 
              alt={`Gallery ${index + 1}`} 
              className="gallery-img" 
            />
          </div>
        ))}
      </Masonry>

      {/* Carousel Lightbox */}
      {isOpen && (
        <div className="gallery-overlay" onClick={() => setIsOpen(false)}>
          <button className="close-button" onClick={() => setIsOpen(false)}>X</button>
          <div className="gallery-carousel">
            <ImageGallery 
              items={images} 
              startIndex={currentIndex} 
              showPlayButton={false} 
              showFullscreenButton={false} 
              onClick={() => setIsOpen(false)} 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryComponent;