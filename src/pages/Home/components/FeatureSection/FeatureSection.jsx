import "./FeatureSection.css";
import { Link } from "react-router-dom";

function FeatureSection({
  title,
  text,
  imageAlt,
  imageSrc,
  buttonText,
  buttonLink,
  imageLeft = false,
  missionStyle = false,
}) {
  const buttonClassName = `intro-button ${missionStyle ? "mission-button" : ""}`;
  const isInternalLink = buttonLink?.startsWith("/");

  return (
    <section className={`intro-section ${missionStyle ? "mission-section" : ""}`}>
      <div className="content-container">
        <div className={`intro-inner ${imageLeft ? "reverse" : ""}`}>
          <div className="intro-text-column">
            <h2>{title}</h2>

            <div className="intro-text">
              {text.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="intro-image-column">
            <div className="intro-image-frame">
              <img className="intro-image" src={imageSrc} alt={imageAlt} />
            </div>

            {buttonText && isInternalLink && (
              <Link to={buttonLink} className={buttonClassName}>
                {buttonText}
              </Link>
            )}

            {buttonText && !isInternalLink && (
              <a href={buttonLink} className={buttonClassName}>
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
