import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <div className="logo">WOODWORKS</div>
        <div className="orange-line"></div>
      </div>

      <nav className="header-right">
        <a href="#">NDIS</a>
        <a href="#">Icare</a>
        <a href="#">Afterschool Program</a>
        <a href="#">Individual Programs</a>
        <a href="#">Meet the Team</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;