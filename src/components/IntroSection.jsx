import "./IntroSection.css";

function IntroSection({
  title,
  text,
  imageAlt,
  buttonText,
  buttonLink,
  imageLeft = false,
  missionStyle = false,
}) {
  return (
    <section className={`intro-section ${missionStyle ? "mission-section" : ""}`}>
      <div className="content-container">
        <div className={`intro-inner ${imageLeft ? "reverse" : ""}`}>
          <div className="intro-image-column">
            <div className="intro-image-placeholder">{imageAlt}</div>

            {buttonText && (
              <a href={buttonLink} className="intro-button">
                {buttonText}
              </a>
            )}
          </div>

          <div className="intro-text-column">
            <h2>{title}</h2>

            <div className="intro-text">
              {text.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;