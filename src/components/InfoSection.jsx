import "./InfoSection.css";

function InfoSection({
  title,
  text,
  imageText,
  reverse = false,
  dark = false,
}) {
  return (
    <section className={`info-wrapper ${dark ? "dark-wrapper" : ""}`}>
      <h2 className={`info-title ${dark ? "dark-title" : ""}`}>{title}</h2>

      <div className={`info-section ${reverse ? "reverse" : ""}`}>
        <div className={`info-text-box ${dark ? "dark-text-box" : ""}`}>
          <p>{text}</p>
        </div>

        <div className={`info-image-box ${dark ? "dark-image-box" : ""}`}>
          <span>{imageText}</span>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;