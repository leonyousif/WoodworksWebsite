import "./SupportPrograms.css";
import { Link } from "react-router-dom";
import ndisSupportImage from "../../../../img/support-ndis.jpg";
import iCareSupportImage from "../../../../img/support-icare.jpg";

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
            <img
              className="cater-image"
              src={ndisSupportImage}
              alt="Participant using a drill press during a woodworking activity"
            />
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
            <img
              className="cater-image"
              src={iCareSupportImage}
              alt="Participants working together on a woodworking project in the workshop"
            />
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
