import "./WorkshopActivities.css";

function WorkshopActivities() {
  return (
    <section className="practice-section">
      <div className="content-container">
        <div className="practice-top">
          <h2>HOW WE PUT THE MISSION INTO PRACTICE</h2>
          <p>
            Participants are supported to learn and practice a range of practical and
            personal skills through hands-on woodworking activities, including:
          </p>
        </div>
      </div>

      <div className="practice-slider">
        <button className="practice-arrow">&#10094;</button>

        <div className="practice-slide">
          <div className="practice-slide-overlay"></div>

          <div className="practice-slide-content">
            <h3>Practical Woodworking Skills</h3>
            <p>- Safe use of tools and equipment</p>
            <p>- Measuring, marking, and basic construction techniques</p>
            <p>- Sanding, finishing, and assembling projects</p>
            <p>- Following step-by-step processes</p>
          </div>
        </div>

        <button className="practice-arrow">&#10095;</button>
      </div>

      <div className="practice-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default WorkshopActivities;
