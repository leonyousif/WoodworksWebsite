import "./HeroBanner.css";
import logo from "../../../../img/woodwords logo.jpg";
import heroImage from "../../../../assets/hero.png";

function HeroBanner() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
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
