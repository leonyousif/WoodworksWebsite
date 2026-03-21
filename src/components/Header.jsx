import "./Header.css";

function Header() {
  return (
    <header className="top-header">
      <div className="content-container">
        <nav className="top-nav">
          <a href="#">Home</a>
          <span>|</span>
          <a href="#">About Us</a>
          <span>|</span>
          <a href="#">Individualised Programs</a>
          <span>|</span>
          <a href="#">NDIS</a>
          <span>|</span>
          <a href="#">ICARE</a>
          <span>|</span>
          <a href="#">After school Program</a>
          <span>|</span>
          <a href="#">Contact us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;