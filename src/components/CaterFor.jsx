import "./CaterFor.css";

function CaterFor() {
  return (
    <section className="cater-for-section">
      <div className="content-container">
        <h2>WHO WE CATER FOR</h2>

        <div className="cater-for-grid">
          <div className="cater-card">
            <div className="cater-image-placeholder">NDIS IMAGE</div>
            <a href="#" className="cater-button">
              Learn more NDIS
            </a>
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
            <div className="cater-image-placeholder">ICARE IMAGE</div>
            <a href="#" className="cater-button">
              Learn more ICARE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaterFor;