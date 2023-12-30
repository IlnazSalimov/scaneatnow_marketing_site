import { useState } from 'react';
import { Lightbox } from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

function ImageGallery() {
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://example.com/image1.jpg',
      title: 'Image 1',
      description: 'This is the first image',
    },
    {
      url: 'https://example.com/image2.jpg',
      title: 'Image 2',
      description: 'This is the second image',
    },
    {
      url: 'https://example.com/image3.jpg',
      title: 'Image 3',
      description: 'This is the third image',
    },
  ];

  const handleClose = () => {
    setCurrentIndex(0);
  };

  return (
    <>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.title}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <Lightbox
        images={images}
        currentIndex={currentIndex}
        onClose={handleClose}
      />
    </>
  );
}

export default ImageGallery;