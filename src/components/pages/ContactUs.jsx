import Header from "../Header";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-page">
      <Header />

      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="content-container">
            <h1>CONTACT US</h1>
          </div>
        </div>
      </section>

      <main>
        <section className="contact-intro">
          <div className="contact-intro-text">
            <p>
              We&apos;d love to hear from you. Whether you&apos;re a participant,
              parent, or support coordinator, feel free to reach out to discuss
              how Woodworks can support you.
            </p>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="content-container contact-grid">
            <div className="contact-cards">
              <div className="contact-card">
                <h3>Email Us</h3>
                <p>Email@woodworksonline.com.au</p>
              </div>

              <div className="contact-card">
                <h3>Call Us</h3>
                <p>0414 481 947</p>
              </div>

              <div className="contact-card">
                <h3>Find Us</h3>
                <p>9 Glenroy Crescent, St Johns Park, NSW</p>
              </div>
            </div>

            <div className="contact-hours">
              <h3>Workshop Hours:</h3>

              <ul>
                <li>Monday: 9am - 3pm</li>
                <li>Tuesday: 9am - 6pm</li>
                <li>Wednesday: 9am - 3pm</li>
                <li>Thursday: 9am - 6pm</li>
                <li>Friday: 9am - 4pm</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="content-container">
            <div className="cta-box">
              <h2>SEND US A MESSAGE</h2>
            </div>
          </div>
        </section>

        <section className="contact-bottom-image">
          <div className="content-container">
            <div className="contact-bottom-image-box"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;