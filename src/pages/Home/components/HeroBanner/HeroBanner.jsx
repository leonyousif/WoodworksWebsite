import "./HeroBanner.css";
import logo from "../../../../img/woodworks_transparent.png";
import heroImage from "../../../../assets/hero-ndis.jpeg";

function HeroBanner() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `linear-gradient(rgba(88, 88, 88, 0.34), rgba(88, 88, 88, 0.34)), url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <img className="hero-logo" src={logo} alt="Woodworks logo" />
        <p className="hero-subtitle">A Capacity and Skills Building Workshop</p>
        <p className="hero-tagline">Focusing on Abilities</p>
      </div>
    </section>
  );
}

export default HeroBanner;
