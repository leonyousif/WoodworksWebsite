import "./WorkshopActivities.css";
import { useState } from "react";

const slides = [
  {
    title: "Capacity Building Skills",
    items: [
      "Problem solving and planning",
      "Concentration and task completion",
      "Fine motor skills and coordination",
      "Confidence in learning new skills",
    ],
  },
  {
    title: "Independence and Work Skills",
    items: [
      "Taking responsibility for tools and workspace",
      "Following safety procedures",
      "Working towards project goals",
      "Pride in completing meaningful work",
    ],
  },
  {
    title: "Social and Community Skills",
    items: [
      "Working alongside others in a shared workshop",
      "Communication and teamwork",
      "Supporting peers and celebrating achievements",
      "Building a sense of belonging and community",
    ],
  },
];

function WorkshopActivities() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="practice-section">
      <div className="content-container">
        <div className="practice-top">
          <h2>HOW WE PUT THE MISSION INTO PRACTICE</h2>
          <p>
            Participants are supported to learn and practice a range of practical and
            personal skills through hands-on woodworking activities, including:
          </p>
        </div>
      </div>

      <div className="practice-slider">
        <button
          className="practice-arrow"
          type="button"
          aria-label="Show previous practice slide"
          onClick={showPreviousSlide}
        >
          &#10094;
        </button>

        <div className="practice-slide">
          <div className="practice-slide-overlay"></div>

          <div className="practice-slide-content">
            <h3>{currentSlide.title}</h3>
            <ul className="practice-slide-list">
              {currentSlide.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="practice-arrow"
          type="button"
          aria-label="Show next practice slide"
          onClick={showNextSlide}
        >
          &#10095;
        </button>
      </div>

      <div className="practice-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`practice-dot ${index === activeSlide ? "active" : ""}`}
            aria-label={`Show ${slide.title}`}
            aria-pressed={index === activeSlide}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkshopActivities;
