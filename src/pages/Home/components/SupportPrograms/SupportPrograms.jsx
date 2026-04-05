import "./SupportPrograms.css";
import { Link } from "react-router-dom";
import dadImage from "../../../../img/dad.jpg";
import alexImage from "../../../../img/alex sanding.jpg";

function SupportPrograms() {
  return (
    <section className="cater-for-section">
      <div className="content-container">
        <h2>WHO WE CATER FOR</h2>

        <div className="cater-for-grid">
          <div className="cater-card">
            <img
              className="cater-image"
              src={alexImage}
              alt="NDIS woodworking support"
            />
            <Link to="/ndis" className="cater-button">
              Learn more NDIS
            </Link>
          </div>

          <div className="cater-middle-text">
            <p>
              We support people through NDIS, ICARE, after school programs, and
              individualised workshop participation. Our programs are designed to
              help build confidence, independence, practical ability, and social
              connection.
            </p>
          </div>

          <div className="cater-card">
            <img
              className="cater-image"
              src={dadImage}
              alt="ICARE woodworking support"
            />
            <a href="#" className="cater-button">
              Learn more ICARE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportPrograms;
