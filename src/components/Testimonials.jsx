import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="content-container">
        <h2>CLIENT TESTIMONIALS</h2>

        <div className="testimonials-row">
          <button className="testimonial-arrow">&#10094;</button>

          <div className="testimonial-center">
            <div className="testimonial-avatar">PHOTO</div>

            <div className="testimonial-text-box">
              <p>
                Woodworks has created a welcoming and supportive environment where
                participants can learn practical skills, grow in confidence, and
                feel proud of what they achieve. Families and participants value
                the caring team and the meaningful hands-on experiences provided.
              </p>
            </div>

            <div className="testimonial-dots">
              <span className="active"></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <button className="testimonial-arrow">&#10095;</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;