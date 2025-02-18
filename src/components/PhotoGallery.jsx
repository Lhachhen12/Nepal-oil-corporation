import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import noc from '../assets/noc.jpg';
import lpgas from '../assets/lpgas.jpg';
import aviation from '../assets/aviation.jpg';
import nepalflag from '../assets/nepalflag.gif';
import oil12 from '../assets/oil12.jpeg';
import oil from '../assets/oil.jpeg';
import noclogo from '../assets/noclogo.png';

const images = [
    noc,
    lpgas,
    aviation,
    nepalflag,
    oil12,
    oil,
    noclogo
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsLoading(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsLoading(true);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setIsLoading(true);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setIsLoading(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') handleClose();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center uppercase tracking-widest">Photo Gallery</h2>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl shadow-xl bg-white cursor-pointer transform hover:scale-105 transition duration-300"
            style={{ aspectRatio: '1' }}
            onClick={() => handleImageClick(image, index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          <div 
            className="relative max-w-screen-lg w-full max-h-screen flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
              </div>
            )}
            
            {/* Large Image */}
            <img
              src={selectedImage}
              alt="Selected"
              className="w-auto max-w-full max-h-full object-contain rounded-xl shadow-2xl border-4 border-white"
              onLoad={() => setIsLoading(false)}
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 p-4 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="text-white" size={36} />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 p-4 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="text-white" size={36} />
            </button>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
            >
              <X size={36} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-8 right-8 bg-black bg-opacity-70 text-white px-5 py-3 rounded-full text-lg font-semibold">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;