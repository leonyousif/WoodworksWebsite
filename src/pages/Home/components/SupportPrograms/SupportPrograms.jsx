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
              Woodworks supports a range of people, including NDIS participants, individuals funded through iCare, and those looking to build practical skills in a supportive environment.

              Our programs are suited to people who enjoy hands-on activities and want to develop confidence, capability and experience  community.
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
