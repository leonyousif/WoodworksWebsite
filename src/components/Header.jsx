import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="top-header">
      <div className="content-container">
        <nav className="top-nav">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/about">About Us</Link>
          <span>|</span>
          <a href="#">Individualised Programs</a>
          <span>|</span>
          <a href="#">NDIS</a>
          <span>|</span>
          <a href="#">ICARE</a>
          <span>|</span>
          <a href="#">After school Program</a>
          <span>|</span>
          <Link to="/contact">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;