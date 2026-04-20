import "./SiteHeader.css";
import { Link } from "react-router-dom";
import logo from "../../../img/woodworks_transparent.png";

function SiteHeader() {
  return (
    <header className="top-header">
      <div className="top-header-accent" aria-hidden="true"></div>

      <div className="content-container top-brand-row">
        <Link className="top-brand-logo-link" to="/" aria-label="Woodworks home">
          <img className="top-brand-logo" src={logo} alt="Woodworks logo" />
        </Link>

        <div className="top-brand-copy">
          <p className="top-brand-tagline">A Capacity and Skills Building Workshop</p>
        </div>
      </div>

      <div className="top-nav-row">
        <nav className="top-nav">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/about">About Us</Link>
          <span>|</span>
          <Link to="/individualised-programs">Individualised Programs</Link>
          <span>|</span>
          <Link to="/ndis">NDIS</Link>
          <span>|</span>
          <Link to="/icare">ICARE</Link>
          <span>|</span>
          <Link to="/after-school-program">After school Program</Link>
          <span>|</span>
          <Link to="/contact">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
