import "./SupportPrograms.css";
import { Link } from "react-router-dom";

function SupportPrograms() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="cater-for-section">
      <div className="content-container">
        <h2>WHO WE CATER FOR</h2>

        <div className="cater-for-grid">
          <div className="cater-card">
            <div className="cater-image-placeholder" role="img" aria-label="NDIS woodworking support placeholder">
              <span>PLACEHOLDER</span>
            </div>
            <Link to="/ndis" className="cater-button" onClick={scrollToTop}>
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
            <div className="cater-image-placeholder" role="img" aria-label="ICARE woodworking support placeholder">
              <span>PLACEHOLDER</span>
            </div>
            <Link to="/icare" className="cater-button" onClick={scrollToTop}>
              Learn more ICARE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportPrograms;
