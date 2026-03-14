import { useState } from "react";
import "./TestimonialSlider.css";

function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="testimonial-slider">
      <button className="testimonial-btn" onClick={prevTestimonial}>
        ←
      </button>

      <div className="testimonial-card">
        <p className="testimonial-quote">
          “{testimonials[currentIndex].quote}”
        </p>
        <h4 className="testimonial-name">- {testimonials[currentIndex].name}</h4>
      </div>

      <button className="testimonial-btn" onClick={nextTestimonial}>
        →
      </button>
    </div>
  );
}

export default TestimonialSlider;