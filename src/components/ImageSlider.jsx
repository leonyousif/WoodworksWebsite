import { useState } from "react";
import "./ImageSlider.css";

function ImageSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <button className="slider-btn" onClick={prevSlide}>
        ←
      </button>

      <div className="slider-card">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className="slider-image"
        />
        <h3>{items[currentIndex].title}</h3>
      </div>

      <button className="slider-btn" onClick={nextSlide}>
        →
      </button>
    </div>
  );
}

export default ImageSlider;