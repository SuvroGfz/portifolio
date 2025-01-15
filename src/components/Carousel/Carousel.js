import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [images.length]);

  return (
    <div className="carousel rounded-box w-96 overflow-hidden">
      {images?.map((image, index) => (
        <div
          key={index}
          className={`carousel-item w-full ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <img
            src={image}
            className="w-full"
            alt={`Carousel slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
